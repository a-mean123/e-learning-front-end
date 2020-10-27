import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformatteurComponent } from './admin/addformatteur/addformatteur.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutcategorieComponent } from './admin/ajoutcategorie/ajoutcategorie.component';
import { AjoutformationComponent } from './admin/ajoutformation/ajoutformation.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GereretudiantComponent } from './admin/gereretudiant/gereretudiant.component';
import { GestioncategorieComponent } from './admin/gestioncategorie/gestioncategorie.component';
import { GestionformationComponent } from './admin/gestionformation/gestionformation.component';
import { GestionformatteurComponent } from './admin/gestionformatteur/gestionformatteur.component';
import { UpdateformationComponent } from './admin/updateformation/updateformation.component';
import { UpdateformatteurComponent } from './admin/updateformatteur/updateformatteur.component';
import { ClientComponent } from './client/client.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AjoutcoursComponent } from './formatteur/ajoutcours/ajoutcours.component';
import { FormatteurComponent } from './formatteur/formatteur.component';
import { GestioncoursComponent } from './formatteur/gestioncours/gestioncours.component';
import { GestionquizComponent } from './formatteur/gestionquiz/gestionquiz.component';
import { GestiontestComponent } from './formatteur/gestiontest/gestiontest.component';
import { UpdatecoursComponent } from './formatteur/updatecours/updatecours.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import {FormatteurGuard } from './services/formatteur.guard';
import {EtudiantGuard } from './etudiant.guard';
import { ListFormationsComponent } from './etudiant/list-formations/list-formations.component';
import { MonapprentissageComponent } from './etudiant/monapprentissage/monapprentissage.component';
import { DetailFormationsComponent } from './etudiant/detail-formations/detail-formations.component';
import { PasserQuizComponent } from './etudiant/passer-quiz/passer-quiz.component';
import { PasserTestComponent } from './etudiant/passer-test/passer-test.component';
import { DashComponent } from './formatteur/dash/dash.component';
import { PostsComponent } from './formatteur/posts/posts.component';

const routes: Routes = [


    {path:'' , component: ClientComponent},
    
    {path: 'board'  ,    canActivate: [AuthGuard] , component: AdminComponent , children: [
        {path: '' , component: DashboardComponent},
          {path: 'gestionformateur' , component: GestionformatteurComponent},
          {path: 'addformatteur' , component:AddformatteurComponent},
          {path: 'updateformatteur/:id' , component: UpdateformatteurComponent},
          {path: 'gestionetudiant' , component:GereretudiantComponent},
          {path: 'gestioncategorie' , component: GestioncategorieComponent},
          {path: 'addcategorie' , component: AjoutcategorieComponent},
          {path: 'gestioncours' , component: GestioncoursComponent},
          {path: 'gestionformation' , component: GestionformationComponent},
          {path: 'ajoutformation' , component: AjoutformationComponent},
          {path: 'updateformation/:id' , component: UpdateformationComponent},


    ]},
    {path: 'formatteur' ,    canActivate: [FormatteurGuard] , component: FormatteurComponent , children:[
      {path: '' , component: DashComponent},
      {path: 'gestioncours' ,component: GestioncoursComponent},
      {path: 'ajoutcours' , component: AjoutcoursComponent},
      {path: 'updatecours/:id' , component: UpdatecoursComponent},
      {path: 'gestionquiz' , component: GestionquizComponent},
      {path: 'gestiontest' , component: GestiontestComponent},
      {path: 'posts' , component: PostsComponent}

    ]},


    {path:'etudiant' , canActivate: [EtudiantGuard] ,  component: EtudiantComponent , children: [

      {path: '' , component: ListFormationsComponent},
      {path: 'monapprentissage' , component: MonapprentissageComponent},
      {path: 'detailformation/:id' , component: DetailFormationsComponent},
      {path: 'passerquiz/:id' , component: PasserQuizComponent},
      {path: 'passertest/:id' , component: PasserTestComponent}



    ]},


    {path: 'login' , component: LoginComponent},
    {path: 'register' , component: RegisterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
