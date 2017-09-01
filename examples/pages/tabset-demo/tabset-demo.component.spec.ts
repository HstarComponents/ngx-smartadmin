import { TestBed, inject } from '@angular/core/testing';

import { TabsetDemoComponent } from './tabset-demo.component';

describe('a tabset-demo component', () => {
	let component: TabsetDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TabsetDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TabsetDemoComponent], (TabsetDemoComponent) => {
		component = TabsetDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});