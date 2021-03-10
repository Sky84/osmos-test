import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public links = [
    { label: 'Posts', route: 'list/posts' },
    { label: 'Comments', route: 'list/comments' },
    { label: 'Albums', route: 'list/albums' },
    { label: 'Photos', route: 'list/photos' },
    { label: 'Todos', route: 'list/todos' },
    { label: 'Users', route: 'list/users' },
  ];

}
