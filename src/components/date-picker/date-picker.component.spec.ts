import { TestBed, inject } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';

describe('a date-picker component', () => {
	let component: DatePickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DatePickerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DatePickerComponent], (DatePickerComponent) => {
		component = DatePickerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});