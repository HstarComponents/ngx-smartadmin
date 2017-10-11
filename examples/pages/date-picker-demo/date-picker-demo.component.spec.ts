import { TestBed, inject } from '@angular/core/testing';

import { DatePickerDemoComponent } from './date-picker-demo.component';

describe('a date-picker-demo component', () => {
	let component: DatePickerDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DatePickerDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DatePickerDemoComponent], (DatePickerDemoComponent) => {
		component = DatePickerDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});