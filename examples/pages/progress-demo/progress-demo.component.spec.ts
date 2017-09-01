import { TestBed, inject } from '@angular/core/testing';

import { ProgressDemoComponent } from './progress-demo.component';

describe('a progress-demo component', () => {
	let component: ProgressDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProgressDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProgressDemoComponent], (ProgressDemoComponent) => {
		component = ProgressDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});