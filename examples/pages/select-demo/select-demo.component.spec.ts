import { TestBed, inject } from '@angular/core/testing';

import { SelectDemoComponent } from './select-demo.component';

describe('a select-demo component', () => {
	let component: SelectDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SelectDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SelectDemoComponent], (SelectDemoComponent) => {
		component = SelectDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});