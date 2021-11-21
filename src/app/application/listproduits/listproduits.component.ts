import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent implements OnInit {

  produits:Produit[]=[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduits();
  }

}
