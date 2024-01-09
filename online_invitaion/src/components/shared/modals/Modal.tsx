import classNames from 'classnames/bind'
import Dimmed from '../dimmeds/Dimmed'
import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

interface ModalProps {
  open: boolean // 모달 온/오프 여부
  title?: string // 타이틀 (선택)
  body: React.ReactNode // 모달내용
  rightButtonLabel?: string //오른쪽 버튼 텍스트
  onRightButtonClick: () => void // 오른쪽 버튼 클릭 이벤트
  leftButtonLabel?: string // 왼쪽 버튼 텍스트
  onLeftButtonClick: () => void //  왼쪽 버튼 클릭 이벤트
}

function Modal({
  open,
  title,
  body,
  leftButtonLabel = '닫기',
  rightButtonLabel = '확인',
  onRightButtonClick,
  onLeftButtonClick,
}: ModalProps) {
  if (open === false) {
    return null
  }

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title == null ? null : (
              <h4 className={cx('txt-title')}>{title}</h4>
            )}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onLeftButtonClick}>{leftButtonLabel}</button>
            <button onClick={onRightButtonClick}>{rightButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}

export default Modal
