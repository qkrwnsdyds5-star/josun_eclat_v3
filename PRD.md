# [PRD] JOSUN ÉCLAT (조선 에끌라) 브랜드 소개 웹서비스 기획서
> **문서 버전**: v2.1.0  
> **최종 수정일자**: 2026-11-11  
> **프로젝트 성격**: 대학·산업 융합 프로젝트 (호텔·리테일 서비스 프로토타입)  
> **대상 브랜드**: 조선호텔앤리조트(그랜드 조선 부산·제주) × 신세계푸드  
> **문서 상태**: Final Approved (3대 룸 체계 단일화 & 탈지역 키즈룸 & 조선호텔 공식 로케이션 캐러셀 디자인 완비)

---

## 1. 프로젝트 개요 및 목표

### 1.1 프로젝트 배경 및 추진 목적
대한민국 최고(最古)의 환대 역사를 계승한 **조선호텔앤리조트**의 독자 특급 호텔 브랜드인 **그랜드 조선(Grand Josun 부산·제주)**과, 대한민국 프리미엄 미식을 선도해 온 **신세계푸드**가 결합하여 가상의 럭셔리 웰컴기프트 브랜드 **'조선 에끌라(JOSUN ÉCLAT)'**를 기획하였습니다.

본 웹서비스는 그랜드 조선 부산 및 제주의 객실에 투숙하는 고객이 웰컴 테이블에 놓인 **웰컴기프트 브로슈어의 QR 코드를 스캔하여 접속하는 모바일 퍼스트 브랜드 소개 정적 웹페이지**입니다. 투숙객에게 단순한 식음료 제공을 넘어, 여행지의 지역적 감성과 호텔의 정성 어린 환대 스토리를 디지털 경험으로 확장 전달하는 것을 목적으로 합니다.

### 1.2 산출물의 성격 및 한계 (Academic & Prototype Disclaimer)
- **비상용 프로토타입**: 본 웹페이지는 실제 상업적 예약·결제 또는 커머스를 운영하는 사이트가 아니며, **대학 산업 융합 프로젝트(산학협력 연구)의 서비스 프로토타입**으로 제작됩니다.
- **공식 판매 여부 고지**: 본 웹서비스에서 소개하는 웰컴기프트 구성 및 브로슈어는 기획안에 기반한 연구 결과물이며, **그랜드 조선 호텔 및 신세계푸드에서 실제 상용 판매하거나 공식 제공 중인 상품이 아님**을 웹페이지 내 명확한 디스클레이머(Disclaimer)로 명시합니다.

### 1.3 핵심 가치 제안 (Value Proposition)
1. **The First Hospitality Touchpoint (첫 환대의 디지털화)**:
   객실 입실 순간 맞이하는 오프라인 기프트 박스와 브로슈어를 모바일 웹으로 매끄럽게 연결(Omni-channel Onboarding).
2. **Local Identity Archiving (지역 여행 기억의 아카이빙)**:
   부산(오션, 광안대교, 갈매기, 등대)과 제주(자연, 한라산, 돌하르방, 귤, 야자수)의 고유한 지역성을 감각적인 쿠키 아트로 시각화·미식화.
3. **Family & Kids Engagement (체험형 가족 추억 형성)**:
   키즈 객실 투숙객을 위한 쿠키 데코 키트와 3단계 미션 인터랙션을 제공하여 가족 간 능동적 추억 생성 지원.
4. **5-Star Luxury Aesthetics (5성급 호텔 웹디자인 계승)**:
   [DESIGN_GUIDE.md](file:///c:/Users/User/Desktop/JOSUN_ECLAT_4/DESIGN_GUIDE.md)에 정립된 그랜드 조선 공식 홈페이지의 절제된 럭셔리 그리드(1400px, 넉넉한 여백, 웜 로즈골드·헤리티지 그린 팔레트)를 완벽히 계승.

---

## 2. 사용자 유형과 접속 시나리오

### 2.1 타깃 사용자 페르소나 (Target Personas)

| 구분 | 페르소나 A: 프리미엄 호캉스 고객 | 페르소나 B: 키즈 패밀리 고객 | 페르소나 C: 산학 평가단 & 심사위원 |
| :--- | :--- | :--- | :--- |
| **연령/특성** | 20대 후반 ~ 40대 초반 커플, 부부, 1인 힐링 여행객 | 30대 중반 ~ 40대 초반 부모 + 미취학/초등 자녀 (1~2인) | 대학 교수진, 호텔·식품 산업 실무 평가위원 |
| **투숙 형태** | 그랜드 조선 부산/제주 일반 및 스위트 객실 투숙 | 그랜드 조선 부산/제주 키즈 테마 객실 투숙 | 온/오프라인 프로젝트 심사 및 포트폴리오 열람 |
| **주요 니즈** | 호텔의 특별한 대우 감각, 감성적 비주얼, SNS 공유 가치 | 아이를 위한 안전하고 재미있는 객실 놀이 콘텐츠, 가족 추억 | 기획의 논리성, 디자인 가이드 준수도, 코드 완성도 및 웹 표준 |
| **접속 환경** | 스마트폰 (iOS Safari, Android Chrome / QR 코드 스캔) | 스마트폰 / 태블릿 (가족 공동 열람) | 데스크톱 PC, 랩톱, 태블릿 (GitHub Pages 접속) |

### 2.2 접속 시나리오 (User Journey Map)

```
[오프라인 터치포인트]
객실 입실 -> 웰컴 테이블 위 '조선 에끌라' 기프트 박스 & 브로슈어 발견
       ↓
[QR 코드 스캔]
스마트폰 기본 카메라 또는 포털 앱으로 브로슈어 하단 QR 코드 스캔
       ↓
[랜딩 & 온보딩]
GitHub Pages 모바일 반응형 웹 접속 (1.5초 이내 로딩, 헤리티지 로고 & 시네마틱 히어로 감상)
       ↓
[스토리 & 컬렉션 탐색]
- 부산/제주 지역 탭 선택 -> 일반/스위트 객실 구성(3종 vs 6종) 쿠키 디자인 및 베이커리 스토리 확인
- (키즈 투숙객) 키즈 미션 어드벤처 탭으로 이동하여 쿠키 꾸미기 3단계 가이드 확인
       ↓
[호텔 경험 연계 & 인증]
지역 모티브 명소 탐방 안내 확인 -> SNS 인증 욕구 충족 -> 호텔 호스피탈리티 만족도 극대화
```

---

## 3. 주요 사용자 경험 원칙 (UX Principles)

1. **Seamless QR-to-Web Transition (초기 진입의 쾌적성)**:
   QR 스캔 후 브라우저가 열리는 즉시 불필요한 스플래시나 로딩 딜레이 없이 1초 내에 첫 화면(Hero)이 노출되어야 합니다.
2. **Mobile-First Luxury (모바일 환경에서의 5성급 품격)**:
   화면 폭 390px 내외의 모바일 뷰포트에서도 좁아 보이거나 답답하지 않도록, 충분한 행간(Line-height)과 카드 간격, 절제된 타이포그래피 계층을 보장합니다.
3. **Tactile Exploration (시각적 미식 탐색 인터랙션)**:
   정적인 텍스트 나열을 배제하고, 부산/제주 지역 전환 버튼 및 객실 등급(일반 3종 vs 스위트 6종) 토글 인터랙션을 통해 실제 초콜릿·쿠키의 디테일과 틴케이스를 만져보는 듯한 직관적 시각 탐색을 제공합니다.
4. **Kid-Friendly Storytelling (어린이 눈높이의 친근한 가이드)**:
   키즈 섹션에서는 고급 호텔의 격조를 해치지 않는 선에서 부드러운 일러스트레이션 톤과 알기 쉬운 단계별(Step 1-2-3) 가이드를 제공합니다.

---

## 4. 정보 구조 및 내비게이션 (IA & Navigation)

본 서비스는 사용자의 자연스러운 스크롤 흐름을 유도하는 **시맨틱 원페이지 롱스크롤(Semantic Single-Page Long-form) 구조**로 설계하며, 상단 헤더의 앵커(Anchor) 내비게이션을 통해 원하는 섹션으로 즉각 이동할 수 있도록 지원합니다.

### 4.1 사이트맵 (Information Architecture)

```
JOSUN ÉCLAT Web Prototype (Root: index.html)
│
├── 0. Header / Navigation Bar (Sticky, Translucent -> Solid)
│    ├── Brand Logo (Calligraphic 'L' Monogram Emblem + "JOSUN ÉCLAT GRAND JOSUN")
│    ├── Navigation Links (Story / Collections / Kids / Experience / Journey)
│    └── Mobile Hamburger Menu & Drawer
│
├── 1. Hero Section (#hero)
│    ├── Visual Canvas (Cinematic Mood / Welcome Moment)
│    └── Editorial Copy ("조선 에끌라, 그 특별한 여정의 시작")
│
├── 2. Brand Story Section (#story)
│    ├── Heritage Narrative (Grand Josun Hospitality × Shinsegae Food Craftsmanship)
│    └── 3 Core Pillars (특별한 환대 / 여행지의 감성 / 일상의 여운)
│
├── 3. Curated Collections Section (#collections)
│    ├── Regional Selector Tab: BUSAN vs JEJU
│    ├── Room Tier Toggle: Standard (3종) vs Suite (6종)
│    ├── Product Detail Grid & Spec Cards (모티프별 원재료, 디자인 의미)
│    └── Unboxing & Packaging Showcase (지류, 틴케이스, 새틴 리본)
│
├── 4. Kids Cookie Adventure Section (#kids)
│    ├── Kids Concept Intro (창의적 놀이와 가족 참여)
│    ├── Kit Components (고래 실루엣 쿠키 6개, 데코 아이싱 펜 3색, 웰컴 카드)
│    └── 3-Step Mission Adventure (데코레이션 -> 기념 촬영 -> 추억 공유)
│
├── 5. Hotel Tasting & Pairing Section (#experience)
│    └── Boutique Tasting Guide (조선호텔 시그니처 비벤떼 티백 & 캡슐커피 2종 페어링 가이드)
│
├── 6. Regional Motif Journey Section (#motif-journey)
│    └── Journey to the Motifs (각 지역 제품 모티브 탐방 안내)
│
└── 7. Footer (#footer)
     ├── Academic Prototype Disclaimer (대학 산업 융합 프로젝트 명시)
     ├── Grand Josun & Shinsegae Food Heritage Brand Links
     ├── Copyright & Legal Notices
     └── Top Scroll Button
```

---

## 5. 페이지별·섹션별 상세 콘텐츠 구성

### 5.1 [섹션 1] Hero Section: The Shining Welcome (환대의 서막)
- **배경 비주얼**: 가독성 극대화를 위해 어둡게 명도 조정된 웰컴 비주얼 캔버스 (다크 오버레이 및 밝기 튜닝 적용).
- **메인 카피**:
  ```
  JOSUN ÉCLAT
  ```
  *(영문 메인 카피, 한글 서브 카피 및 상단 'GRAND JOSUN × SHINSEGAE FOOD' 배지 삭제 후 브랜드 메인 타이틀 단독 표출)*
- **액션 및 인터랙션**: '컬렉션 탐색하기' 단독 CTA 버튼 배치 ('브로슈어 시안 보기' 버튼 및 '마우스 스크롤 유도 인디케이터' 삭제).

---

### 5.2 [섹션 2] Brand Story: Heritage & Craftsmanship (브랜드 스토리)
- **헤드라인**: `"조선 에끌라, 그 특별한 여정의 시작"`
- **본문 스토리**:
  > "조선호텔앤리조트의 100년 호스피탈리티 헤리티지가 깃든 **그랜드 조선**과, 대한민국 프리미엄 미식을 선도해 온 **신세계푸드**가 만나 오직 투숙 고객만을 위한 감각적인 환대의 선물 '조선 에끌라(JOSUN ÉCLAT)'를 선보입니다.  
  > 'Éclat(빛남, 눈부심)'라는 이름처럼, 여행지에 첫발을 내딛는 객실 문 뒤에서 반짝이는 설렘과 달콤한 기억을 선사합니다."
- **비주얼 에셋**: 조선 에끌라 공식 엠블럼 로고 (`./assets/logo/조선 에끌라 로고.png`, 딥그린 박스 프레임 및 캡션 문장 배제 후 로고 단독 깔끔 노출).
- **3대 핵심 가치 카드 (3 Core Values)**:
  1. **특별한 환대의 선물 (Exquisite Hospitality)**: 특급 호텔의 격조 높은 환대 철학을 담은 웰컴 어메니티.
  2. **여행지의 지역적 감성 (Local Essence)**: 부산의 푸른 바다와 제주의 따스한 자연을 담은 모티프.
  3. **일상의 여운을 더하는 경험 (Everlasting Memory)**: 체크아웃 이후에도 오래도록 기억될 감각적인 미식 여운.

---

### 5.3 [섹션 3] Curated Collections: Regional & Room Tiers (지역 및 객실별 컬렉션)

본 섹션은 사용자가 **지역(부산 vs 제주)**과 **객실 등급(일반 객실 3종 vs 스위트 객실 6종)**을 직관적으로 선택하여 제품을 탐색할 수 있는 인터랙티브 쇼케이스로 구성합니다.

#### 1) 부산 컬렉션 (JOSUN ÉCLAT with BUSAN)
- **지역 테마 키워드**: *Ocean Breeze, Haeundae Skyline, Romantic Night Sea*
- **시그니처 포인트 컬러**: 나이트 오션 네이비 & 샴페인 골드
- **패키지 외관**: 해운대 달빛 바다와 마린시티 스카이라인이 금박으로 새겨진 딥 네이비 슬리브 박스 & 네이비 새틴 리본.
- **제품 구성**:
  * **일반 객실 구성 (3종)** (대표 이미지: `./assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_일반객실.png`):
    1. **광안대교 쿠키 (Gwangan Bridge Cookie)**: 부산의 대표 랜드마크를 형상화한 버터 쇼트브레드 & 다크 초콜릿.
    2. **크루즈선 쿠키 (Cruise Ship Cookie)**: 해운대 앞바다를 유영하는 크루즈선을 정교하게 조각한 쿠키.
    3. **해운대 등대 쿠키 (Lighthouse Cookie)**: 안전한 항해와 여행의 길잡이를 상징하는 트윈 등대 쿠키.
  * **스위트 객실 추가 구성 (+3종, 총 6종)** (대표 이미지: `./assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_스위트객실.png`):
    4. **해운대 갈매기 초콜릿 (Seagull Chocolate)**: 오션 위를 날아오르는 자유로운 해운대 갈매기 실루엣의 화이트 & 밀크 초콜릿.
    5. **진주 조개 초콜릿 (Seashell Chocolate)**: 화이트 펄이 얹힌 우아한 바다 조개 화이트 초콜릿.
    6. **해운대 파도 초콜릿 (Wave Chocolate)**: 역동적인 해운대 파도의 포말을 형상화한 투톤 마블 초콜릿.

#### 2) 제주 컬렉션 (JOSUN ÉCLAT with JEJU)
- **지역 테마 키워드**: *Lush Nature, Hallasan Mist, Sunny Citrus*
- **시그니처 포인트 컬러**: 딥 헤리티지 포레스트 그린 (`#2c4942`) & 올리브 골드 (`#989442`)
- **패키지 외관**: 한라산 능선과 야자수 실루엣이 금박으로 장식된 에메랄드 그린 슬리브 박스 & 그린 리본.
- **제품 구성**:
  * **일반 객실 구성 (3종)** (대표 이미지: `./assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_일반객실.png`):
    1. **제주 귤 조각 쿠키 (Jeju Citrus Slice Cookie)**: 제주의 따사로운 햇살을 머금은 감귤 형상 버터 쿠키.
    2. **제주 조랑말 쿠키 (Jeju Horse Cookie)**: 푸른 초원을 힘차게 달리는 제주 조랑말 쿠키.
    3. **제주 야자수 쿠키 (Palm Tree Cookie)**: 남국의 이국적인 휴양 무드를 전하는 야자수 실루엣 쿠키.
  * **스위트 객실 추가 구성 (+3종, 총 6종)** (대표 이미지: `./assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_스위트객실.png`):
    4. **한라봉 초콜릿 (Hallabong Chocolate)**: 상큼한 시트러스 과육 단면과 싱그러운 잎사귀 디테일의 프리미엄 초콜릿.
    5. **제주 돌하르방 초콜릿 (Dolhareubang Chocolate)**: 여행자를 따뜻한 미소로 반겨주는 수호석 현무암 텍스처 초콜릿.
    6. **한라산 백록담 초콜릿 (Hallasan Peak Chocolate)**: 눈 덮인 백록담 능선을 마블 초콜릿으로 표현한 마운틴 초콜릿.

---

### 5.4 [섹션 4] Kids Cookie Adventure: Family DIY Experience (키즈 객실 웰컴기프트)
- **슬로건**: `"조선 에끌라에서 시작하는 달콤한 키즈 모험, 환영합니다!"`
- **콘셉트 배경**:
  일방적인 디저트 제공을 넘어, 어린이와 부모가 함께 테이블에 둘러앉아 소통하고 추억을 완성하는 **참여형 DIY 쿠키 데코 키트**.
- **제품 구성 디테일 (제공된 시안 이미지 기준)**:
  * **동일한 기본 실루엣 쿠키 (6개)**: 어린이가 자유롭게 그림을 그릴 수 있는 고래 실루엣 플레인 버터 쿠키 6개.
  * **데코 아이싱 펜 (3색)**: 핑크, 스카이블루, 초코 브라운 등 안전하고 짜기 쉬운 튜브형 아이싱 펜 3색.
  * **웰컴 카드**: *"Welcome to Grand Josun. May your journey be special."*
- **3-Step 키즈 미션 어드벤처 (Kids Mission Guide)**:
  * **Step 1. 상상력 가득 데코레이션!**: 3색 아이싱 펜으로 고래 쿠키 위에 나만의 특별한 여행 이야기를 완성해요.
  * **Step 2. 찰칵! 자랑스러운 기념사진**: 완성된 알록달록 쿠키를 카메라로 찍어 가족 앨범과 SNS에 남겨요.
  * **Step 3. 우리 가족 여행 추억 나누기**: 달콤한 쿠키를 맛보며 오늘 여행에서 가장 즐거웠던 순간을 이야기해요.

---

### 5.5 [섹션 5] Boutique Tasting Guide (호텔 테이스팅 페어링 가이드)
- **개편 사항**: 기존 'In-Room Welcome Ritual' 및 'Wine Pairing' 항목을 삭제하고, 조선호텔 하우스 브랜드 **비벤떼(VIVENTE)**와의 2대 시그니처 페어링 가이드로 전면 개편.
- **Boutique Tasting Guide (비벤떼 미식 페어링 제안)**:
  * **Tea Pairing (비벤떼 시그니처 티백)**: 조선호텔 100년 헤리티지 생분해 사셰백(PLA) 프리미엄 티. 은은한 베르가못과 꽃잎 향이 조선 에끌라가 정성스레 준비한 웰컴기프트 디저트 컬렉션의 깊은 풍미와 우아하고 조화로운 페어링을 선사.
  * **Coffee Pairing (비벤떼 캡슐커피)**: 전 객실 비치 하우스 블렌드 캡슐커피. 풍부한 황금빛 크레마와 다크 카카오·바닐라 바디감이 조선 에끌라가 제공하는 다채로운 웰컴기프트와 완벽한 조화를 이루며 감미로운 여운을 더해줌.
  * **'추천 페어링', '브루잉 노트', '추출 가이드' 메타 영역 및 구체적 과자/초콜릿 명칭 언급 삭제 완료** (웰컴기프트 디저트와의 조화로운 설명으로 통일).

---

### 5.6 [섹션 6] Journey to the Motifs: Regional Travel Guide (지역 제품 모티브 탐방 안내)
- **기획 및 디자인 아이덴티티**:
  조선호텔 공식 웹사이트 오시는 길 페이지(`https://josunhotel.com/about/location.do`)의 디자인 시스템(`.topArea`, `.pageGuide`, `.mapArea`, `.toggleList.rsvList`, `.locationInfo`)을 100% 동일하게 반영하고, 세로 스크롤 방식에서 **인터랙티브 캐러셀/슬라이더 형식**으로 전면 개편.
- **초기 접속 시 자동 스크롤 방지**:
  * `history.scrollRestoration = 'manual'` 및 `window.scrollTo(0, 0)` 명시적 적용.
  * Google Maps iframe에 `data-src` 지연 로딩(Lazy Loading) 및 `tabindex="-1"`을 적용하여 초기 로드 시 iframe 포커스 탈취로 인한 섹션 6 자동 스크롤 튐 현상 원천 차단.
- **호텔별 전용 관광지 안내 원칙 (지역 필터링)**:
  * 웹사이트의 선택된 호텔 상태(`currentHotel`)와 100% 동기화되어 **부산 선택 시 부산 5대 모티브, 제주 선택 시 제주 5대 모티브를 각각 단독 슬라이더로 안내**.
- **캐러셀 슬라이더 인터랙션**:
  * 상단 5대 모티브 탭 바 (조선호텔 미니멀 언더라인 탭), 좌우 원형 화살표 버튼, 현재/전체 슬라이드 카운터(`01 / 05`), 모바일 터치 스와이프 제스처 완벽 지원.
  * 슬라이드 전환 시 해당 슬라이드의 구글 지도 iframe 동적 활성화.
- **지도 연동 및 미디어 스위처**:
  * **기본 지도**: **구글 지도 퍼가기(Google Maps Embed Iframe)** 방식을 기본 지도로 적용하여 별도의 API 키 발급이나 클라우드 설정 없이 전 세계 어디서나 안정적으로 로드. 사용자의 마우스 휠 및 +/- 버튼을 통한 확대/축소, 드래그를 통한 지도 이동(Pan) 완벽 지원.
  * 각 슬라이드 맵 영역 상단 '구글 지도' ↔ '쿠키 아트' 실시간 뷰 전환 지원.
  * **길찾기 버튼 바**: 실제 호텔 위치(부산: 해운대해변로 292, 제주: 중문관광로 72번길 60)를 출발지로 자동 연동한 **'구글 지도 길찾기'**와 고해상도 팝업 뷰를 제공하는 **'지도 크게 보기'** 제공.
- **오시는 길 교통편별 아코디언 토글 리스트 (`.toggleList.rsvList`)**:
  * **'∨' 토글 버튼**: 기존 '상세내용 보기' 텍스트를 완전히 제거하고 직관적인 원형 **'∨'** 기호로 변경. 클릭 시 **'∧'**로 부드럽게 회전(180도)하며 열림/닫힘 상태를 명확히 안내.
  * **자가용 (승용차/택시)**: 소요시간, 주행 경로, 주차 및 내비게이션 검색어 안내 (기본 오픈 `toggleOn`).
  * **대중교통 (도시철도 & 버스)**: 지하철 호선 및 출구, 시내·급행·마을버스 번호 및 하차 정류장 안내.
  * **도보 & 컨시어지 추천 팁 (Concierge Tip)**: 도보 이동 경로, 일몰/조망 최적 시간대, 모티브 기념사진 촬영 팁.
- **부산 컬렉션 5대 모티브 (그랜드 조선 부산 출발)**:
  1. **광안대교 (다이아몬드 브릿지)**: 광안대교 쿠키 모티브 (차량 15분, 6.8km)
  2. **청사포 다릿돌전망대 & 등대**: 등대 쿠키 모티브 (차량 10분, 해변열차 12분, 3.5km)
  3. **미포항 & 해운대 블루라인파크**: 크루즈 쿠키 모티브 (도보 15분, 차량 4분, 1.2km)
  4. **동백섬 & 누리마루 APEC하우스**: 해운대 갈매기 & 파도 초콜릿 모티브 (도보 10분, 0.8km)
  5. **해운대 백사장 & 송림공원**: 해운대 갈매기 & 조개 초콜릿 모티브 (호텔 정문 바로 앞 도보 1분, 50m)
- **제주 컬렉션 5대 모티브 (그랜드 조선 제주 출발)**:
  1. **한라산 백록담 (영실/어리목 코스)**: 한라산 백록담 초콜릿 모티브 (차량 30분, 22km)
  2. **성이시돌 목장 & 테쉬폰**: 성이시돌 말 쿠키 모티브 (차량 25분, 18km)
  3. **서귀포 감귤박물관 & 효돈 감귤마을**: 제주 감귤 쿠키 모티브 (차량 30분, 20km)
  4. **여미지 식물원 & 중문 야자수 산책로**: 제주 야자수 쿠키 모티브 (도보 8분, 차량 2분, 0.6km)
  5. **천제연 폭포 & 제주 돌문화공원**: 제주 돌하르방 초콜릿 모티브 (도보 10분, 0.8km)


---

### 5.7 [섹션 7] Footer: Brand Heritage & Disclaimer (푸터)
- **산학협력 프로토타입 공식 디스클레이머 (필수 고지)**:
  > **[Project Notice]**  
  > 본 웹페이지는 대학 산업 융합 프로젝트의 일환으로 기획·제작된 서비스 프로토타입 웹사이트입니다.  
  > 소개된 '조선 에끌라(JOSUN ÉCLAT)' 웰컴기프트 구성 및 디자인은 연구 및 제안 목적의 결과물이며, 조선호텔앤리조트(그랜드 조선 부산·제주) 및 신세계푸드에서 실제로 공식 판매·제공하는 상품이 아닙니다.
- **패밀리 호텔 & 브랜드 링크 바**:
  GRAND JOSUN BUSAN | GRAND JOSUN JEJU | JOSUN PALACE | SHINSEGAE FOOD
- **카피라이트**:
  `© 2026 JOSUN ÉCLAT Academic Prototype Project. All rights reserved.`

---

## 6. 기능 요구사항 (Functional Requirements)

| 요구사항 ID | 기능명 | 세부 기능 명세 | 중요도 |
| :--- | :--- | :--- | :---: |
| **FR-01** | 스티키 헤더 & 반응형 GNB | - 스크롤 위치에 따른 투명(`transparent`) → 순백색(`#ffffff`) 전환<br>- 스크롤 시 로고 및 폰트 색상 자동 반전 (화이트 ↔ 블랙)<br>- 활성 메뉴 항목 시그니처 로즈골드 밑줄 바 애니메이션 | **P0** |
| **FR-02** | 모바일 드로어 메뉴 | - 뷰포트 768px 미만에서 56px 햄버거 토글 버튼 제공<br>- 클릭 시 우측에서 100% 폭으로 부드럽게 슬라이드 인/아웃<br>- 메뉴 클릭 시 드로어 자동 닫힘 및 해당 섹션 스무스 스크롤 | **P0** |
| **FR-03** | 지역 탭 전환 (Busan / Jeju) | - 부산(BUSAN)과 제주(JEJU) 탭 버튼 클릭 시 즉각적인 인터랙티브 뷰 전환<br>- 탭 전환 시 상응하는 패키지 이미지, 지역 소개, 쿠키 구성 동적 갱신<br>- 활성 탭 버튼에 브랜드 고유 컬러 하이라이트 | **P0** |
| **FR-04** | 객실 등급 토글 (Standard / Suite) | - '일반 객실 (3종)'과 '스위트 객실 (6종)' 간 라디오형 세그먼트 토글<br>- 일반 선택 시 3종(기본), 스위트 선택 시 6종 쿠키 카드 부드러운 페이드 인 | **P0** |
| **FR-05** | 고화질 제품 모달 (Lightbox) | - 쿠키 카드 및 패키지 썸네일 클릭 시 고화질 원본 이미지 팝업 모달 노출<br>- ESC 키 입력, 배경 오버레이 클릭, 닫기(X) 버튼으로 모달 닫기 지원<br>- 배경 스크롤 방지 (`overflow: hidden`) 처리 | **P1** |
| **FR-06** | 키즈 미션 스텝 아코디언/탭 | - 키즈 섹션 내 3단계 미션(Step 1, Step 2, Step 3) 탭/아코디언 토글<br>- 각 단계 클릭 시 관련 일러스트 및 가이드 설명 부드러운 슬라이드 노출 | **P1** |
| **FR-07** | 브로슈어 뷰어 모달 | - '브로슈어 원본 보기' 버튼 클릭 시 제공된 프로토타입 브로슈어 3종 고해상도 뷰어 모달 제공 | **P1** |
| **FR-08** | URL 공유 및 맨 위로 스크롤 | - '공유하기' 클릭 시 현재 URL 클립보드 복사 및 미니 토스트 메시지 출력<br>- 페이지 우하단 80px 스크롤 이후 'Top' 플로팅 버튼 노출 및 최상단 부드러운 스크롤 | **P2** |

---

## 7. 비기능 요구사항 (Non-Functional Requirements)

### 7.1 성능 (Performance)
- **초기 로딩 속도**: 모바일 LTE/4G 환경 기준 LCP(Largest Contentful Paint) **1.5초 이내** 달성.
- **번들 최적화**: 프레임워크와 외부 런타임이 없으므로 HTML/CSS/JS 순수 코드 용량 100KB 이하 경량화 유지.
- **이미지 렌더링 최적화**: 히어로 배너를 제외한 모든 콘텐츠 이미지에 `loading="lazy"` 및 `decoding="async"` 기본 적용.

### 7.2 호환성 및 크로스 브라우징 (Compatibility)
- **모바일 인앱 브라우저 호환**: QR 코드 스캔 시 열리는 카카오톡 인앱 브라우저, 네이버 앱 인앱 브라우저, 삼성 인터넷, iOS Safari, Android Chrome 완벽 렌더링.
- **데스크톱 호환**: Chrome, Edge, Safari, Firefox 최신 버전 100% 호환.
- **JavaScript 무의존 폴백(Graceful Degradation)**: 자바스크립트가 비활성화된 환경에서도 모든 텍스트 콘텐츠와 기본 이미지는 완벽히 읽을 수 있어야 함.

### 7.3 보안 및 무결성 (Security & Integrity)
- 정적 웹 호스팅(GitHub Pages HTTPS)을 준수하며 민감한 개인정보나 결제 정보를 수집하지 않음.
- 외부 서드파티 CDN 의존도를 최소화하여 네트워크 차단 또는 방화벽 환경에서도 안정적으로 렌더링.

---

## 8. 디자인 시스템 및 UI 규칙 (DESIGN_GUIDE.md 준수)

[DESIGN_GUIDE.md](file:///c:/Users/User/Desktop/JOSUN_ECLAT_4/DESIGN_GUIDE.md)에서 확립한 디자인 토큰과 UI 규칙을 철저히 준수합니다.

### 8.1 컬러 시스템 (CSS Custom Properties)

```css
:root {
  /* Brand Primary & Heritage */
  --color-primary-gold: #ba998c;        /* 그랜드 조선 시그니처 웜 로즈골드 */
  --color-gold-tint: #d6c2ba;          /* 로즈골드 소프트 틴트 */
  --color-gold-deep: #b29d95;          /* 딥 로즈골드 (링크 및 보조) */
  --color-heritage-green: #2c4942;      /* 조선호텔 헤리티지 딥 파인 그린 */
  --color-antique-olive: #989442;       /* 신세계푸드 올리브 골드 */

  /* Neutral Backgrounds */
  --color-bg-white: #ffffff;            /* 기본 배경 */
  --color-bg-warm-greige: #f0eeed;      /* 시그니처 웜 그레이지 (비대칭 분할 배경) */
  --color-bg-card: #f9f9f9;             /* 카드 및 박스 배경 */
  --color-bg-black: #000000;            /* 푸터 및 시그니처 다크 배경 */

  /* Text Colors */
  --color-text-primary: #000000;        /* 메인 헤딩 및 본문 */
  --color-text-secondary: #333333;      /* 단락 설명문 */
  --color-text-muted: #666666;          /* 서브 설명 및 날짜 */
  --color-text-caption: #888888;        /* 가이드 텍스트 */
  --color-text-white: #ffffff;          /* 다크 배경 위 화이트 */

  /* Borders */
  --color-border-subtle: #eeeeee;       /* 헤더 하단 등 얇은 라인 */
  --color-border-default: #cccccc;      /* 카드 보더 */
  --color-border-dark: #000000;         /* 럭셔리 아웃라인 버튼 및 배지 */
}
```

### 8.2 타이포그래피 스택 및 위계 규칙 (한글 고딕 유지 & 영문 롤백 적용)
- **영문 세리프 (Hero 대제목/메인 헤드라인/로고)**: `Playfair Display`, `Georgia`, `Noto Serif Display`, serif
- **영문 산세리프 (GNB/서브헤딩/배지/버튼/숫자)**: `Montserrat`, `Gotham`, sans-serif
- **한글 타이포그래피 (스토리텔링/본문/UI/가이드 일체 고딕)**: `Pretendard`, `Noto Sans KR`, `Spoqa Han Sans Neo`, sans-serif (높은 시인성과 모던한 가독성 유지)

```css
/* Typography Scale */
h1.hero-title   { font-family: var(--font-serif-en); font-size: clamp(32px, 5vw, 60px); font-weight: 500; }
h2.section-title{ font-family: var(--font-sans-en), var(--font-sans-kr); font-size: clamp(24px, 3.5vw, 36px); font-weight: 500; letter-spacing: -0.03em; text-transform: uppercase; }
h3.card-title   { font-family: var(--font-sans-en), var(--font-sans-kr); font-size: 20px; font-weight: 600; }
p.page-guide    { font-family: var(--font-sans-kr); font-size: 18px; line-height: 1.6; color: var(--color-text-secondary); }
p.body-story    { font-family: var(--font-serif-kr); font-size: 17px; line-height: 1.9; color: var(--color-text-secondary); }
```

### 8.3 컴포넌트 스타일링 규칙
- **버튼 (`.btnSC`)**:
  - 형태: `position: relative; display: inline-block; padding: 0 24px; height: 50px; line-height: 48px; border: 1px solid #000; background: #fff; color: #000; font-size: 14px; font-weight: 500; transition: all 0.4s ease;`
  - 호버: 배경이 블랙(`#000`)으로 채워지며 텍스트가 화이트(`#fff`)로 반전.
- **카테고리 배지 (`.category-badge`)**:
  - `display: inline-block; border: 1px solid #000; padding: 3px 8px; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;`
- **스플릿 레이아웃 (Split Background)**:
  - 데스크톱 환경에서 배경 좌우 50% 분할(우측 `#f0eeed`)을 통해 호텔 룸 쇼케이스와 동일한 입체감 구현.

---

## 9. 반응형 설계 기준 (Responsive Standards)

| 뷰포트 구분 | 해상도 범위 | 레이아웃 및 컴포넌트 반응형 규칙 |
| :--- | :--- | :--- |
| **Desktop Wide** | `≥ 1440px` | - 최대 너비 `1400px` 중앙 정렬 고정 (`margin: 0 auto;`)<br>- 좌우 비대칭 스플릿 배경 완전 활성화<br>- 헤더 높이 150px → 스크롤 시 100px 축소<br>- 3열 제품 카드 그리드 |
| **Desktop / Laptop** | `1024px ~ 1439px` | - 유동적 컨테이너 너비: `width: 92%`<br>- 메가 메뉴 드롭다운 유지 및 폰트 비례 축소<br>- 3열 제품 카드 유지 |
| **Tablet** | `768px ~ 1023px` | - 2열 카드 그리드로 재배치<br>- 스플릿 배경을 상하 수직 스택으로 전환 (이미지 상단, 텍스트 하단)<br>- 헤더 높이 80px로 간소화 |
| **Mobile (Primary)** | `< 768px` | - **QR 접속 최우선 타깃 뷰포트**<br>- 헤더 높이 `56px` 고정 (좌측 로고, 우측 56px 햄버거 메뉴)<br>- 풀스크린(100vw) 우측 슬라이드 드로어 메뉴<br>- 콘텐츠 좌우 패딩 `20px`<br>- 1열 수직 카드 스택, 탭 및 토글 터치 타깃 최소 44px x 44px 확보 |

---

## 10. 이미지 및 브랜드 자산 관리 (Asset Mapping)

프로젝트에 제공된 에셋 파일들을 용도별로 엄격히 매핑하여 관리합니다.

| 분류 | 실제 파일 경로 | 웹페이지 적용 위치 및 용도 |
| :--- | :--- | :--- |
| **로고** | `assets/logo/조선 에끌라 로고.png` | - 상단 헤더 브랜드 워드마크 (SVG/투명 처리 고려)<br>- 푸터 엠블럼 및 브랜드 스토리 소개 섹션 심볼 |
| **부산 브로슈어** | `assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png` | - 부산 컬렉션 섹션 내 패키지 & 오프라인 브로슈어 연계 쇼케이스<br>- 브로슈어 뷰어 모달 팝업 |
| **제주 브로슈어** | `assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png` | - 제주 컬렉션 섹션 내 패키지 & 브로슈어 연계 쇼케이스<br>- 브로슈어 뷰어 모달 팝업 |
| **키즈 브로슈어** | `assets/Brochure/GRAND JOSUN KIDS Brochure_prototype.png` | - 키즈 객실 웰컴기프트 섹션 대표 소개 이미지 및 3단 리플렛 뷰어 |
| **부산 제품 시안** | `assets/cookie-kit/그랜드 조선 부산 웰컴기프트 시안 3.png` | - 부산 컬렉션 메인 대표 이미지 (일반 3종 + 스위트 3종 박스 세트) |
| **부산 제품 시안** | `assets/cookie-kit/그랜드 조선 부산 웰컴기프트 시안 4.png` | - 부산 개별 트레이 샷 (광안대교, 배, 등대, 갈매기, 조개, 파도) |
| **부산 제품 시안** | `assets/cookie-kit/그랜드 조선 부산 웰컴기프트 시안1.png` | - 대리석 위 5종 쿠키 클로즈업 컷 |
| **부산 제품 시안** | `assets/cookie-kit/그랜드 조선 부산 웰컴기프트 시안2.png` | - 초콜릿 몰드 조각 클로즈업 상세 컷 |
| **제주 제품 시안** | `assets/cookie-kit/그랜드 조선 제주 웰컴 기프트 시안 2.png` | - 제주 컬렉션 메인 대표 이미지 (일반 3종 + 스위트 3종 틴박스 세트) |
| **제주 제품 시안** | `assets/cookie-kit/그랜드 조선 제주 웰컴 기프트 시안 3.png` | - 제주 개별 트레이 샷 (귤, 말, 야자수, 한라봉, 돌하르방, 한라산) |
| **제주 제품 시안** | `assets/cookie-kit/그랜드 조선 제주 웰컴 기프트 시안.png` | - 제주 6종 초콜릿 쿠키 플레이팅 상세 컷 |
| **키즈 제품 시안** | `assets/cookie-kit/키즈객실 웰컴기프트_시안.png` | - 키즈 DIY 쿠키 키트 전체 구성품 컷 (고래 쿠키 6개, 3색 튜브 펜, 웰컴 카드) |

> **에셋 관리 원칙**: 모든 이미지 파일은 원본 비율을 손상하지 않으며, 파일명에 한글 및 특수문자가 포함된 경우 웹 호환성(URL 인코딩 깨짐 방지)을 고려하여 `src` 참조 시 정확한 경로를 유지합니다.

---

## 11. 접근성 요구사항 (Web Accessibility)

- **KWCAG 2.2 및 WCAG 2.1 AA 기준 준수**:
  1. **텍스트 명도 대비**: 일반 텍스트는 배경 대비 최소 `4.5:1`, 대형 텍스트는 최소 `3:1` 이상 유지.
  2. **대체 텍스트 (Alternative Text)**: 모든 제품 및 브로슈어 이미지에 구체적인 한글 대체 텍스트(`alt`) 제공 (예: `alt="그랜드 조선 부산 웰컴기프트 - 광안대교, 등대, 크루즈 쿠키 세트"`).
  3. **키보드 접근성**: 모든 버튼, 탭, 링크에 마우스 없이 `Tab` 키로 포커스가 도달해야 하며, 명확한 포커스 인디케이터(`:focus-visible`) 노출.
  4. **시맨틱 마크업**: `header`, `nav`, `main`, `section`, `article`, `footer`, `h1~h4` 구조를 엄격히 준수하여 스크린 리더 낭독성 보장.

---

## 12. 개발 기술 및 파일 구조

### 12.1 확정 기술 스택
- **HTML**: 표준 시맨틱 HTML5
- **CSS**: 순수 CSS3 (CSS Variables, Flexbox, CSS Grid, Media Queries)
- **JavaScript**: 표준 Vanilla JavaScript (ES6+, Class/Modular Structure, No Framework)
- **배포 인프라**: GitHub Pages (Static Hosting)

### 12.2 절대 금지 기술 스택 (Enforced Constraints)
- [x] React, Vue.js, Next.js, Nuxt, Angular 등 SPA 프레임워크 사용 금지
- [x] Tailwind CSS, Bootstrap 등 CSS 프레임워크 사용 금지
- [x] Node.js, npm, yarn, Vite, Webpack 등 번들러 및 빌드 도구 사용 금지
- [x] `package.json`, `package-lock.json`, `node_modules/` 생성 절대 금지

### 12.3 프로젝트 최종 파일 트리
불필요한 중복 파일 및 디렉터리 생성을 엄격히 통제하여 아래의 정제된 단일 구조로 유지합니다:

```
c:\Users\User\Desktop\JOSUN_ECLAT_4\
├── index.html                  # 메인 웹페이지 (단일 정적 HTML)
├── style.css                   # 디자인 토큰 및 전체 스타일시트
├── script.js                   # UI 인터랙션 및 탭 전환 스크립트
├── DESIGN_GUIDE.md             # 공식 사이트 분석 및 디자인 시스템 가이드 (기작성)
├── PRD.md                      # 본 제품 기획서 문서
└── assets/                     # 프로젝트 필수 에셋 디렉터리
    ├── Brochure/               # 부산, 제주, 키즈 브로슈어 시안 (3종)
    ├── cookie-kit/             # 제품 및 패키지 고화질 시안 (8종)
    └── logo/                   # 조선 에끌라 공식 로고 (1종)
```

---

## 13. GitHub Pages 배포 요구사항

1. **저장소 루트 배포 (Root Directory Deployment)**:
   - GitHub Pages 설정에서 `Source: Deploy from a branch`, `Branch: main / root`로 배포될 수 있도록 모든 리소스 경로는 상대 경로(`./assets/...`)로 기술합니다.
2. **대소문자 및 URL 인코딩 준수**:
   - 리눅스 기반 GitHub Pages 서버 환경에서 파일명 대소문자 구별 및 한글 파일명 인코딩으로 인한 404 오류가 발생하지 않도록 마크업 내 경로를 엄밀하게 매핑합니다.
3. **OpenGraph & Favicon 메타데이터 완비**:
   - 스마트폰에서 브로슈어 QR 스캔 시 및 모바일 카카오톡 링크 공유 시 고급스러운 미리보기가 노출되도록 `og:title`, `og:description`, `og:image` 메타 태그를 완비합니다:
     * `og:title`: `JOSUN ÉCLAT | 조선 에끌라 - 그랜드 조선 웰컴기프트`
     * `og:description`: `그랜드 조선과 신세계푸드가 전하는 특별한 환대의 순간. 부산·제주의 감성을 담은 웰컴기프트 컬렉션.`
     * `og:image`: `./assets/logo/조선 에끌라 로고.png`

---

## 14. 테스트 및 검수 기준 (QA & Acceptance Criteria)

### 14.1 기능 검수 기준 (Functional Acceptance Criteria)
- [ ] **QR 진입 시나리오**: 모바일 기기로 로컬/배포 URL 접속 시 1.5초 내에 레이아웃 깨짐 없이 히어로 화면이 정상 렌더링되는가?
- [ ] **지역 탭 전환**: 부산/제주 탭 클릭 시 딜레이 없이 해당하는 제품 구성과 패키지 정보가 교체되는가?
- [ ] **객실 등급 토글**: 일반(3종) 선택 시 3종만 노출되고, 스위트(6종) 선택 시 추가 3종이 부드럽게 페이드인되는가?
- [ ] **키즈 미션 인터랙션**: 키즈 섹션의 단계별(Step 1, 2, 3) 탭/아코디언 클릭 시 해당 가이드가 명확히 전환되는가?
- [ ] **모바일 햄버거 메뉴**: 768px 미만 화면에서 햄버거 버튼 터치 시 100% 드로어가 열리고, 메뉴 선택 시 드로어가 닫히며 해당 섹션으로 부드럽게 스크롤되는가?
- [ ] **이미지 모달 팝업**: 썸네일 클릭 시 고화질 모달이 열리고, ESC 키 또는 닫기 버튼으로 문제없이 닫히는가?

### 14.2 디자인 및 비기능 검수 기준 (Quality Acceptance Criteria)
- [ ] [DESIGN_GUIDE.md](file:///c:/Users/User/Desktop/JOSUN_ECLAT_4/DESIGN_GUIDE.md)에 명시된 웜 로즈골드(`#ba998c`), 헤리티지 그린(`#2c4942`), 웜 그레이지(`#f0eeed`) 컬러 코드가 정확히 적용되었는가?
- [ ] 데스크톱 1400px 그리드와 180px 섹션 여백이 적용되어 5성급 호텔 특유의 넉넉한 공간감이 느껴지는가?
- [ ] 푸터에 대학 산업 융합 프로젝트 프로토타입임을 알리는 디스클레이머가 명확히 기재되어 있는가?
- [ ] 외부 npm 모듈이나 프레임워크 없이 순수 Vanilla 기술로만 에러 없이 구동되는가?

---

## 15. 구현 범위와 제외 범위 (Scope of Work)

### 15.1 구현 포함 범위 (In-Scope)
- '조선 에끌라' 단일 원페이지 반응형 웹사이트 (`index.html`, `style.css`, `script.js`)
- 브랜드 스토리, 부산 컬렉션(일반 3종/스위트 6종), 제주 컬렉션(일반 3종/스위트 6종), 키즈 쿠키 체험 키트 소개
- 부산 vs 제주 탭 전환 인터랙션 및 일반 vs 스위트 등급 토글 인터랙션
- 브로슈어 및 제품 고해상도 이미지 뷰어 모달
- 데스크톱(1400px), 태블릿, 모바일(56px 헤더) 반응형 레이아웃 및 햄버거 드로어
- GitHub Pages 배포를 위한 메타 태그 및 상대 경로 체계

### 15.2 구현 제외 범위 (Out-of-Scope)
- 실제 상용 온라인 장바구니, 결제(PG 연동) 및 e커머스 주문 처리 시스템
- 회원가입, 로그인 및 마이페이지 등 사용자 인증 기능
- 호텔 객실 실시간 예약 시스템(CRS) 연동
- 백엔드 서버(Node.js, Python, Java 등) 구축 및 데이터베이스(SQL/NoSQL) 연동
- 관리자(CMS) 페이지 구축

---
*본 PRD 문서는 향후 '조선 에끌라' 웹페이지 구현 단계에서 기획과 퍼블리싱의 완벽한 일치를 보장하는 최종 지침으로 작동합니다.*

