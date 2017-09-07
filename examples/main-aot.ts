import './vendor';
import './config';

import { AppModuleNgFactory } from '../aot/examples/app.module.ngfactory';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

enableProdMode();
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
