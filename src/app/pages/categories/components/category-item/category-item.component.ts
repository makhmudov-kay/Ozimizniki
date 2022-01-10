import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.less']
})
export class CategoryItemComponent implements OnInit {
  valueFrom?: number;
  valueTo?: number;
  filterForm!: FormGroup;
  max: number = 100000;
  min: number = 0;
  inputFromMax: number = 100000;
  inputFromMin: number = 0;
  inputToMax: number = 100000;
  inputToMin: number = 0;
  visible = false;
  listVisible = true;

  cards = [
    {
      id: 1,
      imageUrl: "../../../../../assets/categories/1.jpg",
      title: "Қизил Юсуф памидори",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 459000000,
      weight: 100000,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
    {
      id: 2,
      imageUrl: "../../../../../assets/categories/2.jpg",
      title: "Бинафша Шоҳ Нўхати",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 253000000,
      weight: 65000,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
    {
      id: 3,
      imageUrl: "../../../../../assets/categories/3.jpg",
      title: "Мелотрия Колибри",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 123000000,
      weight: 5489,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
    {
      id: 4,
      imageUrl: "../../../../../assets/categories/3.jpg",
      title: "Қизил лавлаги",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 658000000,
      weight: 54657,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
    {
      id: 5,
      imageUrl: "../../../../../assets/categories/3.jpg",
      title: "Қизил Юсуф памидори",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 145000000,
      weight: 23411,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
    {
      id: 6,
      imageUrl: "../../../../../assets/categories/3.jpg",
      title: "Қизил Юсуф памидори",
      supplier: "МЧЖ \"Green technology\"",
      description: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади. ",
      price: 963000000,
      weight: 567,
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"]
    },
  ]

  typesCat = [
    {name: "Бодринг", count: 304},
    {name: "Карам", count: 296},
    {name: "Сабзи", count: 173},
    {name: "Қалампир", count: 173}
  ]

  checkOptionsOne = [
    {label: 'Пул ўтказиш орқали', value: 'transferPayment', checked: false},
    {label: 'Нақт пул орқали', value: 'cashPayment', checked: true},
    {label: 'Карта орқали', value: 'cardPayment', checked: false}
  ];
  checkOptionsTwo = [
    {label: 'Омборхонадан олиб кетиш', value: 'pickUp', checked: false},
    {label: 'Ўзбекистон бўйлаб етказиб бериш', value: 'delivery', checked: true}
  ];
  checkOptionsThree = [
    {label: 'Келишув асосида', value: 'isContract', checked: false},
    {label: 'Савдолашиш', value: 'isHaggle', checked: true}
  ];
  checkOptionsFour = [
    {label: 'Андижон', value: 'Andijan', checked: false},
    {label: 'Фарғона', value: 'Fergana', checked: true},
    {label: 'Жиззах', value: 'Jizzax', checked: true},
    {label: 'Хоразм', value: 'Xorezm', checked: true},
    {label: 'Наманган', value: 'Namangan', checked: true},
    {label: 'Навоий', value: 'Navoi', checked: true},
    {label: 'Қашқадарё', value: 'Kashkadaryo', checked: true},
    {label: 'Қорақалпоғистон', value: 'Karakalpakstan', checked: true},
    {label: 'Самарқанд', value: 'Samarkand', checked: true},
    {label: 'Сирдарё', value: 'Sirdaryo', checked: true},
    {label: 'Сурхондарё', value: 'Surxandaryo', checked: true},
    {label: 'Тошкент ', value: 'Ташкент', checked: true},
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      fromPrice: [(this.valueFrom || this.min)],
      toPrice: [(this.valueTo || this.max)],
      payment: [this.checkOptionsOne],
      delivery: [this.checkOptionsTwo],
      haggle: [this.checkOptionsThree],
      region: [this.checkOptionsFour],
      slider: [[this.min, this.max]]
    });
  }

  ask() {
    this.cards.sort((item: any) => item.title)
  }

  submitForm(): void {
    console.log('submit', this.filterForm.value);
    console.log(this.filterForm.controls.payment.value.filter((item: any): any => item.checked));
    console.log(this.filterForm.controls.delivery.value.filter((item: any): any => item.checked));
    console.log(this.filterForm.controls.haggle.value.filter((item: any): any => item.checked));
    console.log(this.filterForm.controls.region.value.filter((item: any): any => item.checked));
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.checkOptionsOne.forEach(val => val.checked = false);
    this.filterForm.controls.payment.setValue(this.checkOptionsOne);
    this.checkOptionsTwo.forEach(val => val.checked = false);
    this.filterForm.controls.delivery.setValue(this.checkOptionsTwo);
    this.checkOptionsThree.forEach(val => val.checked = false);
    this.filterForm.controls.haggle.setValue(this.checkOptionsThree);
    this.checkOptionsFour.forEach(val => val.checked = false);
    this.filterForm.controls.region.setValue(this.checkOptionsFour);

    this.inputFromMax = this.max;
    this.inputFromMin = this.min;
    this.inputToMax = this.max;
    this.inputToMin = this.min;
    this.filterForm.controls.fromPrice.setValue(this.min);
    this.filterForm.controls.toPrice.setValue(this.max);
  }

  onChangeMin(event: any): void {
    console.log(event);
    let variable = this.filterForm.controls.slider.value;
    this.inputToMin = event + 1;
    variable[0] = event;
    this.filterForm.controls.slider.setValue(variable);
  }

  onChangeMax(event: any): void {
    console.log(event);
    let variable = this.filterForm.controls.slider.value;
    this.inputFromMax = event - 1;
    variable[1] = event;
    this.filterForm.controls.slider.setValue(variable)

  }

  sliderChange(event: any) {
    this.filterForm.controls.fromPrice.setValue(event[0]);
    this.filterForm.controls.toPrice.setValue(event[1])
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  listVis() {
    this.listVisible = true
  }

  cardVis() {
    this.listVisible = false
  }
}
