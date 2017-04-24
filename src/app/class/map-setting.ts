export class MapSetting {

    private _mapCenterLat: number;
    private _mapCenterLng: number;
    private _zoom: number = 8;
    private _zoomControl: boolean = true;


    get zoomControl(): boolean {
        return this._zoomControl;
    }

    set zoomControl(value: boolean) {
        this._zoomControl = value;
    }

    get mapCenterLat(): number {
        return this._mapCenterLat;
    }

    set mapCenterLat(value: number) {
        this._mapCenterLat = value;
    }

    get mapCenterLng(): number {
        return this._mapCenterLng;
    }

    set mapCenterLng(value: number) {
        this._mapCenterLng = value;
    }

    get zoom(): number {
        return this._zoom;
    }

    set zoom(value: number) {
        this._zoom = value;
    }


}
