import { LoginComponent } from './login/login.component';
import { ConfigComponent } from './config/config.component';
import { PerfilComponent } from './config/perfil/perfil.component';
import { MainComponent } from './main/main.component';
import { EmitentComponent } from './person/emitent/emitent.component';
import { ClientComponent } from './person/client/client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'main', component: MainComponent, children: [
      {
        path: 'client', component: ClientComponent, children: [
          { path: 'emit', component: EmitentComponent }
        ]
      },
      {
        path: 'config', component: ConfigComponent, children: [
          { path: 'perfil', component: PerfilComponent }
        ]
      },
    ]
  },
  { path: '',   redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
