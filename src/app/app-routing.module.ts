import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
   {
    
    path:"",

   redirectTo:"/home",
   
   pathMatch:"full"
  },
   /* to show home page while empty we took path = empty
   and redirect to /home and given pathMatch =full*/
  {path:"technologies",component:TechnologiesComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {
    path:"**",component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
