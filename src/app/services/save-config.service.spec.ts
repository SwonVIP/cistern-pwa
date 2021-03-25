import { TestBed } from '@angular/core/testing';

import { SaveConfigService } from './save-config.service';

describe('SaveConfigService', () => {
  let service: SaveConfigService;

  beforeEach(() => {
    localStorage.removeItem("key");
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(SaveConfigService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should write data to localStorage', () => {
    service.saveKeyToStorage("real key");
  });

  it('should get data from localStorage', () => {
    service.saveKeyToStorage("real key");
    let result = service.getExisitingKeyFromStorage()
    expect(result).toBe("real key");
  });

  it('should get dummy data key from localStorage', () => {
    let result = service.getExisitingKeyFromStorage()
    expect(result).toBe("CC:50:E3:3B:F5:8B");
  });

  it('should return dummy key true', () => {
    service.saveKeyToStorage("CC:50:E3:3B:F5:8B");
    let result = service.isDummyKey();
    expect(result).toBeTrue
  })

  it('should return dummy key false', () => {
    service.saveKeyToStorage("real key");
    let result = service.isDummyKey();
    expect(result).toBeFalse
  })
});
