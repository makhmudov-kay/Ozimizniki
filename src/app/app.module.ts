import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './pages/main/components/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzDrawerModule,
    NzCarouselModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
