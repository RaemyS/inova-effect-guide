# InovaEffectGuide

This Angular project shows an observed usecase of [`effect`](https://angular.dev/guide/signals/effect) in a productive project.

## Experiment

### Phase 1: this is fine :)

1. Start the app with `npm run start` and open the page in your web browser.
2. An alert appears and shows the state of the three signal toggle buttons.
3. As you press the toggle buttons, a newly appearing alert shows the new state.
4. If you check the checkbox on top of the page, the app will tell you that the "state is locked! :(" now.
5. Uncheck the checkbox now, the app will tell you that the "state is unlocked... :)".
6. Use the toggle buttons. You will see the alert appearing as before.

### Phase 2: what the...

_Follow step 1 to and with 4 of Phase 1 first._

5. Leave the checkbox checked and use a state toggle button. Nothing happens, the state is locked.
6. Uncheck the checkbox now, the app will tell you that the "state is unlocked... :)".

> Question:
> What behavior do you expect now, as you would press the signal toggle buttons?

7. Use the toggle buttons. Is the behavior expected?

### Phase 3: the truth lies inside the code

1. Open `src/app/my-effect/my-effect.component.html` and describe, what you see here.
2. Open `src/app/my-effect/my-effect.component.ts` and describe the code.

> Question:
> What is the intended purpose if the `effect` in the `constructor`?

> Question:
> Repeat Phase 2. How can you explain the observed behavior with the code?

## Discussion

- How could we fix the behavior of phase 2? => goal: after unchecking the checkbox, the toggle buttons trigger the alert window and state change.
- Is this pattern worth fixing at all? What does the shortcut mean in the context of reactivity (imagine that the signals would be inputs from outside)?
- Read [effect:Use cases for effects](https://angular.dev/guide/signals/effect#use-cases-for-effects). What is your opinion on the topic? How does this affect our current code?
- Are there alternatives? What would be the clean reactive pattern here (especially if the signals were inputs)?
