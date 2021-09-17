import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Footer from './footer';


describe('The Footer page', () => {
    it ('Footer page renderer as expected',() => {
        const tree = renderer
                        .create(<Footer />)
                        .toJSON();
                        console.log(tree.children, "Footer page elements");

                        expect(tree).toMatchSnapshot ();
    })

})