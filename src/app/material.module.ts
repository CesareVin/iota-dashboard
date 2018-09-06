import { NgModule } from '@angular/core';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';


@NgModule({

    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
        MatGridListModule, MatCardModule, MatRadioModule, MatExpansionModule,
        BrowserAnimationsModule, MatButtonToggleModule, MatSlideToggleModule, MatChipsModule,
        MatDividerModule, MatListModule, MatTabsModule, MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatIconModule, MatGridListModule, MatCardModule, MatRadioModule, MatExpansionModule,
        BrowserAnimationsModule, MatButtonToggleModule, MatSlideToggleModule, MatChipsModule,
        MatDividerModule, MatListModule, MatTabsModule, MatInputModule]

})
export class MarzoccoMaterialModule { }
