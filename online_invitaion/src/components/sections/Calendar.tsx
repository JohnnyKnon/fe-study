import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  return (
    <Section>
      <div className={cx('wrap-header')}>
        <span className={cx('txt-date')}>
          {format(weddingDate, 'yyyy.MM.dd')}
        </span>
        <span className={cx('txt-time')}>
          {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
        </span>
      </div>
    </Section>
  )
}

export default Calendar
