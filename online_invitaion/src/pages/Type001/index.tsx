import React from 'react'
import classNames from 'classnames/bind'
import styles from './Type001.module.scss'

// 타입
import { Wedding } from '@models/wedding'

// 컴포넌트
import Heading from '@components/sections/headers/Heading' // 상단 헤딩
import Video from '@components/sections/videos/Video' // 비디오 섹션
import Intro from '@components/sections/intros/Intro' // 상단 간략 소개글
import Invitation from '@components/sections/contents/Invitation' // 초대글
import ImageGallery from '@components/sections/imageGallery/ImageGallery' // 사진첩
import Calendar from '@components/sections/calendars/Calendar' // 캘린더
import Map from '@components/sections/maps/Map' // 지도 (오시는 길)
import Contact from '@components/sections/contacts/Contact' // 연락처 및 마음전하기
import Share from '@components/sections/shares/Share' // 공유하기

const cx = classNames.bind(styles)

function Type001({ wedding }: { wedding: Wedding }) {
  // 청첩장 데이터 뽑아서 넣기 위한 코드
  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
    </div>
  )
}

export default Type001
