import React from 'react';
import { createMemoryHistory } from 'history';
import App from './App';
import { shallow } from 'enzyme';

const history = createMemoryHistory();

it('renders without crashing', () => {
  shallow(<App history={history} />);
});
