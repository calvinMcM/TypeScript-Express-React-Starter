

import * as React from "react";
import * as BootStrap from "react-bootstrap";

export class SampleHeaderState{

}

export class SampleHeaderProps{
    public name: string;
}

export class SampleHeader extends React.Component<SampleHeaderProps, SampleHeaderState>{
    render(){
        return(
            <BootStrap.Navbar>
                <BootStrap.Navbar.Header>
                    <BootStrap.Navbar.Brand>
                    <a href="#home">{this.props.name}</a>
                    </BootStrap.Navbar.Brand>
                </BootStrap.Navbar.Header>
                <BootStrap.Nav>
                    <BootStrap.NavItem eventKey={1} href="#https://github.com/calvinMcM/TypeScript-Express-React-Starter">
                    See on Github
                    </BootStrap.NavItem>
                    <BootStrap.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <BootStrap.MenuItem eventKey={3.1}>Action</BootStrap.MenuItem>
                    <BootStrap.MenuItem eventKey={3.2}>Another action</BootStrap.MenuItem>
                    <BootStrap.MenuItem eventKey={3.3}>Something else here</BootStrap.MenuItem>
                    <BootStrap.MenuItem divider />
                    <BootStrap.MenuItem eventKey={3.4}>Separated link</BootStrap.MenuItem>
                    </BootStrap.NavDropdown>
                </BootStrap.Nav>
            </BootStrap.Navbar>
        )
    }
}