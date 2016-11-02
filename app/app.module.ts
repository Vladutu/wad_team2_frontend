import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {DropdownDirective} from "./dropdown.directive";
import {LoginComponent} from "./login/login.component";
import {SecretaryComponent} from "./secretary/secretary.component";
import {SubgroupItemsComponent} from "./secretary/subgroup/subgroup-items.component";

@NgModule({
    declarations: [
        AppComponent,
        DropdownDirective,
        LoginComponent,
        SecretaryComponent,
        SubgroupItemsComponent
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
