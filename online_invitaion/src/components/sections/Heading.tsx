import { parseISO, format, getDay } from 'date-fns'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

// 공통 섹션 디자인 불러오기
import Section from '@shared/Section'

const cx = classNames.bind(styles)

// 요일
const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date) // Date로 변경
  const weddingDay = getDay(weddingDate)

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[weddingDay]}</div>
    </Section>
  )
}

export default Heading
