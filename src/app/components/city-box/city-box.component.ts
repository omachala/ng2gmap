import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {MapSetting} from "../../class/map-setting";
import {Cities} from "../../class/cities";
import {City} from "../../class/city";

@Component({
    selector: 'app-city-box',
    templateUrl: './city-box.component.html',
    styleUrls: ['./city-box.component.css']
})
export class CityBoxComponent implements OnInit {

    @Output() onCityChange: EventEmitter<MapSetting>;

    public cityList: City[];

    constructor(cities: Cities) {
        this.onCityChange = new EventEmitter();
        this.cityList = cities.list;
    }

    ngOnInit() {
    }

    public showCity(city: MapSetting) {
        this.onCityChange.emit(city);
    }


}
