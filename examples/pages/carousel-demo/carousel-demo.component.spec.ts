import { TestBed, inject } from '@angular/core/testing';

import { CarouselDemoComponent } from './carousel-demo.component';

describe('a carousel-demo component', () => {
	let component: CarouselDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CarouselDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CarouselDemoComponent], (CarouselDemoComponent) => {
		component = CarouselDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});