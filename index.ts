import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import frameguard from 'frameguard';
import cors from 'cors';
import api from './server';

export default (app, server) => {
  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
  app.use(serveStatic(`${__dirname}/dist`));
  app.use(frameguard({ action: 'deny' }));
  app.use(cors({ origin: '*' }));
  app.use('/api', api);
  app.get('/*', (req, res) => res.redirect('https://vote.beefy.finance'));
};
