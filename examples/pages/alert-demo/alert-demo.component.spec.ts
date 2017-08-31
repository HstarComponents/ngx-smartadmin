import { TestBed, inject } from '@angular/core/testing';

import { AlertDemoComponent } from './alert-demo.component';

describe('a alert-demo component', () => {
	let component: AlertDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AlertDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AlertDemoComponent], (AlertDemoComponent) => {
		component = AlertDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});