import React from 'react';
import {Link} from "react-router-dom";

export const navConfig = {
    inputs: {
        wellInput: '/well-input',
        stringInput: '/string-input'
    }
}

const navigation = [{
    label: 'Inputs',
    subItems: [{
        label: 'Well Input',
        link: navConfig.inputs.wellInput
    }, {
        label: 'String Input',
        link: navConfig.inputs.stringInput
    }, {
        label: 'Trajectory Input',
        link: '/trajectory-input'
    }, {
        label: 'Wellbore Input',
        link: '/wellbore-input'
    }, {
        label: 'Centralizer Input',
        link: '/centralizer-input'
    }]
}, {
    label: 'View / Edit',
    subItems: [{
        label: 'String View / Edit',
        link: '/string-view'
    }, {
        label: 'Trajectory Viewer',
        link: '/trajectory-viewer'
    }]
}, {
    label: 'Outputs',
    subItems: [{
        label: 'Tension, Torque & Stretch',
        link: '/tension'
    }, {
        label: 'T&D Roadmaps (aka Broomstick Plots)',
        link: '/roadmaps'
    }]
}]

const Header = () => {
    return (
        <header>
            <ul>
                {navigation.map(item => <li key={item.label}>
                    {item.label}
                    <ul>{item.subItems.map((sub) => <li key={sub.label}>
                        <Link to={sub.link}>{sub.label}</Link>
                    </li>)}</ul>
                </li>)}
            </ul>
        </header>
    );
};

export default Header;