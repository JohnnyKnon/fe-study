import classNames from 'classnames/bind'
import Section from '@/components/shared/sections/Section'
import styles from './MapType001.module.scss'
import { Location } from '@/models/invitation'
import { MutableRefObject } from 'react'

const cx = classNames.bind(styles)

function MapType001({
  location,
  children,
}: {
  location: Location
  children: React.ReactNode
}) {
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        {children}
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

// 찾아오는 길 컴포넌트
function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((waytocome, idx) => (
          <li key={idx}>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

export default MapType001
