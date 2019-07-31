import React, { Component } from 'react';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class App extends Component {
    render() {
      return (
        <div>
          <SideNav
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{ closeOnClick: true }}
          >
            <SideNavItem userView
              user={{
                background:'https://placeimg.com/640/480/tech',
                image: '',
                name: 'Satriawan Darmawan',
                email: 'test@gmail.com'
              }}
            />
            <SideNavItem href="#!icon" icon="cloud">First Link With Icon</SideNavItem>
            <SideNavItem href="#!second">Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href="#!third">Third Link with Waves</SideNavItem>
          </SideNav>
        </div>
      );
    }
}

export default App;
