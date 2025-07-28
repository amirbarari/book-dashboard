import { Routes } from "@angular/router";
import { Dashboard } from "./features/dashboard/dashboard";
import { Books } from "./features/dashboard/books/books";
import { CreateBook } from "./features/dashboard/create-book/create-book";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: "dashboard"
    },
    {
        title: 'Dashboard',
        path: 'dashboard',
        loadChildren: () => import("./features/dashboard/dashboard.module").then(m => m.DashboardModule),
    }

]

export default routes;