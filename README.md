# 42gg 프론트엔드 온보딩 2단계

## 공통 조건

- 온보딩 프로젝트는 개인 계정으로 fork하여 진행하고 PR로 제출합니다.
- git / github / code 컨벤션은 42gg notion에 있는 자료를 적극 반영합니다.
- 기본 기능 외 추가 기능, 디자인 구현은 자유입니다.
- 최종 제출품에는 README 작성이 되있어야 합니다.([예시](https://github.com/42organization/42gg.client/blob/main/README.md))

## EX01. login / logout 구현하기

- (필수) React.js, Recoil, SCSS
- (필수) eslint, prettier 설정
- (필수) 함수 컴포넌트로 제작
- (선택) ~CRA~, Webpack, Vite, ESbuild, SWC, Rollup
- (선택) msw, react-query / SWR
- (선택) Figma, MUI, Ant Design, shadcn UI, chakra UI / Tailwind CSS 
- (선택) 계정 유효성 검사

## EX02. 유저 권한별 routing page

- (중요) EX01 결과물에 이어서 작업합니다.
- (필수) normal, manager, admin 3개의 권한을 가진 유저별 정보 제공
- (필수) 권한별 routing page 구현
- (필수) 상단 navbar, sidebar 제작
- (선택) React-Router-Dom v6, Context API
- (선택) 로그인 유지
- (선택) custom hook

## 참고

- 유저 정보는 json-server or js 파일 내 객체를 이용하여 관리합니다.
- 로그인/로그아웃 구현하기 위해 필요한 기능과 화면 구성들을 생각(그려보고)해보고, 구현해보세요.
- 궁금한 사항은 issue에 등록해주세요.
