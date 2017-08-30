export interface Step {
    value: string;
    title: string;
}
export declare class WizardComponent {
    private type;
    private steps;
    private currentValue;
    private prevText;
    private nextText;
    private stepClick;
    private readonly currentIndex;
    constructor();
    private prev();
    private next();
    private changeCurrentStep(step);
}
