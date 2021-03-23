import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppModule } from 'src/app/app.module';
import { AdminRoutingModule } from '../admin-routing.module';
import { AdminModule } from '../admin.module';
import { ApiKeyConfigComponent } from './apiKeyConfig.component';

describe('ApiKeyConfigComponent', () => {
  let component: ApiKeyConfigComponent;
  let fixture: ComponentFixture<ApiKeyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeyConfigComponent ],
      // Added Module imports due to test failures
      // TODO revisit when wiritng Unit tests
      imports: [
        AppModule,
        AdminModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
