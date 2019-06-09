import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import UsersList from '../UsersList';

const users = [
  {
    'active': true,
    'email': 'paulalopezrimari@gmail.com',
    'id': 1,
    'username': 'rosariopaula'
  },
  {
    'active': true,
    'email': 'rosariolopez@upeu.edu.pe',
    'id': 2,
    'username': 'rosario'
  }
];

// test('UsersList renders properly', () => {
//   const wrapper = shallow(<UsersList users={users}/>);
//   const element = wrapper.find('h4');
//   expect(element.length).toBe(2);
//   expect(element.get(0).props.children).toBe('rosariopaula');
// });

test('UsersList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
