import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-produit-form',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './produit-form.component.html',
  styleUrl: './produit-form.component.css'
})
export class ProduitFormComponent {

  productForm:FormGroup;
  constructor(readonly fp:FormBuilder){

    this.productForm =this.fp.group({
      name:["",Validators.required],
      category:["",Validators.required],
      price:[null,Validators.required],
      Quantity:[0,Validators.required],
      desc:[""]
    })
  }

  get f():Record<string, AbstractControl>{
    return this.productForm.controls
  }
  get isprumuim():boolean{
    return this.productForm.get("price")?.value>1000
  }
  onsubmit():void{
    if(this.productForm.valid){
      console.log("product cree",this.productForm.value)}
     console.warn("errrror")
  }
  onreset():void{
    this.productForm.reset({quantity:0})
  }
}
