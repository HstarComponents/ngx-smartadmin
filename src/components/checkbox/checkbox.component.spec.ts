import { TestBed, inject } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('a checkbox component', () => {
	let component: CheckboxComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxComponent], (CheckboxComponent) => {
		component = CheckboxComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});