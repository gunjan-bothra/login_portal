import React from 'react'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Staff from './Staff';
// import {localStorage} from 'jest-localstorage-mock';

configure({adapter: new Adapter()});

describe("Login Staff Page", () => {
    let wrapper;
    let idToken = {
        idToken: {
        idToken: {
            claims: {
                'email': 'XYZ@gmail.com',
                'name': 'XYZ'
            }
        }
    }
    }
    beforeEach(() => {
        wrapper = shallow(<Staff />);
        // console.log("Check Shallow:" +  wrapper.debug() );
    });
    test('throw error', () => {
        Storage.prototype.setItem = jest.fn(() => {
          console.log(" called "); // <-- was called 
            // return {
            //     'okta-token-storage': idToken
            // }
        });
      console.log(idToken);
        localStorage.setItem('okta-token-storage', idToken);
        // console.log(localStorage.getItem('okta-token-storage'));
      });
    // it("Get the logged in user name and email", () => {
        
    //     wrapper.setState({currentUserEmail: 'XYZ@gmail.com', currentUserName:'XYZ'});
    //     expect(wrapper.contains(<h1>Welcome XYZ</h1>)).toEqual(true);
    //     expect(wrapper.contains(<p>Email: XYZ@gmail.com</p>)).toEqual(true);
    //     // expect(wrapper).toBeTruthy();
    // })
});