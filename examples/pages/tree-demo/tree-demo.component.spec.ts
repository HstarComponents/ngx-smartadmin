import { TestBed, inject } from '@angular/core/testing';

import { TreeDemoComponent } from './tree-demo.component';

describe('a tree-demo component', () => {
	let component: TreeDemoComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TreeDemoComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TreeDemoComponent], (TreeDemoComponent) => {
		component = TreeDemoComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});