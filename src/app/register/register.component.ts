import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  file!:File;

  incomingfile(event:any) {
    this.file= event.target.files[0];
  }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  onSubmit(ref:any){
    let userObj=ref.value;
    //console.log(userObj);

    let formData = new FormData();

    //adding image and other data to ForData object
    formData.append('photo',this.file,this.file.name);
 
    formData.append("userObj",JSON.stringify(userObj))
    console.log(userObj);

    this.ds.createUser(formData).subscribe(
      res=>{
        if(res["message"]=="user existed"){
          alert("Username is already existed...choose another name")
        }
        else{
          alert("Registeration sucessfull");
          this.router.navigateByUrl("/login")
        }
      },
      err=>{
        alert("Something went wrong in user creation");
        console.log(err)
      }
    
      )
  }

  
  login(){
    this.router.navigateByUrl("/login")
  }
}

