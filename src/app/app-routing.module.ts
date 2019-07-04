import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'crisis-center',
        component: CrisisListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
