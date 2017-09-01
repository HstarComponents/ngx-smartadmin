import { TestBed, inject } from '@angular/core/testing';

import { RadioDemoComponent } from './radio-demo.component';

describe('a radio-demo component', () => {
	let component: RadioDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RadioDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RadioDemoComponent], (RadioDemoComponent) => {
		component = RadioDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});