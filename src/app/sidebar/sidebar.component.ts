import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSpeakingLessonsExpanded = false;
  isGrammarOpen = false;

  toggleSpeakingLessons(event: Event) {
    event.preventDefault();
    this.isSpeakingLessonsExpanded = !this.isSpeakingLessonsExpanded;
  }

  toggleGrammarMenu(event: Event) {
    event.preventDefault();
    this.isGrammarOpen = !this.isGrammarOpen;
  }
}
