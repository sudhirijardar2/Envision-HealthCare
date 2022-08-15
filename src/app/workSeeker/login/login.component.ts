import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WorkSeekerService } from 'src/app/work-seeker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder , private workers:WorkSeekerService) { }



  ngOnInit(): void {
  }

  visible: boolean = true;
  changeType: boolean = true;

  viewPass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }


  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  onSubmit() {
    this.workers.postdata(this.checkoutForm.value).subscribe((result)=>{
      console.log("result",result);
    })
    this.checkoutForm.reset();  
  }

}
