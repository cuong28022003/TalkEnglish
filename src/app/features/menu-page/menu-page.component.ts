import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LESSONS_DATA } from '../../data/lessons.data';
import { GRAMMAR_DATA } from '../../data/grammar.data';
import { VOCABULARY_DATA } from '../../data/vocabulary.data';

@Component({
  selector: 'app-menu-page',
  imports: [RouterLink],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})
export class MenuPageComponent implements OnInit {
  menuId: string = '';
  menuTitle: string = 'English Speaking Basics';
  categoryLabel: string = 'Topic';
  topicDescription: string = '';
  lessonsList: any[] = [];
  groupedLessons: { category: string, lessons: any[] }[] = [];
  isGrouped: boolean = false;
  itemRoutePrefix: string = '/lesson';

  // Topic header metadata
  progress: number = 0;
  difficultyLabel: string = 'Beginner';
  estimatedTime: string = '2h 30m';
  totalScenarios: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id') || 'basics';
      this.updateMenuData();
    });
  }

  updateMenuData() {
    const titles: Record<string, string> = {
      // A-J Speaking Categories (scenario-based)
      'daily-life': 'Daily Life',
      'food-drink': 'Food & Drink',
      'travel': 'Travel',
      'work': 'Work',
      'school': 'School',
      'health': 'Health',
      'relationships': 'Relationships',
      'money': 'Money',
      'technology': 'Technology',
      'emergencies': 'Emergencies',
      // Vocabulary Builder Categories (Topic English)
      'topic-people': 'People',
      'topic-food-and-drink': 'Food and Drink',
      'topic-the-environment': 'The Environment',
      'topic-animals': 'Animals',
      'topic-activities': 'Activities',
      'topic-around-town': 'Around Town',
      'topic-arts-and-the-media': 'Arts and the Media',
      'topic-science-and-technology': 'Science and Technology',
      'topic-crime-and-the-law': 'Crime and the Law',
      'topic-money-and-finance': 'Money and Finance',
      // Grammar
      'grammar': 'English Grammar in Use',
      'vocabulary': 'English Vocabulary'
    };

    // Topic-level metadata for header display
    const categoryMeta: Record<string, {
      label: string; description: string; progress: number;
      difficulty: string; time: string; scenarios: number
    }> = {
      // A-J Scenario categories
      'daily-life':    { label: 'Daily Life',      description: 'Master everyday conversations — greetings, family, hobbies, shopping, and more. These are the most common situations you face daily.', progress: 0, difficulty: 'Beginner',     time: '3h 00m', scenarios: 8 },
      'food-drink':    { label: 'Food & Drink',    description: 'Learn to order food, ask about ingredients, pay at restaurants, and shop for groceries with confidence.', progress: 0, difficulty: 'Beginner',     time: '1h 30m', scenarios: 4 },
      'travel':        { label: 'Travel',          description: 'Navigate airports, check into hotels, ask for directions, and handle travel situations smoothly.', progress: 0, difficulty: 'Intermediate', time: '1h 30m', scenarios: 4 },
      'work':          { label: 'Work',            description: 'Handle interviews, meetings, presentations, and professional emails in English.', progress: 0, difficulty: 'Intermediate', time: '1h 30m', scenarios: 4 },
      'school':        { label: 'School',          description: 'Communicate in classrooms, libraries, exams, and graduation settings.', progress: 0, difficulty: 'Beginner',     time: '1h 30m', scenarios: 4 },
      'health':        { label: 'Health',          description: 'Visit doctors, fill prescriptions, handle emergencies, and talk about symptoms.', progress: 0, difficulty: 'Intermediate', time: '1h 30m', scenarios: 4 },
      'relationships': { label: 'Relationships',   description: 'Date, apologize, make invitations, and build meaningful connections in English.', progress: 0, difficulty: 'Intermediate', time: '1h 00m', scenarios: 3 },
      'money':         { label: 'Money',           description: 'Manage bank visits, ATM use, credit cards, and financial conversations.', progress: 0, difficulty: 'Intermediate', time: '1h 00m', scenarios: 3 },
      'technology':    { label: 'Technology',      description: 'Troubleshoot computers, use smartphones, and get technical support in English.', progress: 0, difficulty: 'Advanced',     time: '1h 00m', scenarios: 3 },
      'emergencies':   { label: 'Emergencies',     description: 'Call police, report accidents, and handle urgent situations in English.', progress: 0, difficulty: 'Advanced',     time: '1h 00m', scenarios: 3 },
      // Vocabulary Builder topic categories
      'topic-people':       { label: 'People',              description: 'Learn vocabulary and sentences about people — body, clothes, appearance, personality, family, and relationships.', progress: 0, difficulty: 'Beginner',     time: '2h 00m', scenarios: 12 },
      'topic-food-and-drink': { label: 'Food and Drink',    description: 'Vocabulary for meat, fish, fruit, vegetables, desserts, and eating out.', progress: 0, difficulty: 'Beginner',     time: '1h 30m', scenarios: 6 },
      'topic-the-environment': { label: 'The Environment',  description: 'Talk about weather, climate, geography, and environmental issues.', progress: 0, difficulty: 'Intermediate', time: '1h 00m', scenarios: 3 },
      'topic-animals':      { label: 'Animals',             description: 'Learn animal names and sentences for pets, farm animals, wild animals, birds, and sea creatures.', progress: 0, difficulty: 'Beginner',     time: '1h 00m', scenarios: 4 },
      'topic-activities':   { label: 'Activities',          description: 'Describe free time activities, sports, hobbies, and abilities.', progress: 0, difficulty: 'Beginner',     time: '1h 30m', scenarios: 6 },
      'topic-around-town':  { label: 'Around Town',         description: 'Navigate shopping, supermarkets, and urban life.', progress: 0, difficulty: 'Intermediate', time: '1h 00m', scenarios: 4 },
      'topic-art-and-media': { label: 'Arts and the Media', description: 'Discuss books, music, movies, TV, and celebrity culture.', progress: 0, difficulty: 'Intermediate', time: '1h 00m', scenarios: 4 },
      'topic-science-tech': { label: 'Science & Technology', description: 'Talk about gadgets, technology, science, and the future.', progress: 0, difficulty: 'Advanced',     time: '1h 00m', scenarios: 3 },
      'topic-crime-law':    { label: 'Crime and the Law',   description: 'Vocabulary for crime, law, court, and legal situations.', progress: 0, difficulty: 'Advanced',     time: '0h 30m', scenarios: 1 },
    };
    
    // Map each category to its list of scenario lesson IDs
    const categoryScenarios: Record<string, string[]> = {
      // A-J scenario lessons
      'daily-life': ['daily-life-greetings', 'daily-life-introductions', 'daily-life-family', 'daily-life-friends', 'daily-life-hobbies', 'daily-life-routine', 'daily-life-shopping', 'daily-life-weather'],
      'food-drink': ['food-drink-restaurant', 'food-drink-coffee-shop', 'food-drink-ordering', 'food-drink-supermarket'],
      'travel': ['travel-airport', 'travel-hotel', 'travel-taxi', 'travel-asking-directions'],
      'work': ['work-interview', 'work-meeting', 'work-email', 'work-presentation'],
      'school': ['school-classroom', 'school-exam', 'school-library', 'school-graduation'],
      'health': ['health-doctor', 'health-hospital', 'health-pharmacy', 'health-emergency'],
      'relationships': ['relationships-dating', 'relationships-apologizing', 'relationships-invitations'],
      'money': ['money-bank', 'money-atm', 'money-credit-card'],
      'technology': ['technology-computer', 'technology-smartphone', 'technology-technical-support'],
      'emergencies': ['emergencies-police', 'emergencies-accident', 'emergencies-emergency-call'],
      // Vocabulary Builder topic lessons (dùng prefix topic-)
      'topic-people': [],
      'topic-food-and-drink': [],
      'topic-the-environment': [],
      'topic-animals': [],
      'topic-activities': [],
      'topic-around-town': [],
      'topic-art-and-media': [],
      'topic-science-tech': [],
      'topic-crime-law': [],
    };
    
    const grammarCategoryMap: Record<string, string> = {
      'grammar-present-and-past': 'Present and past',
      'grammar-present-perfect-and-past': 'Present perfect and past',
      'grammar-future': 'Future',
      'grammar-modals': 'Modals',
      'grammar-if-and-wish': 'if and wish',
      'grammar-passive': 'Passive',
      'grammar-reported-speech': 'Reported speech',
      'grammar-questions': 'Questions and auxiliary verbs',
      'grammar-ing-and-to': '-ing and to...',
      'grammar-articles': 'Articles and nouns',
      'grammar-pronouns': 'Pronouns and determiners',
      'grammar-relative-clauses': 'Relative clauses',
      'grammar-adjectives': 'Adjectives and adverbs',
      'grammar-conjunctions': 'Conjunctions and prepositions',
      'grammar-prepositions': 'Prepositions',
      'grammar-phrasal-verbs': 'Phrasal verbs'
    };
    
    if (this.menuId.startsWith('grammar-')) {
      const targetCategory = grammarCategoryMap[this.menuId] || 'Present and past';
      this.menuTitle = targetCategory;
      this.itemRoutePrefix = '/grammar';
      this.isGrouped = false; // We don't group, we just list them for this category
      
      const allUnits = Object.values(GRAMMAR_DATA);
      this.lessonsList = allUnits.filter(unit => unit.category === targetCategory);
      this.groupedLessons = [];
    } else if (this.menuId === 'grammar') {
      // Fallback if they visit /menu/grammar directly
      this.menuTitle = titles[this.menuId] || 'English Lessons';
      this.itemRoutePrefix = '/grammar';
      this.isGrouped = true;
      const allUnits = Object.values(GRAMMAR_DATA);
      
      const groupsMap = new Map<string, any[]>();
      for (const unit of allUnits) {
        const cat = unit.category;
        if (!groupsMap.has(cat)) {
          groupsMap.set(cat, []);
        }
        groupsMap.get(cat)?.push(unit);
      }
      
      this.groupedLessons = Array.from(groupsMap.entries()).map(([cat, lessons]) => {
        return { category: cat, lessons };
      });
      this.lessonsList = [];
    } else if (this.menuId === 'vocabulary') {
      this.menuTitle = titles[this.menuId] || 'English Vocabulary';
      this.itemRoutePrefix = '/vocabulary';
      this.isGrouped = false;
      this.lessonsList = Object.values(VOCABULARY_DATA);
      this.groupedLessons = [];
    } else {
      this.menuTitle = titles[this.menuId] || 'English Lessons';
      this.itemRoutePrefix = '/lesson';
      
      // Apply topic metadata
      const meta = categoryMeta[this.menuId];
      if (meta) {
        this.categoryLabel = meta.label;
        this.topicDescription = meta.description;
        this.progress = meta.progress;
        this.difficultyLabel = meta.difficulty;
        this.estimatedTime = meta.time;
        this.totalScenarios = meta.scenarios;
      }
      
      // Use scenario-based categories if available
      const scenarioIds = categoryScenarios[this.menuId];
      if (scenarioIds) {
        this.isGrouped = false;
        this.lessonsList = scenarioIds
          .map(id => LESSONS_DATA[id])
          .filter(Boolean);
        this.groupedLessons = [];
      } else {
        const filteredLessons = Object.values(LESSONS_DATA).filter(lesson => lesson.category === this.menuTitle);
        const hasSubCategories = filteredLessons.some(lesson => lesson.subCategory);
        
        if (hasSubCategories) {
          this.isGrouped = true;
          this.lessonsList = [];
          const groupsMap = new Map<string, any[]>();
          
          for (const lesson of filteredLessons) {
            const subCat = lesson.subCategory || 'General';
            if (!groupsMap.has(subCat)) {
              groupsMap.set(subCat, []);
            }
            groupsMap.get(subCat)?.push(lesson);
          }
          
          this.groupedLessons = Array.from(groupsMap.entries()).map(([cat, lessons]) => {
            return { category: cat, lessons };
          });
        } else {
          this.isGrouped = false;
          this.lessonsList = filteredLessons;
          this.groupedLessons = [];
        }
      }
    }
  }
}
