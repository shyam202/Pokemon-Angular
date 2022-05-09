import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './components/database/database.component';

import { InterDetailsComponent } from './components/inter-details/inter-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/database',
    pathMatch: 'full',
  },
  {
    path: 'database',
    component: DatabaseComponent,
  },
  {
    path: 'inter-details/:id',
    component: InterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
