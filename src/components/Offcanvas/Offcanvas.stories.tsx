import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Offcanvas from './Offcanvas';

//This default export determines where your story goes in the story list
export default {title: 'Offcanvas', component: Offcanvas,} as ComponentMeta<typeof Offcanvas>;

//We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Offcanvas> = (args) => <Offcanvas {...args}/>;

export const OffcanvasStory = Template.bind({});

OffcanvasStory.args = {
    children: "Hello World!",
    className: "",
    styles: {backgroundColor: '#00FF8F'},
    buttonLabel: "Open Offcanvas",
    buttonClassName: "",
    buttonStyles: {
        backgroundColor: '#FF22EE',
        color: '#FFF'
    },
    closeButtonBackgroundClass: "",
    closeButtonBackgroundStyle: {backgroundColor: '#000'},
};
