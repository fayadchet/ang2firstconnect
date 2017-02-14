// Importer les class nécessaires à l'utilisation des routes
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importer les composants à utiliser dans les routes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

//Déclarer une constante de type Routes = variable non modifiable
const appRoutes: Routes = [

    //Définition des routes 
    {

        //Redirection de la page d'accueil
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },


    {
        //Définir l'adresse 
        path: 'dashboard',
        //Définir le composant à utiliser
        component: DashboardComponent
    },

    {
        //Définir l'adresse 
        path: 'add-student',
        //Définir le composant à utiliser
        component: AddStudentComponent
    },

    {
        //Définir l'adresse 
        path: 'edit-student',
        //Définir le composant à utiliser
        component: EditStudentComponent
    }


];

//Exporter la constante des routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

