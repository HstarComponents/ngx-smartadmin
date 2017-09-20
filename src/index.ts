import { SmartAdminModule } from './smartadmin.module';

export * from './services';

let version = process.env.LIB_VERSION || 'dev';

export {
  SmartAdminModule,
  version
};
