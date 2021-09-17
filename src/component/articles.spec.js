import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Articles from './articles';


describe('The article page', () => {
    it ('Articles page renderer as expected',() => {
        const tree = renderer
                        .create(<Articles />)
                        .toJSON();
                        console.log(tree.children, "Articles page elements");

                        expect(tree).toMatchSnapshot ();
    })

})