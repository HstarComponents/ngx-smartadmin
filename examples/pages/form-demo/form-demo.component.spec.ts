import { TestBed, inject } from '@angular/core/testing';

import { FormDemoComponent } from './form-demo.component';

describe('a form-demo component', () => {
	let component: FormDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormDemoComponent], (FormDemoComponent) => {
		component = FormDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});