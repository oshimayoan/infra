import React from 'react';
import { render } from 'react-native-testing-library';

import Provider from '../Provider';
import Badge from '../Badge';

describe('Badge', () => {
  it('should render badge properly', () => {
    let { getByType, getByText } = render(
      <Provider>
        <Badge>2</Badge>
      </Provider>,
    );
    expect(getByType(Badge)).toBeTruthy();
    expect(getByText('2')).toBeTruthy();
  });
});
