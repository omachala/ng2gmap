import {City} from "./city";
import {Injectable} from "@angular/core";

@Injectable()
export class Cities {

    public list = [
        new City('Praha', 50.075468, 14.436401, 13),
        new City('Brno', 49.194943, 16.609702, 13),
        new City('Ostrava', 49.820027, 18.251793, 12)
    ];


}
