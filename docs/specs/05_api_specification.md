# 6. API Specification

## 6.1 Data Models

### Category
```json
{
  "id": "uuid",
  "title": "Speaking English Lessons",
  "slug": "speaking-english-basics",
  "description": "Basics of English speaking for beginners using common expressions.",
  "parent_id": null,
  "lesson_count": 90
}
```

### Lesson
```json
{
  "id": "uuid",
  "category_id": "uuid",
  "sub_category": "string",
  "title": "Basic usage of 'I'm'",
  "section": "Section I",
  "level": "Beginner",
  "sentences": [
    {
      "text": "I'm so tired.",
      "audio_url": "https://api.talkenglish.com/audio/basics/1_1.mp3",
      "translation": "Estoy muy cansado"
    }
  ]
}
```

### Grammar Unit
```json
{
  "unit_number": 2,
  "title": "Present simple (I do)",
  "explanation": "We use the present simple to talk about things in general.",
  "examples": ["Nurses look after patients in hospitals.", "The earth goes round the sun."],
  "exercises": [
    {
      "id": "ex_2_1",
      "instruction": "Complete the sentences using the following verbs:",
      "question": "Tanya ___ German very well.",
      "answer": "speaks"
    }
  ]
}
```

### User & UserProgress
```json
{
  "user_id": "uuid",
  "email": "student@example.com",
  "native_language": "Español",
  "progress": {
    "completed_lessons": ["uuid1", "uuid2"],
    "completed_grammar_units": [1, 2, 3],
    "last_accessed": "2026-06-22T08:43:00Z"
  }
}
```

## 6.2 Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/register` | Create a new account with native language preference |
| `POST` | `/auth/login` | Returns a JWT and user profile |
| `POST` | `/auth/logout` | Invalidate the current session |

## 6.3 Content Endpoints

### Categories & Lessons
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/categories` | Returns the hierarchy of lessons (Speaking, Video, Listening, Extra) |
| `GET` | `/categories/:id/lessons` | Returns all lessons within a sub-category (e.g., 90 Speaking Basics) |
| `GET` | `/lessons/:id` | Returns detailed lesson content with sentences and audio URLs |

### Grammar
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/grammar` | Returns full list of 145 units grouped by category |
| `GET` | `/grammar/:unit_number` | Returns specific unit's explanation, examples, and exercises |
| `POST` | `/grammar/:unit_number/exercises/check` | Submit answers for grading |

**Check Request:**
```json
{
  "answers": [{"id": "ex_2_1", "value": "speaks"}]
}
```

**Check Response:**
```json
{
  "score": "1/1",
  "results": [{"id": "ex_2_1", "correct": true}]
}
```

### Search
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/search?q={query}` | Searches "Full Lesson Index" and "1000 Daily Use Sentences" |

## 6.4 Audio Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/audio/:category/:filename` | Serves high-quality mp3 files (e.g., 900+ Speaking Basics files) |
| `POST` | `/practice/record` | Upload user's recorded clip (multipart form-data: audio + sentence_id) |

## 6.5 User Progress Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users/me/progress` | Returns student's current standing in curriculum |
| `POST` | `/users/me/progress/:content_type/:id` | Update lesson or grammar unit status |

## 6.6 Error Handling Format

All errors follow RFC 7807 standard:

```json
{
  "error": {
    "code": "resource_not_found",
    "message": "Grammar Unit 146 does not exist. Please refer to the Study Guide for valid units.",
    "details": {
      "requested_unit": 146,
      "max_unit": 145
    }
  }
}
```

## 6.7 Technical Considerations

- **Localization:** Support `Accept-Language` header for multi-language instructions
- **Caching:** Static lesson content and search results should be cached aggressively
- **Offline Sync:** Bulk download endpoint `GET /content/bundle` for offline versions
- **Audio Streaming:** On-demand streaming to manage 900+ file overhead
