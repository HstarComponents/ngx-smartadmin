import { TestBed, inject } from '@angular/core/testing';

import { RadioGroupDemoComponent } from './radio-group-demo.component';

describe('a radio-group-demo component', () => {
	let component: RadioGroupDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioGroupDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioGroupDemoComponent], (RadioGroupDemoComponent) => {
		component = RadioGroupDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});