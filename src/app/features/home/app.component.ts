import { Component, OnInit } from '@angular/core';
// import { HomeViewModel } from './app.viewmodel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NzGridModule, NzLayoutModule, NzIconModule],
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
