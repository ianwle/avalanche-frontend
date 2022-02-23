import React from 'react';
import * as Config from "@/utils/Config"
import { Responsive, WidthProvider } from "react-grid-layout";
import { Title } from "@mantine/core";

import Maps from "@/components/Grid/Maps"

const ResponsiveGridLayout = WidthProvider(Responsive);
const defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    isDraggable: true,
    isResizable: true,
    autosize: true,
    margin: [10, 10]
}
export default function Home() {

  return (
    <React.Fragment>
        <div class="container-row">

            <div class="layer1"><Maps/></div>
            <div class="layer2">
                <ResponsiveGridLayout
                layouts={Config.LAYOUT}
                breakpoints={Config.BREAKPOINTS}
                cols={Config.COLS}
                onWidthChange={() => {console.log("Width")}}
                onBreakpointChange={() => {console.log("Breakpoint")}}
                containerPadding={[20, 20]}
                {...defaultProps}>
                <div key="control">
                    <div>

                    </div>
                </div>     
                <div key="1">
                    <div >
                    <Title order={5}>Menu</Title>
                            <p> THis is a test gif</p>
                    </div>
                </div>    
                <div key="2">
                    <div>
                        <h5><a href="#">Card heading</a></h5>
                            <p> THis is a test gif</p>
                    </div>
                </div>  
            </ResponsiveGridLayout>
            </div>
        </div>
    </React.Fragment>
  );
}