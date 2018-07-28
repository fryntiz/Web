// Importo clase BrowserModule encargada de buscar módulos de angular.
import { BrowserModule } from '@angular/platform-browser';

// Importo clase NgModule la cual es el módulo raíz.
import { NgModule } from '@angular/core';

// Agrego HttpModule para trabajar con cabeceras HTTP
import { HttpModule } from '@angular/http';

// Agrego FormsModule para trabajar con formulario
import { FormsModule } from '@angular/forms';

// Importo cada componente propio para la aplicación
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { BarComponent } from './bar/bar.component';
import { SlideComponent } from './slide/slide.component';

// Importo módulos de rutas
import { routing, appRoutingProviders } from './rutas';

// Importo SlideShow
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  // Clases de vista para el módulo (components|directives|pipes)
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    BarComponent,
    SlideComponent
  ],

  // Importo módulos que usarán las plantillas
  imports: [
    BrowserModule,
    routing,     // Módulo de rutas
    HttpModule,  // Módulo HTTP
    FormsModule, // Módulo de formularios
    SlideshowModule, // SlideShow
  ],

  // Los proveedores crean servicios de este módulo globalmente a la aplicación
  providers: [
    appRoutingProviders,  // Cargo servicio para usar las rutas
  ],
  bootstrap: [AppComponent]
})

// Se exporta la clase del módulo raíz y así puede ser invocada desde otro lugar
export class AppModule {}
