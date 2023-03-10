import { ListViewModule } from '@syncfusion/ej2-angular-lists';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule , CommonModule, BrowserModule, CheckBoxModule, ListViewModule, TreeViewModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
