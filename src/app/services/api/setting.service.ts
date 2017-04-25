import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {City} from "../../class/city";

@Injectable()
export class SettingService {

    private _cities: City[];

    constructor(private _http: Http) {
        this.load().subscribe();
    }

    load(): Observable<any> {

        this.cities = [];

        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers: headers, method: 'get'});

        return this._http.get('http://localhost:8000/api/setting')
            .map((response: Response) => {
                return (<any>response.json()).cities.map(city => {
                    this.cities.push(new City(city.name, city.lat, city.lng, city.zoom));
                });
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }


    get cities(): City[] {
        return this._cities;
    }

    set cities(value: City[]) {
        this._cities = value;
    }
}
