import { TestBed, inject } from '@angular/core/testing';

import { AutocompleteDemoComponent } from './autocomplete-demo.component';

describe('a autocomplete-demo component', () => {
	let component: AutocompleteDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AutocompleteDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AutocompleteDemoComponent], (AutocompleteDemoComponent) => {
		component = AutocompleteDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});