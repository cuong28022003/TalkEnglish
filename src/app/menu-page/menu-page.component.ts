import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LESSONS_DATA } from '../data/lessons.data';
import { GRAMMAR_DATA } from '../data/grammar.data';

@Component({
  selector: 'app-menu-page',
  imports: [RouterLink],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent implements OnInit {
  menuId: string = '';
  menuTitle: string = 'English Speaking Basics';
  lessonsList: any[] = [];
  groupedLessons: { category: string, lessons: any[] }[] = [];
  isGrouped: boolean = false;
  itemRoutePrefix: string = '/lesson';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id') || 'basics';
      this.updateMenuData();
    });
  }

  updateMenuData() {
    const titles: Record<string, string> = {
      'basics': 'Daily Use Sentences',
      'regular': 'Regular English Lessons',
      'business': 'Business English Lessons',
      'interview': 'Interview English Lessons',
      'travel': 'Travel English Lessons',
      'idioms': 'Idioms and Phrases',
      'special': 'Special Topics',
      'grammar': 'English Grammar in Use' // fallback
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
    } else {
      this.menuTitle = titles[this.menuId] || 'English Lessons';
      this.itemRoutePrefix = '/lesson';
      this.isGrouped = false;
      this.lessonsList = Object.values(LESSONS_DATA);
      this.groupedLessons = [];
    }
  }
}
