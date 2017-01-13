import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../shared/category-model';
import { CategorydataService } from '../shared/categorydata.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

allCategory:CategoryModel[]=[];
  constructor( public _category_data:CategorydataService,public _router:Router) { }

  ngOnInit() {

       this._category_data.getAllCategory().subscribe(

      (data:CategoryModel[])=>{
        this.allCategory=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }

  deleteCategory(item:CategoryModel){

  this._category_data.deleteCategory(item.cat_id).subscribe(

    (data:any)=>{
      this.allCategory.splice(this.allCategory.indexOf(item),1);
      alert('udi gayu');
    },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
      
  );

  }
  addCategory(item:CategoryModel)
  {
    this._router.navigate(['/addcategories',0]);
  }
  
 updateCategory(item:CategoryModel)
  {
       this._router.navigate(['/addcategories',item.cat_id]);
  }

}
