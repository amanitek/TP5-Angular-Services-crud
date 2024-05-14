import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from'./post/view/view.component';
import { CreateComponent } from'./post/create/create.component';
import { EditComponent } from'./post/edit/edit.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
export const routes: Routes = [
  
{ path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
{ path: 'post/index', component: IndexComponent },
{ path: 'post/:postId/view', component:ViewComponent },
{ path: 'post/create', component: CreateComponent},
{ path: 'post/:postId/edit', component:EditComponent }


];




@NgModule({
  imports: [RouterModule.forRoot( [
  ])
],
  providers:[provideRouter(routes),
  provideAnimations(), provideHttpClient()],

  exports: [RouterModule]
})
export class AppRoutingModule { }
