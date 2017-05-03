import {FormControl} from "@angular/forms";

export class CustomValidators {


    static icValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^123/)) {
            return {invalidIc: true};
        }
    }


}
