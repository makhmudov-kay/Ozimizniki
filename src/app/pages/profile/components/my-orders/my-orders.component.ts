import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.less']
})
export class MyOrdersComponent implements OnInit {
  cardsRequests = [
    {
      id: 0,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-569800",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: 110199000,
      weight: 100,
      status: {
        id: 1,
        text: "Ради қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 1,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-907701",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: 98520000,
      weight: 95,
      status: {
        id: 2,
        text: "Янги сўров"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 2,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-3600056",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: 123456792,
      weight: 160,
      status: {
        id: 3,
        text: "Қабул қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 3,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-850202",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: 98520000,
      weight: 95,
      status: {
        id: 2,
        text: "Янги сўров"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 4,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-987444",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: 110199000,
      weight: 100,
      status: {
        id: 1,
        text: "Ради қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 5,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-800000",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: 123456792,
      weight: 160,
      status: {
        id: 3,
        text: "Қабул қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 6,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-100000",
      supplierName: "Рахматов Хасан Хусанович",
      supplierCompany: "Ташкент АгроФерма",
      price: 123456792,
      weight: 160,
      status: {
        id: 3,
        text: "Қабул қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 7,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-320008",
      supplierName: "Нарбеков Артур Ураловичи",
      supplierCompany: "Ташкент АгроФерма",
      price: 110199000,
      weight: 100,
      status: {
        id: 1,
        text: "Ради қилинди"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
    {
      id: 8,
      imageUrl: "../../../../../assets/profile/cardImg.jpg",
      title: "Қизил лавлаги лавлагил авлаги лав лаги лавла ги лавлаги",
      requestID: "№ RU210403-907701",
      supplierName: "Махмудов Кайрат Нурланович",
      supplierCompany: "Ташкент АгроФерма",
      price: 98520000,
      weight: 95,
      status: {
        id: 2,
        text: "Янги сўров"
      },
      legalInfo: {
        name: "Нарбеков Артур Ураловичи",
        phoneNumber: "+998991234567",
        region: "Самарқанд вилояти",
        district: "Пастдарғом туман",
        bank: "\"Агробанк\" аксиядорлик-тижорат банки»",
        adres: "43 Мукимий Кўчаси, Тошкент, Ўзбекистон, 100096-уй",
        stir: "154786022",
        xisobRakami: "2223 1238 4568 1234 9963",
        imageUrl: "",
        company: "МЧЖ \"Azia media\""
      }
    },
  ];

  isVisible = false;
  isConfirmLoading = false;
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
