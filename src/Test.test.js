import React from 'react'
import { act } from 'react-dom/test-utils';

import Test from './Test';
import { shallow } from 'enzyme';

it('should test well', () => {
  const wrapper = shallow(<Test />);
  const setValue = wrapper.find('input').props().onChange;
  setValue({ target: { value: 'pwet' }});
  expect(wrapper.html()).toContain('pwet')
})
