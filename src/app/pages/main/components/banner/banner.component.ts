import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.less"]
})

export class BannerComponent implements AfterViewInit {

  @ViewChild('myIdentifier') myIdentifier!: ElementRef;
  clientWidth: number = window.innerWidth;

  constructor(private elem: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.clientWidth < 350) {
      this.elem.nativeElement.querySelector('nz-carousel').style.height = '740px';
    } else if (this.clientWidth < 481) {
      this.elem.nativeElement.querySelector('nz-carousel').style.height = '840px';
    } else if (this.clientWidth < 577) {
      this.elem.nativeElement.querySelector('nz-carousel').style.height = '570px';
    } else if (this.clientWidth < 768) {
      console.log(this.clientWidth)
      this.elem.nativeElement.querySelector('nz-carousel').style.height = '740px';
    }
  }

  carousels = [
    {
      header: "Керакли махсулотларни Фермерлардан харид қилинг",
      comment: "Харидни бизнинг сервис орқали амалга оширинг",
      btnText: "Харидни бошлаш",
      bannerBg: "../../../../../assets/banner.jpg"
    },
    {
      header: "Ўз аграр бизнесингизни биз билан қуринг",
      comment: "Ҳамкорлар, дилерлар, етказиб берувчилар ва улгуржи харидорларни топиш учун ягона онлайн платформа",
      btnText: "Харидни бошлаш",
      bannerBg: "../../../../../assets/banner2.jpg"
    },
    {
      header: "Керакли махсулотларни Фермерлардан харид қилинг",
      comment: "Харидни бизнинг сервис орқали амалга оширинг",
      btnText: "Харидни бошлаш",
      bannerBg: "../../../../../assets/banner3.jpg"
    },
  ]

  cards = [
    {src: "../../../../../assets/banner-card1.svg"},
    {src: "../../../../../assets/banner-card2.svg"},
    {src: "../../../../../assets/banner-card-3.svg"},
    {src: "../../../../../assets/banner-card4.svg"}
  ]

  sizes = {
    xs: '575px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
  }
}
