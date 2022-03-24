import { Component, OnInit, HostListener } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs';
// import { state } from '@angular/animations';



@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @HostListener('window.resize', ['$event'])
  onResize() {
    // console.log('eti');

    this.wiw = window.outerWidth
    console.log('wiw', this.wiw)
    this.cols = (window.innerWidth < 500) ? 1 : 2;
  }
  @HostListener('click')
  onClick() {
    console.log('click')
  }

  opened: boolean = true;
  cols:number = 1;
  wiw: number
    constructor(){

      this.wiw = window.outerWidth
    }
  // constructor(private breakpointObserver: BreakpointObserver) {
  //   this.isHl$ = this.breakpointObserver.observe(Breakpoints.HandsetLandscape)
  //   .pipe(
  //       map(state =>  state.matches),
  //       shareReplay()
  //     )
  // }

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   )

   ngOnInit(): void {
    console.log('win', window.innerWidth)
    this.cols = (window.innerWidth <= 500) ? 1 : 2;
  }

}
