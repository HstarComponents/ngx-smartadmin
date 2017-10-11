import { TestBed, inject } from '@angular/core/testing';

import { TimePickerDemoComponent } from './time-picker-demo.component';

describe('a time-picker-demo component', () => {
	let component: TimePickerDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TimePickerDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TimePickerDemoComponent], (TimePickerDemoComponent) => {
		component = TimePickerDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});