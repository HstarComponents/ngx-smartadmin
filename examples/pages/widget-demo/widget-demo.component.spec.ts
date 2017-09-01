import { TestBed, inject } from '@angular/core/testing';

import { WidgetDemoComponent } from './widget-demo.component';

describe('a widget-demo component', () => {
	let component: WidgetDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				WidgetDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([WidgetDemoComponent], (WidgetDemoComponent) => {
		component = WidgetDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});