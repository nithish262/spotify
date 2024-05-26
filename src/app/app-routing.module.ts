import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

// const routes: Routes = [{ path: 'spotify', loadChildren: () => import('./components/spotify/spotify.module').then(m => m.SpotifyModule) }];
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'main',component:MainComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
