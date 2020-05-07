import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';
import { ArtistPreviewComponent } from './components/artist-preview/artist-preview.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuard] }, // todo: only user logged
  {path: 'music/artists', component: ArtistPreviewComponent, canActivate: [AuthGuard]},
  {path: 'music/house-record/detail/:id', component: HouseDetailComponent, canActivate: [AuthGuard]},
  {path: 'music/artist/detail/:id', component: ArtistDetailComponent, canActivate: [AuthGuard]},
  {path: 'music/playlist', component: PlaylistComponent, canActivate: [AuthGuard] },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
