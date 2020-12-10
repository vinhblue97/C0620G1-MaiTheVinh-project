import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ConsultantComponent } from './components/consultant/consultant.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'consultant', component: ConsultantComponent},
  {path: 'feedback', component: FeedBackComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [ClientComponent, ConsultantComponent, PageNotFoundComponent, HomePageComponent, FeedBackComponent]
})
export class AppRoutingModule { }
