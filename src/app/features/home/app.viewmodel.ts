import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HomeViewModel {
  readonly name$ = new BehaviorSubject('Tạ Đăng Khoa');
  readonly tagline$ = new BehaviorSubject('Lập trình viên Frontend | Yêu thích UI/UX và công nghệ web hiện đại');
  readonly avatarUrl$ = new BehaviorSubject('assets/avatar.jpg');
}
