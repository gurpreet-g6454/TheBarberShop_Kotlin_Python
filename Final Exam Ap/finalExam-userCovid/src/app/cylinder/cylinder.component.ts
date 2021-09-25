import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.services';


export interface bookDialogData {
  company: any;
  name: any;
}


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cylinder',
  templateUrl: './cylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllCompanies()
  }

  companies: any

  name = "string"
  animal = "animal"

  getAllCompanies() {
    this.api.getCylinder().subscribe(
      (response: any) => {
        this.companies = response['Companys'];
      }, error => {
      })
  }

  openCylinderBooking(): void {
    const dialogRef = this.dialog.open(cylinderBookingDialog, {
      width: '750px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  bookCylinder(company: any) {
    console.log("company -->" , company)
    const dialogRef = this.dialog.open(CylinderBookingDialog, {
      width: '550px',
      data: {
        company: company,
        name: "this.filters"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCompanies()
    });
  }

}

@Component({
  selector: 'booking-dailog',
  templateUrl: 'bookCylinder.component.html',
  styleUrls: ['./cylinder.component.css']
})
export class CylinderBookingDialog {

  constructor(
    public dialogRef: MatDialogRef<CylinderBookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: bookDialogData,
    private toastr: ToastrService, 
    public api: ApiService,) { }

    company : any
    ngOnInit(): void {
      console.log(this.data , "hhjshshs")
      this.company = this.data.company
    }
    BookCylinderObj  =  {
      "user_email": "",
      "username": "",
      "booking_type": "Cylinder",
      "booking_status": "Pending",
      "booking_type_id": this.data.company.id,
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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  bookHospital(){
    console.log(this.BookCylinderObj ,"<----")
    this.bedBook()
  }

  bedBook() {
    this.api.bookBed(this.BookCylinderObj).subscribe(
      (response: any) => {
        console.log("response -->" , response)
        // this.hospitals = response['Hospitals'];
        this.onNoClick()
      }, error => {
      })

  }

}

@Component({
  selector: 'cylinder-booking-dailog',
  templateUrl: 'cylinderBooking.html',
  styleUrls: ['./cylinder.component.css']
})
export class cylinderBookingDialog {

  constructor(
    public dialogRef: MatDialogRef<cylinderBookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  createEvent(form: NgForm) {


    const name = form.value.name;
    const website = form.value.website;
    const bed = form.value.bed;
    const body = {
      'name': name,
      'website': website,
      'bed': bed
    };
    console.log("form -->", body)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
