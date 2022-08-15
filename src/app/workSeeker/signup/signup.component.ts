import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  visible:boolean = true;
  PassVisible:boolean = true;
  changeType:boolean = true;
  changeConfType:boolean = true;

  viewPass(){
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }

  viewConfPass(){
    this.PassVisible = !this.PassVisible;
    this.changeConfType = !this.changeConfType;
  }

  onSubmit(data:any){
    console.log("data",data);
  }

}
