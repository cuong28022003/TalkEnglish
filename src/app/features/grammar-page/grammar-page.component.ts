import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GRAMMAR_DATA, GrammarUnit } from '../../data/grammar.data';

@Component({
  selector: 'app-grammar-page',
  imports: [FormsModule],
  templateUrl: './grammar-page.component.html',
  styleUrl: './grammar-page.component.scss'
})
export class GrammarPageComponent implements OnInit {
  unitId: string = '';
  unitData: GrammarUnit | null = null;

  // Interactive exercise state
  userAnswers: string[] = [];
  exerciseFeedback: ('correct' | 'incorrect' | 'unanswered')[] = [];
  showAllResults: boolean = false;
  score: number = 0;
  showHint: boolean[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.unitId = params.get('id') || 'unit-1';
      this.unitData = GRAMMAR_DATA[this.unitId] || null;
      this.resetExercises();
    });
  }

  resetExercises(): void {
    if (!this.unitData) return;
    this.userAnswers = this.unitData.exercises.map(() => '');
    this.exerciseFeedback = this.unitData.exercises.map(() => 'unanswered' as const);
    this.showAllResults = false;
    this.score = 0;
    this.showHint = this.unitData.exercises.map(() => false);
  }

  allAnswered(): boolean {
    return this.exerciseFeedback.every(f => f !== 'unanswered');
  }

  trackByIndex(index: number): number {
    return index;
  }

  checkAnswer(index: number): void {
    if (!this.unitData) return;
    const userAns = this.userAnswers[index]?.trim().toLowerCase() || '';
    const correctAns = this.unitData.exercises[index]?.answer.toLowerCase() || '';
    this.exerciseFeedback[index] = userAns === correctAns ? 'correct' : 'incorrect';
    this.updateScore();
  }

  checkAll(): void {
    if (!this.unitData) return;
    for (let i = 0; i < this.unitData.exercises.length; i++) {
      this.checkAnswer(i);
    }
    this.showAllResults = true;
  }

  toggleHint(index: number): void {
    this.showHint[index] = !this.showHint[index];
  }

  private updateScore(): void {
    this.score = this.exerciseFeedback.filter(f => f === 'correct').length;
  }

  hintFor(index: number): string {
    if (!this.unitData) return '';
    const answer = this.unitData.exercises[index]?.answer || '';
    if (answer.length <= 3) return answer;
    return answer[0] + '_'.repeat(answer.length - 2) + answer[answer.length - 1];
  }

  percentCorrect(): number {
    if (!this.unitData || this.unitData.exercises.length === 0) return 0;
    return Math.round((this.score / this.unitData.exercises.length) * 100);
  }

  highlightGrammar(text: string): string {
    let result = text.replace(/([A-Za-z/]+ \+ [A-Za-z/ -]+(?: \+ [A-Za-z/ -]+)*)/g,
      '<span class="highlight-rule">$1</span>');
    result = result.replace(
      /(Present continuous|Present simple|Past simple|Past continuous|Present perfect|Past perfect)/gi,
      '<strong>$1</strong>');
    return result;
  }
}
