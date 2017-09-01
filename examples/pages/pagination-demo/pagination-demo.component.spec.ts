import { TestBed, inject } from '@angular/core/testing';

import { PaginationDemoComponent } from './pagination-demo.component';

describe('a pagination-demo component', () => {
	let component: PaginationDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PaginationDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PaginationDemoComponent], (PaginationDemoComponent) => {
		component = PaginationDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});