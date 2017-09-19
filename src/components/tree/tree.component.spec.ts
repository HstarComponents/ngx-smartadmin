import { TestBed, inject } from '@angular/core/testing';

import { TreeComponent } from './tree.component';

describe('a tree component', () => {
	let component: TreeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TreeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TreeComponent], (TreeComponent) => {
		component = TreeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});