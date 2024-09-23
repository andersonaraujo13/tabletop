import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Application, Container, Assets, Sprite } from 'pixi.js';

@Component({
  selector: 'app-war-zone',
  standalone: true,
  imports: [],
  templateUrl: './war-zone.component.html',
  styleUrl: './war-zone.component.scss',
})
export class WarZoneComponent implements OnInit {
  @ViewChild('pixiGameContainer', { static: true })
  pixiGameContainer: ElementRef;

  game = new Application();

  ngOnInit(): void {
    this.loadAssets();
  }

  constructor(private renderer: Renderer2) {}

  async loadAssets() {
    await this.game.init(
      {
        background: '#1099bb',
        height: this.pixiGameContainer.nativeElement.offsetHeight,
        width: this.pixiGameContainer.nativeElement.offsetWidth
      }
    );
    this.renderer.appendChild(
      this.pixiGameContainer.nativeElement,
      this.game.canvas
    );

    const container = new Container();

    this.game.stage.addChild(container);

    // Load the bunny texture
    const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 25; i++) {
      const bunny = new Sprite(texture);

      bunny.x = (i % 5) * 40;
      bunny.y = Math.floor(i / 5) * 40;
      container.addChild(bunny);
    }

    // Move the container to the center
    container.x = this.game.screen.width / 2;
    container.y = this.game.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    this.game.ticker.add((time) => {
      // Continuously rotate the container!
      // * use delta to create frame-independent transform *
      container.rotation -= 0.01 * time.deltaTime;
    });
  }
}
