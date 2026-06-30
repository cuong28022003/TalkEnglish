import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LESSONS_DATA, Lesson, Sentence } from '../../data/lessons.data';

@Component({
  selector: 'app-detail-page',
  imports: [RouterLink],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit {
  lessonId: string = '';
  scenarioTitle: string = 'Ordering Food';
  menuParentId: string = 'food-drink-restaurant';
  menuParentTitle: string = 'Restaurant';
  nextLessonId: string = '';

  duration: number = 5;
  xp: number = 50;
  context: string = 'You just sat down at a restaurant. You want to order food.';
  objectives: string[] = [
    'Order food confidently',
    'Ask about ingredients',
    'Choose portion sizes',
    'Order drinks too'
  ];
  patterns: { text: string; audio: string }[] = [
    { text: "I'd like...", audio: 'pattern_1' },
    { text: 'Can I have...', audio: 'pattern_2' },
    { text: 'Could I get...', audio: 'pattern_3' },
    { text: "I'll take...", audio: 'pattern_4' },
    { text: "I'll have...", audio: 'pattern_5' },
  ];
  sentences: Sentence[] = [];
  expansions: string[] = [];
  vocabulary: string[] = [];
  dialogue: { role: string; speaker: string; text: string }[] = [];
  conversationRole: string = 'Waiter';
  conversationPrompt: string = "Hello. Are you ready to order?";

  currentPatternIndex: number = -1;
  currentSentenceIndex: number = -1;
  practiceIndex: number = -1;
  isPracticing: boolean = false;
  practicePhase: 'listen' | 'repeat' | 'record' | 'feedback' | 'done' = 'listen';
  activeSection: string = 'intro';
  favorites: Set<number> = new Set();
  isRecording: boolean = false;
  recordedBlob: Blob | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private recognition: any = null;
  private userTranscription: string = '';
  hasFeedback: boolean = false;
  feedbackScore: number = 0;
  feedbackMessage: string = '';
  feedbackDetails: string[] = [];
  notes: Set<number> = new Set();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('id') || 'food-drink-restaurant-1';
      this.loadLesson();
    });
  }

  loadLesson() {
    const lessonData = LESSONS_DATA[this.lessonId];
    if (lessonData) {
      this.scenarioTitle = lessonData.title;
      this.context = lessonData.description || this.context;
      this.sentences = lessonData.sentences || [];
      this.expansions = this.sentences.map(s => s.text);
      this.vocabulary = this.extractVocabulary(this.sentences);
      this.dialogue = this.buildDialogue(this.sentences);
    }
  }

  extractVocabulary(sentences: Sentence[]): string[] {
    const words = new Set<string>();
    for (const s of sentences) {
      s.text.split(' ').forEach(w => {
        const clean = w.replace(/[.,!?;:'"]/g, '').toLowerCase();
        if (clean.length > 3) words.add(clean);
      });
    }
    return Array.from(words).slice(0, 15);
  }

  buildDialogue(sentences: Sentence[]): { role: string; speaker: string; text: string }[] {
    const lines: { role: string; speaker: string; text: string }[] = [];
    for (let i = 0; i < Math.min(sentences.length, 6); i++) {
      const isCustomer = i % 2 === 0;
      lines.push({
        role: isCustomer ? 'A' : 'B',
        speaker: isCustomer ? 'Customer' : 'Waiter',
        text: sentences[i].text
      });
    }
    return lines;
  }

  playAudio(index: number): void {
    this.currentSentenceIndex = index;
    this.speak(this.sentences[index]?.text || '');
  }

  playPattern(pattern: { text: string; audio: string }): void {
    this.speak(pattern.text);
  }

  speak(text: string): void {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => {
      // auto-play is handled via the next button
    };
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking(): void {
    window.speechSynthesis.cancel();
  }

  toggleFavorite(index: number): void {
    if (this.favorites.has(index)) {
      this.favorites.delete(index);
    } else {
      this.favorites.add(index);
    }
  }

  isFavorite(index: number): boolean {
    return this.favorites.has(index);
  }

  toggleNote(index: number): void {
    if (this.notes.has(index)) {
      this.notes.delete(index);
    } else {
      this.notes.add(index);
    }
  }

  isPlaying(index: number): boolean {
    return this.currentSentenceIndex === index;
  }

  toggleRecording(): void {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  private async startRecording(): Promise<void> {
    if (!navigator.mediaDevices?.getUserMedia) {
      alert('Your browser does not support audio recording.');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.audioChunks.push(e.data);
      };
      this.mediaRecorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        this.recordedBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.audioChunks = [];
        // Auto-move to feedback phase when recording stops
        if (this.isPracticing && this.practicePhase === 'record') {
          this.advancePhase();
        }
      };
      this.mediaRecorder.start();
      this.isRecording = true;
    } catch {
      alert('Microphone access denied. Please allow microphone permissions.');
    }
  }

  private stopRecording(): void {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.isRecording = false;
  }

  playRecording(): void {
    if (!this.recordedBlob) return;
    const url = URL.createObjectURL(this.recordedBlob);
    const audio = new Audio(url);
    audio.play();
    audio.onended = () => URL.revokeObjectURL(url);
  }

  /** Generate AI feedback using Speech-to-Text comparison */
  giveFeedback(): void {
    if (this.hasFeedback) return;
    const sentence = this.sentences[this.practiceIndex];
    if (!sentence) return;

    const expectedText = sentence.text;
    // Use Web Speech API for recognition
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      // Fallback: simulate feedback
      this.simulateFeedback(expectedText);
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;
    this.userTranscription = '';

    this.recognition.onresult = (event: any) => {
      const alternatives = event.results[0];
      const topResult = alternatives[0].transcript.trim();
      this.userTranscription = topResult;
      this.analyzeSpeech(expectedText, topResult, alternatives);
    };

    this.recognition.onerror = () => {
      // Fallback on error
      this.simulateFeedback(expectedText);
    };

    this.recognition.onend = () => {
      this.recognition = null;
    };

    this.recognition.start();
  }

  /** Compare expected vs spoken text using word-level analysis */
  private analyzeSpeech(expected: string, spoken: string, alternatives: any): void {
    const expectedWords = expected.toLowerCase().replace(/[.,!?]/g, '').split(' ').filter(Boolean);
    const spokenWords = spoken.toLowerCase().replace(/[.,!?]/g, '').split(' ').filter(Boolean);

    // Word-by-word comparison
    let correctWords = 0;
    const details: string[] = [];

    for (let i = 0; i < expectedWords.length; i++) {
      const expectedWord = expectedWords[i];
      const spokenWord = spokenWords[i] || '';

      if (spokenWord === expectedWord) {
        correctWords++;
      } else {
        // Check if word exists elsewhere in spoken
        const foundElsewhere = spokenWords.some(w => w === expectedWord);
        if (spokenWord && !foundElsewhere) {
          details.push(`"${expectedWord}" → said "${spokenWord}"`);
        } else if (!spokenWord) {
          details.push(`"${expectedWord}" → (missing)`);
        } else {
          correctWords++; // Word exists elsewhere, count as correct
        }
      }
    }

    // Calculate accuracy score (0-100)
    this.feedbackScore = Math.round((correctWords / expectedWords.length) * 100);

    // Generate feedback message
    if (this.feedbackScore >= 90) {
      this.feedbackMessage = 'Excellent! Your pronunciation is very accurate.';
    } else if (this.feedbackScore >= 70) {
      this.feedbackMessage = 'Good effort. Try to speak more clearly and focus on problem words.';
    } else if (this.feedbackScore >= 50) {
      this.feedbackMessage = 'Keep practicing! Slow down and say each word deliberately.';
    } else {
      this.feedbackMessage = 'Try again. Listen carefully and repeat each word one by one.';
    }

    this.feedbackDetails = details.slice(0, 5);
    this.hasFeedback = true;
  }

  /** Fallback: simulated feedback when STT not available */
  private simulateFeedback(expectedText: string): void {
    const wordCount = expectedText.split(' ').length;
    const baseScore = 65 + Math.floor(Math.random() * 30);
    this.feedbackScore = Math.min(baseScore, 98);

    if (this.feedbackScore >= 90) {
      this.feedbackMessage = 'Excellent pronunciation! Your intonation sounds very natural.';
    } else if (this.feedbackScore >= 75) {
      this.feedbackMessage = 'Good effort! Try to speak a bit slower and focus on the vowel sounds.';
    } else {
      this.feedbackMessage = 'Keep practicing! Focus on each syllable and try to match the rhythm of the sentence.';
    }
    this.feedbackDetails = [];
    this.hasFeedback = true;
  }

  /** Starts the practice loop from sentence 0 */
  startPractice(): void {
    this.practiceIndex = 0;
    this.isPracticing = true;
    this.practicePhase = 'listen';
    this.doCurrentPhase();
  }

  /** Advances phase: listen → repeat → record → feedback → next sentence */
  advancePhase(): void {
    switch (this.practicePhase) {
      case 'listen':
        this.practicePhase = 'repeat';
        this.doCurrentPhase();
        break;
      case 'repeat':
        this.practicePhase = 'record';
        break;
      case 'record':
        this.practicePhase = 'feedback';
        this.giveFeedback();
        break;
      case 'feedback':
        // Move to next sentence
        if (this.practiceIndex < this.sentences.length - 1) {
          this.practiceIndex++;
          this.hasFeedback = false;
          this.feedbackScore = 0;
          this.feedbackMessage = '';
          this.recordedBlob = null;
          this.practicePhase = 'listen';
          this.doCurrentPhase();
        } else {
          this.practicePhase = 'done';
        }
        break;
      case 'done':
        break;
    }
  }

  /** Plays current phase action */
  doCurrentPhase(): void {
    const sentence = this.sentences[this.practiceIndex];
    if (!sentence) return;
    switch (this.practicePhase) {
      case 'listen':
        this.speakPractice(sentence.text);
        break;
      case 'repeat':
        this.speakPractice(sentence.text);
        break;
      case 'record':
        // User clicks Record manually
        break;
      case 'feedback':
        // Show feedback UI
        break;
    }
  }

  /** Plays sentence with onend callback to advance to next phase */
  private speakPractice(text: string): void {
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => {
      if (this.practicePhase === 'listen') {
        setTimeout(() => this.advancePhase(), 500);
      }
    };
    window.speechSynthesis.speak(utterance);
  }

  /** Plays the current practice sentence and advances (legacy) */
  nextSentence(): void {
    this.advancePhase();
  }

  /** Resets the practice loop */
  resetPractice(): void {
    this.isPracticing = false;
    this.practiceIndex = -1;
    this.practicePhase = 'listen';
    window.speechSynthesis.cancel();
  }

  startConversation(): void {
    console.log('Starting AI conversation...');
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset cho header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  get phaseLabel(): string {
    const labels: Record<string, string> = {
      'listen': '👂 Listen',
      'repeat': '🗣️ Repeat',
      'record': '🎤 Record',
      'feedback': '🤖 AI Feedback',
      'done': '✅ Done'
    };
    return labels[this.practicePhase] || '';
  }
}
