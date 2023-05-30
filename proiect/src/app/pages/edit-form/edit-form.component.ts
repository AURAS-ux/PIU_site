import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  
  name!: string;
  descriere!: string;
  quantity!: number;
  form!: FormGroup;
  item!: Item;
  
  constructor(public dialogRef:MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string[],private formBuilder:FormBuilder){}
  
ngOnInit(): void {
  this.createForm();
}

private createForm():void{
  this.form = this.formBuilder.group({
    name: [null],
    descriere: [null],
    cantitate: [null]
  });

}

 onNoClick():void{
  this.dialogRef.close();
 }
  
 async cancel_buttonClick(){
  this.dialogRef.close();
 }

 async update_buttonClick(item:Item){

 }

}
