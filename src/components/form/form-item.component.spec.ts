import { TestBed, inject } from '@angular/core/testing';

import { FormItemComponent } from './form-item.component';

describe('a form-item component', () => {
	let component: FormItemComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormItemComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormItemComponent], (FormItemComponent) => {
		component = FormItemComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});