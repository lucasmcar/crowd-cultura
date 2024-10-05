import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'registro/usuario'
  },
  {
    path: 'registro/usuario',
    loadChildren: ()=>import('./components/user-register/user-register/user-register.module')
    .then(m => m.UserRegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
