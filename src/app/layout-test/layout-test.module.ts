import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LayoutTestRoutingModule } from './layout-test-routing.module';
import { LayoutTestComponent } from './layout-test.component';

@NgModule({
  declarations: [
    LayoutTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutTestRoutingModule
  ]
})
export class LayoutTestModule { }
