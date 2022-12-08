
# 🥑 Hero

  경기대학교 2022-2 SW상상기업 팀 아보카도 프로젝트

그룹 활동 지원 서비스 및 채용 연계 플랫폼

## 👤 Authors

- [@gabrielyoon7 (윤주현, Gabriel Ju Hyun Yoon)](https://github.com/gabrielyoon7)
- [@wwwls99 (남진수)](https://github.com/wwwls99)
- [@soyoung125 (박소영)](https://github.com/soyoung125)
- [@hido02 (김도희)](https://github.com/hido02)
- [@seeun01 (김세은)](https://github.com/seeun01)
- [@yeonsu00 (김연수)](https://github.com/yeonsu00)


## ⚙️ Tech

**Client:** React, Redux, Material UI

**Server:** Node, Express, mongoose, Mongo DB

## 📂 Project Structure

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
 
## ✅ Features

    . [Client (Web)]
    ├── 그룹 찾기
    │   ├── 그룹 등록
    │   │   ├── 그룹 소개(wyswyg)
    │   │   ├── 인원수 설정
    │   │   └── 기술/성향/포지션 태그 등록
    │   ├── 등록된 그룹 조회 및 신청
    │   │   ├── 자기소개서 작성(wyswyg)
    │   │   └── 무한 스크롤
    │   ├── 조직 내 그룹 조회 및 신청
    │   └── 그룹 필터링
    ├── 프리미엄 기능
    │   ├── 등급제
    │   └── 조직 관리
    ├── 워크스페이스
    │   ├── 리드미
    │   ├── 일정 관리
    │   ├── 게시판
    │   ├── 후원
    │   ├── 그룹 활동 종료 후 상호 평가
    │   └── 그룹 관리
    │       ├── 승인/거절
    │       ├── 역할 설정
    │       └── 프로젝트 종료
    └── 계정
        ├── 프로필
        │   ├── 자기 소개
        │   ├── 기술/성향/포지션 태그
        │   ├── 프로젝트 이력
        │   └── 프로젝트 상호평가 평점
        ├── 회원가입
        └── 로그인/로그아웃


    . [Server (Node.js Application)]
    └── App 사용에 필요한 RESTful API 형태로 구현


## 🧩 Demo and Screenshots

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


## ✨ Run Locally

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


## ✨ Installation

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
## ✨ Deployment

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


## 🔎 References

- TBD


## 📄 Documentation
- TBD

## 🔒 License

- TBD

## 🔥 Support

For support, email gabrielyoon7@gmail.com.

