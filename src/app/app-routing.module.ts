import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeconnecterComponent } from './components/seconnecter/seconnecter.component';
import { SinscrireComponent } from './components/sinscrire/sinscrire.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { AjouterproduitComponent } from './components/ajouterproduit/ajouterproduit.component';
import { AjoutercontactComponent } from './components/ajoutercontact/ajoutercontact.component';
import { UserComponent } from './components/user/user.component';
import { EditaboutComponent } from './components/editabout/editabout.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { ProductDetailComponent } from './components/product-detail-component/product-detail-component.component';
import { AnnonceComponent } from './components/annonce/AnnonceComponent';
import { AgentGuard } from './guard/user.guard';
import { ProduitsponsoComponent } from './components/produitsponso/produitsponso.component';
import { PaimentComponent } from './components/paiment/paiment.component';
const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent }, // Utilisez le paramètre id pour identifier le produit sélectionné

  {
    path: 'seconnecter',
    component: SeconnecterComponent
  },
  {
    path: 'ajoutercontact',
    component: AjoutercontactComponent,
    canActivate: [AgentGuard]
  },
  {
    path: 'editabout',
    component: EditaboutComponent
  },
  {
    path: 'sinscrire',
    component: SinscrireComponent,
  },
  {
    path: 'paiment',
    component: PaimentComponent,
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'produit',
    component: ProduitComponent
  },
  { path: 'annonce', component: AnnonceComponent },
  { path: 'produitsponso', component: ProduitsponsoComponent },


  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'homeuser',
    component: HomeUserComponent,
    canActivate: [AgentGuard]
  },

  {
    path: 'homeuser#bas',
    component: HomeUserComponent
  },
  {
    path: 'homeadmin',
    component: HomeAdminComponent,
    canActivate: [AgentGuard]
  },
  {
    path: 'ajouterproduit',
    component: AjouterproduitComponent,
    canActivate: [AgentGuard]

  },
  {
    path: '',
    redirectTo: 'produit',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'produit',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
