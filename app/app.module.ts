import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {DropdownDirective} from "./dropdown.directive";
import {ProfessorNavbarComponent} from "./professor-navbar/professor-navbar.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
    declarations: [
        AppComponent,
        DropdownDirective,
        ProfessorNavbarComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
