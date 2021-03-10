import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public login = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignIn(): void {
    if (this.login.valid && this.password.valid) {
      this.router.navigate(['lists']);
    }
  }
}
