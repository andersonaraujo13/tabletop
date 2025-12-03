import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationComponent } from '../../support/navigation/navigation.component';
import Mobile from './mobile/dashboard-mobile.component';
import Desktop from './desktop/dashboard-desktop.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  imports: [NavigationComponent, NgComponentOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  currentComponent: ComponentType<any> | null = Desktop;

  ngOnInit(): void {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((state: BreakpointState) => {
        this.currentComponent = state.matches ? Mobile : Desktop;
      });
  }
}
