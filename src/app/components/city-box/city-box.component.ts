import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {MapSetting} from "../../class/map-setting";
import {SettingService} from "../../services/api/setting.service";
import {City} from "../../class/city";

@Component({
    selector: 'app-city-box',
    templateUrl: './city-box.component.html',
    styleUrls: ['./city-box.component.css']
})
export class CityBoxComponent implements OnInit {

    @Output() onCityChange: EventEmitter<MapSetting>;

    constructor(protected settingService: SettingService) {
        this.onCityChange = new EventEmitter();
    }

    ngOnInit() {
    }

    public showCity(city: City) {
        this.onCityChange.emit(city.setting);
        this.settingService.cities.map((city: City) => {
            city.active = false;
        });
        city.active = true;
    }


}
