import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VOCABULARY_DATA, VocabularyLesson, VocabWord, VocabExercise } from '../../data/vocabulary.data';

@Component({
  selector: 'app-vocabulary-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './vocabulary-page.component.html',
  styleUrl: './vocabulary-page.component.scss'
})
export class VocabularyPageComponent implements OnInit {
  lessonId: string = '';
  lessonData: VocabularyLesson | null = null;

  // Interactive state
  userAnswers: { [sectionIdx: number]: string[] } = {};
  exerciseFeedback: { [sectionIdx: number]: ('correct' | 'incorrect' | 'unanswered')[] } = {};
  showResults: { [sectionIdx: number]: boolean } = {};
  currentWord: VocabWord | null = null;
  isFlipped: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('id') || '';
      if (this.lessonId) {
        this.lessonData = VOCABULARY_DATA[this.lessonId] || null;
        this.resetAll();
      }
    });
  }

  resetAll(): void {
    if (!this.lessonData) return;
    this.userAnswers = {};
    this.exerciseFeedback = {};
    this.showResults = {};
    this.currentWord = null;
    this.isFlipped = false;

    for (let s = 0; s < this.lessonData.sections.length; s++) {
      const ex = this.lessonData.sections[s].exercise;
      if (ex) {
        this.userAnswers[s] = ex.items.map(() => '');
        this.exerciseFeedback[s] = ex.items.map(() => 'unanswered');
        this.showResults[s] = false;
      }
    }
  }

  allAnswered(sIdx: number): boolean {
    const fb = this.exerciseFeedback[sIdx];
    if (!fb) return false;
    for (let i = 0; i < fb.length; i++) {
      if (fb[i] === 'unanswered') return false;
    }
    return true;
  }

  trackByIndex(i: number): number { return i; }

  checkSection(sectionIdx: number): void {
    const ex = this.lessonData?.sections[sectionIdx]?.exercise;
    if (!ex) return;
    const fb = this.exerciseFeedback[sectionIdx];
    for (let i = 0; i < ex.items.length; i++) {
      const userAns = (this.userAnswers[sectionIdx]?.[i] || '').trim().toLowerCase();
      const correctAns = ex.items[i].answer.toLowerCase();
      fb[i] = userAns === correctAns ? 'correct' : 'incorrect';
    }
    this.showResults[sectionIdx] = true;
  }

  scoreFor(sectionIdx: number): number {
    const fb = this.exerciseFeedback[sectionIdx];
    if (!fb) return 0;
    return fb.filter(f => f === 'correct').length;
  }

  totalFor(sectionIdx: number): number {
    return this.lessonData?.sections[sectionIdx]?.exercise?.items.length || 0;
  }

  playAudio(word: VocabWord): void {
    if (!word.word) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word.word);
    u.lang = 'en-US'; u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }

  flipCard(word: VocabWord): void {
    this.currentWord = word;
    this.isFlipped = !this.isFlipped;
  }
}
