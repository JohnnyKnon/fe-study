// 청첩장 전체 타입
export interface Wedding {
  id: number
  date: string
  location: Location

  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number

  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
}

// 주소 타입
export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

// 계좌정보 타입
export interface Account {
  bankName: string
  accountNumber: string
  kakaopayLink: string
}

//신부/신랑/부모님과 같이 주요인물 타입
export interface Person {
  name: string
  account: Account
  phoneNumber: string
}
