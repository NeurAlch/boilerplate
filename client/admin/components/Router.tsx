import { ReactNode } from 'react';
import { history as h } from '../../shared/utils/history';
// SEE: https://reactrouter.com/en/v6.3.0/api#unstable_historyrouter
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

export const Router = ({ children }: { children: ReactNode }) => {
  return <HistoryRouter history={h}>{children}</HistoryRouter>;
};
