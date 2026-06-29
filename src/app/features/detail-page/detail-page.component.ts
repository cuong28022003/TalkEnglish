import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LESSONS_DATA, Lesson, Sentence } from '../../data/lessons.data';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit {
  lessonId: string = '';
  lessonTitle: string = '';
  lessonDescription: string = '';
  sentences: Sentence[] = [];
  currentSentenceIndex: number = -1;
  isRecording: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('id') || 'lesson-1';

      const lessonData = LESSONS_DATA[this.lessonId];
      if (lessonData) {
        this.lessonTitle = `Lesson ${this.lessonId.replace('lesson-', '')}: ${lessonData.title}`;
        this.lessonDescription = lessonData.description;
        this.sentences = lessonData.sentences;
      } else {
        this.lessonTitle = 'Lesson Not Found';
        this.lessonDescription = '';
        this.sentences = [];
      }
    });
  }

  playAudio(index: number): void {
    this.currentSentenceIndex = index;
    const sentence = this.sentences[index];
    console.log(`Playing audio: ${sentence.audioFile}`);
    // In production, this would call an audio service
  }

  playAll(): void {
    console.log('Playing all audio sentences sequentially');
    // In production, this would play all audio files in sequence
  }

  isPlaying(index: number): boolean {
    return this.currentSentenceIndex === index;
  }

  toggleRecording(): void {
    this.isRecording = !this.isRecording;
    if (this.isRecording) {
      console.log('Recording started...');
    } else {
      console.log('Recording stopped.');
    }
  }

  playRecording(): void {
    console.log('Playing back recorded audio...');
  }
}
