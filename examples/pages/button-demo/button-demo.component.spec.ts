import { TestBed, inject } from '@angular/core/testing';

import { ButtonDemoComponent } from './button-demo.component';

describe('a button-demo component', () => {
	let component: ButtonDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonDemoComponent], (ButtonDemoComponent) => {
		component = ButtonDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});