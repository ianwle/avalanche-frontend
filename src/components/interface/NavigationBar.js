import React from "react";

import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Disaster Dashboard</NavbarHeading>
                    <NavbarDivider/>
                    <NavbarHeading>Hi</NavbarHeading>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT}>
                    <Button className={Classes.MINIMAL} icon="edit" text="Edit" />

                    <Button className={Classes.MINIMAL} icon="globe" text="Marketplace" />
                    <Button className={Classes.MINIMAL} icon="asterisk" text="Workflows" />

                    </NavbarGroup>
                </Navbar>
            </React.Fragment>
        );
    }
}