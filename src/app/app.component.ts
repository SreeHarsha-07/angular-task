import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1';
  user:User;
  constructor(){
    this.user ={name:'',email:'',gender:'',country:''}

  }


  onButtonClick(userform:any){
    this.user=userform.value;
    console.log(userform);

  }
}
