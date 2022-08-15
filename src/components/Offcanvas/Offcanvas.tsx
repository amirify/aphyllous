import React, {useState} from 'react';
import './Offcanvas.css';

export interface OffcanvasProps {
    children: any;
    className: string;
    styles: Object;
    buttonLabel: string;
    buttonClassName: string;
    buttonStyles: Object;
    closeButtonBackgroundClass: string;
    closeButtonBackgroundStyle: Object;
}

export default function Offcanvas(props: OffcanvasProps) {

    const [state, setState] = useState('');

    return (
        <>
            <button onClick={() => setState('aph-open')}
                    className={props.buttonClassName} style={props.buttonStyles}>
                {props.buttonLabel}
            </button>
            <div className={`aph-offcanvas ${state} ${props.className}`}
                 style={props.styles}>
                <button onClick={() => setState('aph-close')} className="aph-offcanvas-close">
                    <span className={props.closeButtonBackgroundClass} style={props.closeButtonBackgroundStyle}/>
                    <span className={props.closeButtonBackgroundClass} style={props.closeButtonBackgroundStyle}/>
                </button>
                {props.children}
            </div>
        </>
    )
}
