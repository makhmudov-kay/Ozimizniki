import {NgModule} from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./pages/main/main.component";
import {AboutProjectComponent} from "./pages/about-project/about-project.component";
import {NewsComponent} from "./pages/news/news.component";
import {QuestionsComponent} from "./pages/questions/questions.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutProjectComponent},
  {path: 'news', component: NewsComponent},
  {path: 'questions', component: QuestionsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
