import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Componets
import { HeaderComponent } from './component/header/header.component';
import { ToDoButtonDeleteAllComponent } from './component/to-do-button-delete-all/to-do-button-delete-all.component';
import { ToDoInputAddItensComponent } from './component/to-do-input-add-itens/to-do-input-add-itens.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    ToDoInputAddItensComponent,
    ToDoListComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class HomeModule { }
