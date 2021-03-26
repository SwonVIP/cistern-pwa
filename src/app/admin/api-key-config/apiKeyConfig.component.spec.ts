import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveConfigService } from 'src/app/services/save-config.service';
import { ApiKeyConfigComponent } from './apiKeyConfig.component';

describe('ApiKeyConfigComponent', () => {
  let component: ApiKeyConfigComponent;
  let fixture: ComponentFixture<ApiKeyConfigComponent>;
  let saveConfigServiceMock: any;

  beforeEach(waitForAsync(() => {
    saveConfigServiceMock = jasmine.createSpyObj(SaveConfigService,['getExisitingKeyFromStorage', 'saveKeyToStorage', 'isDummyKey']);
    saveConfigServiceMock.getExisitingKeyFromStorage.and.returnValue("real key");
    saveConfigServiceMock.isDummyKey.and.returnValue(true);
    saveConfigServiceMock.saveKeyToStorage.and.returnValue();
    TestBed.configureTestingModule({
      declarations: [ ApiKeyConfigComponent ],
      providers: [{
        provide: SaveConfigService, useValue: saveConfigServiceMock
      }],
      imports: [ReactiveFormsModule, MatSnackBarModule, BrowserAnimationsModule],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send form data tto save config service',() => {
    component.submitForm();
    expect(saveConfigServiceMock.saveKeyToStorage).toHaveBeenCalledTimes(1);
  });

  it('should display configured key',() => {
    saveConfigServiceMock.isDummyKey.and.returnValue(false);
    expect(component.configForm.get('apiKey')?.value).toBe("real key");
    expect(saveConfigServiceMock.isDummyKey).toHaveBeenCalledTimes(1);
    expect(saveConfigServiceMock.getExisitingKeyFromStorage).toHaveBeenCalledTimes(1);
  });

  it('should display dummy key',() => {
    expect(component.dummyKey).toBe(true);
    expect(saveConfigServiceMock.isDummyKey).toHaveBeenCalledTimes(1);
    expect(saveConfigServiceMock.getExisitingKeyFromStorage).toHaveBeenCalledTimes(1);
  });
});
