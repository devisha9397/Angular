import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RestaurantModel } from '../shared/restaurant-model'; 
import { CategoryModel } from '../shared/category-model';
import { CategorydataService } from '../shared/categorydata.service'; 
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
 

@Component({
  selector: 'app-addrestaurant', 
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {



private rest_id:number;
private owner_email:string;
private fk_cat_id:number;
private rest_name:string;
private rest_add:string;
private _subscription:Subscription;
private pincode:number;
private rest_number:string;
private rest_email:string;
private opening_status:string;
private flag:number;
private rest_image:string;

public restaurant:RestaurantModel[]=[];
public allCat:CategoryModel[]=[];

path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

  constructor(public _restaurant_data:RestaurantdataService,public _cat_data:CategorydataService,public _router:Router,public _acrouter:ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }



fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
    this.rest_image=reader.result;
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
        this.rest_id=params["rest_id"];
      }
    ); 

     this._cat_data.getAllCategory().subscribe(
      (data:CategoryModel[])=>{
        this.allCat=data;
      }
    );

 
  if(this.rest_id!=0) 
  {
  this._restaurant_data.getRestaurantbyid(this.rest_id).subscribe(
(data:RestaurantModel[])=>{

  this.restaurant=data;
  
  this.rest_id=this.restaurant[0].rest_id;
  this.owner_email=this.restaurant[0].owner_email;
  this.fk_cat_id=this.restaurant[0].fk_cat_id;
  this.rest_name=this.restaurant[0].rest_name;
  this.rest_add=this.restaurant[0].rest_add;
  this.pincode=this.restaurant[0].pincode;
  this.rest_number=this.restaurant[0].rest_number;
  this.rest_email=this.restaurant[0].rest_email;
  this.opening_status=this.restaurant[0].opening_status;
 this.flag=this.restaurant[0].flag;
  this.rest_image=this.restaurant[0].rest_image;

}

  );

  }
  }

   addRestaurant(){
     if(this.rest_id==0)
     {

  this._restaurant_data.addRestaurant(new RestaurantModel(this.rest_id,this.owner_email,this.fk_cat_id,this.rest_name,this.rest_add,this.pincode,this.rest_number,this.rest_email,this.opening_status,0,this.rest_image)).subscribe(
    (data:any)=>{
     alert('added');
     console.log(data);
      this._router.navigate(['/restaurants']);
    },
    function(error)
    {
      console.log(error);
    },
    function()
    {
      console.log("book add");
     
    }
  );
     } 
     else
     {

         this._restaurant_data.updateRestaurant(new RestaurantModel(this.rest_id,this.owner_email,this.fk_cat_id,this.rest_name,this.rest_add,this.pincode,this.rest_number,this.rest_email,this.opening_status,this.flag,this.rest_image))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/restaurants']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
     }
}

}
