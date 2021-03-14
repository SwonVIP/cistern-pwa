import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SaveConfigService } from '../services/save-config.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  configForm = new FormGroup({
    apiKey: new FormControl(''),
  });

  constructor(private saveConfigService: SaveConfigService){}

  ngOnInit(): void {
    const key: string = this.saveConfigService.getExisitingKeyFromStorage();
    // Might also be empty then field will be filled with placeholder
    this.configForm.patchValue({ apiKey: key });
  }

  submitForm() {
    this.saveConfigService.saveKeyToStorage(this.configForm.get('apiKey')?.value);
    alert("Config Saved - reload page");
  }
}
