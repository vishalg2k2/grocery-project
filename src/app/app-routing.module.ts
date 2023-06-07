import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [ 
  //{path:'auth', component:AuthComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserlistingComponent,canActivate:[AuthGuard]},
  {path:'search/:searchTerm', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'tag/:tag', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'items/:id', component:FoodpageComponent,canActivate:[AuthGuard]},
  {path:'cart-page', component: CartPageComponent,canActivate:[AuthGuard]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
