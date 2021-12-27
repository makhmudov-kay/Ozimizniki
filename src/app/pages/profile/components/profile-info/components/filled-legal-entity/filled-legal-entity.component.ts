import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-filled-legal-entity',
  templateUrl: './filled-legal-entity.component.html',
  styleUrls: ['./filled-legal-entity.component.less']
})
export class FilledLegalEntityComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      region: ['', [Validators.required]],
      district: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      adres: ['', [Validators.required]],
      stir: ['', [Validators.required]],
      xisobRakami: ['', [Validators.required]]
    });
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
