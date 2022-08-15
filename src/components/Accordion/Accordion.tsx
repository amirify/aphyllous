import React, {useState} from 'react';
import './Accordion.css';

export interface AccordionItemProps {
    title: string;
    content: string;
    itemClassName: string;
    itemStyles: Object;
    headerClassName: string;
    headerStyles: Object;
    buttonClassName: string;
    buttonStyles: Object;
    contentClassName: string;
    contentStyles: Object;
    arrowBackgroundClass: string;
    arrowBackgroundStyle: Object;
}

export default function AccordionItem(props: AccordionItemProps) {

    const [open, setOpen] = useState(false);

    return (
        <div className={`aph-accordion-item ${props.itemClassName || ''}`} style={props.itemStyles}>
            <h2 className={`aph-accordion-header ${props.headerClassName || 'aph-default'}`} style={props.headerStyles}>
                <button className={`aph-accordion-button ${open ? 'aph-open' : ''} ${props.buttonClassName || ''}`}
                        style={props.buttonStyles}
                        onClick={() => setOpen(!open)}>
                    {props.title}
                    <i className={props.arrowBackgroundClass || 'aph-default'} style={props.arrowBackgroundStyle}/>
                </button>
            </h2>
            <div className="aph-accordion-collapse">
                <div className={`aph-accordion-content ${open ? 'aph-open' : ''}`}>
                    <div className={props.contentClassName || ''} style={props.contentStyles}>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}
