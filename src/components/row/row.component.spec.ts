import { TestBed, inject } from '@angular/core/testing';

import { RowComponent } from './row.component';

describe('a row component', () => {
	let component: RowComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RowComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RowComponent], (RowComponent) => {
		component = RowComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});