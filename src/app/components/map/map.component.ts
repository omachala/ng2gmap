import {Component, OnInit, Input} from "@angular/core";
import {MapSetting} from "../../class/map-setting";

@Component({
    selector: 'app-map',
    template: `<sebm-google-map
                    [latitude]="mapSetting.mapCenterLat"
                    [longitude]="mapSetting.mapCenterLng"
                    [zoom]="mapSetting.zoom"
                    [zoomControl]="mapSetting.zoomControl">
                </sebm-google-map>`,
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    @Input() mapSetting: MapSetting;

    constructor() {

    }


    ngOnInit() {
    }

}
