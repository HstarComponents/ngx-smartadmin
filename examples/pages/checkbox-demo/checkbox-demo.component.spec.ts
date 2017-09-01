import { TestBed, inject } from '@angular/core/testing';

import { CheckboxDemoComponent } from './checkbox-demo.component';

describe('a checkbox-demo component', () => {
	let component: CheckboxDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxDemoComponent], (CheckboxDemoComponent) => {
		component = CheckboxDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});