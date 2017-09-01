import { TestBed, inject } from '@angular/core/testing';

import { TableDemoComponent } from './table-demo.component';

describe('a table-demo component', () => {
	let component: TableDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TableDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TableDemoComponent], (TableDemoComponent) => {
		component = TableDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});