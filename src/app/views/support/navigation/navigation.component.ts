import { Component, inject, OnInit } from '@angular/core';
import { NavigationDesktopComponent } from './desktop/navigation-desktop.component';
import { NavigationMobileComponent } from './mobile/navigation-mobile.component';
import { DeviceService } from '../../../service/device/device.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [NavigationDesktopComponent, NavigationMobileComponent],
})
export class NavigationComponent implements OnInit {
  private deviceService = inject(DeviceService);
  public handset: boolean = false;

  ngOnInit(): void {
    this.deviceService.isHandset$.subscribe((hand) => {
      this.handset = hand;
    });
  }
}
