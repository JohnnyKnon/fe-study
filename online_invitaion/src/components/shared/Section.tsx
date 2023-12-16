import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

// className을 받아와서 cx는 Array로도 값을 넘길 수 있기 때문에 불러와서 바로 넣어주면됨.
// className은 존재하지 않을 수 도 있음
// MEMO: 하단 props 부분은 추후 interface로 나눠도 좋아보임

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
