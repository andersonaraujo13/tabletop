import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationComponent } from "../../support/navigation/navigation.component";
import Desktop from './desktop/universe-desktop.component';
import Mobile from './mobile/universe-mobile.component';

@Component({
  imports: [NavigationComponent, NgComponentOutlet],
  templateUrl: './universe.component.html',
  styleUrl: './universe.component.scss',
})
export default class UniverseComponent {
  desktopComponent: ComponentType<any> | null = Desktop;
  mobileComponent: ComponentType<any> | null = Mobile;
}
