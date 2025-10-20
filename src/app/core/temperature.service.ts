import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  readonly units = ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine', 'Réaumur', 'Newton'];

  convert(value: number, from: string, to: string): number {
    if (from === to) return Math.round(value * 100) / 100;
    const k = this.toKelvin(value, from);
    const result = this.fromKelvin(k, to);
    return Math.round(result * 100) / 100;
  }

  private toKelvin(value: number, from: string): number {
    switch (from) {
      case 'Celsius': return value + 273.15;
      case 'Fahrenheit': return (value - 32) * (5 / 9) + 273.15;
      case 'Kelvin': return value;
      case 'Rankine': return value * (5 / 9);                   // K = R × 5/9
      case 'Réaumur': return (value * 1.25) + 273.15;           // C = Re × 1.25
      case 'Newton': return (value * (100 / 33)) + 273.15;      // C = N × 100/33
      default: throw new Error(`Unidad no soportada (from): ${from}`);
    }
  }

  private fromKelvin(value: number, to: string): number {
    switch (to) {
      case 'Celsius': return value - 273.15;
      case 'Fahrenheit': return (value - 273.15) * (9 / 5) + 32;
      case 'Kelvin': return value;
      case 'Rankine': return value * (9 / 5);                   // R = K × 9/5
      case 'Réaumur': return (value - 273.15) * 0.8;            // Re = C × 0.8
      case 'Newton': return (value - 273.15) * (33 / 100);      // N = C × 33/100
      default: throw new Error(`Unidad no soportada (to): ${to}`);
    }
  }
}