import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items:Item[] = [
    {id:190,name:"Item 1",description:"La fel",quantity:100},
    {id:191,name:"Item 2",description:"La fel",quantity:200},
    {id:193,name:"Item 3",description:"La fel",quantity:140},
    {id:194,name:"Item 4",description:"La fel",quantity:190}
  ];

  error?:string;
  itemList!:Item[];
  constructor(public dialog: MatDialog, public itemService:ItemService) {}

  getItems():void{
    this.itemService.getItems().subscribe((list:Item[])=>{
      this.itemList = list;
    },(err) =>{
      this.error = err.error;
    })
  }

  async openDialog(){
    const dialogRef = this.dialog.open(FormComponent,{
      width: '300px',
      data: {items:this.items},
    });

    dialogRef.afterClosed().subscribe(()=>{
      console.log("This log was closed");
    });
  };

  async delete_buttonClick(item:Item){
    console.log(`Delete button called for item: ${item.name}`);
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  async openEditDialog(){
    const dialogRef = this.dialog.open(EditFormComponent,{
      width: '100px',
      data: {items:this.items},
    });

    dialogRef.afterClosed().subscribe(()=>{
      console.log("This log was closed");
    });
  }
  ngOnInit():void{
    //this.getItems();
  }

}
