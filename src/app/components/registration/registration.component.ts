import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RepoUsers } from '../../services/repo.service';
import { UserRegisterDto } from '../../models/user.model';

@Component({
  selector: 'isdi-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="submit()">
      <input type="text" formControlName="name" placeholder="Name" required />
      <input
        type="email"
        formControlName="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        formControlName="password"
        placeholder="Password"
        required
      />
      <button type="submit" [disabled]="registerForm.invalid">Register</button>
    </form>
  `,
  styles: ``,
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private repoUsers: RepoUsers) {}

  submit() {
    if (this.registerForm.valid) {
      const formValue: UserRegisterDto = {
        name: this.registerForm.value.name ?? '',
        email: this.registerForm.value.email ?? '',
        password: this.registerForm.value.password ?? '',
      };
      this.repoUsers.register(formValue).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error('Registration failed', err);
        },
      });
    }
  }
}
