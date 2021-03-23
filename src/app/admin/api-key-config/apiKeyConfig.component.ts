import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveConfigService } from 'src/app/services/save-config.service';


@Component({
  selector: 'app-api-key-config',
  templateUrl: './apiKeyConfig.component.html',
  styleUrls: ['./apiKeyConfig.component.scss']
})
export class ApiKeyConfigComponent implements OnInit {
  configForm = new FormGroup({
    apiKey: new FormControl(''),
  });

  public dummyKey: boolean = false;

  constructor(private saveConfigService: SaveConfigService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    const key: string = this.saveConfigService.getExisitingKeyFromStorage();
    this.configForm.patchValue({ apiKey: key });
    this.dummyKey = this.saveConfigService.isDummyKey();
  }

  submitForm() {
    this.saveConfigService.saveKeyToStorage(this.configForm.get('apiKey')?.value);
    this._snackBar.open('New key was saved', 'Got it', {duration: 5000});
    this.dummyKey = this.saveConfigService.isDummyKey();
  }
}
