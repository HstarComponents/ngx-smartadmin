import { TestBed, inject } from '@angular/core/testing';

import { ImageZoomComponent } from './image-zoom.component';

describe('a image-zoom component', () => {
	let component: ImageZoomComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ImageZoomComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ImageZoomComponent], (ImageZoomComponent) => {
		component = ImageZoomComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});