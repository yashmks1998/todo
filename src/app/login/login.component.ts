import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username='yash';
password='';
errorMessage='Invalid Credentials'
invalidLogin=false;
  constructor(private router:Router,private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
handleLogin(){
  // console.log(this.username);
  // console.log(this.password);
// if (this.username==='yash'&&this.password==='yash'){
  if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
  this.router.navigate(['welcome',this.username])
  this.invalidLogin=false;
}
else{
  this.invalidLogin=true;
}

}

}
