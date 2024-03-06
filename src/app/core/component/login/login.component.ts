import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = this.fb.nonNullable.group({
    email: '',
    password: '',
  })

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  submit() {
    let email = this.loginForm.get('email')!.value;
    let password = this.loginForm.get('password')!.value;
    
    this.loginService.login(email, password).subscribe({
      next: (resp) => {
        // login başarılı cevabı döndü
        this.toastr.success('Giriş işlemi başarılı');
        this.router.navigateByUrl('/menu');
      },
      error: (err) => {
        this.toastr.error('Hata oluştu');
        // formun tüm alanlarının değerleri değiştirilmek isteniyorsa setValue fonksiyonu kullanılır.
        // Tüm alanların değerleri değiştirilmeyecekse patchValue fonksiyonu kullanılır.
        this.loginForm.patchValue({ password: '' });
        console.error(err);
      }
    });
  }
}
