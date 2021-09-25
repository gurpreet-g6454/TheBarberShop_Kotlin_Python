import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../services/api.services';
import { disableDebugTools } from '@angular/platform-browser';



export interface DialogData {
  type: string;
  hospital: any;
}

export interface warningDailogData {

  hospital: any,
  animal: any

}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(
    private router: Router,
    // protected eventService: EventService,
    public dialog: MatDialog,
    // private _scheduleservice: ScheduleService,
    public api: ApiService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    console.log("hhhauai")
    this.getAllHospital()
  }

  // public hospitals: Array ;
  public hospitals: any = [];


  getAllHospital() {

    // this.api.getAllHospital().subscribe(
    //   success => {

    this.api.getAllHospital().subscribe(
      (response: any) => {
        this.hospitals = response['Hospitals'];
        // this.hospitals = data['Hospitals'].siteList;
      }, error => {
      })

  }



  deleteHospital(hospital: any) {
    console.log(" delete hospital -->", hospital)
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '550px',
      data: { hospital: hospital }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllHospital()
      this.animal = result;
    });
  }


  name = "string"
  animal = "animal"

  addHospital(): void {
    this.openAddEditHospital('add', "blank")
  }

  editHospital(hospital: any) {
    this.openAddEditHospital('edit', hospital)
  }
  openAddEditHospital(type: any, hospital: any) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '750px',
      data: { type: type, hospital: hospital }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllHospital()
      this.animal = result;
    });
  }
  openAboutHospital(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '550px',
      data: { name: "this.hospital", animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addHospital.html',
  styleUrls: ['./table.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public api: ApiService) { }

  typeShow = true;

  hospitalShow: any;

  ngOnInit(): void {
    console.log("this.data", this.data)

    if (this.data.type == "edit") {
      this.typeShow = false;
      this.hospitalShow = this.data.hospital

    } else {
      this.typeShow = true;
    }

    // console.log()

  }

  createEvent(form: NgForm) {
    const name = form.value.name;
    const website = form.value.website;
    const bed = form.value.bed;
    const price = form.value.price;
    const body = {
      'hospital_name': name,
      'hospital_website': website,
      'hospital_bed': bed,
      'hospital_price': price
    };
    console.log("form -->", body)

    this.api.addHospital(body).subscribe(
      (response: any) => {
        console.log("yeh hospitals vala hai", response);
        this.onNoClick();
      }, error => {
      })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'detailAbout.html',
})

export class DialogContentExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: warningDailogData , 
    public api: ApiService,
    private toastr: ToastrService) { }

    
  hospitalName: any;
  hospitalId : any;
  ngOnInit(): void {
    console.log("this.data", this.data)
    let name = this.data.hospital.hospital_name;
    this.hospitalName = name

     this.hospitalId = this.data.hospital.id;

  }
  

  apply() {
    console.log("apply here")

    this.deleteHospital();
  }

  deleteHospital() {
    let sendData ={
      "id":this.hospitalId
    }

    console.log("yeh hospitals delete hai", sendData);

    // process.exit();
    this.api.deleteHospital(this.hospitalId).subscribe(
      (response: any) => {
        console.log("yeh hospitals vala hai", response);
        this.toastr.error('sucessfullt deleted');
        this.onNoClick();
      }, error => {
      })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}


