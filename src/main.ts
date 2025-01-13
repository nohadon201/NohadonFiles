import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import 'codemirror/lib/codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/django/django';
import 'codemirror/mode/clike/clike';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

