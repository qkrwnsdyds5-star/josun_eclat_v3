# JOSUN ÉCLAT (조선 에끌라) 디자인 가이드 및 브랜드 디자인 시스템
> **Grand Josun (부산·제주) 공식 웹사이트 심층 분석 기반 럭셔리 호텔 웰컴기프트 웹 디자인 가이드**  
> **버전**: v1.0.0 | **작성일자**: 2026-11-04 | **작성자**: Senior UI/UX Designer & Frontend Developer

---

## 1. 프로젝트 개요 및 브랜드 정체성

### 1.1 브랜드 배경
**'조선 에끌라 (JOSUN ÉCLAT)'**는 대한민국 최고(最古)의 환대 역사를 자랑하는 **조선호텔앤리조트**의 대표 독자 브랜드인 **그랜드 조선(Grand Josun 부산·제주)**의 5성급 호스피탈리티 경험과, **신세계푸드(Shinsegae Food)**의 프리미엄 베이커리/파티세리 전문성을 결합한 프리미엄 호텔 웰컴기프트(Welcome Gift) 브랜드 기획안입니다.

### 1.2 디자인 목표
- 그랜드 조선 부산 및 제주의 공식 웹사이트 디자인 시스템을 심층 분석하여, 호텔 웹사이트 특유의 **절제된 클래식 모더니즘(Refined Classic Modernism)**과 **5성급 럭셔리 미학**을 완벽하게 계승합니다.
- 단순한 e커머스 상품 나열을 지양하고, **‘호텔 객실 문을 열었을 때 맞이하는 첫 감동과 환대의 순간’**을 웹 공간에 시각적·공간적으로 재현합니다.
- 실제 그랜드 조선 공식 사이트의 프로덕션 소스코드(HTML/CSS)에서 직접 추출한 정량적 데이터(HEX 색상, 타이포그래피, 마진/패딩, 컴포넌트 규격)를 바탕으로 신뢰성 높은 디자인 가이드를 수립합니다.

---

## 2. 그랜드 조선 공식 홈페이지 공통 디자인 시스템 정밀 분석

> **분석 대상 웹사이트**:
> - 그랜드 조선 부산 (GJB): `https://gjb.josunhotel.com/main.do` (및 `/about/aboutUs.do`, `/rooms/subMain.do`, `/package/list.do`)
> - 그랜드 조선 제주 (GJJ): `https://gjj.josunhotel.com/main.do` (및 서브페이지)
> - 모바일 경로: `https://gjb.josunhotel.com/m/main.do`, `https://gjj.josunhotel.com/m/main.do`
> - 핵심 스타일시트: `common_new.css` (77.8KB), `m_common_new.css` (85.2KB), `common_gjb.css`, `main_gjb.css`, `common_gjj.css`, `main_gjj.css`, `contents.css`

### 2.1 전체 페이지 레이아웃
- **데스크톱 최소 너비**: `min-width: 1500px` (`.wrapper { min-width: 1500px; overflow-x: auto; }`)
- **콘텐츠 중앙 래퍼**: 폭 `1400px` 고정 그리드 (`.inner { width: 1400px; margin: 0 auto; position: relative; }`)
- **수평 분할 레이아웃 (Split Background)**:
  - 그랜드 조선 메인의 핵심 특징인 좌우 배경 분할 구조.
  - 좌측/우측 50%를 기준으로 가상 요소(`:after`)를 활용해 `width: 10000px; background: #f0eeed;`를 깔아두고, 콘텐츠 영역(1400px) 내부에서 이미지 슬라이더(`1050px`)와 텍스트 카드(`350px`)를 비대칭으로 배치하는 정교한 공간 분할 기법을 사용합니다.
- **페이지 기본 배경**: 순백색 `#ffffff` 바탕 위에 연한 웜 그레이지(Warm Greige `#f0eeed`) 및 연미색(`#f9f9f9`) 섹션이 번갈아 배치되며 공간의 깊이감을 형성합니다.

### 2.2 헤더 및 내비게이션 (Header & GNB)
헤더는 스크롤 위치 및 사용자 인터랙션에 따라 3단계로 상태(State)가 전환됩니다:
1. **초기 상태 (Default / Top Hero Overlay)**:
   - 높이: `150px` (`.header { position: fixed; left: 0; right: 0; top: 0; z-index: 100; height: 150px; background: transparent; }`)
   - 상단 유틸리티(`headTop`, 50px) + 주 메뉴 영역(`headArea`, 100px/80px)으로 구성.
   - 메인 비주얼 이미지 위에 완전 투명(`background: transparent`)으로 오버레이되며, 로고와 메뉴 텍스트는 순백색(`#ffffff`)으로 렌더링됩니다.
2. **스크롤 상태 (Scrolled Sticky / `.header.on`)**:
   - 사용자가 스크롤을 내리면 클래스 `.on`이 동적으로 부여됩니다.
   - 높이가 슬림하게 축소(`height: 100px` 또는 서브페이지 `80px`), 상단 `headTop` 영역은 `display: none` 처리.
   - 배경은 순백색(`#ffffff`), 하단에 섬세한 1px 보더(`#eeeeee`) 추가.
   - 텍스트 및 로고는 블랙(`#000000`)으로 반전 전환.
3. **메가 메뉴 호버 상태 (`.header.gnbOn`)**:
   - GNB에 마우스 오버 시 z-index가 `9999999`로 상승하고 배경이 순백색(`#ffffff`)으로 전환.
   - 하위 드롭다운 레이어(`.subDepth`)가 전폭(`width: 100vw; background: #fff; padding: 50px 0 55px;`)으로 부드럽게 펼쳐집니다.
   - 내비게이션 항목 활성화/호버 시 시그니처 웜 로즈골드 컬러(`color: #ba998c !important`)로 변하며 하단에 2px 밑줄 바(`height: 2px; background: #ba998c;`)가 나타납니다.

### 2.3 로고의 크기와 배치
- **크기**: 가로 `118px`, 세로 `42px`
- **배치**: 헤더 좌측 여백 `left: 50px`, 상단 `top: 30px` 절대 배치 (`position: absolute; z-index: 1;`)
- **구현 방식**: CSS CSS Image Sprite (`bg_logo_grand.png`) 기법 사용.
  - 투명 헤더(기본): `background-position: 0 0` (화이트 로고)
  - 스크롤/호버 헤더: `background-position: 0 -42px` (블랙 로고)
- **푸터 로고**: 가로 `172px`, 세로 `64px` (`bg_logo_footer.png`), 푸터 좌측 상단(`left: 0; top: 160px;`)에 배치.

### 2.4 메인 비주얼 이미지 (Hero Section) 구성
- **높이**: 브라우저 뷰포트 전체 높이 `100vh` (`.mainArea01 .mainBg { height: 100vh; }`)
- **미디어 처리**: 고해상도 시네마틱 비디오 및 슬라이드 이미지를 중앙 정렬 및 비율 유지 커버 처리:
  ```css
  .mainArea01 .mainBg img, 
  .mainArea01 .mainVideo video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
  }
  ```
- **카피 및 컨트롤러**:
  - 화면 중앙 좌측 또는 하단에 영문 대문자 타이틀(`gothamB`, 30px)과 보더 태그(`border: 1px solid #fff; padding: 0 8px; font-size: 14px;`)가 배치.
  - 우측 하단/측면에 사운드 음소거/재생 토글 컨트롤 버튼(`spr_controls.png`) 제공.

### 2.5 배경색 및 텍스트 색상 체계 (실제 추출 확정값)
| 구분 | 컬러 토큰 (HEX) | RGB 값 | 실제 사용 위치 및 용도 |
| :--- | :--- | :--- | :--- |
| **Primary Brand Accent** | `#ba998c` | `rgb(186, 153, 140)` | 그랜드 조선의 핵심 시그니처 웜 누드 로즈 / 테라코타 베이지. GNB 호버, 포인트 라인, 서브 헤딩 |
| **Brand Accent Tint** | `#d6c2ba` | `rgb(214, 194, 186)` | 보조 액센트, 옅은 테두리 및 배지 |
| **Brand Accent Deep** | `#b29d95` | `rgb(178, 157, 149)` | 사이드 버튼(`.btnView`), 팝업 포인트 텍스트 및 라인 |
| **Brand Heritage Green** | `#2c4942` / `#1f453b` | `rgb(44, 73, 66)` | 조선호텔 전통 헤리티지 딥 파인 그린 (포인트 배경 및 브랜드 태그) |
| **Antique Gold / Olive** | `#989442` / `#72715c` | `rgb(152, 148, 66)` | 캘린더 활성화, 이용약관/개인정보처리방침 강조(`pointColor`), 리스트 강조 |
| **Warm Greige Background**| `#f0eeed` | `rgb(240, 238, 237)` | 메인 섹션 좌우 분할 배경 및 카드 음영 배경 |
| **Off-White Background** | `#f9f9f9` | `rgb(249, 249, 249)` | 폼 요소, 다이닝 정보 박스(`.bcontInfo`), 안내 카드 배경 |
| **Pure White** | `#ffffff` | `rgb(255, 255, 255)` | 기본 배경, 카드 배경, 스크롤 헤더 배경 |
| **Primary Text (Black)** | `#000000` | `rgb(0, 0, 0)` | 본문 기본 텍스트, 로고, 주요 헤딩, 1px 테두리, 푸터 배경 |
| **Secondary Text (Dark)** | `#333333` | `rgb(51, 51, 51)` | 설명 단락 문구, 서브 헤드라인 |
| **Muted Text (Gray)** | `#666666` | `rgb(102, 102, 102)` | 보조 설명 텍스트, 날짜 표기, 서브리스트 링크 |
| **Light Gray Text** | `#888888` / `#999999` | `rgb(136, 136, 136)` | 안내 가이드 문구(`.txtGuide`), 드롭다운 화살표 |
| **Border / Divider** | `#eeeeee` / `#e5e5e5` | `rgb(238, 238, 238)` | 헤더 하단 라인, 얇은 섹션 구분선 |
| **Medium Border** | `#cccccc` | `rgb(204, 204, 204)` | 인풋 박스 테두리, 카드 구분선 |

### 2.6 영문 및 한글 타이포그래피 (실제 선언 `@font-face` 확정)
웹사이트의 세련된 인상은 영문 세리프/산세리프와 한글 명조/고딕의 정교한 조합에서 비롯됩니다:
1. **영문 세리프 (Hero & Section Title)**:
   - `Playfair Display SC Regular` (`font-family: "playfair"`)
   - `Noto Serif Display` (Weights: 300, 300i, 400, 400i, 500, 500i, 700, 700i)
   - 서브페이지 대제목(`.titDep1`), 프로모션 헤드라인에 적용되어 웅장하고 클래식한 럭셔리 무드를 연출합니다.
2. **영문 산세리프 (Sub-headings, GNB, Numbers, CTA)**:
   - `Gotham` (`"gothamL"` Light 300, `"gothamB"` Book 400, `"gothamM"` Medium 500)
   - 메뉴 텍스트, 영문 서브타이틀, 객실명, 버튼 텍스트, 숫자, 영문 주소에 전면 사용.
3. **한글 명조 (Editorial Storytelling)**:
   - `NanumMyeongjo`, `NanumMyeongjoB` 및 `Noto Serif KR` (Weights: 400, 500, 700)
   - 브랜드 소개 서술문, 감성적인 스토리텔링 카피에 적용.
4. **한글 산세리프 (UI & Body Text)**:
   - `Noto Sans KR` (`"notokrL"` Light, `"notokrR"` Regular, `"notokrM"` Medium)
   - 모바일 환경 보조: `Spoqa Han Sans Neo` (`spoqaL`, `spoqaR`)
   - 본문 단락, 테이블, 유틸리티 메뉴, 가이드 문구에 적용되어 높은 가독성을 보장.

### 2.7 타이포그래피 계층 구조 (Typographic Scale)
- **H1 / Page Title (`.titDep1`)**: `font: 500 60px playfair; font-feature-settings: "lnum", "pnum"; text-align: center;`
- **Section Heading (`.titDep2`)**: `font: 500 40px/1.5 gothamB, notokrR; letter-spacing: -0.03em; margin-bottom: 10px;` (중소형: `30px`)
- **Card Title / Category Title (`.titDep3`)**: `font-size: 20px; font-weight: 600; margin-bottom: 20px;`
- **Page Sub-Guide (`.pageGuide`)**: `font-size: 20px; letter-spacing: -0.01em; margin-top: 18px; color: #333;`
- **Body Large / Description (`.txtBoxDescription`)**: `font-size: 18px; line-height: 32px; letter-spacing: -0.025em; color: #333;`
- **Body Regular (`.txtReference`)**: `font: 16px gothamL, notokrL, playfair; letter-spacing: -0.01em; line-height: 1.6;`
- **Caption / Notice (`.txtGuide`, `.address`)**: `font: 400 14px/1.8 notokrL; color: #888;`

### 2.8 콘텐츠의 최대 너비 및 여백 체계 (Spacing & Layout)
- **최대 너비**: 데스크톱 기준 `1400px` 고정 그리드 시스템.
- **섹션 내부 하단 여백**: 기본 `padding-bottom: 180px` (`.inner { padding-bottom: 180px; }`)로 매우 넉넉하고 시원한 호흡(Breathing Room)을 제공.
- **서브페이지 상단 여백**:
  - `.topArea`: 상단 마진 중앙 정렬, `.topInner { padding: 97px 0 90px; }`
  - 페이지 타이틀과 가이드 문구 사이에 18px 여백 유지.
- **카드 및 컴포넌트 간격**:
  - 카드 간격: 30px ~ 40px
  - 갤러리 이미지 영역: `1050px` 너비 x `760px` 높이
  - 동반 텍스트 영역: `350px` 너비 x `760px` 높이

### 2.9 이미지 비율 및 정렬 가이드
- **Hero Banner**: `100vw` x `100vh` (풀스크린 커버, `object-fit: cover`)
- **Feature Showcase (메인 룸/다이닝 슬라이드)**:
  - 이미지 슬라이더 규격: `1050px` x `760px` (약 1.38:1 ~ 4:3 비율)
  - 텍스트 영역: `350px` 폭으로 이미지 좌측/우측에 타이트하게 결합.
- **Product & Room List Card (`.propertyList`, `.boxtypeList`)**:
  - 대표 썸네일 비율: 16:10 또는 3:2 와이드 비율 (데스크톱 700px x 450px)
  - 레이아웃: 좌측 텍스트 정보(`infoCont`, 40%), 우측 이미지 슬라이더(`swipeWrap gallery`, 60%)의 지그재그 또는 일관 정렬.
- **카테고리 배지 태그**:
  - `.txtCont .category span`: `border: 1px solid #000; padding: 3px 7px; font-size: 14px; color: #000; text-transform: uppercase;`

### 2.10 버튼 및 링크 디자인 (Buttons & Links)
1. **솔리드 아웃라인 버튼 (`.btnSC`)**:
   - 스타일: `position: relative; display: inline-block; text-align: center; color: #000; border: 1px solid #000; background: #fff; transition: color 0.5s ease-in-out; font-family: gothamL, notokrL;`
   - 대형 버튼(`.btnL`): `min-width: 150px; height: 50px; line-height: 50px; padding: 0 12px; font-size: 14px; font-weight: 500;`
   - 중형 버튼(`.btnM`): `height: 40px; line-height: 40px; padding: 0 20px; font-size: 14px;`
   - 호버 인터랙션: 배경이 아래에서 위로 또는 부드럽게 채워지며 텍스트 컬러가 화이트(`#fff`)로 반전.
2. **텍스트 라인 링크 (`.btnLine`)**:
   - `display: inline-block; font-size: 14px; letter-spacing: -0.01em; color: #b29d95;`
   - 밑줄 가상 요소: `.btnLine:after { content: ""; display: block; width: 100%; height: 1px; background: #b29d95; margin-top: 4px; }`
3. **더보기 버튼 (`.btnMore`)**:
   - `border: none; font-size: 17px; font-family: gothamL;` + 1px 하단 블랙 라인.

### 2.11 푸터 구성 (Footer Architecture)
푸터는 단단한 신뢰감과 브랜드 패밀리의 위상을 드러내는 블랙 모놀리스 구조를 가집니다:
- **전체 규격**: `background: #000000; color: #ffffff; height: 370px;` (콘텐츠 영역 1400px 중앙 정렬, `.footArea { padding: 150px 0 0 280px; }`)
- **패밀리 호텔 로고 리스트 (`.hotelList`)**:
  - 상단 `top: 60px`에 가로로 1400px 전체 정렬.
  - 조선 팰리스, 웨스틴 조선 서울/부산, 그랜드 조선 부산/제주, 레스케이프, 그래비티, 포포인츠 등의 브랜드 로고가 화이트 모노크롬(`height: 38px`, 여백 50px)으로 횡단 배치.
- **푸터 로고**: 좌측 `top: 160px; left: 0; width: 172px; height: 64px;`
- **약관 및 정책 링크 (`.infoPolicy`)**:
  - `font-size: 15px; margin-right: 25px; color: #fff;`
  - **개인정보처리방침 강조**: `.pointColor { color: #989442 !important; }` (올리브 골드 포인트)
- **주소 및 사업자 정보 (`.address`, `.copyright`)**:
  - `font: 400 14px/1.8 notokrL; color: #fff; opacity: 0.5;`
- **SNS 아이콘 그룹 (`.snsArea`)**:
  - 우측 상단 `right: 7px; top: 210px; display: flex; gap: 24px;`
  - 조선호텔 매거진, 카카오톡, 인스타그램, 유튜브 아이콘(각 36px x 36px).

### 2.12 호버 효과 및 애니메이션 (Hover & Motion)
- **전환 타이밍**: 부드럽고 묵직한 고급감을 위해 `transition: all 0.3s ease-in-out` 또는 `0.5s ease-in-out` 채택.
- **내비게이션 밑줄 애니메이션**: `::before` 가상 요소의 `width`가 0에서 100%로 확장되는 효과.
- **이미지 줌/패럴랙스**: 카드 마우스 오버 시 미세한 스케일 업(`transform: scale(1.04); transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);`).
- **스크롤 인디케이터**: 부드러운 스크롤 유도를 위한 버티컬 슬라이드 펄스 애니메이션.

### 2.13 모바일 반응형 및 적응형 설계 (Mobile System)
- **접근 방식**: 공식 사이트는 사용자 에이전트(User-Agent) 기반 서버사이드 302 리다이렉트(`https://gjb.josunhotel.com/m/main.do`) 방식의 적응형(Adaptive) 모바일 웹 운영.
- **모바일 헤더**:
  - 높이 `56px` 고정 (`.header .headArea { height: 56px; line-height: 56px; border-bottom: 1px solid #e5e5e5; }`)
  - 좌측: 뒤로가기 버튼 (`width: 56px; height: 56px;`)
  - 중앙: 모바일 로고
  - 우측: 햄버거 메뉴 버튼 (`width: 56px; height: 56px;`)
- **풀스크린 드로어 메뉴 (`.gnbMenu`)**:
  - `position: fixed; right: -100%; bottom: 0; width: 100%; height: 100%; z-index: 999;`
  - 메뉴 오픈 시 우측에서 좌측으로 부드럽게 100% 슬라이드 인.
  - 상단 유틸리티(멤버십, 마이페이지, 로그인) 블랙 바 + 하단 아코디언 메뉴 구성.
- **모바일 타이포그래피 스케일 축소**:
  - `.titDep1`: 60px -> `24px`
  - `.titDep2`: 40px -> `24px`
  - `.inner`: 좌우 패딩 `20px` (`padding: 0 20px 40px;`)

---

## 3. 부산(GJB)과 제주(GJJ) 홈페이지의 공통점과 차이점

### 3.1 확정된 공통점 (Core Heritage System)
1. **통일된 코어 디자인 시스템**: 두 사이트 모두 동일한 기반 스타일시트(`common_new.css`, `m_common_new.css`)를 공유하여 로고 규격, 1400px 그리드, 버튼 규격(`.btnSC`), 폰트 세트가 100% 일치합니다.
2. **시그니처 브랜드 컬러**: 헤더 인터랙션, 액센트 라인에 `#ba998c`(웜 로즈골드), 헤리티지 그린(`#2c4942`), 웜 그레이지(`#f0eeed`)를 일관되게 사용합니다.
3. **헤더 상태 변환 메커니즘**: 메인 비주얼 위 투명 오버레이 -> 스크롤 시 화이트 배경 100px 축소 + 1px 보더 -> 메가 메뉴 오픈 시 전폭 100vw 드롭다운 구조가 완전히 동일합니다.
4. **서브페이지 템플릿 구조**: About Us, Rooms, Package(Offers) 등 모든 서브페이지가 `.topArea` > `.topInner` > `.titDep1 (Playfair)` + `.pageGuide`의 일관된 위계로 시작합니다.
5. **푸터 아키텍처**: 370px 블랙 푸터, 패밀리 호텔 브랜드 링크 바(가로 1400px), 올리브 골드(`#989442`) 개인정보처리방침 강조, SNS 아이콘 배치가 완벽히 동일합니다.

### 3.2 확정된 차이점 (Local Identity & Amenities)
| 비교 항목 | 그랜드 조선 부산 (Grand Josun Busan) | 그랜드 조선 제주 (Grand Josun Jeju) |
| :--- | :--- | :--- |
| **GNB 세부 레이아웃** | `.headArea` 높이 80px 기준 서브뎁스 마진 조정 | 다이닝 시설 다변화로 3번째 GNB 드롭다운 폭을 `1220px`로 특화 확장 (`.subDepth .gnbDepth2 { width: 1220px; }`) |
| **비주얼 에셋 경로** | `/BSMA/` (Busan Main) 전용 이미지 및 해운대 오션/시티뷰 테마 | `/JJMA/` (Jeju Main) 전용 이미지 및 중문 야자수, 힐 스위트, 피크 아일랜드 테마 |
| **메인 인디케이터** | 기본 스와이퍼 인디케이터 채택 | 티저/특화용 수직 플로팅 도트 인디케이터 클래스(`.mainIndicator`) 추가 탑재 |
| **시설 및 오퍼링** | 비즈니스/시티 리조트, 오션뷰 수영장, 팔레드신, 라운지&바 | 올데이 다이닝 아리아, 루브리카, 힐스위트 전용 그랑 제이, 액티비티(Gran-J) 중심 |
| **위치 정보 (Location)** | 부산광역시 해운대구 중동 해운대해변로 292 | 제주특별자치도 서귀포시 중문관광로 72번길 60 |

---

## 4. 확인된 내용과 추정 내용의 명확한 구분 (검증 매트릭스)

### 4.1 실제 웹사이트에서 확인한 내용 (Verified Facts)
- [x] **스타일시트 구조**: `common_new.css`, `m_common_new.css`, `contents.css`, 각 지점별 `common/main` 분기 확인 완료.
- [x] **폰트명 및 로컬 선언**: `@font-face`를 통한 `playfair`, `Noto Serif Display`, `gothamL/B/M`, `NanumMyeongjo/B`, `Noto Serif KR`, `notokrL/R/M`, `spoqaL/R` 선언 확인 완료.
- [x] **핵심 색상 HEX**: `#ba998c`, `#d6c2ba`, `#b29d95`, `#2c4942`, `#1f453b`, `#989442`, `#72715c`, `#f0eeed`, `#f9f9f9`, `#000000`, `#ffffff`, `#333333`, `#666666`, `#888888`, `#cccccc`, `#eeeeee` 추출 확인 완료.
- [x] **수치 규격**:
  - 데스크톱 `.wrapper` 최소 너비: `1500px`
  - 데스크톱 `.inner` 및 푸터 콘텐츠 너비: `1400px`
  - PC 헤더 높이: 초기 `150px` / 스크롤 시 `100px` (서브페이지 `80px`)
  - 모바일 헤더 높이: `56px`
  - PC 로고 규격: `118px` x `42px` / 푸터 로고: `172px` x `64px`
  - PC 섹션 하단 패딩: `180px`
  - 버튼 `.btnL` 높이: `50px` / 최소 너비: `150px`
- [x] **컴포넌트 클래스 체계**: `.btnSC`, `.btnLine`, `.titDep1`, `.titDep2`, `.pageGuide`, `.topArea`, `.bcontInfo`, `.propertyList` 등 확인 완료.
- [x] **모바일 동작**: HTTP 302를 통한 `/m/main.do` 리다이렉트 및 우측 100% 슬라이드 드로어 메뉴 확인 완료.

### 4.2 추정 및 권장 재구성 항목 (Estimated & Recommended)
- [?] **상용 폰트 라이선스 대체**: 공식 사이트의 `Gotham`은 상용 서체입니다. 웹 표준 오픈 라이선스 구현 시 `Montserrat` 또는 영문 `Plus Jakarta Sans`를 정밀 대응 대체재로 지정 권장합니다.
- [?] **반응형 아키텍처 현대화**: 공식 사이트의 레거시 방식(User-Agent 감지 기반 분기) 대신, 단일 코드베이스에서 동작하는 **모던 플루이드 반응형 브레이크포인트(1440px / 1024px / 768px / 480px)**로 재구성하는 것이 적합합니다.
- [?] **조선 에끌라 전용 신규 에셋**: 신세계푸드 파티세리와 웰컴기프트 패키지(기프트 박스, 실크 리본, 샴페인, 구움과자 등)의 비주얼 에셋은 가상 브랜드의 컨셉에 맞추어 신규 조달 및 기획 제작이 필요합니다.

---

## 5. 조선 에끌라(JOSUN ÉCLAT) 적용 디자인 가이드

### 5.1 브랜드 디자인 토큰 (Design Tokens)

#### 1) Color Tokens (색상 시스템)
```css
:root {
  /* Brand Primary & Accents */
  --eclat-gold-primary: #ba998c;       /* 그랜드 조선 시그니처 웜 로즈골드 */
  --eclat-gold-light: #d6c2ba;         /* 소프트 로즈골드 틴트 (보더/배지) */
  --eclat-gold-deep: #b29d95;          /* 딥 로즈골드 (텍스트 링크/사이드 버튼) */
  --eclat-heritage-green: #2c4942;     /* 조선호텔 헤리티지 딥 포레스트 그린 */
  --eclat-antique-olive: #989442;      /* 신세계푸드 클래식 올리브 골드 */

  /* Neutral Backgrounds */
  --eclat-bg-white: #ffffff;           /* 베이스 퓨어 화이트 */
  --eclat-bg-warm-greige: #f0eeed;     /* 조선 시그니처 웜 그레이지 (비대칭 분할 배경) */
  --eclat-bg-offwhite: #f9f9f9;        /* 기프트 패키지 정보 박스 및 폼 배경 */
  --eclat-bg-black: #000000;           /* 시그니처 블랙 (푸터, 다크 섹션) */

  /* Typography Colors */
  --eclat-text-primary: #000000;       /* 본문 및 주요 헤딩 블랙 */
  --eclat-text-secondary: #333333;     /* 단락 설명문 다크 그레이 */
  --eclat-text-muted: #666666;         /* 부가 정보 미디엄 그레이 */
  --eclat-text-caption: #888888;       /* 캡션 및 안내 문구 */
  --eclat-text-white: #ffffff;         /* 다크 배경 위 화이트 텍스트 */

  /* Borders & Dividers */
  --eclat-border-subtle: #eeeeee;      /* 섬세한 1px 디바이더 */
  --eclat-border-light: #e5e5e5;       /* 모바일 헤더 및 카드 보더 */
  --eclat-border-default: #cccccc;     /* 기본 입력창 및 아웃라인 */
  --eclat-border-dark: #000000;        /* 럭셔리 아웃라인 버튼 및 배지 보더 */
}
```

#### 2) Typography Tokens (타이포그래피 스택)
```css
:root {
  /* Font Stacks */
  --font-serif-en: 'Playfair Display', 'Noto Serif Display', serif;
  --font-serif-kr: 'Noto Serif KR', 'NanumMyeongjo', serif;
  --font-sans-en: 'Gotham', 'Montserrat', -apple-system, sans-serif;
  --font-sans-kr: 'Noto Sans KR', 'Spoqa Han Sans Neo', sans-serif;
}

/* Typography Scale */
/* Display / Hero */
.eclat-display-hero {
  font-family: var(--font-serif-en);
  font-size: 60px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -0.02em;
}

/* Page Title (titDep1) */
.eclat-title-page {
  font-family: var(--font-serif-en);
  font-size: 48px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-align: center;
}

/* Section Heading (titDep2) */
.eclat-title-section {
  font-family: var(--font-sans-en), var(--font-sans-kr);
  font-size: 36px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

/* Card Heading (titDep3) */
.eclat-title-card {
  font-family: var(--font-sans-en), var(--font-sans-kr);
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.01em;
}

/* Sub-guide Description (pageGuide) */
.eclat-text-guide {
  font-family: var(--font-sans-kr);
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -0.025em;
  color: var(--eclat-text-secondary);
}

/* Editorial Storytelling Body (Brand Narrative) */
.eclat-text-editorial {
  font-family: var(--font-serif-kr);
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--eclat-text-secondary);
}

/* Body Regular (UI & Product Description) */
.eclat-text-body {
  font-family: var(--font-sans-kr);
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  color: var(--eclat-text-secondary);
}

/* Small Caption & Tag */
.eclat-text-caption {
  font-family: var(--font-sans-en), var(--font-sans-kr);
  font-size: 13px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

#### 3) Spacing & Layout Tokens (공간 및 그리드)
- **Container Max-Width**: `1400px` (중앙 정렬, 좌우 마진 `auto`)
- **Desktop Minimum Viewport**: `1500px`
- **Section Vertical Padding**:
  - 대형 섹션: `padding: 160px 0;` (최대 180px)
  - 일반 섹션: `padding: 120px 0;`
  - 서브페이지 탑 인트로(`.topArea`): `padding: 95px 0 90px;`
- **Component Gap**:
  - 카드 그리드 간격: `30px`
  - 섹션 타이틀과 콘텐츠 간격: `50px`
  - 버튼과 상하 콘텐츠 간격: `40px`

---

### 5.2 UI 컴포넌트 상세 가이드

#### 1) 헤더 및 내비게이션 (Header & GNB)
- **로고**:
  - 영문 워드마크: **JOSUN ÉCLAT** (ÉCLAT 부분은 우아한 세리프 또는 정제된 산세리프 처리)
  - 서브 카피: *Grand Josun x Shinsegae Food*
  - 크기: 가로 `150px` x 세로 `44px` (데스크톱 기준)
- **GNB 메뉴 구조**:
  1. **ABOUT ÉCLAT** (브랜드 스토리 및 장인정신)
  2. **GIFT COLLECTIONS** (시그니처 컬렉션, 베이커리 기프트, 호텔 셀렉션)
  3. **HOTEL EXPERIENCE** (그랜드 조선 부산·제주 객실 웰컴 기프트 경험)
  4. **JOURNEY TO MOTIFS** (각 지역 제품 모티브 탐방 안내)
  5. **GIFT ORDER & CONCIERGE** (예약 및 사전 주문 컨시어지)
- **헤더 인터랙션**:
  - 초기: 완전 투명 헤더 + 화이트 로고/텍스트.
  - 스크롤 시: 높이 90px 축소, 배경 순백색(`#fff`), 텍스트 블랙 반전, 하단 1px 보더(`#eee`).
  - 활성화/호버: 텍스트 컬러 `#ba998c`, 하단 2px 로즈골드 밑줄 바 애니메이션.

#### 2) 버튼 시스템 (Buttons & Actions)
1. **Primary Luxury Button (`.btn-eclat-primary`)**:
   - 바탕: 순백색(`#fff`), 테두리: 1px 실선 블랙(`#000000`), 텍스트: 블랙(`#000000`).
   - 규격: 최소 너비 `160px`, 높이 `50px`, `line-height: 50px`, 폰트 `14px`, `font-weight: 500`.
   - 호버 인터랙션: 배경이 블랙(`#000000`)으로 채워지며 텍스트가 화이트(`#ffffff`)로 반전 (`transition: all 0.4s ease;`).
2. **Rose Gold Accent Button (`.btn-eclat-accent`)**:
   - 특별 한정판 또는 기프트 주문에 사용: 테두리 `1px solid #ba998c`, 텍스트 `#ba998c`, 호버 시 배경 `#ba998c`, 텍스트 화이트.
3. **Editorial Underline Link (`.btn-eclat-link`)**:
   - 텍스트: `#b29d95`, 크기: `14px`, 대문자 영문.
   - 하단 1px 라인(`#b29d95`)이 상시 표시되거나 호버 시 좌에서 우로 100% 드로잉.
4. **Category Tag Badge (`.badge-eclat`)**:
   - `display: inline-block; border: 1px solid #000; padding: 4px 10px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #000;`

#### 3) 기프트 쇼케이스 카드 (Gift Product Cards)
- **스플릿 카드 레이아웃 (Split Gallery Card)**:
  - 그랜드 조선 객실 소개 방식 계승.
  - 좌측(40%): 카테고리 태그(`WELCOME GIFT`), 영문 컬렉션명(`Éclat No. 1 Royal Box`), 한글 상품 설명, 신세계푸드 구움과자 구성 내역, 상세 보기 버튼.
  - 우측(60%): 1050px x 700px 비율의 슬라이드 갤러리 (패키지 외관, 오픈 샷, 디저트 근접 샷).
- **3열 그리드 카드 (Curated Grid)**:
  - 3개 열 배치 (`width: calc((100% - 60px) / 3)`).
  - 상단: 1:1 정방형 또는 4:5 세로형 고해상도 제품 이미지 (마우스 오버 시 1.03배 미세 줌).
  - 하단: 패키지 명칭, 영문 서브타이틀, 주요 구성 요소(예: *시그니처 바닐라 마들렌 & 조각 파운드 케이크*).

#### 4) 푸터 구성 (Grand Josun Heritage Footer)
- **배경**: 완전한 딥 블랙(`#000000`), 텍스트 화이트(`#ffffff`).
- **상단 브랜드 헤리티지 바**:
  - 조선호텔앤리조트 공식 패밀리 브랜드(그랜드 조선 부산, 그랜드 조선 제주, 조선 팰리스) 및 신세계푸드 로고를 모노크롬 화이트로 가로 배치.
- **중앙 정보 영역**:
  - 좌측: 'JOSUN ÉCLAT' 엠블럼 로고.
  - 중앙: 브랜드 스토리 요약, 서비스 이용약관, 개인정보처리방침(올리브 골드 `#989442` 강조).
  - 우측: 인스타그램, 카카오톡 채널, 공식 조선호텔 매거진 링크.
- **하단 카피라이트**:
  - `font: 14px notokrL; opacity: 0.5;` - 호스피탈리티 파트너십 표기 및 법적 고지.

#### 5) 지역 모티브 탐방 및 실시간 3대 지도 길찾기 시스템 (Journey & Navigation Component)
- **호텔별 지역 단독 안내 원칙 (Regional Exclusivity)**:
  - 투숙객 혼선을 방지하기 위해 섹션 내 복수 지역 선택 탭을 배제하고, 상단 호텔 선택기(`currentHotel`)에 따라 **부산 호텔은 부산 관광지만, 제주 호텔은 제주 관광지만 단독으로 안내**하도록 구성.
- **실시간 인터랙티브 구글 지도 임베드 (`.route-map-iframe`)**:
  - 반응형 280px(모바일 220px) 높이의 구글 지도 경로 임베드 iframe.
  - 상단 탭(`.route-media-tabs`)을 통해 '구글 지도 길안내'와 '모티브 쿠키 아트' 고화질 시안 간 즉각적인 토글 지원.
- **비주얼 경로 다이어그램 (`.route-schematic`)**:
  - 출발지 호텔(🏨) ➔ 거리/소요시간 ➔ 목적지 명소(🌉/⛰️)의 흐름을 보여주는 직관적 노드 다이어그램.
- **국내외 3대 지도 자동 경로 연동 버튼 (`.map-action-links`)**:
  - **네이버 지도 (Naver Map)**: 투영 좌표(EPSG:3857)와 한글 명칭이 포함된 신형 웹 길찾기 URL(`map.naver.com/p/directions/[출발지]/[목적지]/-/car`)을 연동하여 클릭 시 즉시 출발지와 도착지가 자동 세팅되고 실시간 자동차 경로 안내 실행.
  - **카카오맵 (Kakao Map)**: 카카오 공식 링크 패턴(`map.kakao.com/link/from/[출발지]/to/[목적지]`)을 적용하여 출발지와 도착지의 정확한 WGS84 좌표 및 명칭이 자동 세팅되고 즉시 길찾기 경로가 실행.
  - **구글 지도 (Google Maps)**: 공식 파라미터(`www.google.com/maps/dir/?api=1&origin=...&destination=...`)를 통해 글로벌 투숙객용 경로 자동 안내.
- **지도 전체화면 확대 모달 (`#map-modal`)**:
  - '지도 크게 보기' 버튼 클릭 시 960px 대형 팝업 레이어로 지도를 넓게 탐색할 수 있으며, 모달 하단에서도 네이버/카카오/구글 3대 지도 원클릭 실시간 길안내 바로가기를 제공.

---

### 5.3 조선 에끌라 웹페이지 레이아웃 청사진 (Page Blueprints)

#### 1) 메인 랜딩 페이지 구조 (Main Page Flow)
1. **Hero Section (01. THE WELCOME MOMENT)**:
   - 뷰포트 높이 `100vh` 풀스크린 시네마틱 영상/배너.
   - 그랜드 조선 오션/가든 객실에 비치는 햇살과 웰컴 기프트 박스를 개봉하는 럭셔리한 순간 연출.
   - 메인 타이틀: *"The Shining Welcome, Crafted for Your Unforgettable Stay"* (`Playfair Display`, 60px).
2. **Brand Philosophy Section (02. HERITAGE & CRAFTSMANSHIP)**:
   - 좌우 비대칭 스플릿 레이아웃 (우측 배경 `#f0eeed`).
   - 조선호텔의 100년 호스피탈리티 정신과 신세계푸드의 장인정신 소개.
   - 서술형 명조체(`Noto Serif KR`)를 사용한 감성적 에디토리얼 카피.
3. **Signature Gift Collections (03. CURATED SELECTIONS)**:
   - 1400px 컨테이너 내부 대형 인터랙티브 캐러셀.
   - 대표 라인업 3종:
     - **Éclat Voyage (그랜드 조선 부산 오션 에디션)**: 해운대의 청량함과 바다 내음을 담은 티 세트 & 마카롱.
     - **Éclat Nature (그랜드 조선 제주 포레스트 에디션)**: 제주의 햇살과 감귤 풍미를 담은 시트러스 파운드 & 티 푸드.
     - **Éclat Heritage (그랜드 마스터 피스)**: 신세계푸드 프리미엄 구움과자 & 조선호텔 하우스 브랜드 비벤떼(VIVENTE) 티백/캡슐커피 페어링.
4. **The Art of Packaging (04. UNBOXING ELEGANCE)**:
   - 딥 포레스트 그린(`#2c4942`)과 웜 로즈골드 리본이 어우러진 하이엔드 패키지 디테일 클로즈업.
   - 친환경 고급 지류, 실크 리본, 왁스 실링 스탬프 인터랙션.
5. **Boutique Tasting Guide (05. BOUTIQUE PAIRING GUIDE)**:
   - 전 객실 비치 조선호텔 하우스 브랜드 **비벤떼(VIVENTE)**와의 시그니처 2대 페어링 가이드 (In-Room Welcome Ritual 및 Wine Pairing 삭제 완료).
   - Card 01: 비벤떼 시그니처 티백 (친환경 생분해 사셰백) & 버터 쇼트브레드·시트러스 사블레 페어링 (전용 사진 에셋 첨부).
   - Card 02: 비벤떼 캡슐커피 (네스프레소 호환 하우스 블렌드) & 다크 초콜릿 쿠키 페어링 (전용 사진 에셋 첨부).
6. **Footer (06. BRAND FOOTER)**:
   - 공식 370px 블랙 헤리티지 푸터.

#### 2) 서브페이지 구조 (Subpages Blueprint)
- **헤더 탑 인트로 공통 규격**:
  ```html
  <div class="topArea">
    <div class="topInner">
      <h2 class="titDep1">About Us</h2> <!-- Playfair Display 60px -->
      <p class="pageGuide">조선호텔앤리조트와 신세계푸드가 전하는 눈부신 환대의 선물</p>
    </div>
  </div>
  ```
- **하위 페이지 구성**:
  - `/about/story.do`: 브랜드 기획 스토리, 두 브랜드의 헤리티지 타임라인.
  - `/collection/list.do`: 기프트 박스 라인업 리스트 (`boxtypeList` 카드 그리드 형태).
  - `/experience/rooms.do`: 부산·제주 객실별 웰컴 세팅 안내.
  - `/concierge/inquiry.do`: 사전 예약 주문, 단체 기프트 및 맞춤형 컨시어지 문의 폼.

---

### 5.4 이미지 및 아트 디렉션 가이드 (Imagery & Art Direction)

1. **톤 앤 매너 (Tone & Mood)**:
   - **조명**: 자연광(Natural Sunlight) 기반의 은은하고 부드러운 섀도우 연출.
   - **색감**: 차가운 블루톤을 지양하고, 웜 베이지(Warm Beige), 골든 아워(Golden Hour)의 따스함, 절제된 딥 그린의 안정감 강조.
   - **텍스처**: 고급스러운 리넨(Linen), 원목(Wood), 대리석(Marble), 패키지 지류의 미세한 엠보싱 질감을 선명하게 포착.
2. **촬영 앵글 및 비율**:
   - **Hero Media**: 16:9 와이드 또는 21:9 시네마틱 앵글 (최소 해상도 2560 x 1440px).
   - **Product Showcase**: 4:3 또는 3:2 비율 (1400px 그리드 대응을 위해 가로 최소 1600px).
   - **디테일 컷 (Macro)**: 베이커리의 바삭한 결, 슈가 파우더, 패키지 금박 로고를 극대화한 1:1 매크로 컷.
3. **최적화 가이드**:
   - 포맷: 차세대 웹 포맷 `WebP` 및 고품질 `AVIF` 기본 적용, 레거시 폴백용 `JPG`.
   - 이미지 로딩: Hero 영역을 제외한 모든 이미지에 `loading="lazy"` 및 `decoding="async"` 필수 지정.

---

### 5.5 모던 반응형 브레이크포인트 및 모바일 UX 가이드

그랜드 조선의 검증된 1400px 데스크톱 레이아웃과 56px 모바일 규격을 하나의 유연한 반응형 시스템으로 통합합니다:

| 뷰포트 구분 | 브레이크포인트 | 레이아웃 동작 및 규칙 |
| :--- | :--- | :--- |
| **Desktop Wide** | `≥ 1440px` | - 최대 너비 `1400px` 중앙 정렬 고정<br>- 스플릿 비대칭 배경(좌우 분할) 완벽 구현<br>- 헤더 높이 150px -> 100px 스크롤 축소 |
| **Desktop / Laptop** | `1024px ~ 1439px`| - 유동적 컨테이너 폭: `width: 92%` (좌우 여백 4%)<br>- 메가 메뉴 드롭다운 유지하되 폰트 크기 및 간격 미세 비례 축소<br>- 3열 카드 그리드 유지 |
| **Tablet** | `768px ~ 1023px` | - 2열 카드 그리드로 재배치<br>- 스플릿 배경을 상하 수직 스택으로 전환 (이미지 상단, 텍스트 하단)<br>- 헤더 높이 80px로 간소화 |
| **Mobile** | `< 768px` | - 헤더 높이 `56px` 고정 (좌측 로고, 우측 56px 햄버거 메뉴)<br>- 풀스크린(100vw) 우측 슬라이드 드로어 메뉴 구동<br>- 컨테이너 좌우 패딩: `padding: 0 20px`<br>- 폰트 스케일 다운 (`titDep1`: 60px -> 24px~28px)<br>- 카드 1열 단일 컬럼 스택 |

---

## 6. 참고 URL 및 확인되지 않은 항목 (Reference & Unverified Items)

### 6.1 공식 참고 웹사이트 URL
1. **그랜드 조선 부산 공식 사이트**:
   - 메인: `https://gjb.josunhotel.com/main.do`
   - 모바일 메인: `https://gjb.josunhotel.com/m/main.do`
   - 호텔 소개 (About Us): `https://gjb.josunhotel.com/about/aboutUs.do`
   - 객실 안내 (Rooms Submain): `https://gjb.josunhotel.com/rooms/subMain.do`
   - 패키지 오퍼 (Package List): `https://gjb.josunhotel.com/package/list.do`
2. **그랜드 조선 제주 공식 사이트**:
   - 메인: `https://gjj.josunhotel.com/main.do`
   - 모바일 메인: `https://gjj.josunhotel.com/m/main.do`
   - 호텔 소개 (About Us): `https://gjj.josunhotel.com/about/aboutUs.do`
   - 객실 안내 (Rooms Submain): `https://gjj.josunhotel.com/rooms/subMain.do`
   - 패키지 오퍼 (Package List): `https://gjj.josunhotel.com/package/list.do`
3. **핵심 스타일시트 리소스 (Direct Inspect)**:
   - `https://gjb.josunhotel.com/static/home/css/ko/pc/common_new.css`
   - `https://gjb.josunhotel.com/static/home/css/ko/mo/m_common_new.css`
   - `https://gjb.josunhotel.com/static/home/css/ko/pc/common_gjb.css`
   - `https://gjb.josunhotel.com/static/home/css/ko/pc/main_gjb.css`
   - `https://gjj.josunhotel.com/static/home/css/ko/pc/common_gjj.css`
   - `https://gjj.josunhotel.com/static/home/css/ko/pc/main_gjj.css`
   - `https://gjb.josunhotel.com/static/home/bluewaves/css/pc/contents.css`

### 6.2 현재 시점 미확인 및 확인 불가 항목
1. **회원 전용 및 결제 단계 보안 페이지**:
   - 마이페이지 쿠폰함(`/mypage/myCouponaForm.do`), 객실 실시간 예약 결제 엔진(`https://be-api.crs.josunhotel.com/`) 내부의 상세 결제 폼 CSS 및 스텝 UI는 인증 세션 제한으로 인하여 디자인 시스템 공통 컴포넌트 분석 범위에서 제외하였습니다.
2. **상용 웹폰트 원본 파일 배포 권한**:
   - 조선호텔 서버에서 호스팅 중인 `Gotham`(`gotham-light.woff`, `gotham-book.woff`, `gotham-medium.woff`)은 상용 폰트로 다운로드 및 라이선스 없는 외부 복제가 불가하므로, 구현 단계에서는 구글 폰트(Montserrat/Plus Jakarta Sans)로 1:1 대체 매핑합니다.
3. **동적 자바스크립트 모듈 소스**:
   - `pubCommon_gjb.js` 및 플러그인(`pubPlugin.js`) 내 비동기 AJAX 데이터 바인딩 로직은 디자인 토큰 분석 범위 밖이므로 디자인 원칙과 마크업/CSS 규칙만 선별 추출하였습니다.

---
*본 가이드는 향후 '조선 에끌라' 프론트엔드 퍼블리싱 및 컴포넌트 개발 단계에서 단일 진실 공급원(Single Source of Truth)으로 사용됩니다.*

