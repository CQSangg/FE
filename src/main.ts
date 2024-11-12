import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { PageComponent } from './app/page/page.conponent';

bootstrapApplication(AppComponent, {
  providers: [
    // Các provider nếu có
  ]
}).catch(err => console.error(err));
