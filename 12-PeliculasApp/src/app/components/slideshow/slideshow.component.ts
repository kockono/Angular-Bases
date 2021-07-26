import { Movie } from './../../interfaces/cartelera-response';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[]; // Lo recibe del componente padre
  public mySwiper: Swiper;
  
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {

      loop: true,
    });

    this.mySwiper.slideNext();

  }

  onSlideNext() {
    this.mySwiper.slideNext();

  }

  onSlidePrevious(){
    this.mySwiper.slidePrev();
  }


}
