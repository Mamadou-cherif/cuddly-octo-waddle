import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailsComponent } from "./components/article-details/article-details.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { TermConditionComponent } from "./components/term-condition/term-condition.component";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobalityComponent } from "./components/globalComponent/globality/globality.component";
import { LoginComponent } from "./components/login/login.component";
import { LogupComponent } from "./components/logup/logup.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { InfoConseilsComponent } from "./components/info-conseils/info-conseils.component";
import { EtudierAbroidComponent } from "./components/etudier-abroid/etudier-abroid.component";
import { BourseEtudesComponent } from "./components/bourse-etudes/bourse-etudes.component";
import { AdmissionComponent } from "./components/admission/admission.component";
import { AppModule } from "./app.module";
import { BilanCompetencesComponent } from "./components/bilan-competences/bilan-competences.component";
import { BilanOrientationComponent } from "./components/bilan-orientation/bilan-orientation.component";
import { CoachingScolaireComponent } from "./components/coaching-scolaire/coaching-scolaire.component";

const routes: Routes=[
    {path: "apropos", component: ArticleDetailsComponent},
    {path: "articleDetail", component: ArticleDetailsComponent},
    {path: "termcondition", component: TermConditionComponent},
    {path: "privacypolicy", component: PrivacyPolicyComponent},
    {path: "globality", component: GlobalityComponent},
    {path: "login", component: LoginComponent},
    {path: "logup", component:LogupComponent},
    {path: "resetPassword", component: ResetPasswordComponent},
    {path: "info-conseils", component: InfoConseilsComponent},
    {path: "etudierAbroid", component: EtudierAbroidComponent},
    {path: "bourseEtude", component: BourseEtudesComponent},
    {path: "admission", component:AdmissionComponent},
    {path: "bilanCompetence", component: BilanCompetencesComponent},
    {path: "bilanOrientation", component: BilanOrientationComponent},
    {path: "coachingScolaire", component: CoachingScolaireComponent},
    {path: "", redirectTo:"globality", pathMatch:"full"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }