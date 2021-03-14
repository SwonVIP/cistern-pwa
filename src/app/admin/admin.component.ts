import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SaveConfigService } from '../services/save-config.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  configForm = new FormGroup({
    apiKey: new FormControl(''),
  });

  constructor(private saveConfigService: SaveConfigService, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    const key: string = this.saveConfigService.getExisitingKeyFromStorage();
    // Might also be empty then field will be filled with placeholder
    this.configForm.patchValue({ apiKey: key });
  }

  submitForm() {
    this.saveConfigService.saveKeyToStorage(this.configForm.get('apiKey')?.value);
    let snackBarRef = this._snackBar.open('New key was saved', 'Got it', {duration: 5000});
  }
}
