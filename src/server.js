import express from 'express';
import {render} from 'mjml-react';

import {generate} from './email';

const port = 3000;
const app = express();

app.get('*', (req, res) => {
  const {html}  = render(generate(), {validationLevel: 'soft'});
  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
