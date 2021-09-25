import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../services/api.services';

export interface  bookDialogData {
  hospital: any;
  name: any;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    console.log("hhhauai")
    this.getAllHospital()
  }
  
  bookHospital (hospital : any){
    const dialogRef = this.dialog.open(bedBookingDialog, {
      width: '550px',
      data: {
        hospital: hospital,
        name: "this.filters"
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllHospital()
    });
  }

  public hospitals: any = [];


  getAllHospital() {

    console.log("idhar pe aara hai")
    this.api.getAllHospital().subscribe(
      (response: any) => {
        this.hospitals = response['Hospitals'];
      }, error => {
      })

  }

 
}


@Component({
  selector: 'booking-dailog',
  templateUrl: 'bookBed.component.html',
  styleUrls: ['./table.component.css']
})
export class bedBookingDialog {

  constructor(
    public dialogRef: MatDialogRef<bedBookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: bookDialogData,
    private toastr: ToastrService, 
    public api: ApiService,) { }

    hospital : any
    ngOnInit(): void {
      console.log(this.data , "hhjshshs")
      this.hospital = this.data.hospital
    }
    BookBedObj  =  {
      "user_email": "",
      "username": "",
      "booking_type": "Bed",
      // "booking_type": "Cylinder",
      "booking_status": "Pending",
      "booking_type_id": this.data.hospital.id,
    }

  createEvent(form: NgForm) {
    const name = form.value.name;
    const website = form.value.website;
    const bed = form.value.bed;
    const body = {
      'name' : name,
      'website': website,
      'bed': bed
    };
    console.log("form -->", body)
    // bookBed
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  bookHospital(){
    console.log(this.BookBedObj ,"<----")
    console.log("book this hos[pital")
    // this.toastr.success("successfully bed book")
    // this.toastr.success("Successfully Updated ! " , "Success!");
    // this.toast.success("I'm a toast!", "Success!");
    this.bedBook()
    
    
  }

  bedBook() {
    this.api.bookBed(this.BookBedObj).subscribe(
      (response: any) => {
        console.log("response -->" , response)
        // this.hospitals = response['Hospitals'];
        this.onNoClick()
      }, error => {
      })

  }

}