import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {CustomValidators} from "../../class/custom-validators";

@Component({
    selector: 'app-ic',
    templateUrl: './ic.component.html',
})
export class IcComponent implements OnInit {

    public form: FormGroup;

    protected loading: boolean = false;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            ic: ['', Validators.compose([Validators.required, CustomValidators.icValidator])],
        });

        this.form.controls['ic'].valueChanges.subscribe(
            (value: string) => {
                console.log('ic changed to:', value);
            }
        );
        this.form.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to:', form);
            }
        );
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);

        this.loading = true;
    }


}
