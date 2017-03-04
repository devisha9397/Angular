import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserdataService } from '../shared/userdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'; 
 
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']

}) 
export class AdduserComponent implements OnInit {

    path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

private user_email:string;
private user_name:string;
private password:string;
private address:string;
private mobile_no:string;
private gender:string;
private _subscription:Subscription;
private city:string;
private pro_pic:string;
private DOB:string;
private type:string;

 public user:UserModel[]=[];

constructor(public _user_data:UserdataService,public _router:Router,public _acrouter:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }

fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
    this.pro_pic=reader.result;
    console.log(reader.result);
  }

  reader.readAsDataURL(file);
}
readFiles(files, index=0){
  // Create the file reader
  let reader = new FileReader();
  
  // If there is a file
  if(index in files){
    // Start reading this file
    this.readFile(files[index], reader, (result) =>{
      // Create an img element and add the image file data to it
      var img = document.createElement("img");
      img.src = result;
  
      // Send this img to the resize function (and wait for callback)
      this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
        // For debugging (size in bytes before and after)
        this.debug_size_before.push(before);
        this.debug_size_after.push(after);
  
        // Add the resized jpeg img source to a list for preview
        // This is also the file you want to upload. (either as a
        // base64 string or img.src = resized_jpeg if you prefer a file). 
        this.file_srcs.push(resized_jpeg);
  
        // Read the next file;
        this.readFiles(files, index+1);
      });
    });
  }else{
    // When all files are done This forces a change detection
    this.changeDetectorRef.detectChanges();
  }
}
resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
  // This will wait until the img is loaded before calling this function
  return img.onload = () => {

    // Get the images current width and height
    var width = img.width;
    var height = img.height;

    // Set the WxH to fit the Max values (but maintain proportions)
    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }

    // create a canvas object
    var canvas = document.createElement("canvas");

    // Set the canvas to the new calculated dimensions
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");  

    ctx.drawImage(img, 0, 0,  width, height); 

    // Get this encoded as a jpeg
    // IMPORTANT: 'jpeg' NOT 'jpg'
    var dataUrl = canvas.toDataURL('image/jpeg');

    // callback with the results
    callback(dataUrl, img.src.length, dataUrl.length);
  };
}

  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.user_email=params["user_email"];
      }
    );

  if(this.user_email!='0'){

    this._user_data.getUserbyid(this.user_email).subscribe(
(data:UserModel[])=>{

  this.user=data; 
   
  this.user_email=this.user[0].user_email;
  this.user_name=this.user[0].user_name;
   this.password=this.user[0].password;
  this.address=this.user[0].address;
  this.mobile_no=this.user[0].mobile_no;
  this.gender=this.user[0].gender;
  this.city=this.user[0].city;
  this.pro_pic=this.user[0].pro_pic;
  this.DOB=this.user[0].DOB;
  this.type=this.user[0].type;
  

}

  );

  } 
  }

  addUser(){
   // if(this.user_email=='0') 
    
this._user_data.addUser(new UserModel(this.user_email,this.user_name,this.password,this.address,this.mobile_no,this.gender,this.city,this.pro_pic,this.DOB,"user")).subscribe(
    (data:any)=>{
    alert('added');
    
      this._router.navigate(['/users']);
    },
    function(error)
    {
      console.log(error);
    },
    function()
    {
      console.log("user added");
    }
  );
 
/*else
{
  //edit 

  this._user_data.updateUser(new UserModel(this.user_email,this.user_name,this.password,this.address,this.mobile_no,this.gender,this.city,this.pro_pic,this.DOB,this.type))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/users']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
  }*/
  }

}
