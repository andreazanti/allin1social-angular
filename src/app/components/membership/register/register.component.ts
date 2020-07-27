import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() onLoginClick: EventEmitter<any> = new EventEmitter<any>();
  username: string;
  password: string;

  constructor(private membershipService: MembershipService) {}

  ngOnInit(): void {}
  isLogin() {
    this.onLoginClick.emit(true);
  }
  register() {
    this.membershipService.register(this.username, this.password);
  }
}
