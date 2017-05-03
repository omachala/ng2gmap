import {Component} from "@angular/core";
import {MapSetting} from "./class/map-setting";

@Component({
    selector: 'app-root',
    template: `<app-city-box></app-city-box>
                <app-panel></app-panel>
                <app-map [mapSetting]="currentMapSetting" ></app-map>`,
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    currentMapSetting: MapSetting;
    title = 'app works!';

    constructor() {

        this.currentMapSetting = new MapSetting();
        this.currentMapSetting.mapCenterLat = 49.837119;
        this.currentMapSetting.mapCenterLng = 15.460616;
    }


}
