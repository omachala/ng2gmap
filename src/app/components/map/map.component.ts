import {Component, OnInit, Input} from "@angular/core";
import {MapSetting} from "../../class/map-setting";
import {MapService} from "../../services/map.service";

@Component({
    selector: 'app-map',
    template: `<sebm-google-map
                    [latitude]="mapSetting.mapCenterLat"
                    [longitude]="mapSetting.mapCenterLng"
                    [zoom]="mapSetting.zoom"
                    [zoomControl]="mapSetting.zoomControl">
                    
                    <sebm-google-map-marker [latitude]="50.0595849" [longitude]="14.3252" [label]="''" [iconUrl] = "'https://cdn0.iconfinder.com/data/icons/back-to-school/90/school-learn-study-bag-work-job_2-32.png'">
       <sebm-google-map-info-window [disableAutoPan]="true">
         Hi, this is the content of the <strong>info window</strong>
       </sebm-google-map-info-window>
     </sebm-google-map-marker>
     
                </sebm-google-map>`,
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
    @Input() mapSetting: MapSetting;

    constructor(private mapService: MapService) {

    }


    ngOnInit() {
        this.mapService.mapSetting.subscribe((mapSetting: MapSetting) => this.mapSetting = mapSetting);
    }

}
