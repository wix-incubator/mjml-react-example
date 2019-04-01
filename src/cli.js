import { render } from 'mjml-react';

import { generate } from './email';

const { html } = render(generate(), { validationLevel: 'soft' });
console.log(html);
