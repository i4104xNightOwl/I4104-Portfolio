import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { SliderComponent } from '../../shared/slider/slider.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzGridModule,
    NzIconModule,
    SliderComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {

}
