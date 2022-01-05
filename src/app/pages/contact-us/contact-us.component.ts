import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  validateForm!: FormGroup;


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      number: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log('submit', this.validateForm.value);
    console.log('submit', this.validateForm.controls);
  }

  Error() {
    /*if (this.validateForm.controls.password.errors) {
        if (this.validateForm.controls.text.errors.required) {
          return "required";
        }else if (this.validateForm.controls.text.errors.minlength) {
          return "minLength";
        } else {
          return ""
      }
    } else {*/
    /*for (let key in this.validateForm.controls) {
      if (this.validateForm.controls[key].errors) {
        if (this.validateForm.controls[key].errors.required) {
          return "Поле обязательно для заполнения!"
        }
      } else {
        return '';
      }

    }

  }
*/
    return '';
  }
}
