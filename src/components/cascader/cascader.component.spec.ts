import { TestBed, inject } from '@angular/core/testing';

import { CascaderComponent } from './cascader.component';

describe('a cascader component', () => {
	let component: CascaderComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CascaderComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CascaderComponent], (CascaderComponent) => {
		component = CascaderComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});