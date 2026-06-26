import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VOCABULARY_DATA, VocabularyLesson } from '../data/vocabulary.data';

@Component({
  selector: 'app-vocabulary-page',
  imports: [RouterLink],
  templateUrl: './vocabulary-page.component.html',
  styleUrl: './vocabulary-page.component.css'
})
export class VocabularyPageComponent implements OnInit {
  lessonId: string = '';
  lessonData: VocabularyLesson | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('id') || '';
      if (this.lessonId) {
        this.lessonData = VOCABULARY_DATA[this.lessonId] || null;
      }
    });
  }

  highlightVocab(text: string): string {
    // Basic replacement for tags since we used <strong> in data
    // The innerHTML binding in HTML will render them
    return text;
  }
}
