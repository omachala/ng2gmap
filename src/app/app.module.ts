import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {NgSemanticModule} from "ng-semantic";
import {CityBoxComponent} from "./components/city-box/city-box.component";
import {MapComponent} from "./components/map/map.component";
import {Cities} from "./class/cities";

@NgModule({
    declarations: [
        AppComponent,
        CityBoxComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBqU91KWrcBVGvdJfI_Uubr15zBFx9m12A'
        })
    ],
    providers: [Cities],
    bootstrap: [AppComponent]
})
export class AppModule {
}
