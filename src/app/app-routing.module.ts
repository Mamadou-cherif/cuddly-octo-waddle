import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailsComponent } from "./components/article-details/article-details.component";
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";
import { TermConditionComponent } from "./components/term-condition/term-condition.component";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GlobalityComponent } from "./components/globalComponent/globality/globality.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes=[
    {path: "articleDetail", component: ArticleDetailsComponent},
    {path: "termcondition", component: TermConditionComponent},
    {path: "privacypolicy", component: PrivacyPolicyComponent},
    { path: "globality", component: GlobalityComponent},
    {path: "login", component: LoginComponent},
    {path: "", redirectTo:"globality", pathMatch:"full"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }