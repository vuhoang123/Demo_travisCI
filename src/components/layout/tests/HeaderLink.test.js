import React from 'react';
import HeaderLink from '../SearchHeader/HeaderLink';
import renderer from 'react-test-renderer';

describe('HeaderLink', () => {
  
  it('matches snapshot', () => {
    
    const tree = renderer.create(
      <HeaderLink />
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  
});