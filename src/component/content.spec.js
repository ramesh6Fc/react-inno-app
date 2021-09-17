import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Content from './Content2';


describe('The content page', () => {
    it ('Content page renderer as expected',() => {
        const tree = renderer
                        .create(<Content />)
                        .toJSON();
                        console.log(tree.children, "Content page elements");

                        expect(tree).toMatchSnapshot ();
    })

})