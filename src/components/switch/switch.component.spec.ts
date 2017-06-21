import { TestBed, inject } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('a switch component', () => {
	let component: SwitchComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SwitchComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SwitchComponent], (SwitchComponent) => {
		component = SwitchComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});