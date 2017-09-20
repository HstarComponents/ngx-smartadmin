import { TestBed, inject } from '@angular/core/testing';

import { MessageboxDemoComponent } from './messagebox-demo.component';

describe('a messagebox-demo component', () => {
	let component: MessageboxDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MessageboxDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MessageboxDemoComponent], (MessageboxDemoComponent) => {
		component = MessageboxDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});