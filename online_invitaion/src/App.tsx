import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'

import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'

import { Wedding } from '@models/wedding'

import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Calendar from '@components/sections/Calendar'
import Map from '@components/sections/Map'
import Contact from '@components/sections/Contact'
import Share from '@components/sections/Share'

const cx = classNames.bind(styles)

function App() {
  // wedding 데이터 useState
  const [wedding, setWedding] = useState<Wedding | null>(null)
  // 현재 로딩중인지 아닌지 체크하기 위한 state
  const [loading, setLoading] = useState(false)
  // 에러 대응을 위한 state
  const [error, setError] = useState(false)

  // 1. wedding 데이터 호출 ([]가 비어있기 마운트 될때만 실행 (처음만실행))
  useEffect(() => {
    setLoading(true) // 로딩 시작
    // callback, promise, async/await
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        // 에러처리
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        // 정상작동시
        return response.json()
      })
      .then((data) => {
        // wedding state에 값넣어주기
        setWedding(data)
        setLoading(false) // 로딩 끝
      })
      .catch((e) => {
        // 에러출력
        console.log(e)
        setError(true) // 상태값 true로 변경되고 에러임을 알림
      })
      .finally(() => {
        // 성공/실패 여부 없이 마지막에 실행되는 함수 finally
        setLoading(false) // 로딩 리셋
      })
  }, [])

  // 로딩중일때 Loading UI 호출
  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  // 문제가 발생했을 경우 Error UI 호출
  if (error) {
    return <FullScreenMessage type="error" />
  }

  // 청첩장 데이터가 없을 경우 null 리턴
  if (wedding == null) {
    return null
  }

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

export default App
