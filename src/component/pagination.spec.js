import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Pagination from './pagination';


describe('The Pagination page', () => {
    it ('Pagination page renderer as expected',() => {
        const tree = renderer
                        .create(<Pagination />)
                        .toJSON();
                        console.log(tree.children, "Pagination page elements");

                        expect(tree).toMatchSnapshot ();
    })

})