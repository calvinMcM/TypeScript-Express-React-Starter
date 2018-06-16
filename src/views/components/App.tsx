import * as React from "react";
import * as ReactDOM from "react-dom";

export class AppState{

}

export class AppProps{
    public name: string;
}

export class App extends React.Component<AppProps, AppState>{
    render(){
        return(<div>Welcome to {this.props.name}!</div>)
    }
}