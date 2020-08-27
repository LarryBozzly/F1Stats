import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from "./components/results/results.component"
import { InfoComponent } from "./components/info/info.component"
import { WinnerComponent } from "./components/winner/winner.component"


const routes: Routes = [
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: 'winner',
    component: WinnerComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [ResultsComponent];
