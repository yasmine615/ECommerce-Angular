import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css','../../../styles.css']
})
export class AjouterproduitComponent {

  public produits: Produit[] = [];
constructor(private fb : FormBuilder  ,  private sharedService:SharedService ,private produitService:ProduitService , private router : Router) {}

ngOnInit() {
  this.getProduits();
}

public getProduits(): void {
  this.produitService.getProduits().subscribe(
    (response: Produit[]) => {
      this.produits = response;
      console.log(this.produits);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}


public onAddProduit(addForm: NgForm): void {
  if (addForm.valid) {
    const produit: Produit = addForm.value;
    const userPhone = this.sharedService.getTel();
    addForm.value.phoneuser=userPhone;
    this.produitService.addProduit(addForm.value).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getProduits();
        this.router.navigate(['/homeuser']);
        this.showConfirmationMessage('Produit ajouté avec succès !');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
private showConfirmationMessage(message: string): void {
  alert(message);
}

}
