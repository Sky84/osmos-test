import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {

  }

  public links = [
    { label: 'Posts', route: 'list/posts' },
    { label: 'Comments', route: 'list/comments' },
    { label: 'Albums', route: 'list/albums' },
    { label: 'Photos', route: 'list/photos' },
    { label: 'Todos', route: 'list/todos' },
    { label: 'Users', route: 'list/users' },
  ];

  public isAuth() {
    return this.authService.isAuthenticationValid();
  }

}
