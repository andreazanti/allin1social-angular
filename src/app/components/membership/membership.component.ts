import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  // @ViewChild(MembershipDirective, { static: true })
  // adHost: MembershipDirective;
  isLogin: Boolean = true;

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  //Choose login form or register form by click
  getLogin() {
    this.isLogin = true;
  }
  getRegister() {
    this.isLogin = false;
  }
  ngOnInit(): void {}
}
