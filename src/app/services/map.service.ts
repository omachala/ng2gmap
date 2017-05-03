import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {MapSetting} from "../class/map-setting";

@Injectable()
export class MapService {

  public mapSetting: Subject<MapSetting> = new Subject<MapSetting>();

  constructor() {
  }

  public changeMapSetting(mapSetting: MapSetting) {
    this.mapSetting.next(mapSetting);
  }




}
