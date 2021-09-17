import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Registration from './registration';


describe('The registration page', () => {
    it ('Registration page renderer as expected',() => {
        const tree = renderer
                        .create(<Registration />)
                        .toJSON();
                        console.log(tree.children, "Registration page elements");

                        expect(tree).toMatchSnapshot ();
    })

})