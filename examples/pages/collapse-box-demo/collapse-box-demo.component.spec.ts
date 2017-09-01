import { TestBed, inject } from '@angular/core/testing';

import { CollapseBoxDemoComponent } from './collapse-box-demo.component';

describe('a collapse-box-demo component', () => {
	let component: CollapseBoxDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CollapseBoxDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CollapseBoxDemoComponent], (CollapseBoxDemoComponent) => {
		component = CollapseBoxDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});