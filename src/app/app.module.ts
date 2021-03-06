import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {NgSemanticModule} from "ng-semantic/ng-semantic";
import {CityBoxComponent} from "./components/city-box/city-box.component";
import {MapComponent} from "./components/map/map.component";
import {Cities} from "./class/cities";
import {SettingService} from "./services/api/setting.service";
import {PanelComponent} from "./components/panel/panel.component";
import {MapService} from "./services/map.service";
import {IcComponent} from "./components/ic/ic.component";

@NgModule({
    declarations: [
        AppComponent,
        CityBoxComponent,
        MapComponent,
        PanelComponent,
        IcComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBqU91KWrcBVGvdJfI_Uubr15zBFx9m12A'
        })
    ],
    providers: [Cities, SettingService, MapService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
