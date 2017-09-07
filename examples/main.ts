import './vendor';
import './config';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

console.log('Running JIT compiled');
platformBrowserDynamic().bootstrapModule(AppModule);
