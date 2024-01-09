import classNames from 'classnames/bind'
import styles from './Video.module.scss'

// 공통 섹션 디자인 불러오기
import Section from '@/components/shared/sections/Section'

const cx = classNames.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      {/* video 태그 내부에 source가 하나 이상일 경우 autoPlay를 위해서 muted가 필수로 필요 */}
      {/* 또한, 직접 플레이 조종이나, 크게보기등 유튜브 같은 기능을 원하면 controls={true} 필요 */}
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/videos/main.webm" type="video/webm" />
        <source src="/assets/videos/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
