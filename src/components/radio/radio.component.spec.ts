import { TestBed, inject } from '@angular/core/testing';

import { RadioComponent } from './radio.component';

describe('a radio component', () => {
	let component: RadioComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioComponent], (RadioComponent) => {
		component = RadioComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});