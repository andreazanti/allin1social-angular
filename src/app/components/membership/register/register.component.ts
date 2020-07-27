import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(private membershipService: MembershipService) {}

  ngOnInit(): void {}

  register() {
    this.membershipService.register(this.username, this.password);
  }
}
