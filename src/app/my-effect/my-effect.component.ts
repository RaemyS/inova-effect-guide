import {ChangeDetectionStrategy, Component, DestroyRef, effect, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {combineLatest, tap} from 'rxjs';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-effect',
  imports: [
    FormsModule
  ],
  templateUrl: './my-effect.component.html',
  styleUrl: './my-effect.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEffectComponent {
  readonly signal1 = signal<boolean>(false);  // Could be signal-inputs as well
  readonly signal2 = signal<boolean>(false);
  readonly signal3 = signal<boolean>(false);

  isInitialized = false

  private readonly signalRegister = [this.signal1, this.signal2, this.signal3];

  constructor() {
    // Use RxJS to handle the side effects
    combineLatest([toObservable(this.signal1), toObservable(this.signal2), toObservable(this.signal3)])
      .pipe(
        tap(([value1, value2, value3]) =>
        {
          if (this.isInitialized) {
            return;
          }
          alert(`current signal state ist ${value1}, ${value2}, ${value3}`)

          // maybe set other signals, call services, etc.
        }),
        takeUntilDestroyed(inject(DestroyRef))
      )
      .subscribe()
  }

  onToggleSignal(index: number) {
    this.signalRegister[index].update(previous => !previous);
  }

  onToggleIsInitialized() {
    this.isInitialized = !this.isInitialized;
  }
}
