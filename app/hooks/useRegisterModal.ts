import { create } from 'zustand'

interface RegistrationModalStore{
    isOpen: boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
}

const useRegisterModal = create <RegistrationModalStore> ((set)=>({
    isOpen: true,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}))

export default useRegisterModal