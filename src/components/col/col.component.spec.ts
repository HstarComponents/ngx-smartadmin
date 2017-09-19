import { TestBed, inject } from '@angular/core/testing';

import { ColComponent } from './col.component';

describe('a col component', () => {
	let component: ColComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ColComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ColComponent], (ColComponent) => {
		component = ColComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});