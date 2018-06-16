import * as React from "react";
import * as BootStrap from "react-bootstrap";

import {SampleHeader} from './SampleHeader';
import { SampleAppBody } from "./SampleAppBody";

export class AppState{

}

export class AppProps{
    public name: string;
}

export class App extends React.Component<AppProps, AppState>{
    render(){
        return(
            <div>
                <SampleHeader name="TypeScript-Express-React Starter"/>
                <SampleAppBody/>
            </div>
        )
    }
}