import { TestBed, inject } from '@angular/core/testing';

import { ImageZoomDemoComponent } from './image-zoom-demo.component';

describe('a image-zoom-demo component', () => {
	let component: ImageZoomDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ImageZoomDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ImageZoomDemoComponent], (ImageZoomDemoComponent) => {
		component = ImageZoomDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});