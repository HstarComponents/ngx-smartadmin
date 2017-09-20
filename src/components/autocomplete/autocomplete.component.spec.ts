import { TestBed, inject } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';

describe('a autocomplete component', () => {
	let component: AutocompleteComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AutocompleteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AutocompleteComponent], (AutocompleteComponent) => {
		component = AutocompleteComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});