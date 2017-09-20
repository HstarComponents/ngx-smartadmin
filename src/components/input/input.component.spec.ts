import { TestBed, inject } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('a input component', () => {
	let component: InputComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InputComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InputComponent], (InputComponent) => {
		component = InputComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});