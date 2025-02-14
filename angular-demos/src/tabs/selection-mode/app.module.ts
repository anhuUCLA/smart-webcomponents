import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'smart-webcomponents-angular/button';import { TabsModule } from 'smart-webcomponents-angular/tabs';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ButtonModule, TabsModule ],
    bootstrap: [ AppComponent ],
	entryComponents: [ AppComponent ]
})

export class AppModule { }
