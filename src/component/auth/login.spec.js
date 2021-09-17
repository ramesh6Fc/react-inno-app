import React from 'react';
import { render, wait, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Login from './login';
import mockedAxios from 'axios';


describe('The login page', () => {
    it ('Log in renderer as expected',() => {
        const tree = renderer
                        .create(<Login />)
                        .toJSON();
                        console.log(tree, "login page elements");

                        expect(tree).toMatchSnapshot ();
    })
})
// import Service from "../../service";

// const axios = require('axios');
// jest.mock('axios');
// axios.get.mockResolvedValue({
//     data: []
// });

// // beforeEach(() => {
// //     render(<Login />);
// // });


// // import * as service from "../../service";

// // const iUsers = [{ message: "User Not found." }];
// // const iPwd = [ {
// //     accessToken: null,
// //     message: "Invalid Password!"
// //   }];
// // const user = [ {
// //     id: "8798",
// //     username: "abc",
// //     email: "abc@abc.com",
// //     accessToken: "token"
// //   } ];

// // const inValidUser = jest.spyOn(service, 'login');
// // mockGetUsers.mockResolvedValue(iUsers);

// // const inValidPwd = jest.spyOn(service, 'login');
// // mockGetRolesWithUsers.mockResolvedValue(iPwd);

// // const login = jest.spyOn(service, 'login');
// // mockGetRoles.mockResolvedValue(user);   

// afterEach(cleanup);
// test('mocking axios request', async () => {
//     const data = {
//     data: [ {username: "abc",
//         password: "Abcd123"}]
//     };

//     mockedAxios.post.mockResolvedValue(data);
//     const { getByText } = render(<App />);
//     await wait(() => {
//         console.log(getByText,"TTTTTTTTTTTTTTTTTTTTTTTT")
//     expect(getByText('mocked title'));
// });
// })



// describe('Test the login component', () => {
    
//     it('Test the login component with Invalid user and password', () => {
        
//     });

//     it('Test the login component with Invalid password', () => {
        
//     });

//     it('Test the successful login',async () => {
//         // var mock = new MockAdapter(axios);
//         // const data = { response: true };
//         // const gen = Service.login({username: 'abc', password :'Abcd123'})
//         // const { value } = await gen.next()
//        // expect(Service.login('abc', 'Abcd123')).toBe(3);
//     });
// });
