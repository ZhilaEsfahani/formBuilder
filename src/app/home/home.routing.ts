import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormInfoComponent } from './form-info/form-info.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path :'',
                component: FormInfoComponent,
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class HomeRoutingModule {}
  