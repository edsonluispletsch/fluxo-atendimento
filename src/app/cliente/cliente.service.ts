import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) {}

  getClientes() {
    return this.http.get('https://treinamento-505d8.firebaseio.com/lista.json');
  }
}
