import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadMeComponent } from './pages/home/read-me/read-me.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"contact",component: ContactComponent},
  {path:"readme",component: ReadMeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }