import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef
  @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingredientName = this.nameInputRef.nativeElement.value
    const ingredientAmount = this.amountInputRef.nativeElement.value
    const ingredient = new Ingredient(ingredientName, ingredientAmount)
    this.ingredientAdded.emit(ingredient)
  }

}
