import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { SaveComponent } from './components/save/save.component';

const routes: Routes = [
  { path: '', component: ReadComponent },

  { path: 'create', component: CreateComponent },
  { path: 'save', component: ReadComponent },
  { path: 'create/:id', component: CreateComponent },
  { path: 'search/:searchterm', component: ReadComponent },
  { path: 'back', component: ReadComponent },
  { path: 'components/save/:id', component: SaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
