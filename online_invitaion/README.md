# 모바일 청첩장 토이 프로젝트 강의

패스트캠퍼스를 통한 프로젝트 견문을 넓히기 위한 공부 part1. 모바일 청첩장입니다.

# 단순 클론코딩? No!!
패스트 캠퍼스를 통해서 배운내용을 토대로 만들어보고 한가지 스타일 밖에없는 기존 코드를 기능코드와 UI코드를 나누어서
복수의 스타일로 DB에 값이 저장되며, 모바일 초대장 솔루션 형태로 재개발 진행

우선 간단하게 프로젝트 소개부터 하고 넘어가겠습니다.

일단 사용하는 스팩을 먼저 말씀드리겠습니다.

## 프로젝트 환경구성

Bolierplate -> Create React App + TypeScript 입니다.<br/>
Rules -> ESLint와 Prettier 입니다.<br/>
Style -> SCSS 로 클래스 형태로 스타일을 작성할 예정입니다.<br/>
Package Manager -> Yarn Berry (with pnp) 입니다.<br/>

## Why yarn ?

여기서 yarn 을 사용하는 이유는 우선 npm 의 단점을 먼저 설명드리려고합니다.

1. 무겁고 복잡한 node_modules
   - node_modules 는 프로젝트 의존성이 많아질 수 록 거대해짐
2. 비효율적인 의존성 검색
   - 여러 패키지들이 동일한 라이브러리에 의존성을 가지고 있을 경우에 각각 다른 버전 일 경우 중복으로 설치함
     (3번의 문제와 동일) Disk 할당량이 많아지며, package 다운로드 시간등이 길어질 수 있음
3. 비효율적인 설치 (다른 버전의 패키지 중복설치 가능한게 문제)

4. 유령 의존성
   - npm은 중복된 패키지 의존성을 최소화하여 공간을 절약하고 패키지 설치시간을 줄이기 위하여 호이스팅을 일으킴
     즉, 의존성을 가지고 있지 않은 패키지에도 접근이 가능해짐 -> 의존성 관리 시스템에 혼동을 야기할 수 있다.

## Plug 'n' Play (PnP)

1.  효율적인 의존성 검색
2.  엄격한 의존성 관리
3.  CI 시간 단축
    - 모든 패키지 설치정보를 버전관리 시스템에 기록, 클론해서 사용할 필요가 없는 zero install 수단사용

또한 PnP 시스템에서 각 의존성은 zip Archive로 관리되어짐
npm과 다르게 각 패키지가 버전마다 하나의 zip Archive 파일만 생기게되며
압축파일로 관리하기 때문에 효율적인 디스크 용량 확보가능
의존성을 호이스팅 하지않음, package.json 에 명시된 의존성에만

# JsonServer 를 사용합니다.

해당 모바일 청첩장에서는 JsonServer를 사용합니다.

## JsonServer 란?

Json Server는 Json 파일을 이용하여 RestAPI 서버를 빠르고 간단하게 생성하기 위한 도구
Json Server 를 이용하면 JSON 파일을 데이터베이스 처럼 동작하게 할 수 있고 HTTP 메서드를 활용하여 데이터에 접근하고 수정할 수 있는
API를 만들 수 있습니다.

[Json Server Github]
https://github.com/typicode/json-server

# 프로젝트 실행 & DB 실행 방법

프로젝트 install
### `yarn install`

프로젝트 실행 방법:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Json Server 실행방법:
### `yarn dev:db`
