import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TemperatureService } from '../../core/temperature.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  form: FormGroup;
  result: { input: number; from: string; output: number; to: string } | null = null;

  get units(): string[] {
    return this.tempService.units;
  }

  constructor(private fb: FormBuilder, private tempService: TemperatureService) {
    this.form = this.fb.group({
      value: [null, [Validators.required, Validators.pattern(/^[-+]?\d*(?:[.,]\d+)?$/)]],
      from: [null, Validators.required],
      to: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const raw = String(this.form.value.value ?? '');
    const value = parseFloat(raw.replace(',', '.'));
    const from = this.form.value.from;
    const to = this.form.value.to;
    const output = this.tempService.convert(value, from, to);
    this.result = { input: value, from, output, to };
  }
}