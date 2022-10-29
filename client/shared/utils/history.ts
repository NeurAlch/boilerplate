import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

history.listen((update) => {
  console.log('TODO: track history', update.location.pathname);
});
