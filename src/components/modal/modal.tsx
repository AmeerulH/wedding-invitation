import './modal.css'

type TModalProps = {
    children: React.ReactNode;
    onClick: () => void;
}

const Modal = (props: TModalProps) => {
  return (
    <div className='modal' onClick={props.onClick}>
        <div className="modal__container">
            {props.children}
        </div>
    </div>
  )
}

export default Modal