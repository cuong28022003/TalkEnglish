export interface Sentence {
  text: string;
  audioFile: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  description: string;
  sentences: Sentence[];
}

export const LESSONS_DATA: Record<string, Lesson> = {
  'lesson-1': {
    id: 'lesson-1',
    title: 'Introductory and General Expressions',
    category: 'Daily Use Sentences',
    description: 'Learn common expressions to start conversations and respond generally.',
    sentences: [
      { text: "Good morning. How are you today?", audioFile: "audio_1_1" },
      { text: "I hope everything is going well.", audioFile: "audio_1_2" },
      { text: "Let me think about it.", audioFile: "audio_1_3" },
      { text: "That sounds like a good idea.", audioFile: "audio_1_4" },
      { text: "I completely understand.", audioFile: "audio_1_5" },
      { text: "Everything is under control.", audioFile: "audio_1_6" },
      { text: "That's exactly what I meant.", audioFile: "audio_1_7" },
      { text: "I agree with you.", audioFile: "audio_1_8" },
      { text: "Don't worry about it.", audioFile: "audio_1_9" }
    ]
  },
  'lesson-2': {
    id: 'lesson-2',
    title: 'Daily Activities and Work',
    category: 'Daily Use Sentences',
    description: 'Sentences related to your daily routine, commuting, and work life.',
    sentences: [
      { text: "What are you doing right now?", audioFile: "audio_2_1" },
      { text: "I'm getting ready for work.", audioFile: "audio_2_2" },
      { text: "What time does it start?", audioFile: "audio_2_3" },
      { text: "I'll check and let you know.", audioFile: "audio_2_4" },
      { text: "Where are you going?", audioFile: "audio_2_5" },
      { text: "I'm on my way home.", audioFile: "audio_2_6" },
      { text: "What did you do over the weekend?", audioFile: "audio_2_7" },
      { text: "I had a relaxing day at home.", audioFile: "audio_2_8" }
    ]
  },
  'lesson-3': {
    id: 'lesson-3',
    title: 'Communication and Requests',
    category: 'Daily Use Sentences',
    description: 'How to ask for help, clarify information, and initiate conversation.',
    sentences: [
      { text: "Could you help me for a minute?", audioFile: "audio_3_1" },
      { text: "Please give me a call later.", audioFile: "audio_3_2" },
      { text: "Can you repeat that, please?", audioFile: "audio_3_3" },
      { text: "I didn't hear you clearly.", audioFile: "audio_3_4" },
      { text: "Tell me more.", audioFile: "audio_3_5" },
      { text: "Have you heard the news?", audioFile: "audio_3_6" },
      { text: "What do you think about it?", audioFile: "audio_3_7" }
    ]
  },
  'lesson-4': {
    id: 'lesson-4',
    title: 'Politeness and Social Interaction',
    category: 'Daily Use Sentences',
    description: 'Expressing gratitude and asking about someone\'s well-being.',
    sentences: [
      { text: "Thanks for your help.", audioFile: "audio_4_1" },
      { text: "You're very kind.", audioFile: "audio_4_2" },
      { text: "It's nice to see you again.", audioFile: "audio_4_3" },
      { text: "I haven't seen you in a while.", audioFile: "audio_4_4" },
      { text: "Would you like some coffee?", audioFile: "audio_4_5" },
      { text: "How have you been lately?", audioFile: "audio_4_6" },
      { text: "How was your day?", audioFile: "audio_4_7" },
      { text: "Take care of yourself.", audioFile: "audio_4_8" }
    ]
  },
  'lesson-5': {
    id: 'lesson-5',
    title: 'Farewells',
    category: 'Daily Use Sentences',
    description: 'Common ways to say goodbye and end a conversation.',
    sentences: [
      { text: "I will be there soon.", audioFile: "audio_5_1" },
      { text: "Have a great evening.", audioFile: "audio_5_2" },
      { text: "See you tomorrow.", audioFile: "audio_5_3" },
      { text: "Talk to you later.", audioFile: "audio_5_4" }
    ]
  }
};
