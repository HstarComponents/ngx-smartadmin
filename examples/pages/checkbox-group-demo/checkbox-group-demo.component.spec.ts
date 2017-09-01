import { TestBed, inject } from '@angular/core/testing';

import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';

describe('a checkbox-group-demo component', () => {
	let component: CheckboxGroupDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckboxGroupDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckboxGroupDemoComponent], (CheckboxGroupDemoComponent) => {
		component = CheckboxGroupDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});