import React from 'react'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import { withAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';

configure({adapter: new Adapter()});

describe("Login Home Page", () => {
    let wrapper;
    // beforeEach(() => {
    //     wrapper = shallow(<Home />);
    //     // console.log("Check Shallow:" +  wrapper.debug() );
    // });
    it("Get the logged in user name and email", () => {
        const auth = {
            isAuthenticated: jest.fn().mockImplementation(() => Promise.resolve(true))
          };

        const wrapper = shallow(<Home auth={auth} />);
        // const button = wrapper.find('button').text();
        // expect(text).toEqual(Test);
        // expect(button.text()).toEqual('Logout');
        expect(wrapper.find("div")).toHaveLength(1);
        // expect(wrapper.contains(<p>Test</p>)).toEqual(true);
        // expect(wrapper.contains(<Link to="/staff">click here</Link>)).toEqual(true);
        expect(wrapper).toBeTruthy();
    })
});


// describe("Login Home Page", () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<Home />);
//     });
//     it("User is not logged in, please provide your credentials", () => {
//         // console.log(wrapper);
//         wrapper.setState({authenticated: true});
//         expect(wrapper.contains(<Link to="/staff">click here</Link>).to.equal(true));
//     })
// });