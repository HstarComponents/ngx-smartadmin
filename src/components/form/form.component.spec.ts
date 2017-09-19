import { TestBed, inject } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('a form component', () => {
	let component: FormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormComponent], (FormComponent) => {
		component = FormComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});