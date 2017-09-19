import { TestBed, inject } from '@angular/core/testing';

import { SelectComponent } from './select.component';

describe('a select component', () => {
	let component: SelectComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SelectComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SelectComponent], (SelectComponent) => {
		component = SelectComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});