import classNames from 'classnames/bind'
import Section from '@/components/shared/sections/Section'
import styles from './ImageGalleryType001.module.scss'

const cx = classNames.bind(styles)

function ImageGalleryType001({
  images,
  handleSelectedImage,
}: {
  images: string[]
  handleSelectedImage: (idx: number) => void
}) {
  return (
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
  )
}

export default ImageGalleryType001
