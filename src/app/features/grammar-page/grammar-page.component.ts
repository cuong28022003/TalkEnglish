import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GRAMMAR_DATA, GrammarUnit } from '../../data/grammar.data';

@Component({
  selector: 'app-grammar-page',
  imports: [],
  templateUrl: './grammar-page.component.html',
  styleUrl: './grammar-page.component.scss'
})
export class GrammarPageComponent implements OnInit {
  unitId: string = '';
  unitData: GrammarUnit | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.unitId = params.get('id') || 'unit-1';
      this.unitData = GRAMMAR_DATA[this.unitId] || null;
    });
  }

  highlightGrammar(text: string): string {
    // Basic highlighting for structural formulas like "am/is/are + -ing" or "have/has + past participle"
    // Also highlight "I am doing" "I do" "I have done" if they are quoted or in parens
    let result = text.replace(/([A-Za-z/]+ \+ [A-Za-z/ -]+(?: \+ [A-Za-z/ -]+)*)/g, '<span class="highlight-rule">$1</span>');
    // Highlight "Present continuous", "Present simple", etc if they are titles of rules
    result = result.replace(/(Present continuous|Present simple|Past simple|Past continuous|Present perfect|Past perfect)/gi, '<strong>$1</strong>');
    return result;
  }
}
