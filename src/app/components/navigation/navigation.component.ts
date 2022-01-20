import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
public affich:number
  constructor() { 
    this.affich=0

  }

  ngOnInit(): void {
    this.cacherLogin()
  }
 
 cacherLogin(){

   $(".generality").hide();
  this.affich=0;
 }

 afficherLogin(){
  $(".generality").show();
  this.affich=1
 } 

 public general(){
 
  if(this.affich==0){
    this.afficherLogin();
  }
  else{
   this.cacherLogin()
  }
 }


 

}
