import { useEffect, useRef } from 'react'
import { Location } from '@/models/invitation'
import classNames from 'classnames/bind'
import styles from './Map.module.scss'

// 타입에 따른 컴포넌트
import MapType001 from './types/type001/MapType001'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

function Map({ location, type }: { location: Location; type: string }) {
  const mapContainer = useRef(null)

  // script 태그를 비동기적으로 호출하기 위한 코드 autoload가 비동기 sync가 어긋남을 직접 설정하기 위해서 false
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    // 비동기식으로 불러오기 때문에 onload (load할 수 있는 시점에서 load를 시킬 수 있게 작성함)
    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const marker = new window.kakao.maps.Marker({
          position,
        })

        const map = new window.kakao.maps.Map(mapContainer.current, options)
        marker.setMap(map)
      })
    }
  }, [])

  // 타입에 따라서 보여지는 맵 컴포넌트가 다르게
  switch (type) {
    case 'Type001':
      return (
        <MapType001 location={location}>
          <div className={cx('type001_map')} ref={mapContainer}></div>
        </MapType001>
      )
      break
    default:
      return null
      break
  }
}

export default Map
