import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  startDatePlaceholder = '';
  endDatePlaceholder = '';

  form = new FormGroup({
    startDate: new FormControl(),
    startHour: new FormControl(),
    endDate: new FormControl(),
    endHour: new FormControl()
  });


  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      startDate: '',
      startHour: '',
      endDate: '',
      endHour: '',
    });
  }


  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  refreshPlaceholder(field: String) {
    if (field === 'startDate') {
      this.startDatePlaceholder = '';
    } else if (field === 'endDate') {
      this.endDatePlaceholder = '';
    }
  }

  setValueField(field: any, value: { value: { getMonth: () => number; getDate: () => any; getFullYear: () => string; }; }) {
    if (field === 'startDate' || field === 'endDate') {
      const month = value.value.getMonth() + 1;
      const day = value.value.getDate();

      this.form.controls[field].setValue(value.value.getFullYear() + '-' +
        (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day));
      this.refreshPlaceholder(field);

    } else {
      
      this.form.controls[field].setValue(value);
    }
    console.log('el formulario', this.form.controls);

  }

}