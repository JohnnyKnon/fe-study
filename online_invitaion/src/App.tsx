import React, { useEffect, useState } from 'react'

// 공통적으로 들어가는 풀스크린메세지
import FullScreenMessage from '@shared/commons/FullScreenMessage'
import Type001 from './invitationType/Type001'

function App() {
  // wedding 데이터 useState
  const [data, setData] = useState<any | null>(null)

  // 현재 로딩중인지 아닌지 체크하기 위한 state
  const [loading, setLoading] = useState(false)

  // 에러 대응을 위한 state
  const [error, setError] = useState(false)

  // 요청한 초대장 불러오기
  const invitNo = new URLSearchParams(window.location.search).get('invitNo')

  //  wedding 데이터 호출 ([]가 비어있기 마운트 될때만 실행 (처음 만 실행))

  /**  MEMO:: 추후 여러 타입의 모바일 청첩장이 추가될 경우에도 먼저 데이터를 불러오고
   * 데이터에서 Type001 ~ N 까지 를 Swtich로 체킹하고 해당 컴포넌트를 불러오고
   * 나머지 데이터 처리는 해당 컴포넌트에서 처리할 수 있게 작업 예정
   * */

  useEffect(() => {
    setLoading(true) // 로딩 시작
    // callback, promise, async/await
    fetch('http://localhost:8888/invitation/' + invitNo)
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
        setData(data)
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
  if (data == null) {
    return null
  }

  switch (data.type) {
    case 'Type001':
      return <Type001 wedding={data} />
      break
    default:
      return <FullScreenMessage type="error" />
      break
  }
}

export default App
