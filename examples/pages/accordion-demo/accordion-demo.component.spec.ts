import { TestBed, inject } from '@angular/core/testing';

import { AccordionDemoComponent } from './accordion-demo.component';

describe('a accordion-demo component', () => {
	let component: AccordionDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AccordionDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AccordionDemoComponent], (AccordionDemoComponent) => {
		component = AccordionDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});