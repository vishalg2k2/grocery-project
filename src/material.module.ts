import { NgModule } from "@angular/core";
import {MatInputModule} from  "@angular/material/input";
import {MatSelectModule} from  "@angular/material/select";
import {MatRadioModule} from  "@angular/material/radio";
import {MatCardModule} from  "@angular/material/card";
import {MatCheckboxModule} from  "@angular/material/checkbox";
import {MatTableModule} from  "@angular/material/table";
import {MatDialogModule} from  "@angular/material/dialog";
import {MatSortModule} from  "@angular/material/sort";
import {MatPaginatorModule} from  "@angular/material/paginator";
@NgModule({
    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        MatTableModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule
    ]

})
export class MaterialModule{
}