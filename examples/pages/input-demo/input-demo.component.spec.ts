import { TestBed, inject } from '@angular/core/testing';

import { InputDemoComponent } from './input-demo.component';

describe('a input-demo component', () => {
	let component: InputDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InputDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InputDemoComponent], (InputDemoComponent) => {
		component = InputDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});