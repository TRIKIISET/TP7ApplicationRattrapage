import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  lesCategories: string[] = [
    'Fourniture', 'Vêtements', 'Accessoires', 'Informatique', 'Meubles'];

    produit:Produit= new Produit(0,"",false,"Tunisie","Meubles");
  constructor(private produitService:ProduitService) { }

  onSubmit(f:NgForm){
    console.log(this.produit);
    console.log(f.value);
    console.log(f.value.reference+ " "+ f.value["lib"]);
    this.produitService.addProduit(this.produit);
    
    
  }

  ngOnInit(): void {
  }

}
