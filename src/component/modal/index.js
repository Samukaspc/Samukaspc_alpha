import { IoClose } from "react-icons/io5";
import { Bakcground, BoxSvg, ModalBox } from "./styled";

export default function Modal({ isOpen, children,setOpenModal }) {
    if (isOpen) {
        return <Bakcground>
            <ModalBox>
                <BoxSvg>
                    <IoClose onClick={setOpenModal} size={30} ></IoClose>
                </BoxSvg>
               {children}
            </ModalBox>
        </Bakcground>
    }
}