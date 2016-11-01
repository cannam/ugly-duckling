/**
 * Created by lucast on 01/11/2016.
 */
import './polyfills.ts';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';
import { AppModule } from './app/app.module';

platformWorkerAppDynamic().bootstrapModule(AppModule);
