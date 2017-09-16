import { TestBed, inject } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('a carousel component', () => {
	let component: CarouselComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CarouselComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CarouselComponent], (CarouselComponent) => {
		component = CarouselComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});