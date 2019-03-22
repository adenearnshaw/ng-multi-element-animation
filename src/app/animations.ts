import { animate, style, trigger, transition, query, group, stagger,  AnimationTriggerMetadata } from '@angular/animations';

export class Animations {
    public static transitions: AnimationTriggerMetadata[] = [
        trigger('pageAnimations', [
            transition(':enter', [
                group([
                    query('.section-one', [
                        style({ opacity: 0, transform: 'translateX(-100%)' }),
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                    ]),
                    query('.section-two', [
                        style({ opacity: 0, transform: 'translateY(200%)' }),
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                    ]),
                    query('.section-three', [
                        style({ opacity: 0, transform: 'translateX(200%)' }),
                        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ])
    ];
}
