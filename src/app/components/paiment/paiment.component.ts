import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service'; // Assurez-vous d'importer correctement votre service Produit
import { Produit } from 'src/app/interfaces/produit';
@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.css']
})
export class PaimentComponent {
  productId!: number;
  produit!: Produit;


  constructor(private route: ActivatedRoute, private router: Router,private produitService: ProduitService) { }

  ngOnInit(): void {
    // Récupérer l'ID du produit à partir de l'URL
    this.route.params.subscribe(params => {
      this.productId = +params['productId'];
    });
    // Utilisez le service Produit pour récupérer les détails du produit
    this.produitService.getProduitById(this.productId).subscribe(
      (produit: Produit) => {
        this.produit = produit;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  submitPayment() {
    // Effectuez vos opérations de paiement ici
    console.log('Payment submitted successfully');
    this.produit.sponso = 'ajout';

    // Mettez à jour l'attribut 'sponso' lorsque le formulaire de paiement est soumis
    this.produitService.updateProduit(this.produit).subscribe(
      () => {
        console.log('Product added successfully');
        // Après le paiement et la mise à jour du produit, vous pouvez maintenant effectuer le boost
        this.boostProduct();
      },
      (error) => {
        console.error('Error updating product:', error);
        alert(error.message);
      }
    );
  }

  boostProduct() {
    // Implémentez la logique pour booster le produit avec this.produit
    console.log('Product boosted successfully'); // Exemple de log, remplacez par votre logique réelle

    // Après le boost, vous pouvez rediriger l'utilisateur vers la page d'annonce ou une autre page si nécessaire
    this.router.navigate(['/annonce']);
  }
}
