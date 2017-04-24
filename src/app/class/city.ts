import {MapSetting} from "./map-setting";

export class City {

    name: string;
    setting: MapSetting;


    constructor(name: string, lat: number, lng: number, zoom: number) {
        this.name = name;

        let citySetting = new MapSetting();
        citySetting.mapCenterLat = lat;
        citySetting.mapCenterLng = lng;
        citySetting.zoom = zoom;

        this.setting = citySetting;
    }
}
