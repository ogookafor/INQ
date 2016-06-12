import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdCheckbox} from '@angular2-material/checkbox';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RegisterComponent } from './+register';
import { LoginComponent } from './+login';
import { QueryComponent } from './+query';
import { ResultComponent } from './+result';


@Component({
  moduleId: module.id,
  selector: 'inq-app',
  templateUrl: 'inq.component.html',
  styleUrls: ['inq.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdCheckbox],
  providers: [ROUTER_PROVIDERS]
})
@Routes([

  {path: '/register', component: RegisterComponent},
  {path: '/login', component: LoginComponent},
  {path: '/query', component: QueryComponent},
  {path: '/result', component: ResultComponent}
])
export class InqAppComponent {
  title = 'inq workssss!';
}
