import { TestBed } from '@angular/core/testing';
import { TemperatureService } from './temperature.service';

describe('TemperatureService', () => {
  let service: TemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('0°C = 32°F', () => {
    expect(service.convert(0, 'Celsius', 'Fahrenheit')).toBe(32);
  });

  it('32°F = 0°C', () => {
    expect(service.convert(32, 'Fahrenheit', 'Celsius')).toBe(0);
  });

  it('273.15K = 0°C', () => {
    expect(service.convert(273.15, 'Kelvin', 'Celsius')).toBe(0);
  });

  it('100°C = 212°F', () => {
    expect(service.convert(100, 'Celsius', 'Fahrenheit')).toBe(212);
  });

  it('rounds to 2 decimals', () => {
    expect(service.convert(1, 'Celsius', 'Fahrenheit')).toBe(33.8);
  });
it('0 K = 0 R (Rankine)', () => {
  expect(service.convert(0, 'Kelvin', 'Rankine')).toBe(0);
});
it('491.67 R ≈ 0 °C', () => {
  expect(service.convert(491.67, 'Rankine', 'Celsius')).toBe(0);
});
it('80 Réaumur = 100 °C', () => {
  expect(service.convert(80, 'Réaumur', 'Celsius')).toBe(100);
});
it('33 Newton = 100 °C', () => {
  expect(service.convert(33, 'Newton', 'Celsius')).toBe(100);
});
});