# 모바일 청첩장 토이 프로젝트 강의

패스트캠퍼스를 통한 프로젝트 견문을 넓히기 위한 공부 part1. 모바일 청첩장입니다.

우선 간단하게 프로젝트 소개부터 하고 넘어가겠습니다.

일단 사용하는 스팩을 먼저 말씀드리겠습니다.

## 프로젝트 환경구성

Bolierplate -> Create React App + TypeScript 입니다.
Rules -> ESLint와 Prettier 입니다.
Style -> SCSS 로 클래스 형태로 스타일을 작성할 예정입니다.
Package Manager -> Yarn Berry (with pnp) 입니다.

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
