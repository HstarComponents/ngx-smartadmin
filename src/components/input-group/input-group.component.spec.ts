import { TestBed, inject } from '@angular/core/testing';

import { InputGroupComponent } from './input-group.component';

describe('a input-group component', () => {
	let component: InputGroupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InputGroupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InputGroupComponent], (InputGroupComponent) => {
		component = InputGroupComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});