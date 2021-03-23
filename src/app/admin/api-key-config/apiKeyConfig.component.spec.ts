import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiKeyConfigComponent } from './apiKeyConfig.component';

describe('ApiKeyConfigComponent', () => {
  let component: ApiKeyConfigComponent;
  let fixture: ComponentFixture<ApiKeyConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeyConfigComponent ]
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
