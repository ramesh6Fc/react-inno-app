import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import App from './app';


describe('The app ', () => {
    it ('Application initial renderer as expected',() => {
        const tree = renderer
                        .create(<App />)
                        .toJSON();
                        console.log(tree.children, "App initial elements");

                        expect(tree).toMatchSnapshot ();
    })

})
