import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OtherphotoModel } from '../shared/otherphoto-model';
import { OtherphotodataService } from '../shared/otherphotodata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Subscription } from 'rxjs/Rx';
import { Otherphotomodel1 } from '../shared/otherphotomodel1';

@Component({
  selector: 'app-addotherphoto',
  templateUrl: './addotherphoto.component.html',
  styleUrls: ['./addotherphoto.component.css']
})
export class AddotherphotoComponent implements OnInit {

private other_id:number;
private otherpic_path:string;
private fk_rest_id:number;
private rest_id:number;
private _subscription:Subscription;

  public otherphoto:OtherphotoModel[]=[];
  public rest:RestaurantModel[]=[];

  title = 'app works!';
  path='';
   public file_srcs: string[] = [];
  public debug_size_before: string[] = [];
  public debug_size_after: string[] = [];

  constructor(public _photo_data:OtherphotodataService,public _router:Router,public _acroute:ActivatedRoute,public _rest_data:RestaurantdataService,private changeDetectorRef: ChangeDetectorRef) { }

fileChange(input){
  this.readFiles(input.files);
}
readFile(file, reader, callback){
  reader.onload = () => {
    callback(reader.result);
    this.otherpic_path=reader.result;
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

    this._subscription=this._acroute.params.subscribe(

      (params:any)=>{

       this.other_id =params["other_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.rest=data;
      }
    );
    if(this.other_id!=0)
    {
      this._photo_data.getOtherphotobyid(this.other_id).subscribe(

        (data:OtherphotoModel[])=>{
          
          this.other_id=data[0].other_id,
          this.otherpic_path=data[0].otherpic_path,
          this.fk_rest_id=data[0].fk_rest_id;
          
        }
      );
    }
  }

addOtherphoto()
  {
    if(this.other_id==0)
    {
    this._photo_data.addOtherphoto(new OtherphotoModel(this.other_id,this.otherpic_path,this.fk_rest_id))
    .subscribe(
      (data:any)=>{

         console.log(data);
         this._router.navigate(['/otherphotos']);
    },
    function(error){},
    function(){
     
      alert('added');
      }
    );
  }
  
  else
  {
    //edit
    this._photo_data.updateOtherphoto(new OtherphotoModel(this.other_id,this.otherpic_path,this.fk_rest_id))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/otherphotos']); 
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
