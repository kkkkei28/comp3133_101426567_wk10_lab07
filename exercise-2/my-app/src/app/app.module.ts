import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe'; 
import { FormsModule } from '@angular/forms';  
import { HeroesComponent } from './heroes/heroes.component';  
import { InputFormatDirective } from './input-format.directive';





@NgModule({
  declarations: [
    AppComponent,
    RemoveSpacesPipe,
    FormsModule,
    HeroesComponent,
    InputFormatDirective, 

  ],
  imports: [
    BrowserModule,
    FormsModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
