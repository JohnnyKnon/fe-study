import classNames from 'classnames/bind'
import Section from '@/components/shared/sections/Section'
import styles from './ImageGallery.module.scss'

import ImageViewer from '../../ImageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  // 클릭한 이미지의 인덱스를 보관할 상태
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1 // 인덱스가 -1 보다 클때 오픈 True를 반환

  // 이미지 선택(슬라이더 오픈) 함수
  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  // 이미지 슬라이더 닫기 함수
  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {/* index를 사용하는건 좋지 않지만 유동적으로 변경되는 값이 아니기에 일단 이렇게 처리 */}
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt="이미지" />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
