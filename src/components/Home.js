import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";

import * as Config from "@/utils/Config"
import { H6, Button } from '@blueprintjs/core';

import Maps from "@/components/Grid/Maps"
import Menu from "@/components/Widget/Menu"

const ResponsiveGridLayout = WidthProvider(Responsive);
export default function Home() {

  return (
    <React.Fragment>
        <div className="container-row bp3-dark">
            <div className="layer1"><Maps/></div>
            <div className="layer2">
                <ResponsiveGridLayout
                  onWidthChange={() => {}}
                  onBreakpointChange={() => {}}
                  containerPadding={[20, 20]}
                  {...Config.RGL_PROPS}>
                    <div key="menu"><Menu/></div>
                    <div key="data">
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
