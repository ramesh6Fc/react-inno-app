import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Takeaction from './takeaction';


describe('The Takeaction Component', () => {
    it ('Takeaction component page renderer as expected',() => {
        const tree = renderer
                        .create(<Takeaction />)
                        .toJSON();
                        console.log(tree.children, "Takeaction component page elements");

                        expect(tree).toMatchSnapshot ();
    })

})