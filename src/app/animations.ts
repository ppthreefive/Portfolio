import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const menuAnimation =
  trigger('menuAnimation', [
    state('false', style({ opacity: 1, width: '0px', display: 'block' })),
    state('true', style({ opacity: 1, width: '150px', display: 'block' })),
    transition('* => *', [
      animate(250)
    ])
  ]);
