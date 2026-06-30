import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSpeakingLessonsExpanded = false;
  isGrammarOpen = false;

  // Sub-category expand states for Speaking English Lessons
  isExpanded_dailyLife = false;
  isExpanded_foodDrink = false;
  isExpanded_travel = false;
  isExpanded_work = false;
  isExpanded_school = false;
  isExpanded_health = false;
  isExpanded_relationships = false;
  isExpanded_money = false;
  isExpanded_technology = false;
  isExpanded_emergencies = false;

  toggleSpeakingLessons(event: Event) {
    event.preventDefault();
    this.isSpeakingLessonsExpanded = !this.isSpeakingLessonsExpanded;
  }

  toggleSub(key: string, event: Event) {
    event.preventDefault();
    // @ts-ignore
    this[`isExpanded_${key}`] = !this[`isExpanded_${key}`];
  }

  toggleGrammarMenu(event: Event) {
    event.preventDefault();
    this.isGrammarOpen = !this.isGrammarOpen;
  }
}
