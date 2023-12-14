import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  // wedding 데이터 useState
  const [wedding, setWedding] = useState(null)

  // 1. wedding 데이터 호출 ([]가 비어있기 마운트 될때만 실행 (처음만실행))
  useEffect(() => {
    // callback, promise, async/await
    fetch('http://localhost:8888/wedding')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // wedding state에 값넣어주기
        setWedding(data)
      })
  }, [])
  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
