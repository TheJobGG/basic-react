import ReactDOM from 'react-dom';
import './Modal.css'


export function Modal({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal')
    )
}