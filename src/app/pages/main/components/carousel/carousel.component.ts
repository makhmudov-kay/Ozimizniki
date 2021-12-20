import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less'],
})
export class CarouselComponent {
  carouselInfo = [
    {
      title: 'Харидорларлар учун',
      imageUrl: '../../../../../assets/cart-carousel.svg',
      lTop: {
        title: 'Қулай харидлар',
        text: 'Сервис орқали турли хилдаги махсулотларни харид қилиш нимконияти',
        icon: '../../../../../assets/shopping-cart.png',
      },
      rTop: {
        title: 'Махсулотлар каталоги',
        text: 'Қишлоқ хўжалиги учун катта миқдордаги махсулотлар каталоги',
        icon: '../../../../../assets/fertilizer.png',
      },
      lBot: {
        title: 'Сотувчи билан доимий алоқа',
        text: 'Cервис орқали барча саволлар бойича сотувчи билан  алоқа ўрнатиш',
        icon: '../../../../../assets/chat.png',
      },
      rBot: {
        title: 'Ишончли ҳимоя',
        text: 'Харидорларни ҳимоя қилиш кафолати',
        icon: '../../../../../assets/guaranteed.png',
      },
    },
    {
      title: 'Сотувчилар учун',
      imageUrl: '../../../../../assets/box.png',
      lTop: {
        title: 'Бизнесни ривожлантириш',
        text: 'Сервис орқали махсулотингиз учун янги мижозлар топиш имкони',
        icon: '../../../../../assets/gauge.png',
      },
      rTop: {
        title: 'Манфатли ҳамкорлик',
        text: 'Доимий мижозлар билан ҳамкорликда ишлаш имкони',
        icon: '../../../../../assets/trust.png',
      },
      lBot: {
        title: 'Харидор билан доимий алоқа',
        text: 'Барча сўровлар бойича мижозлар билан тўгридан тўгри алоқа ўрнатиш',
        icon: '../../../../../assets/chat.png',
      },
      rBot: {
        title: 'Қўшимча кўникмалар',
        text: 'Қишлоқ хўжалиги соҳасидаги ўзгаришлар ва сўнги янгиликлардан хабардор бўлиш',
        icon: '../../../../../assets/quality-control.png',
      },
    },
  ];
}
