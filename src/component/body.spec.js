import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Body from './body';


describe('The body page', () => {
    it ('Body page renderer as expected',() => {
        const tree = renderer
                        .create(<Body />)
                        .toJSON();
                        console.log(tree.children, "Body page elements");

                        expect(tree).toMatchSnapshot ();
    })

})