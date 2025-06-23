import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutComponent, NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-info',
  imports: [NzLayoutModule, NzIconModule, NzGridModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

}
