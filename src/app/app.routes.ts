import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { GrammarPageComponent } from './grammar-page/grammar-page.component';
import { VocabularyPageComponent } from './vocabulary-page/vocabulary-page.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'menu/:id', component: MenuPageComponent },
  { path: 'lesson/:id', component: DetailPageComponent },
  { path: 'grammar/:id', component: GrammarPageComponent },
  { path: 'vocabulary/:id', component: VocabularyPageComponent },
  { path: '**', redirectTo: '' }
];
