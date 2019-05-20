import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import {HomeNoteComponent} from './notes/home-note/home-note.component';
import {ShowNoteComponent} from './notes/show-note/show-note.component';
import {AddNoteComponent} from './notes/add-note/add-note.component';
import {UpdateNoteComponent} from './notes/update-note/update-note.component';
import {DeleteNoteComponent} from './notes/delete-note/delete-note.component';

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
        path: 'notes',
        component: HomeNoteComponent
    },
    {
      path: 'notes/:id',
      component: ShowNoteComponent
    },
    {
      path: 'admin/add',
      component: AddNoteComponent
    },
    {
      path: 'admin/update/:id',
      component: UpdateNoteComponent
    },
    {
      path: 'admin/delete/:id',
      component: DeleteNoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
