import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  imports: [NavigationComponent],
})
export default class UnauthorizedComponent {}
