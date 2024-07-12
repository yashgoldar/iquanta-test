import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task2Component } from './components/task-2/task-2.component';
import { Task1Component } from './components/task-1/task-1.component';

const routes: Routes = [
  {path: 'task-1', component: Task1Component},
  {path: 'task-2', component: Task2Component},
  { path: '', redirectTo: '/task-1', pathMatch: 'full' }, // Default route redirection
  { path: '**', redirectTo: '/task-1' } // Redirect any other undefined
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
