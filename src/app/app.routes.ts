import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent, data: { titulo: 'Inicio'} },
    { path: 'heroes', component: HeroesComponent, data: { titulo: 'Héroes'} },
    { path: 'heroe/:id', component: HeroeComponent, data: { titulo: 'Héroe'} },
    { path: 'buscar/:termino', component: BuscadorComponent, data: { titulo: 'Buscar'}},
    { path: 'about', component: AboutComponent, data: { titulo: 'Acerca de...'}},
    //{ path: '**', component: PagenotfoundComponent, data: { titulo: 'Página no encontrada'} },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
]; 

export const APP_ROUTES = RouterModule.forRoot(AppRoutes, {useHash: true});