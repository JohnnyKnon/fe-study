import classNames from 'classnames/bind'
import Section from '@/components/shared/sections/Section'
import styles from './Share.module.scss'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

function Share({ groomName, brideName, date }: ShareProps) {
  // 비동기식으로 카카오 script 태그 처리
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  // 카카오 공유 기능
  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), 'yyyy년 M월 d일 eeee aaa h시', {
          locale: ko,
        })}`,
        imageUrl:
          'https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/09/urbanbrush-20220922134835594912.jpg',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  // SMS로 공유하기
  function handleSmsShare() {
    let sBody =
      `저희 결혼에 초대드립니다! \n` +
      `${format(parseISO(date), 'yyyy년 M월 d일 eeee aaa h시', {
        locale: ko,
      })}\n` +
      `${groomName} ❤️ ${brideName} 결혼합니다. \n` +
      '\n' +
      `- 모바일 초대장(확인) - \n ${window.location.origin}` +
      '\n' +
      '두분의 결혼을 축하해주세요~!'

    return `sms:;?&body=${encodeURIComponent(sBody)}`
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao />
        </button>
        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            window.alert('복사가 완료되었습니다.')
          }}
        >
          <button>
            <IconClipBoard />
          </button>
        </CopyToClipboard>
        <a href={handleSmsShare()}>
          <IconSms />
        </a>
      </div>
    </Section>
  )
}

function IconKakao() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <title />
      <g
        data-name="kakao talk chat media social"
        id="kakao_talk_chat_media_social"
      >
        <path d="M29.88,13.06a1,1,0,0,0-1,1c0,5.42-5.78,9.83-12.88,9.83a15.91,15.91,0,0,1-2.19-.16,1,1,0,0,0-.89.34,13.88,13.88,0,0,1-4,3,8.32,8.32,0,0,0,.71-3.91,1,1,0,0,0-.56-.81c-3.75-1.83-6-4.92-6-8.28C3.12,8.63,8.9,4.22,16,4.22A14.15,14.15,0,0,1,26.87,8.79,1,1,0,1,0,28.4,7.5C25.64,4.2,21,2.22,16,2.22,7.79,2.22,1.12,7.53,1.12,14.06c0,4,2.44,7.6,6.56,9.8a8.82,8.82,0,0,1-1.29,3.91A.85.85,0,0,0,6.3,28a1.39,1.39,0,0,0,.54,1.52,1.35,1.35,0,0,0,1.52.07,18.49,18.49,0,0,0,5.72-3.8,18.71,18.71,0,0,0,1.92.11c8.21,0,14.88-5.31,14.88-11.83A1,1,0,0,0,29.88,13.06Z" />
        <path d="M10.79,17.62A1,1,0,0,0,12.08,17l1.06-2.76L14.21,17a1,1,0,0,0,.93.64,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.3l-2-5.18a1,1,0,0,0-1.87,0l-2,5.18A1,1,0,0,0,10.79,17.62Z" />
        <path d="M17.51,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,1,1h2.56a1,1,0,0,0,0-2H18.51V11.5A1,1,0,0,0,17.51,10.5Z" />
        <path d="M8.46,17.68a1,1,0,0,0,1-1V12.5h.75a1,1,0,0,0,0-2H6.71a1,1,0,0,0,0,2h.75v4.18A1,1,0,0,0,8.46,17.68Z" />
        <path d="M22.46,10.5a1,1,0,0,0-1,1v5.18a1,1,0,0,0,2,0v-1.2L25,17.32a1,1,0,0,0,.77.36A1,1,0,0,0,26.53,16l-2-2.34,1.8-1.41a1,1,0,0,0-1.23-1.58L23.46,12V11.5A1,1,0,0,0,22.46,10.5Z" />
      </g>
    </svg>
  )
}

function IconClipBoard() {
  return (
    <svg id="Layer_1" version="1.1" viewBox="0 0 48 48">
      <path
        clipRule="evenodd"
        d="M37,47H11c-2.209,0-4-1.791-4-4V8c0-2.209,1.791-4,4-4h3l0,0c0.553,0,1,0.448,1,1  s-0.447,1-1,1l0,0h-3C9.896,6,9,6.896,9,8v35c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2h-3l0,0  c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,0,0,0.001,0H37c2.209,0,4,1.791,4,4v35C41,45.209,39.209,47,37,47z M35,9  c0,0.552-0.447,1-1,1H14c-0.553,0-1-0.448-1-1s0.447-1,1-1c0,0,1.125-0.125,2-1l2-2c0,0,0.781-1,2-1h1c0-1.657,1.344-3,3-3  c1.657,0,3,1.343,3,3h1c1.312,0,2,1,2,1l2,2c0.875,0.875,2,1,2,1C34.553,8,35,8.448,35,9z M24,3c-0.553,0-1,0.448-1,1h2  C25,3.448,24.553,3,24,3z M29.363,7c0,0-0.679-1-1.817-1h-7.091c-1.14,0-1.818,1-1.818,1l-0.909,1h12.545L29.363,7z"
      />
    </svg>
  )
}

function IconSms() {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 32C114.6 32 .0137 125.1 .0137 240c0 49.59 21.39 95 56.99 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2C1.1 478.2 4.813 480 8 480c66.31 0 116-31.8 140.6-51.41C181.3 440.9 217.6 448 256 448C397.4 448 512 354.9 512 240S397.4 32 256 32zM167.3 271.9C163.9 291.1 146.3 304 121.1 304c-4.031 0-8.25-.3125-12.59-1C101.1 301.8 92.81 298.8 85.5 296.1c-8.312-3-14.06-12.66-11.09-20.97S85 261.1 93.38 264.9c6.979 2.498 14.53 5.449 20.88 6.438C125.7 273.1 135 271 135.8 266.4c1.053-5.912-10.84-8.396-24.56-12.34c-12.12-3.531-44.28-12.97-38.63-46c4.062-23.38 27.31-35.91 58-31.09c5.906 .9062 12.44 2.844 18.59 4.969c8.344 2.875 12.78 12 9.906 20.34C156.3 210.7 147.2 215.1 138.8 212.2c-4.344-1.5-8.938-2.938-13.09-3.594c-11.22-1.656-20.72 .4062-21.5 4.906C103.2 219.2 113.6 221.5 124.4 224.6C141.4 229.5 173.1 238.5 167.3 271.9zM320 288c0 8.844-7.156 16-16 16S288 296.8 288 288V240l-19.19 25.59c-6.062 8.062-19.55 8.062-25.62 0L224 240V288c0 8.844-7.156 16-16 16S192 296.8 192 288V192c0-6.875 4.406-12.1 10.94-15.18c6.5-2.094 13.71 .0586 17.87 5.59L256 229.3l35.19-46.93c4.156-5.531 11.4-7.652 17.87-5.59C315.6 179 320 185.1 320 192V288zM439.3 271.9C435.9 291.1 418.3 304 393.1 304c-4.031 0-8.25-.3125-12.59-1c-8.25-1.25-16.56-4.25-23.88-6.906c-8.312-3-14.06-12.66-11.09-20.97s10.59-13.16 18.97-10.19c6.979 2.498 14.53 5.449 20.88 6.438c11.44 1.719 20.78-.375 21.56-4.938c1.053-5.912-10.84-8.396-24.56-12.34c-12.12-3.531-44.28-12.97-38.63-46c4.031-23.38 27.25-35.91 58-31.09c5.906 .9062 12.44 2.844 18.59 4.969c8.344 2.875 12.78 12 9.906 20.34c-2.875 8.344-11.94 12.81-20.34 9.906c-4.344-1.5-8.938-2.938-13.09-3.594c-11.19-1.656-20.72 .4062-21.5 4.906C375.2 219.2 385.6 221.5 396.4 224.6C413.4 229.5 445.1 238.5 439.3 271.9z" />
    </svg>
  )
}

export default Share
