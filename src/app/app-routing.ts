import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const appRoutes: Routes = [
{path:'submissionList', loadChildren:'./submission-list/submission-list.module#SubmissionListModule'},
{path:'playerDetails/:id', loadChildren:'./player-details/player-details.module#PlayerDetailsModule'},
{path:'', redirectTo:'submissionList',pathMatch:'full'}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
