import { TestBed, inject } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('a button component', () => {
	let component: ButtonComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ButtonComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ButtonComponent], (ButtonComponent) => {
		component = ButtonComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});