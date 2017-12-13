import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent }   from './about/about.component';
import { ProjectDetailComponent }   from './project-detail/project-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
