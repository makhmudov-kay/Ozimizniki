import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.less']
})
export class MyRequestComponent implements OnInit {
  cardsRequests = [
    {
      id: 0,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-569800",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(110199000),
      weight: new Intl.NumberFormat('ru-RU').format(100),
      status: {
        id: 1,
        text: "Ради қилинди"
      }
    },
    {
      id: 1,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-907701",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(98520000),
      weight: new Intl.NumberFormat('ru-RU').format(95),
      status: {
        id: 2,
        text: "Янги сўров"
      }
    },
    {
      id: 2,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-3600056",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(123456792),
      weight: new Intl.NumberFormat('ru-RU').format(160),
      status: {
        id: 3,
        text: "Қабул қилинди"
      }
    },
    {
      id: 3,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-850202",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(98520000),
      weight: new Intl.NumberFormat('ru-RU').format(95),
      status: {
        id: 2,
        text: "Янги сўров"
      }
    },
    {
      id: 4,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-987444",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(110199000),
      weight: new Intl.NumberFormat('ru-RU').format(100),
      status: {
        id: 1,
        text: "Ради қилинди"
      }
    },
    {
      id: 5,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-800000",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(123456792),
      weight: new Intl.NumberFormat('ru-RU').format(160),
      status: {
        id: 3,
        text: "Қабул қилинди"
      }
    },
    {
      id: 6,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-100000",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(123456792),
      weight: new Intl.NumberFormat('ru-RU').format(160),
      status: {
        id: 3,
        text: "Қабул қилинди"
      }
    },
    {
      id: 7,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-320008",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(110199000),
      weight: new Intl.NumberFormat('ru-RU').format(100),
      status: {
        id: 1,
        text: "Ради қилинди"
      }
    },
    {
      id: 8,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-907701",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: new Intl.NumberFormat('ru-RU').format(98520000),
      weight: new Intl.NumberFormat('ru-RU').format(95),
      status: {
        id: 2,
        text: "Янги сўров"
      }
    },
  ];

  isVisible = false;
  temp: any = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  showModal(id: number): void {
    this.temp = this.cardsRequests.filter(e => e.id == id);
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
