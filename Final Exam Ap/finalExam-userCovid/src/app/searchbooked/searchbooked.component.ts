import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-searchbooked',
  templateUrl: './searchbooked.component.html',
  styleUrls: ['./searchbooked.component.css']
})
export class SearchbookedComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  isShow : boolean = false
  
  searchUser : any = ''

  hospitals : any
  searchBooking() {

    console.log("idhar pe aara hai" ,this.searchUser)
    this.api.searchBooking(this.searchUser).subscribe(
      (response: any) => {
        console.log("responmnse" , response)
        // if()
        this.hospitals = response['Bookings'];
        if(this.hospitals.length != 0){
          // console
          this.isShow = true;
        }
      }, error => {
      })

  }
}
