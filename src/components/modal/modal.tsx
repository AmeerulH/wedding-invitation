import './modal.css'

type TModalProps = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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