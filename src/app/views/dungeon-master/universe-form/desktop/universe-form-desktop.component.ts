import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { FloatLabel } from 'primeng/floatlabel';
import { DividerModule } from 'primeng/divider';

@Component({
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, MessageModule, FloatLabel, DividerModule],
  templateUrl: './universe-form-desktop.component.html',
  styleUrl: './universe-form-desktop.component.scss',
})
export default class UniverseFormDesktopComponent {
    formCadastro: FormGroup;
    formSubmitted = false;
    constructor(private fb: FormBuilder) {
        this.formCadastro = this.fb.group({
            username: ['TESTE', Validators.required],
            email: ['TESTES', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.formCadastro.valid) {
            this.formCadastro.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.formCadastro.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
}
