import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup
  thirdFormGroup!: FormGroup

  products: Observable<Product[]>
  selectedProducts: Product[] = []

  constructor(private _formBuilder: FormBuilder, private productService: ProductService) {
    this.products = productService.getAllProducts()
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
  }

  selectionChanged(product: Product, event: any){
    if(event) {
      this.selectedProducts.push(product)
    } else {
      this.selectedProducts = this.selectedProducts.filter(function(value, index, arr){
        return value.id! > product.id!;
      })
    }
  }

}
