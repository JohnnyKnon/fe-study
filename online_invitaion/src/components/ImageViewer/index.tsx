import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import './swiper.css'
import Dimmed from '@/components/shared/dimmeds/Dimmed'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  //  오픈 상태가 아닐 경우 호출X
  if (open === false) {
    return null
  }

  return (
    <Dimmed>
      <CloseButton className={cx('ico-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt="이미지 뷰어" />
              </picture>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Dimmed>
  )
}

// 닫기 버튼
function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
      className={className}
    >
      <title />
      <g>
        <path d="M20.4844,54H66a6,6,0,0,0,0-12H20.4844l7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844-8.4844l-18,18a5.9979,5.9979,0,0,0,0,8.4844l18,18a5.9994,5.9994,0,1,0,8.4844-8.4844Z" />
        <path d="M90,0H42a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H48V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z" />
      </g>
    </svg>
  )
}

export default ImageViewer
