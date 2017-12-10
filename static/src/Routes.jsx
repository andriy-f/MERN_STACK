import React from 'react';
import { Route, withRouter } from 'react-router';

import App from './App.jsx';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const NoMatch = () => <p>Page Not Found </p>;

export default (
  <Route path="/" component={App}>
    <Route path="issues" component={withRouter(IssueList)} />
    <Route path="issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </Route>
);