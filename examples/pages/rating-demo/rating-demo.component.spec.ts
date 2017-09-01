import { TestBed, inject } from '@angular/core/testing';

import { RatingDemoComponent } from './rating-demo.component';

describe('a rating-demo component', () => {
	let component: RatingDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RatingDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RatingDemoComponent], (RatingDemoComponent) => {
		component = RatingDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});