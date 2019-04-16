import express from 'express';
import {render} from 'mjml-react';

import * as email1 from './email';
import * as email2 from './email-second';

const port = 3000;
const app = express();

app.get('/2', (req, res) => {
  const {html} = render(email2.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.get('*', (req, res) => {
  const {html}  = render(email1.generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
