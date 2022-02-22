import React from "react";

import PropTypes from "prop-types";

import { Callout, Card } from "@blueprintjs/core";
import { Responsive, WidthProvider } from "react-grid-layout";

import NavigationBar from "@/components/interface/NavigationBar";
import * as Config from "@/utils/Config"
// import Maps from "./Maps";

const ResponsiveGridLayout = WidthProvider(Responsive);
const layout = {
    lg: [{ i: "0", x: 0, y: 0, w: 1, h: 2, static: true },
         { i: "1", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
         { i: "2", x: 4, y: 0, w: 1, h: 2 }
    ]
};

export default class Home extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        items: 20,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        autosize: true,
        margin: [10, 10]
      };
    
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <NavigationBar/>
                    <br/>
                        <ResponsiveGridLayout
                            layouts={layout}
                            breakpoints={Config.BREAKPOINTS}
                            cols={Config.COLS}
                            onWidthChange={() => {console.log("Width")}}
                            onBreakpointChange={() => {console.log("Breakpoint")}}
                            containerPadding={[0, 0]}
                            {...this.props}>
                            <div key="0">
                <Card >
                    <h5><a href="#">Card heading</a></h5>
                    <Callout style={{padding: "0px 0px 0px 0px"}} >
                        <p> THis is a test gif</p>
                    </Callout>
                </Card>
            </div>       
            <div key="1">
                <Card >
                    <h5><a href="#">Card heading</a></h5>
                    <Callout style={{padding: "0px 0px 0px 0px"}} >
                        <p> THis is a test gif</p>
                    </Callout>
                </Card>
            </div>    
            <div key="2">
                <Card>
                    <h5><a href="#">Card heading</a></h5>
                    <Callout style={{padding: "0px 0px 0px 0px"}} >
                        <p> THis is a test gif</p>
                    </Callout>
                </Card>
            </div>  
                        </ResponsiveGridLayout>
                </div>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    onLayoutChange: PropTypes.func
}