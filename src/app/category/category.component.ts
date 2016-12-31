import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../shared/category-model';
import { CategoryModel1 } from '../shared/category-model1';
import { CategorydataService } from '../shared/categorydata.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

allCategory:CategoryModel1[]=[];
  constructor(public _category_data:CategorydataService,public _router:Router) { }

  ngOnInit() {

       this._category_data.getCategoryjoin().subscribe(

      (data:CategoryModel1[])=>{
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

  deleteCategory(item:CategoryModel1){

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
  addCategory(item:CategoryModel1)
  {
    this._router.navigate(['/addcategories',0]);
  }


}
