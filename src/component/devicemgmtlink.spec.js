import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Devsimmgmt from './devicemgmtlink';


describe('The Device mnagement Link Component', () => {
    it ('Device mnagement Link component page renderer as expected',() => {
        const tree = renderer
                        .create(<Devsimmgmt />)
                        .toJSON();
                        console.log(tree.children, "Device mnagement Link component page elements");

                        expect(tree).toMatchSnapshot ();
    })

})