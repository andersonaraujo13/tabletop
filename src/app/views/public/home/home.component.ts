import { ComponentType } from '@angular/cdk/portal';
import { NgComponentOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DeviceService } from '../../../service/common/device.service';
import Desktop from './desktop/home-desktop.component';
import Mobile from './mobile/home-mobile.component';
@Component({
  selector: 'app-home',
  imports: [NgComponentOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  desktopComponent: ComponentType<any> | null = Desktop;
  mobileComponent: ComponentType<any> | null = Mobile;

  private deviceService = inject(DeviceService);
  public handset: boolean = false;

  ngOnInit(): void {
    this.deviceService.isHandset$.subscribe((hand) => {
      this.handset = hand;
    });
  }
}
