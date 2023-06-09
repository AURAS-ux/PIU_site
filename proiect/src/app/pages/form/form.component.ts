import { Component , Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name!: string;
  descriere!: string;
  quantity!: number;
  form!: FormGroup;
  
  constructor(public dialogRef:MatDialogRef<FormComponent>,
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

 async add_buttonClick(){
  console.log(`Add method called!\nData to be added: ${this.name} ${this.descriere} ${this.quantity}`);
 }
 async cancel_buttonClick(){
  this.dialogRef.close();
 }

}
