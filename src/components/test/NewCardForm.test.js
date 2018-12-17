import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    const wrapper = shallow(
      <NewCardForm addCB={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
