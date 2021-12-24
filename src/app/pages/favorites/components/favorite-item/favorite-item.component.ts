import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.less']
})
export class FavoriteItemComponent implements OnInit {

  constructor() {
  }

  itemInfo = [
    {
      itemImg: "../../../assets/aboutImages/tomato.jpg",
      itemTitle: "Қизил Юсуф памидори",
      itemSubtitle: "МЧЖ \"Green technology\"",
      itemDescription: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади.",
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"],
      price: new Intl.NumberFormat('ru-RU').format(459000000),
      count: new Intl.NumberFormat('ru-RU').format(100000000),
      favorites: true
    },
    {
      itemImg: "../../../assets/items/pea.jpg",
      itemTitle: "Бинафша Шоҳ Нўхати",
      itemSubtitle: "МЧЖ \"Green technology\"",
      itemDescription: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади.",
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"],
      price: new Intl.NumberFormat('ru-RU').format(3210),
      count: new Intl.NumberFormat('ru-RU').format(1),
      favorites: true
    },
    {
      itemImg: "../../../assets/items/beetroot.jpg",
      itemTitle: "Қизил лавлаги",
      itemSubtitle: "МЧЖ \"Green technology\"",
      itemDescription: "Ўсимликнинг баландлиги 1 метрга етади, екиш пайтида уни зарур ишларни амалга ошириш керак. Озиқ-овқат маҳсулотларидан ташқари, нўхат жуда декоратив кўриришга ега бўлади.",
      tags: ["Томат", "Бодринг", "Сабзи", "Карам", "Карам"],
      price: new Intl.NumberFormat('ru-RU').format(6230),
      count: new Intl.NumberFormat('ru-RU').format(1),
      favorites: true
    },
  ];

  ngOnInit(): void {
  }

  onClose(): void {
    console.log('tag was closed.');
  }
}
