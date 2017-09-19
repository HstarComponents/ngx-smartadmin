import { TestBed, inject } from '@angular/core/testing';

import { LayoutDemoComponent } from './layout-demo.component';

describe('a layout-demo component', () => {
	let component: LayoutDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LayoutDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LayoutDemoComponent], (LayoutDemoComponent) => {
		component = LayoutDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});