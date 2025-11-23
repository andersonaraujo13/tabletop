import { Directive, AfterViewInit, Optional, Self, DestroyRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[numbersOnly]',
  standalone: true
})
export class NumbersOnlyDirective implements AfterViewInit {

  constructor(@Optional() @Self() private ngControl: NgControl | null, private destroyRef: DestroyRef){}

  ngAfterViewInit(): void {
    if (!this.ngControl) return;

    this.ngControl.valueChanges
      ?.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value: string) => {
        let initialValue = typeof value === 'string' ? value.replace(/[^0-9]/g, '') : value;

        if (initialValue?.length == 0) {
          this.ngControl!.control?.setValue(0, { emitEvent: false });
        }

        let numberValue = parseInt(initialValue);
        if(numberValue >= 0){
          this.ngControl!.control?.setValue(numberValue, { emitEvent: false });
        }

      });
  }

}
