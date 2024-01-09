import { useContext, createContext, ComponentProps, useState } from 'react'
import { createPortal } from 'react-dom'

import Modal from '@/components/shared/modals/Modal'

// 모달 컴포넌트의 props 타입 추출
type ModalProps = ComponentProps<typeof Modal>
type ModialOptions = Omit<ModalProps, 'open'> // Modal Props 타입에서 open (boolean) 타입만 제외해서 받기

interface ModalContextValue {
  open: (options: ModialOptions) => void
  close: () => void
}

// 컨텍스트 객체 생성 타입은 ModalContextValue Default = undefined
const Context = createContext<ModalContextValue | undefined>(undefined)

// 기본값
const defaultValues: ModalProps = {
  open: false,
  body: null,
  onRightButtonClick: () => {},
  onLeftButtonClick: () => {},
}

export function ModalContext({ children }: { children: React.ReactNode }) {
  const [modalState, setModalState] = useState(defaultValues)

  // index.html의 root-portal을 불러옴
  const $portal_root = document.getElementById('root-portal')

  // open 함수
  const open = (options: ModialOptions) => {
    setModalState({ ...options, open: true })
  }

  // close 함수
  const close = () => {
    setModalState(defaultValues)
  }

  const values = {
    open,
    close,
  }

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modalState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const values = useContext(Context)

  if (values == null) {
    throw new Error('ModalContext 안에서 사용해주세요.')
  }

  return values
}
