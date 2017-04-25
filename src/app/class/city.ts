import {MapSetting} from "./map-setting";

export class City {

    name: string;
    setting: MapSetting;
    private _active: boolean = false;


    constructor(name: string, lat: number, lng: number, zoom: number) {
        this.name = name;

        let citySetting = new MapSetting();
        citySetting.mapCenterLat = lat;
        citySetting.mapCenterLng = lng;
        citySetting.zoom = zoom;

        this.setting = citySetting;
    }


    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }
}
