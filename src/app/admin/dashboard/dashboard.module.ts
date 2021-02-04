import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,        
    ],
    declarations: [        
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class AdminDashboardModule { 
    
}
