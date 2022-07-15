import React, {useState} from 'react';
import './Offcanvas.css';

export interface OffcanvasProps {
    children: any;
    backgroundColor: string;
    className: string;
    buttonLabel: string;
    buttonClassName: string;
    closeButtonColor: string;
}

export default function Offcanvas(props: OffcanvasProps) {

    const [offcanvasState, toggleOffcanvasState] = useState('');

    return (
        <>
            <button onClick={() => toggleOffcanvasState('aph-open')}
                    className={props.buttonClassName}>
                {props.buttonLabel}
            </button>
            <div style={{backgroundColor: props.backgroundColor || "#FFF"}}
                 className={`aph-offcanvas ${offcanvasState} ${props.className}`}>
                <button onClick={() => toggleOffcanvasState('aph-close')} className="aph-offcanvas-close">
                    <span style={{backgroundColor: props.closeButtonColor || "#000"}}/>
                    <span style={{backgroundColor: props.closeButtonColor || "#000"}}/>
                </button>
                {props.children}
            </div>
        </>
    )
}
