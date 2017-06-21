import { TestBed, inject } from '@angular/core/testing';

import { CheckboxGroupComponent } from './checkbox-group.component';

describe('a checkbox-group component', () => {
	let component: CheckboxGroupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxGroupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxGroupComponent], (CheckboxGroupComponent) => {
		component = CheckboxGroupComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});