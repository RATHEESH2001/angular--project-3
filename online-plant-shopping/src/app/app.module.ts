import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FavlistComponent } from './favlist/favlist.component';
import { DraggableDirectiveComponent } from './draggable-directive/draggable-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    FavlistComponent,
    DraggableDirectiveComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
