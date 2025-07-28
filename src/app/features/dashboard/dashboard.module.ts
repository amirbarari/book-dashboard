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
import { Button } from "../../components/button/button";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateBook } from "./create-book/create-book";

@NgModule({
    declarations: [Dashboard, Books, BookCard, CreateBook],
    imports: [RouterModule.forChild(routes),
        RouterOutlet, Header,
        Footer, Sidebar,
        CommonModule, Button,
        ReactiveFormsModule,],
    providers: [DashboardService]
})
export class DashboardModule { }