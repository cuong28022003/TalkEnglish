import { Routes } from '@angular/router';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { MenuPageComponent } from './features/menu-page/menu-page.component';
import { DetailPageComponent } from './features/detail-page/detail-page.component';
import { GrammarPageComponent } from './features/grammar-page/grammar-page.component';
import { VocabularyPageComponent } from './features/vocabulary-page/vocabulary-page.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'menu/:id', component: MenuPageComponent },
  { path: 'lesson/:id', component: DetailPageComponent },
  { path: 'grammar/:id', component: GrammarPageComponent },
  { path: 'vocabulary/:id', component: VocabularyPageComponent },
  { path: '**', redirectTo: '' }
];
