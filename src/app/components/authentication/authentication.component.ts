import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  public login = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private authService: AuthService) { }

  onSignIn(): void {
    if (this.login.valid && this.password.valid) {
      this.authService.signInUser(this.login.value, this.password.value).then(() => {
        this.router.navigate(['list/posts'])
      });
    }
  }
}
