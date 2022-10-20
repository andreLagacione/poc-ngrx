import { Component, OnInit } from '@angular/core';
import { login } from './actions/login-page.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    store.dispatch(login({ username, password }));
  }

}
