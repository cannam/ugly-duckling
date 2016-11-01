import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapWorkerUi } from '@angular/platform-webworker';

if (environment.production) {
  enableProdMode();
}

bootstrapWorkerUi('index.worker.js');
