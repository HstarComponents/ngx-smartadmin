import { TestBed, inject } from '@angular/core/testing';

import { TimePickerComponent } from './time-picker.component';

describe('a time-picker component', () => {
	let component: TimePickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TimePickerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TimePickerComponent], (TimePickerComponent) => {
		component = TimePickerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});