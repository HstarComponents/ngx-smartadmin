import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from '@angular/animations'

export const slideAnimation: AnimationTriggerMetadata = trigger(
  'slideAnimation', [
    state('*', style({
      opacity: 0,
      display: 'none',
      transform: 'translate3D(-50%, 0px, 0)',
    })),
    state('false', style({
      opacity: 0,
      display: 'none',
      transform: 'translate3D(-50%, 0px, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(-50%, 30px, 0)',
      display: 'block',
    })),
    transition('* <=> *', animate(`250ms ease-out`)),
  ]);
