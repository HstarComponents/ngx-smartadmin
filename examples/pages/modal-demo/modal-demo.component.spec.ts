import { TestBed, inject } from '@angular/core/testing';

import { ModalDemoComponent } from './modal-demo.component';

describe('a modal-demo component', () => {
	let component: ModalDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ModalDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ModalDemoComponent], (ModalDemoComponent) => {
		component = ModalDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});