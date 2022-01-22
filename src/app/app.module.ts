import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from "@angular/common/http";
import { LogupComponent } from './components/logup/logup.component';
import { HeadersComponent } from './components/headers/headers.component';
import { RegisterComponent } from './components/globalComponent/register/register.component';
import { DetailsComponent } from './components/globalComponent/details/details.component';
import { DateComponent } from './components/globalComponent/date/date.component';
import { ContactsComponent } from './components/globalComponent/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { TermConditionComponent } from './components/term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GlobalityComponent } from './components/globalComponent/globality/globality.component';
import { LloginComponent } from './components/llogin/llogin.component';
import { GlobalAppComponent } from './components/global-app/global-app.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogupComponent,
    HeadersComponent,
    RegisterComponent,
    DetailsComponent,
    DateComponent,
    ContactsComponent,
    FooterComponent,
    ArticleDetailsComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    NavigationComponent,
    GlobalityComponent,
    LloginComponent,
    GlobalAppComponent,
    ResetPasswordComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
