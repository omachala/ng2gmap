import {Component, OnInit} from "@angular/core";
import {SettingService} from "../../services/api/setting.service";
import {City} from "../../class/city";
import {MapService} from "../../services/map.service";

@Component({
    selector: 'app-city-box',
    templateUrl: './city-box.component.html',
    styleUrls: ['./city-box.component.css']
})
export class CityBoxComponent implements OnInit {


    constructor(protected settingService: SettingService, private mapService: MapService) {

    }

    ngOnInit() {
    }

    public showCity(city: City) {

        this.mapService.changeMapSetting(city.setting);

        this.settingService.cities.map((city: City) => {
            city.active = false;
        });
        city.active = true;
    }


}
