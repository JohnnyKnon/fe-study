// <Text>안녕하세요</Text>
import React from 'react'

// 줄바꿈 등 원하는 텍스트를 변환해주는 컴포넌트
function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
