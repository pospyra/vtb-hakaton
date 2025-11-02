import { Routes } from '@angular/router';
import { AdressComponent } from "./adress/adress.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "adress",
    pathMatch: "full"
  },
  { path: "adress", component: AdressComponent },
  //{ path: "devices", component: DeviceListComponent },
  //{ path: "products/edit/:id", component: ProductCreateEditComponent }
];
