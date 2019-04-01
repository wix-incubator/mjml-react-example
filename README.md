# mjml-react example project

The aim of this project is to show usage of [mjml](https://mjml.io/) and [mjml-react](https://github.com/wix-incubator/mjml-react) inside a node js.

## Usage

```bash
git clone git@github.com:wix-incubator/mjml-react-example.git
cd mjml-react-example
npm install
npm start
```

and afterwards just open your browser using the link [http://localhost:3000/](http://localhost:3000/).

> The http server will listen and restart upon each change inside src folder.
> You just need to refresh a browser window manually.

### Running from command line

You can also run and get your email inside console:

```bash
npm run build
npm run generate
```

And you can automate things by sending the generated email to your test inbox:

```bash
npm run build
npm run generate | mail -s "$(echo -e "This is a test email\nContent-Type: text/html")" myemail@myprovider.com
```
