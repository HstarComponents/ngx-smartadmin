import { TestBed, inject } from '@angular/core/testing';

import { RadioGroupComponent } from './radio-group.component';

describe('a radio-group component', () => {
	let component: RadioGroupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioGroupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioGroupComponent], (RadioGroupComponent) => {
		component = RadioGroupComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});