import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationsComponent } from './core/components/publications/publications.component';
import { PublishComponent } from './core/components/publish/publish.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LogoutComponent } from './shared/components/logout/logout.component';

const routes: Routes = [
  { path: 'home', component: PublicationsComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
