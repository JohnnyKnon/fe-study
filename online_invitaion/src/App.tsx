import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'

// 공통적으로 들어가는 풀스크린메세지
import FullScreenMessage from '@shared/commons/FullScreenMessage'

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

// 반드시 받아야되는 데이터 Modal을 위한 컴포넌트 (필수요소를 위한 모달)
import RequiredModal from '@components/RequiredModal'

const cx = classNames.bind(styles)

function App() {
  // wedding 데이터 useState
  const [wedding, setWedding] = useState<Wedding | null>(null)

  // 현재 로딩중인지 아닌지 체크하기 위한 state
  const [loading, setLoading] = useState(false)

  // 에러 대응을 위한 state
  const [error, setError] = useState(false)

  //  wedding 데이터 호출 ([]가 비어있기 마운트 될때만 실행 (처음 만 실행))

  /**  MEMO:: 추후 여러 타입의 모바일 청첩장이 추가될 경우에도 먼저 데이터를 불러오고
   * 데이터에서 Type001 ~ N 까지 를 Swtich로 체킹하고 해당 컴포넌트를 불러오고
   * 나머지 데이터 처리는 해당 컴포넌트에서 처리할 수 있게 작업 예정
   * */

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
      <RequiredModal wedding={wedding} />
    </div>
  )
}

export default App
