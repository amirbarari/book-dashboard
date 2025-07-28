import { NgModule } from "@angular/core";
import { Dashboard } from "./dashboard";
import { RouterModule, RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Books } from "./books/books";
import { CommonModule } from "@angular/common";
import { BookCard } from "./books/book-card/book-card";
import { DashboardService } from "./services/dashboard/dashboard.service";
import { routes } from "./dashboard.routing.module";

@NgModule({
    declarations: [Dashboard, Books, BookCard],
    imports: [RouterModule.forChild(routes), RouterOutlet, Header, Footer, Sidebar, CommonModule],
    providers: [DashboardService]
})
export class DashboardModule { }