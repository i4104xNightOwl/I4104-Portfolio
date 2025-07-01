import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('slider') sliderRef!: ElementRef<HTMLDivElement>;

  currentIndex = 0;

  ngAfterViewInit() {}

  moveSlide(direction: number) {
    const slides = this.sliderRef.nativeElement.children;
    const total = slides.length;
    this.currentIndex = (this.currentIndex + direction + total) % total;
    const offset = this.currentIndex * -100;
    this.sliderRef.nativeElement.style.transform = `translateX(${offset}%)`;
  }
}
