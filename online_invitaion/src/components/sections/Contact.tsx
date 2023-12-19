import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Contact.module.scss'
import Accordion from '../shared/Accordion'

const cx = classNames.bind(styles)

function Contact() {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">신랑측 컨텐츠 입니다.</Accordion>
      <Accordion label="신부측">신부측 컨텐츠 입니다.</Accordion>
    </Section>
  )
}

export default Contact
