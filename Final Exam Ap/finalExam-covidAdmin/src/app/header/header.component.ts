import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  


//   ngOnInit() {
//     const user = this.localStorageService.get('user-data');

//     this.router.events.subscribe((event) => {
//     //  if (user !== null) {
//     //     this.HeaderOne = false;
//     //     this.HeaderTwo = true;
//     //   } else {
      
//         // if (this.router.url === '/') {
//         //   this.home = true;
//         //   this.HeaderOne = false;
//         //   this.HeaderTwo = false;
//         // }else
//          if (
//           this.router.url === '/user/login' || // login , signup-personal
//           this.router.url === '/user/signup-personal' ||
//           this.router.url === '/user/verify_account' ||
//           this.router.url === '/user/forgot' ||
//           this.router.url === '/') {
//           this.home = false;
//           this.HeaderOne = false;
//           this.HeaderTwo = false;
//         }
//         else if (
//           this.router.url === '/user/login' || // login , signup-personal
//           this.router.url === '/user/signup-personal' ||
//           this.router.url === '/user/verify_account' ||
//           this.router.url === '/store' ||
//           this.router.url === '/blog' ||
//           this.router.url === '/policy' ||
//           this.router.url === '/about'  ) {
//           this.home = false;
//           this.HeaderOne = true;
//           this.HeaderTwo = false;
//         }
//         else {
//           this.HeaderOne = false;
//          this.HeaderTwo = true;
//         }
//   });

// }

}
