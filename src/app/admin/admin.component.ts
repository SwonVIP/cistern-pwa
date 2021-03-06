import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  configForm = new FormGroup({
    apiKey: new FormControl(''),
  });

  ngOnInit(): void {
    if (localStorage.getItem('key')) {
      this.configForm.patchValue({ apiKey: localStorage.getItem('key') });
    }
  }

  submitForm() {
    localStorage.setItem("key", this.configForm.get('apiKey')?.value);
    console.log(this.configForm.get('apiKey')?.value);
    alert("Config Saved - reload page");
  }
}
