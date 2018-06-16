
/*
 * We use a third party Bootstrap look-and-feel library for styling
 * These are the exports for the components that we actually use.
 * 
 * https://react-bootstrap.github.io/
 * 
 */ 
declare module 'react-bootstrap' {
    export class ListGroup extends React.Component<{}, {}>{}
    export class ListGroupItem extends React.Component<{}, {}>{}
    export class Button extends React.Component<{bsStyle?: string, bsSize?: string, onClick?: any, className?: string}, {}>{}
    export class Checkbox extends React.Component<{
        bsClass?: string, 
        inputRef:Function, 
        validationState?: 'success' | 'warning' | 'info' | null, 
        disabled?: boolean, 
        inline?: boolean, 
        title?: string, 
        className?: string
    }, {}>{}
    export class DropdownButton extends React.Component<{title: any, bsStyle?: string, bsSize?: string, noCaret?: boolean, className?: string}, {}>{}
    export class MenuItem extends React.Component<{eventKey: string, active?: boolean, divider?: boolean, className?: string}, {}>{}
    export class PanelGroup extends React.Component<{accordion: boolean, className?: string}, {}>{}
    export class Panel extends React.Component<{eventKey: string, className?: string}, {}>{}
    export module Panel{
        export class Heading extends React.Component<{className?: string}, {}>{}
        export class Title extends React.Component<{toggle?: boolean, className?: string}, {}>{}
        export class Body extends React.Component<{collapsible?: boolean, className?: string}, {}>{}
        export class Collapse extends React.Component<{
            onEnter?: Function,
            onEntering?: Function,
            onEntered?: Function,
            onExit?: Function,
            onExiting?: Function,
            onExited?: Function,
            bsClass?: string
        }, {}>{}
    }

    export class Navbar extends React.Component<{
        inverse?: boolean,
        fixedTop?: boolean,
        fixedBottom?: boolean,
        staticTop?: boolean,
        collapseOnSelect?: boolean,
        className?: string}, {}>{}

    export module Navbar{
        export class Header extends React.Component<{className?: string}, {}>{}
        export class Brand extends React.Component<{className?: string}, {}>{}
        export class Toggle extends React.Component<{className?: string}, {}>{}
        export class Collapse extends React.Component<{className?: string}, {}>{}
    }

    export class Nav extends React.Component<{pullRight?: boolean, className?: string}, {}>{}

    export class NavItem extends React.Component<{eventKey:string, href?:string, target?: string, className?: string}, {}>{}

    export class Label extends React.Component<{bsStyle: string}, {}>{}
    export class Badge extends React.Component<{bsStyle?: string, className?: string}, {}>{}

    export class Grid extends React.Component<{fluid?: boolean, className?: string}, {}>{}

    export class Row extends React.Component<{className?: string}, {}>{}

    export class Col extends React.Component<{
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xsOffset?: number,
        smOffset?: number,
        mdOffset?: number,
        lgOffset?: number,
        className?: string
    }, {}>{}

    export class ProgressBar extends React.Component<{
        className?: string,
        bsStyle?: string,
        striped?: boolean,
        active?: boolean,
        now?: number,
        key?: number,
        min?: number,
        max?: number,
    }, {}>{}
}
