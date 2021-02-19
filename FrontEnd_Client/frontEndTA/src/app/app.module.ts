import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Imports Angular Materials
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';

import { DetailsIssueComponent } from './details-issue/details-issue.component';

import { ListaIssueComponent } from './lista-issue/lista-issue.component';
import { CommentsIssueComponent } from './comments-issue/comments-issue.component';
const appRoutes: Routes = [


  {
    path: 'service',
    component: CreateServiceComponent, data: { title: 'Create Services' }
  },
  {
    path: 'comments-issue/:issue_id',
    component: CommentsIssueComponent, data: { title: 'Comments Report' }
  },
  {
    path: 'details-issue/:issue_id',
    component: DetailsIssueComponent, data: { title: 'List Report' }
  },

  {
    path: 'list-issue',
    component: ListaIssueComponent, data: { title: 'List Report' }
  },

  {
    path: 'issue',
    component: CreateIssueComponent, data: { title: 'Create Reporter' }
  },
  {
    path: 'home',
    component: HomeClientComponent,
    data: { title: 'Welcome TeleAlantico' },

  },
  {
    path: 'teleAtlantico',
    component: LandingPageComponent,
    data: { title: 'Welcome TeleAlantico' }
  },
  {
    path: 'login',
    component: ClientLoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'create',
    component: ClientCreateComponent,
    data: { title: 'Create User' }
  },
  {
    path: '',
    redirectTo: '/teleAtlantico',
    pathMatch: 'full',

  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ClientCreateComponent,
    ClientLoginComponent,
    HomeClientComponent,
    CreateServiceComponent,
    CreateIssueComponent,

    ListaIssueComponent,

    DetailsIssueComponent,

    CommentsIssueComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    CdkTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
