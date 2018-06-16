

import * as React from "react";
import * as BootStrap from "react-bootstrap";

export class SampleAppBodyState{

}

export class SampleAppBodyProps{
}

export class SampleAppBody extends React.Component<SampleAppBodyProps, SampleAppBodyState>{
    render(){
        return(
            <BootStrap.Grid fluid>
                <BootStrap.Col sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2}>
                    <BootStrap.Jumbotron>
                        <h1>A Simple Starter Kit</h1>
                        <p>This starter kit should help get you on your way towards creating an application</p>
                        <BootStrap.Button bsStyle="primary">See on Github</BootStrap.Button>
                    </BootStrap.Jumbotron>
                </BootStrap.Col>
            </BootStrap.Grid>
        )
    }
}