
# Hero

  경기대학교 2022-2 SW상상기업 팀 아보카도 프로젝트

그룹 활동 지원 서비스 및 채용 연계 플랫폼

## Authors

- [@gabrielyoon7 (윤주현, Gabriel Ju Hyun Yoon)](https://github.com/gabrielyoon7)
- [@wwwls99 (남진수)](https://github.com/wwwls99)
- [@soyoung125 (박소영)](https://github.com/soyoung125)
- [@hido02 (김도희)](https://github.com/hido02)
- [@seeun01 (김세은)](https://github.com/seeun01)
- [@yeonsu00 (김연수)](https://github.com/yeonsu00)


## Tech

**Client:** React, Redux, Material UI

**Server:** Node, Express, Mongo DB

## Project Structure

프로젝트 구조는 다음과 같습니다.

    .
    ├── web [Client]
    │   └── src
    │       ├── api
    │       ├── assets
    │       ├── components
    │       └── containers
    └── server [Server]
        ├── models
        └── routes
 
## Features (작성중)
<!-- 
    . [Client (Android/iOS Expo Application)]
    ├── 충전소 조회 (지도)
    │   ├── 충전소 실시간 검색
    │   ├── 지도 확대/축소/현위치
    │   │   └── 마커 클러스터링 적용
    │   ├── 충전소 리스트
    │   │   ├── 충전소 상태별 색상 표시
    │   │   └── 거리순 정렬
    │   ├── 충전소 조회
    │   │   ├── 충전소 간단 정보
    │   │   │    ├── 충전기 실시간 사용 정보
    │   │   │    └── 충전소 정보 간략히 제공
    │   │   └── 충전소 상세 정보
    │   │        ├── 충전소 정보 상세히 제공
    │   │        ├── 충전기 실시간 사용 정보
    │   │        ├── 충전기 사용 통계
    │   │        ├── 충전소 사용 통계
    │   │        ├── 즐겨찾기 등록
    │   │        └── 가까운 충전소 즉시 조회 및 이동
    │   ├── 충전소 필터링
    │   │   ├── 주차비 여부
    │   │   ├── 충전기 종류(DC차데모 / DC콤보 / AC완속 / AC3상)
    │   │   ├── 충전기 용량
    │   │   ├── 충전 방식
    │   │   ├── 충전기 상태
    │   │   ├── 이용자 제한
    │   │   └── 운영기관 필터링
    │   ├── 충전소 새로 고침
    │   └── 지도 테마 설정 (주간/야간 자동화)
    ├── 계정
    │   ├── 회원가입
    │   └── 로그인/로그아웃
    ├── 충전소 전국단위 검색
    │   ├── 충전소 지역/분류 선택 기능
    │   └── 검색 결과 리스트 출력 기능
    ├── 충전 일정 관리
    │   ├── (제작중)
    │   └── (제작중)
    └── 나의 자동차 설정
        ├── (제작중)
        └── (제작중)

    . [Server (Node.js Application)]
    └── App 사용에 필요한 RESTful API 형태로 구현

    . [Data Manager V2 ( Node.js Application )]
    ├── KECO로 부터 충전기 데이터 실시간 수신
    ├── KECO로 부터 수신 받은 데이터를 충전소와 충전기로 분리
    ├── 충전소와 충전기 데이터를 새 데이터로 overwrite (벌크형태로 저장/관리하여 속도 개선)
    ├── 충전기 사용 여부를 통계 데이터에 업데이트
    ├── 오래된 충전기 사용 통계는 자동 삭제
    └── 이 모든 과정을 주기적으로 자동 반복 처리 -->

## Demo and Screenshots

![App Screenshot](screenshots/01main.png)
![App Screenshot](screenshots/02signin.png)
![App Screenshot](screenshots/03groupfinder.png)
![App Screenshot](screenshots/03groupfinder.png)
![App Screenshot](screenshots/04groupcreator.png)
![App Screenshot](screenshots/05groupsearch.png)
![App Screenshot](screenshots/06groupenlist.png)
![App Screenshot](screenshots/07organizations.png)
![App Screenshot](screenshots/08organizationscreator.png)
![App Screenshot](screenshots/09grouporganizationenter.png)
![App Screenshot](screenshots/10grouporganizationfinder.png)
![App Screenshot](screenshots/11myworkspace.png)
![App Screenshot](screenshots/12readmeshort.png)
![App Screenshot](screenshots/13workspacereadme.png)
![App Screenshot](screenshots/14workspacecalendar.png)
![App Screenshot](screenshots/15workspacenotice.png)
![App Screenshot](screenshots/16workspacefunding.png)
![App Screenshot](screenshots/17workspacesettings.png)
![App Screenshot](screenshots/18workspacerating.png)
![App Screenshot](screenshots/19profile.png)
![App Screenshot](screenshots/20hr.png)
![App Screenshot](screenshots/21premium.png)
![App Screenshot](screenshots/22jobenlist.png)
![App Screenshot](screenshots/23jobfinder.png)
![App Screenshot](screenshots/24jobfindermodal.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/KGU-Team-Avocado/avocado-hero-web
```

Go to the project directory

```bash
  cd avocado-hero-web
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Installation

이 프로젝트를 설치하기 위해...

### 설치 경로

프로젝트는 반드시 C드라이브에 clone합니다.

    C://myPlug


### `npm install`

> **Note: 패키지 변화가 없으면 매번 작업을 할 필요가 없습니다.**

package.json에 있는 npm 설치 이력을 토대로 본인 컴퓨터에 패키지를 자동으로 설치합니다.
이 작업은 평소에 할 필요가 없지만, 누군가가 새 패키지를 설치하는 경우 다른사람들이 모두 해줘야 합니다.

    부가 옵션으로 과거 버전의 패키지를 설치하는 방법이 있습니다.
    npm install --legacy-peer-deps
    패키지 설치 시 더이상 과거 버전을 지원하지 않는다거나 권장하지 않는다고 설치를 거부하는 경우 레거시 버전을 설치하는 방법입니다.

    만약 위 명령어로도 설치가 불가능하면
    npm install --force
    강제로 설치하는 명령어도 있습니다.

각각의 폴더에서 npm 설치 작업을 진행하여야 합니다.
## Deployment

이 프로젝트를 실행하기 위해...

### `npm start`
> **Note: 아래 `install 명령어`를 먼저 실행할 필요가 있을 수도 있습니다.**

이 프로그램을 실행하게 합니다.
실행에 성공하면 Expo가 자동으로 실행됩니다.

Expo는 Android나 iOS에 설치 후 스마트폰에서 직접 실행이 가능합니다.

이 프로젝트를 수정하고 저장하면 자동으로 리로딩이 됩니다.
오류가 발생하면 터미널 콘솔창에 찍힙니다. (터미널에 찍히지 않는 경우에는 웹 브라우저에서 확인)

    부가 옵션으로 cache를 초기화 하면서 실행하는 방법이 있습니다.
    npm start --reset-cache
    분명 코드가 잘 들어갔고, 아무리 생각해도 문제가 없음에도 불구하고 오류가 발생하면 위 명령어로 실행하는 방법이 있습니다.


## References

- TBD


## Documentation
- TBD

## License

- TBD

## Support

For support, email gabrielyoon7@gmail.com.

