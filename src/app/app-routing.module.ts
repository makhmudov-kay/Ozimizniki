import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {AboutProjectComponent} from "./pages/about-project/about-project.component";
import {NewsComponent} from "./pages/news/news.component";
import {QuestionsComponent} from "./pages/questions/questions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {CartComponent} from "./pages/cart/cart.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SeedsComponent} from "./pages/categories/components/seeds/seeds.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CategoryItemComponent} from "./pages/categories/components/category-item/category-item.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutProjectComponent},
  {path: 'news', component: NewsComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'categories', component: CategoriesComponent, children: [
      {
        path: 'seeds', component: SeedsComponent, children: [
          {
            path: 'item', component: CategoryItemComponent
          }
        ]
      }
    ]},
  {path: 'itemId', component: CategoryItemComponent}
]

/*const routes: Routes = [
  { path: '', pathMatch: 'full', component: MockComponentComponent, data: { bc: 'Looking outside' } },
  {
    path: 'home', component: MockComponentComponent,
    data: { bc: 'I see a home' },
    children: [
      {
        path: 'primaryHouse', component: MockComponentComponent,
        data: { bc: 'I\'m going inside the home' },
        children: [
          {
            path: 'kitchen', component: MockComponentComponent,
            data: { bc: 'look inside the kitchen' }
          },
          {
            path: 'bedroom', component: MockComponentComponent,
            data: { bc: 'look inside the bedroom' }
          }
        ]
      },
      {
        path: 'guestHouse', component: MockComponentComponent,
        data: { bc: 'I\'m going in the back yard' }
      }
    ]
  }
];*/



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
