import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './Contact.module.scss'
import Accordion from '../shared/Accordion'
import { Person } from '@models/wedding'

const cx = classNames.bind(styles)

function Contact() {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo />
      </Accordion>
      <Accordion label="신부측">신부측 컨텐츠 입니다.</Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div>
      {/* 정보표현 */}
      <div>
        <span>{`${account.bankName} | ${account.accountNumber}`} </span>
        <span>{name}</span>
      </div>
      {/* 버튼들 */}
      <ul>
        <li>전화</li>
        <li>복사</li>
        <li>송금</li>
      </ul>
    </div>
  )
}

export default Contact
