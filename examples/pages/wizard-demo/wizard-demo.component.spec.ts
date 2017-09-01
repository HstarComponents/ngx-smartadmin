import { TestBed, inject } from '@angular/core/testing';

import { WizardDemoComponent } from './wizard-demo.component';

describe('a wizard-demo component', () => {
	let component: WizardDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WizardDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([WizardDemoComponent], (WizardDemoComponent) => {
		component = WizardDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});