import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from "../../support/navigation/navigation.component";
import Desktop from './desktop/universe-form-desktop.component';
import Mobile from './mobile/universe-form-mobile.component';

@Component({
  imports: [NavigationComponent, NgComponentOutlet],
  templateUrl: './universe-form.component.html',
  styleUrl: './universe-form.component.scss',
})
export default class UniverseFormComponent {
  desktopComponent: ComponentType<any> | null = Desktop;
  mobileComponent: ComponentType<any> | null = Mobile;
}
