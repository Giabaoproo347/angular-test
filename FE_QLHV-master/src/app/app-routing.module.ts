import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {PmComponent} from './pm/pm.component';
import {AdminComponent} from './admin/admin.component';
import {SyllabusEditComponent} from './qlhv/syllabus/syllabus-edit/syllabus-edit.component';
import {SyllabusAddComponent} from './qlhv/syllabus/syllabus-add/syllabus-add.component';
import {ObjectiveListComponent} from './qlhv/objective/objective-list/objective-list.component';
import {ActivityEditComponent} from './qlhv/activity/activity-edit/activity-edit.component';
import {SkillListComponent} from './qlhv/skill/skill-list/skill-list.component';
import {ActivityAddComponent} from './qlhv/activity/activity-add/activity-add.component';
import {ObjectiveEditComponent} from './qlhv/objective/objective-edit/objective-edit.component';
import {ObjectiveAddComponent} from './qlhv/objective/objective-add/objective-add.component';
import {SyllabusListComponent} from './qlhv/syllabus/syllabus-list/syllabus-list.component';
import {SkillAddComponent} from './qlhv/skill/skill-add/skill-add.component';
import {ActivityListComponent} from './qlhv/activity/activity-list/activity-list.component';
import {SkillEditComponent} from './qlhv/skill/skill-edit/skill-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'pm',
    component: PmComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-syllabus',
    component: SyllabusListComponent,
  },
  {
    path: 'add-syllabus',
    component: SyllabusAddComponent,
  },
  {
    path: 'edit-syllabus',
    component: SyllabusEditComponent,
  },
  {
    path: 'list-objective',
    component: ObjectiveListComponent,
  },
  {
    path: 'add-objective',
    component: ObjectiveAddComponent,
  },
  {
    path: 'edit-objective',
    component: ObjectiveEditComponent,
  },
  {
    path: 'list-skill',
    component: SkillListComponent,
  },
  {
    path: 'add-skill',
    component: SkillAddComponent,
  },
  {
    path: 'edit-skill',
    component: SkillEditComponent,
  },
  {
    path: 'list-activity',
    component: ActivityListComponent,
  },
  {
    path: 'add-activity',
    component: ActivityAddComponent,
  },
  {
    path: 'edit-activity',
    component: ActivityEditComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
