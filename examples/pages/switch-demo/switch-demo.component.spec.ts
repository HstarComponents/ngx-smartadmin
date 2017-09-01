import { TestBed, inject } from '@angular/core/testing';

import { SwitchDemoComponent } from './switch-demo.component';

describe('a switch-demo component', () => {
	let component: SwitchDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SwitchDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SwitchDemoComponent], (SwitchDemoComponent) => {
		component = SwitchDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});