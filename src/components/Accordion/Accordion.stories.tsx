import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import AccordionItem from './Accordion';

//This default export determines where your story goes in the story list
export default {title: 'Accordion', component: AccordionItem,} as ComponentMeta<typeof AccordionItem>;

//We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AccordionItem> = (args) => {
    return (
        <div>
            <AccordionItem {...args}/>
            <AccordionItem {...args}/>
            <AccordionItem {...args}/>
            <AccordionItem {...args}/>
        </div>
    )
};

export const AccordionStory = Template.bind({});

AccordionStory.args = {
    title: 'How to accost someone?',
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    /*contentStyles: {
        padding: '1rem'
    },
    headerStyles: {
        margin: '0'
    },
    buttonStyles: {
        display: 'block',
        width: '320px',
        fontSize: '1rem',
        textAlign: 'left',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid grey',
        padding: '1rem',
    }*/
};
