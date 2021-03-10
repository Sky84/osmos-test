import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getListType(type: string): Promise<any[]> {
    return fetch('https://jsonplaceholder.typicode.com/' + type).then(response => response.json());
  }
}
