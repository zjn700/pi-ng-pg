import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTestComponent } from './layout-test.component';

const routes: Routes = [{ path: '', component: LayoutTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutTestRoutingModule { }
