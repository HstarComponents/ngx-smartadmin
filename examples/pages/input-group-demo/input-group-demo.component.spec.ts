import { TestBed, inject } from '@angular/core/testing';

import { InputGroupDemoComponent } from './input-group-demo.component';

describe('a input-group-demo component', () => {
	let component: InputGroupDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				InputGroupDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([InputGroupDemoComponent], (InputGroupDemoComponent) => {
		component = InputGroupDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});