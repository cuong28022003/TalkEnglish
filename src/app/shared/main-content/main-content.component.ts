import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content',
  imports: [RouterLink],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  categories = [
    {
      title: 'English Speaking Basics',
      description: '90 lessons for beginners using common expressions.',
      icon: '🎤',
      route: '/menu/basics'
    },
    {
      title: 'Regular English Lessons',
      description: 'Learn what to say and how to say things in daily conversations.',
      icon: '💬',
      route: '/menu/regular'
    },
    {
      title: 'Business English',
      description: 'English for the office and professional environments.',
      icon: '💼',
      route: '/menu/business'
    },
    {
      title: 'Interview English',
      description: 'Prepare for any kind of interview in English.',
      icon: '🤝',
      route: '/menu/interview'
    },
    {
      title: 'Travel English',
      description: 'Essential phrases for navigation, tickets and services.',
      icon: '✈️',
      route: '/menu/travel'
    },
    {
      title: 'Idioms and Phrases',
      description: 'Expressions that are difficult to translate literally.',
      icon: '📚',
      route: '/menu/idioms'
    },
    {
      title: 'English Listening',
      description: 'Basic, Intermediate and Advanced listening practice.',
      icon: '🎧',
      route: '/menu/listening'
    },
    {
      title: 'English Grammar',
      description: '145 units from basic to advanced grammar, with exercises.',
      icon: '📝',
      route: '/menu/grammar'
    }
  ];

  extras = [
    { title: '5 Rules for Fluency', icon: '⭐', route: '#' },
    { title: 'English Vocabulary', icon: '📖', route: '#' },
    { title: 'Study Method', icon: '🎯', route: '#' },
    { title: 'Download Offline', icon: '📥', route: '#' }
  ];
}
