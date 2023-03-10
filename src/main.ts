import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(
  'Mgo+DSMBaFt/QHRqVVhlX1pAaVZdX2NLfUN3T2NddV51ZCQ7a15RRnVfQVxjSX9TcERhWntYdg==;Mgo+DSMBPh8sVXJ0S0J+XE9BdVRGQmpWfFN0RnNYdV50flVDcC0sT3RfQF5jSn9TdkRjX35cc3NVQA==;ORg4AjUWIQA/Gnt2VVhkQlFac1xJWXxAYVF2R2BJflRwcF9GZUwgOX1dQl9gSX1SdkViWXlfcnddT2Y=;MTI5NDA4NkAzMjMwMmUzNDJlMzBjNW1XR1BqSXZtOVBKVjJDbm9FZDJBc3NtUy9EMlJIdFZrMkxacW9pMlIwPQ==;MTI5NDA4N0AzMjMwMmUzNDJlMzBpaWordGlGYnUwaTZaYjRMMHV0a055QkNlT3prVzVyOXA3eFdKV2JyVENzPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpBVmdWd0x0RWFab196dFFMYFlBNQtUQF1hSn5Qd0VjWH9YcXZRQGBa;MTI5NDA4OUAzMjMwMmUzNDJlMzBtaWwvY292NU1qZGwyWGM1bXcxaDkwam1JUDJFbXBuckNpN1FjdVRXQWNzPQ==;MTI5NDA5MEAzMjMwMmUzNDJlMzBrSWlBd3ZHa1owRHJhQmh6QTMrMFB0UUpqVjdLbURtZVZ2QnJMaDVuNW9NPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1xJWXxAYVF2R2BJflRwcF9GZUwgOX1dQl9gSX1SdkViWXlfcnFWRWY=;MTI5NDA5MkAzMjMwMmUzNDJlMzBBV2tubVp6NUpNbG5iN0t1NzVoSlpudTR6L3ZSdyt4dnJLdFp4VU5zblFZPQ==;MTI5NDA5M0AzMjMwMmUzNDJlMzBVdEt2K09SSUZhY2tmMkZwSHA4QlFpS2JYVS83Wm9sVGJvam9pd1NWbFZ3PQ==;MTI5NDA5NEAzMjMwMmUzNDJlMzBtaWwvY292NU1qZGwyWGM1bXcxaDkwam1JUDJFbXBuckNpN1FjdVRXQWNzPQ=='
);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
