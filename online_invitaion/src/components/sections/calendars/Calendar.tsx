import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'
import Section from '@/components/shared/sections/Section'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  const css = `
  .rdp-caption{
    display:none;
  }
  .rdp-cell{
    cursor: default;
  }
  .rdp-head_cell{
    font-weight: bold;
    font-size: 14px;
    color: var(--red);
  }
  .rdp-day_selected, .rdp-day_selected:hover{
    background-color: var(--red);
    font-weight: bold;
    color: #fff;
  }
  
  `

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
