export const template = `
<div class="sdc-accordion" [ngClass]="customCSSClass" [attr.data-tests-id]="testId">
    <div class="sdc-accordion-header" (click)="toggleAccordion()" [ngClass]="{'arrow-right': arrowDirection === accordionArrowDirection.right}">
        <div class="svg-icon-wrapper bottom" [ngClass]="{'down': open}">
            <svg class="svg-icon __chevronUp" version="1.1" id="chevron-up_icon" x="0px" y="0px" viewBox="0 0 10 6.3" style="enable-background:new 0 0 10 6.3;"
                xml:space="preserve">
                <g transform="translate(0,-952.36218)">
                    <path d="M10,958.2c0-0.1,0-0.2-0.1-0.2l-4.6-5.5c-0.1-0.2-0.4-0.2-0.5,0l0,0L0.1,958c-0.1,0.2-0.1,0.4,0,0.5s0.4,0.1,0.5,0l0,0
          l4.3-5.2l4.3,5.2c0.1,0.2,0.4,0.2,0.5,0.1C10,958.5,10,958.3,10,958.2z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="title">
            {{title}}
        </div>
    </div>
    <div class="sdc-accordion-body" [ngClass]="{open: open}">
        <ng-content></ng-content>
    </div>
</div>`;
