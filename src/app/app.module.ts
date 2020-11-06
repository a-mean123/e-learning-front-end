import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { GestionformatteurComponent } from './admin/gestionformatteur/gestionformatteur.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddformatteurComponent } from './admin/addformatteur/addformatteur.component';
import { UpdateformatteurComponent } from './admin/updateformatteur/updateformatteur.component';
import { GereretudiantComponent } from './admin/gereretudiant/gereretudiant.component';
import { GestioncategorieComponent } from './admin/gestioncategorie/gestioncategorie.component';
import { AjoutcategorieComponent } from './admin/ajoutcategorie/ajoutcategorie.component';
import { UpdatecategorieComponent } from './admin/updatecategorie/updatecategorie.component';
import { FormatteurComponent } from './formatteur/formatteur.component';
import { SidbarComponent } from './formatteur/sidbar/sidbar.component';
import { NavbarComponent } from './formatteur/navbar/navbar.component';
import { GestioncoursComponent } from './formatteur/gestioncours/gestioncours.component';
import { AjoutcoursComponent } from './formatteur/ajoutcours/ajoutcours.component';
import { UpdatecoursComponent } from './formatteur/updatecours/updatecours.component';
import { GestionformationComponent } from './admin/gestionformation/gestionformation.component';
import { AjoutformationComponent } from './admin/ajoutformation/ajoutformation.component';
import { UpdateformationComponent } from './admin/updateformation/updateformation.component';
import { GestionquizComponent } from './formatteur/gestionquiz/gestionquiz.component';
import { AjoutquizComponent } from './formatteur/ajoutquiz/ajoutquiz.component';
import { GestiontestComponent } from './formatteur/gestiontest/gestiontest.component';
import { AjouttestComponent } from './formatteur/ajouttest/ajouttest.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AsidComponent } from './etudiant/asid/asid.component';
import { HeadeComponent } from './etudiant/heade/heade.component';
import { ListFormationsComponent } from './etudiant/list-formations/list-formations.component';
import { DetailFormationsComponent } from './etudiant/detail-formations/detail-formations.component';
import { PasserQuizComponent } from './etudiant/passer-quiz/passer-quiz.component';
import { PasserTestComponent } from './etudiant/passer-test/passer-test.component';
import { MonapprentissageComponent } from './etudiant/monapprentissage/monapprentissage.component';
import { HeaderCompComponent } from './client/header-comp/header-comp.component';
import { CoverComponent } from './client/cover/cover.component';
import { PopularComponent } from './client/popular/popular.component';
import { OurFormatteurComponent } from './client/our-formatteur/our-formatteur.component';
import { AboutUsComponent } from './client/about-us/about-us.component';
import { DashComponent } from './formatteur/dash/dash.component';
import { PostsComponent } from './formatteur/posts/posts.component';
import { MesFormationComponent } from './formatteur/mes-formation/mes-formation.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    GestionformatteurComponent,
    DashboardComponent,
    AddformatteurComponent,
    UpdateformatteurComponent,
    GereretudiantComponent,
    GestioncategorieComponent,
    AjoutcategorieComponent,
    UpdatecategorieComponent,
    FormatteurComponent,
    SidbarComponent,
    NavbarComponent,
    GestioncoursComponent,
    AjoutcoursComponent,
    UpdatecoursComponent,
    GestionformationComponent,
    AjoutformationComponent,
    UpdateformationComponent,
    GestionquizComponent,
    AjoutquizComponent,
    GestiontestComponent,
    AjouttestComponent,
    EtudiantComponent,
    AsidComponent,
    HeadeComponent,
    ListFormationsComponent,
    DetailFormationsComponent,
    PasserQuizComponent,
    PasserTestComponent,
    MonapprentissageComponent,
    HeaderCompComponent,
    CoverComponent,
    PopularComponent,
    OurFormatteurComponent,
    AboutUsComponent,
    DashComponent,
    PostsComponent,
    MesFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
