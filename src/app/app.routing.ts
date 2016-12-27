import { Routes,RouterModule } from '@angular/router';
import { BooktableComponent } from './booktable/booktable.component';
import { AddbooktableComponent } from './booktable/addbooktable.component';


const routing:Routes=[

    {path:'',pathMatch:'full',redirectTo:'/booktables'},
    {path:'booktables', component:BooktableComponent},
     {path:'addbooktables', component:AddbooktableComponent},

    ];

export const Router=RouterModule.forRoot(routing);