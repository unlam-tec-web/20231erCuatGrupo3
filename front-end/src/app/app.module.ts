import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ProductViewComponent} from './views/product-view/product-view.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule,GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { RecoverPasswordViewComponent } from './views/recover-password-view/recover-password-view.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { CartViewComponent } from './views/cart-view/cart-view.component';
import { CategoryViewComponent } from './views/category-view/category-view.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CheckoutViewComponent } from './views/checkout-view/checkout-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { OrderConfirmationViewComponent } from './views/order-confirmation-view/order-confirmation-view.component';
import { VerificationCodeViewComponent } from './views/verification-code-view/verification-code-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeViewComponent,
    ProductViewComponent,
    CardComponent,
    FooterComponent,
    LoginViewComponent,
    ThumbnailsComponent,
    RecoverPasswordViewComponent,
    RecoverPasswordComponent,
    CartViewComponent,
    CategoryViewComponent,
    CheckoutViewComponent,
    ProfileViewComponent,
    OrderConfirmationViewComponent,
    VerificationCodeViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1000883229550-at62jqoeegh4eshinjhul0r5sdnanbh0.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
