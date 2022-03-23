import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '', component: ShellComponent},
  { path: 'layout-test', loadChildren: () => import('./layout-test/layout-test.module').then(m => m.LayoutTestModule) },
  { path: 'test', loadChildren: () => import('./shared/test/test.module').then(m => m.TestModule) }
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
