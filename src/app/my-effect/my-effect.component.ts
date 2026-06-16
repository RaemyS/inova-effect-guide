import {ChangeDetectionStrategy, Component, effect, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
    effect(() => {
      if (this.isInitialized) {
        return;
      }

      const value1 = this.signal1();
      const value2 = this.signal2();
      const value3 = this.signal3();

      alert(`current signal state ist ${value1}, ${value2}, ${value3}`);

      // maybe set other signals, call services, etc.
    });
  }

  onToggleSignal(index: number) {
    this.signalRegister[index].update(previous => !previous);
  }

  onToggleIsInitialized() {
    this.isInitialized = !this.isInitialized;
  }
}
