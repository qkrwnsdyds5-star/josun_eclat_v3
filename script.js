/**
 * JOSUN ÉCLAT (조선 에끌라) Official Website JavaScript
 * Vanilla ES6+ Implementation - Strict No-Framework Architecture
 * Dynamic Room Tier (Standard, Suite, Kids) & Hotel Region (Busan, Jeju) Content Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Central Content Store (객실별 및 지역별 체계적 콘텐츠 관리)
  // =========================================================================
  const ECLAT_CONTENT = {
    busan: {
      nameKr: '그랜드 조선 부산',
      nameEn: 'GRAND JOSUN BUSAN',
      regionKr: '부산',
      standard: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 부산 일반 객실 웰컴기프트',
        tag: 'BUSAN STANDARD',
        subLead: 'GRAND JOSUN BUSAN • STANDARD ROOM',
        roomNameKr: '일반 객실',
        roomNameEn: 'STANDARD ROOM',
        countText: '3종',
        hero: {
          img: './assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_일반객실.png',
          lead: '조선 에끌라, 부산 해운대에서의 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">부산 해운대 바다와 스카이라인의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_일반객실.png',
        guide: '그랜드 조선 부산 일반 객실 고객님을 위해 정성스럽게 준비된 3종 웰컴기프트 라인업',
        notice: '광안대교, 크루즈선, 해운대 등대 등 부산의 대표 랜드마크를 모티프로 정성스럽게 구워낸 3종 시그니처 웰컴 쿠키 세트입니다.',
        overviewCaption: '그랜드 조선 부산 일반 객실 웰컴기프트 세트 (3종)',
        experience: {
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          caption: '그랜드 조선 부산 오프라인 브로슈어 및 객실 웰컴 세팅 시안'
        },
        pairing: {
          title: '시그니처 디저트 페어링 (Special Pairing)',
          desc: '일반 객실 고객을 위한 추천 페어링. 신선한 우유나 과일 주스와 함께 즐기시면 버터 쿠키 본연의 고소한 풍미를 깊이 있게 느끼실 수 있습니다.'
        },
        brochure: {
          title: '그랜드 조선 부산 일반 객실 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          desc: '그랜드 조선 부산 일반 객실 3종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      },
      suite: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 부산 스위트 객실 웰컴기프트',
        tag: 'BUSAN SUITE',
        subLead: 'GRAND JOSUN BUSAN • SUITE ROOM',
        roomNameKr: '스위트 객실',
        roomNameEn: 'SUITE ROOM',
        countText: '6종 전체',
        hero: {
          img: './assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_스위트객실.png',
          lead: '조선 에끌라, 부산 해운대에서의 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">부산 해운대 바다와 스카이라인의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_스위트객실.png',
        guide: '그랜드 조선 부산 스위트 객실 고객님을 위해 특별히 준비된 6종 프리미엄 웰컴기프트 라인업',
        notice: '스위트 객실 고객님만을 위해 광안대교, 크루즈선, 등대 쿠키에 더해 해운대 갈매기, 진주 조개, 파도 프리미엄 초콜릿 3종이 포함된 6종 프리미엄 풀 세트로 구성됩니다.',
        overviewCaption: '그랜드 조선 부산 스위트 객실 웰컴기프트 세트 (6종 전체)',
        experience: {
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          caption: '그랜드 조선 부산 오프라인 브로슈어 및 객실 웰컴 세팅 시안'
        },
        pairing: {
          title: '스위트 샴페인 &amp; 스파클링 와인 (Champagne)',
          desc: '스위트 객실 투숙객을 위한 추천 페어링. 섬세한 탄산 기포와 산미가 진주 조개 및 파도 초콜릿의 부드러움을 극대화합니다.'
        },
        brochure: {
          title: '그랜드 조선 부산 스위트 객실 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          desc: '그랜드 조선 부산 스위트 객실 6종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      },
      kids: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 부산 키즈 객실 웰컴기프트',
        tag: 'BUSAN KIDS ADVENTURE',
        subLead: 'GRAND JOSUN BUSAN • KIDS ROOM',
        roomNameKr: '키즈 객실',
        roomNameEn: 'KIDS ROOM',
        countText: 'DIY 키트',
        hero: {
          img: './assets/cookie-kit/josun_eclat_kids/키즈객실 웰컴기프트_시안.png',
          lead: '조선 에끌라, 부산 해운대에서 만나는 특별한 키즈 어드벤처',
          desc: '그랜드 조선 부산 키즈 객실을 찾은 어린이와 가족을 위해,<br class="hide-mobile">푸른 해운대 바다의 설렘과 함께 직접 완성하는 참여형 DIY 쿠키 키트 웰컴기프트를 선사합니다.'
        },
        guide: '부산 해운대 바다를 바라보며 아이와 함께 완성하는 세상에서 단 하나뿐인 가족 여행의 달콤한 추억',
        intro: {
          title: '동일한 기본 형태의 쿠키 6개,<br><span class="highlight">해운대 바다를 향한 여섯 가지 상상력</span>',
          desc: '그랜드 조선 부산 키즈 객실에 투숙하는 가족을 위해 기획된 참여형 웰컴기프트입니다. 동일한 캔버스 고래 쿠키 6개 위에 핑크, 스카이블루, 초코 3색 아이싱 펜으로 푸른 해운대 바다 친구들과 여행의 이야기를 마음껏 그려보세요.',
          welcomeCard: '“Welcome to Grand Josun Busan. May your ocean adventure be special.”'
        },
        mission: {
          step1: '핑크, 스카이블루, 초코 3색 아이싱 펜으로 고래 쿠키 위에 푸른 해운대 바다 친구들과 나만의 특별한 여행 이야기를 꾸며보세요.',
          step2: '완성된 귀여운 쿠키 작품을 부산 객실 웰컴 카드와 함께 사진으로 남겨 소중한 가족 앨범과 SNS에 기록해 보세요.',
          step3: '직접 만든 달콤한 쿠키를 가족과 함께 나누어 먹으며, 오늘 부산 해운대 여행에서 가장 즐거웠던 순간을 이야기 나누어 보세요.'
        },
        experience: {
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          caption: '그랜드 조선 부산 키즈 객실 웰컴 세팅 브로슈어 시안'
        },
        pairing: {
          title: '키즈 &amp; 패밀리 스페셜 페어링 (Family Pairing)',
          desc: '아이들이 쿠키를 꾸미며 함께 마시기 좋은 부드러운 스팀 밀크 또는 신선한 유기농 과일 주스 페어링을 추천합니다.'
        },
        brochure: {
          title: '그랜드 조선 부산 키즈 웰컴기프트 3단 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN KIDS Brochure_prototype.png',
          desc: '그랜드 조선 부산 키즈 객실 3단계 미션 어드벤처 및 DIY 쿠키 데코레이션 가이드 리플렛 시안입니다.'
        }
      }
    },
    jeju: {
      nameKr: '그랜드 조선 제주',
      nameEn: 'GRAND JOSUN JEJU',
      regionKr: '제주',
      standard: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 제주 일반 객실 웰컴기프트',
        tag: 'JEJU STANDARD',
        subLead: 'GRAND JOSUN JEJU • STANDARD ROOM',
        roomNameKr: '일반 객실',
        roomNameEn: 'STANDARD ROOM',
        countText: '3종',
        hero: {
          img: './assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_일반객실.png',
          lead: '조선 에끌라, 제주의 푸른 자연 속 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">사계절 푸른 제주 중문 숲과 자연의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_일반객실.png',
        guide: '그랜드 조선 제주 일반 객실 고객님을 위해 정성스럽게 준비된 3종 웰컴기프트 라인업',
        notice: '제주 귤 조각, 제주 조랑말, 야자수 등 제주의 청정 자연을 모티프로 정성스럽게 구워낸 3종 시그니처 웰컴 쿠키 세트입니다.',
        overviewCaption: '그랜드 조선 제주 일반 객실 웰컴기프트 세트 (3종)',
        experience: {
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          caption: '그랜드 조선 제주 오프라인 브로슈어 및 객실 웰컴 세팅 시안'
        },
        pairing: {
          title: '시그니처 디저트 페어링 (Special Pairing)',
          desc: '일반 객실 고객을 위한 추천 페어링. 신선한 우유나 과일 주스와 함께 즐기시면 버터 쿠키 본연의 고소한 풍미를 깊이 있게 느끼실 수 있습니다.'
        },
        brochure: {
          title: '그랜드 조선 제주 일반 객실 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          desc: '그랜드 조선 제주 일반 객실 3종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      },
      suite: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 제주 스위트 객실 웰컴기프트',
        tag: 'JEJU SUITE',
        subLead: 'GRAND JOSUN JEJU • SUITE ROOM',
        roomNameKr: '스위트 객실',
        roomNameEn: 'SUITE ROOM',
        countText: '6종 전체',
        hero: {
          img: './assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_스위트객실.png',
          lead: '조선 에끌라, 제주의 푸른 자연 속 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">사계절 푸른 제주 중문 숲과 자연의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_스위트객실.png',
        guide: '그랜드 조선 제주 스위트 객실 고객님을 위해 특별히 준비된 6종 프리미엄 웰컴기프트 라인업',
        notice: '스위트 객실 고객님만을 위해 귤 조각, 조랑말, 야자수 쿠키에 더해 한라봉, 돌하르방, 한라산 백록담 프리미엄 초콜릿 3종이 포함된 6종 프리미엄 풀 세트로 구성됩니다.',
        overviewCaption: '그랜드 조선 제주 스위트 객실 웰컴기프트 세트 (6종 전체)',
        experience: {
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          caption: '그랜드 조선 제주 오프라인 브로슈어 및 객실 웰컴 세팅 시안'
        },
        pairing: {
          title: '스위트 샴페인 &amp; 스파클링 와인 (Champagne)',
          desc: '스위트 객실 투숙객을 위한 추천 페어링. 섬세한 탄산 기포와 산미가 돌하르방 및 한라산 초콜릿의 부드러움을 극대화합니다.'
        },
        brochure: {
          title: '그랜드 조선 제주 스위트 객실 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          desc: '그랜드 조선 제주 스위트 객실 6종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      },
      kids: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 제주 키즈 객실 웰컴기프트',
        tag: 'JEJU KIDS ADVENTURE',
        subLead: 'GRAND JOSUN JEJU • KIDS ROOM',
        roomNameKr: '키즈 객실',
        roomNameEn: 'KIDS ROOM',
        countText: 'DIY 키트',
        hero: {
          img: './assets/cookie-kit/josun_eclat_kids/키즈객실 웰컴기프트_시안.png',
          lead: '조선 에끌라, 제주의 푸른 숲에서 만나는 특별한 키즈 어드벤처',
          desc: '그랜드 조선 제주 키즈 객실을 찾은 어린이와 가족을 위해,<br class="hide-mobile">신비로운 제주의 사계절 자연을 상상하며 직접 완성하는 참여형 DIY 쿠키 키트 웰컴기프트를 선사합니다.'
        },
        guide: '제주 천혜의 자연 속에서 아이와 함께 완성하는 세상에서 단 하나뿐인 가족 여행의 달콤한 추억',
        intro: {
          title: '동일한 기본 형태의 쿠키 6개,<br><span class="highlight">제주 푸른 숲을 향한 여섯 가지 상상력</span>',
          desc: '그랜드 조선 제주 키즈 객실에 투숙하는 가족을 위해 기획된 참여형 웰컴기프트입니다. 동일한 캔버스 고래 쿠키 6개 위에 핑크, 스카이블루, 초코 3색 아이싱 펜으로 제주 바다와 자연의 이야기를 마음껏 그려보세요.',
          welcomeCard: '“Welcome to Grand Josun Jeju. May your nature adventure be special.”'
        },
        mission: {
          step1: '핑크, 스카이블루, 초코 3색 아이싱 펜으로 고래 쿠키 위에 제주의 푸른 바다와 나만의 특별한 여행 이야기를 꾸며보세요.',
          step2: '완성된 귀여운 쿠키 작품을 제주 객실 웰컴 카드와 함께 사진으로 남겨 소중한 가족 앨범과 SNS에 기록해 보세요.',
          step3: '직접 만든 달콤한 쿠키를 가족과 함께 나누어 먹으며, 오늘 제주 자연 여행에서 가장 즐거웠던 순간을 이야기 나누어 보세요.'
        },
        experience: {
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          caption: '그랜드 조선 제주 키즈 객실 웰컴 세팅 브로슈어 시안'
        },
        pairing: {
          title: '키즈 &amp; 패밀리 스페셜 페어링 (Family Pairing)',
          desc: '아이들이 쿠키를 꾸미며 함께 마시기 좋은 따뜻한 스팀 밀크 또는 상큼한 제주 유기농 감귤 주스 페어링을 추천합니다.'
        },
        brochure: {
          title: '그랜드 조선 제주 키즈 웰컴기프트 3단 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN KIDS Brochure_prototype.png',
          desc: '그랜드 조선 제주 키즈 객실 3단계 미션 어드벤처 및 DIY 쿠키 데코레이션 가이드 리플렛 시안입니다.'
        }
      }
    }
  };

  // =========================================================================
  // 2. Header Scroll State
  // =========================================================================
  const header = document.getElementById('site-header');
  const scrollThreshold = 60;

  function updateHeaderOnScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  // =========================================================================
  // 3. Mobile Drawer Navigation
  // =========================================================================
  const menuToggle = document.getElementById('btn-menu-toggle');
  const drawerClose = document.getElementById('btn-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    drawerClose.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // =========================================================================
  // 4. URL Query Parameter Controller (Hotel & Room Orchestration)
  // =========================================================================
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const hotel = params.get('hotel') ? params.get('hotel').toLowerCase().trim() : null;
    const room = params.get('room') ? params.get('room').toLowerCase().trim() : null;
    return { hotel, room };
  }

  function isValidHotel(hotel) {
    return hotel === 'busan' || hotel === 'jeju';
  }

  function isValidRoom(room) {
    return room === 'standard' || room === 'suite' || room === 'kids';
  }

  function renderPage() {
    const { hotel, room } = getQueryParams();
    const valid = isValidHotel(hotel) && isValidRoom(room);

    const guidanceSection = document.getElementById('qr-guidance-section');
    const collectionsSection = document.getElementById('collections');
    const kidsSection = document.getElementById('kids');

    const navItemCollections = document.getElementById('nav-item-collections');
    const navItemKids = document.getElementById('nav-item-kids');
    const drawerItemCollections = document.getElementById('drawer-item-collections');
    const drawerItemKids = document.getElementById('drawer-item-kids');
    const footerNavCollections = document.getElementById('footer-nav-collections');
    const footerNavKids = document.getElementById('footer-nav-kids');

    const footerBusanBtn = document.getElementById('footer-brochure-busan');
    const footerJejuBtn = document.getElementById('footer-brochure-jeju');
    const footerKidsBtn = document.getElementById('footer-brochure-kids');
    const welcomeTag = document.querySelector('.welcome-tag');

    // -----------------------------------------------------------------------
    // 예외 처리: URL 파라미터가 없거나 유효하지 않은 경우
    // -----------------------------------------------------------------------
    if (!valid) {
      document.title = 'JOSUN ÉCLAT | 올바른 웰컴기프트 안내 페이지로 접속해 주세요.';

      if (welcomeTag) welcomeTag.textContent = 'QR ACCESS REQUIRED';

      // 임의의 객실 콘텐츠를 표시하지 않고 안내 화면만 표출
      if (guidanceSection) {
        guidanceSection.removeAttribute('hidden');
        guidanceSection.style.display = 'block';
      }
      if (collectionsSection) {
        collectionsSection.setAttribute('hidden', '');
        collectionsSection.style.display = 'none';
      }
      if (kidsSection) {
        kidsSection.setAttribute('hidden', '');
        kidsSection.style.display = 'none';
      }

      // 내비게이션 및 푸터 브로슈어 링크 은닉
      if (navItemCollections) navItemCollections.style.display = 'none';
      if (navItemKids) navItemKids.style.display = 'none';
      if (drawerItemCollections) drawerItemCollections.style.display = 'none';
      if (drawerItemKids) drawerItemKids.style.display = 'none';
      if (footerNavCollections) footerNavCollections.style.display = 'none';
      if (footerNavKids) footerNavKids.style.display = 'none';

      if (footerBusanBtn) footerBusanBtn.style.display = 'none';
      if (footerJejuBtn) footerJejuBtn.style.display = 'none';
      if (footerKidsBtn) footerKidsBtn.style.display = 'none';

      // 모바일 드로어 퀵 바로가기 은닉
      const drawerQuickCard = document.getElementById('drawer-quick-card');
      if (drawerQuickCard) drawerQuickCard.style.display = 'none';

      // 스위트 전용 카드 안전 은닉
      document.querySelectorAll('.cookie-card.suite-item').forEach(card => {
        card.classList.add('hidden');
        card.style.display = 'none';
        card.setAttribute('aria-hidden', 'true');
      });

      return;
    }

    // -----------------------------------------------------------------------
    // 정상 케이스: 유효한 hotel & room 파라미터 적용
    // -----------------------------------------------------------------------
    if (guidanceSection) {
      guidanceSection.setAttribute('hidden', '');
      guidanceSection.style.display = 'none';
    }

    const data = ECLAT_CONTENT[hotel][room];
    const isBusan = hotel === 'busan';
    const isKids = room === 'kids';
    const isSuite = room === 'suite';

    // 1. 페이지 제목 및 헤더 태그
    document.title = data.title;
    if (welcomeTag) welcomeTag.textContent = data.tag;

    // 2. 히어로 섹션
    const heroHotelName = document.getElementById('hero-hotel-name');
    const heroBgImg = document.getElementById('hero-bg-img');
    const heroBtnExplore = document.getElementById('hero-btn-explore');

    if (heroHotelName) heroHotelName.textContent = ECLAT_CONTENT[hotel].nameEn;
    if (heroBgImg) {
      heroBgImg.src = data.hero.img;
      heroBgImg.alt = `${ECLAT_CONTENT[hotel].nameKr} ${data.roomNameKr} 웰컴기프트 시그니처 패키지`;
    }
    if (heroBtnExplore) {
      if (isKids) {
        heroBtnExplore.setAttribute('href', '#kids');
        heroBtnExplore.textContent = '키즈 웰컴기프트 보기';
      } else {
        heroBtnExplore.setAttribute('href', '#collections');
        heroBtnExplore.textContent = '컬렉션 탐색하기';
      }
    }

    // 3. 모바일 드로어 서브텍스트 및 퀵 바로가기 카드
    const drawerCollectionsKr = document.getElementById('drawer-collections-kr');
    const drawerKidsKr = document.getElementById('drawer-kids-kr');
    if (drawerCollectionsKr) {
      drawerCollectionsKr.textContent = `${ECLAT_CONTENT[hotel].regionKr} 컬렉션 (${data.roomNameKr})`;
    }
    if (drawerKidsKr) {
      drawerKidsKr.textContent = `${ECLAT_CONTENT[hotel].regionKr} 키즈 쿠키 체험`;
    }

    const drawerQuickCard = document.getElementById('drawer-quick-card');
    const drawerQuickHotel = document.getElementById('drawer-quick-hotel');
    const drawerQuickRoom = document.getElementById('drawer-quick-room');
    if (drawerQuickCard) drawerQuickCard.style.display = '';
    if (drawerQuickHotel) drawerQuickHotel.textContent = ECLAT_CONTENT[hotel].nameEn;
    if (drawerQuickRoom) {
      drawerQuickRoom.innerHTML = `${data.roomNameKr} (${data.countText}) 웰컴기프트 바로가기 &rarr;`;
    }

    // 4. 객실 유형별 섹션 노출 및 내비게이션 필터링
    if (isKids) {
      // 키즈 객실인 경우: 일반·스위트 섹션 숨기고 키즈 섹션 활성화
      if (collectionsSection) {
        collectionsSection.setAttribute('hidden', '');
        collectionsSection.style.display = 'none';
      }
      if (kidsSection) {
        kidsSection.removeAttribute('hidden');
        kidsSection.style.display = 'block';
      }

      // 내비게이션: 키즈 항목만 표시, 컬렉션 항목 숨김
      if (navItemCollections) navItemCollections.style.display = 'none';
      if (navItemKids) navItemKids.style.display = '';
      if (drawerItemCollections) drawerItemCollections.style.display = 'none';
      if (drawerItemKids) drawerItemKids.style.display = '';
      if (footerNavCollections) footerNavCollections.style.display = 'none';
      if (footerNavKids) footerNavKids.style.display = '';

      // 키즈 섹션 콘텐츠 바인딩 (부산 vs 제주 개별화)
      const kidsSubLead = document.getElementById('kids-sub-lead');
      const kidsGuide = document.getElementById('kids-guide');
      const kidsVerifiedHotel = document.getElementById('kids-verified-hotel');
      const kidsVerifiedRoom = document.getElementById('kids-verified-room');
      const kidsKitImg = document.getElementById('kids-kit-img');
      const kidsShowcaseTitle = document.getElementById('kids-showcase-title');
      const kidsShowcaseDesc = document.getElementById('kids-showcase-desc');
      const kidsWelcomeCardText = document.getElementById('kids-welcome-card-text');
      const kidsBrochureBtn = document.getElementById('kids-brochure-btn');

      if (kidsSubLead) kidsSubLead.textContent = data.subLead;
      if (kidsGuide) kidsGuide.textContent = data.guide;
      if (kidsVerifiedHotel) kidsVerifiedHotel.textContent = ECLAT_CONTENT[hotel].nameEn;
      if (kidsVerifiedRoom) kidsVerifiedRoom.textContent = `${data.roomNameEn} (${data.countText})`;

      if (kidsKitImg) {
        kidsKitImg.alt = `${ECLAT_CONTENT[hotel].nameKr} 키즈 DIY 웰컴기프트 세트 시안`;
        kidsKitImg.setAttribute('data-caption', `${ECLAT_CONTENT[hotel].nameKr} 키즈 DIY 웰컴기프트 세트 (동일 고래 형태 쿠키 6개, 3색 데코 아이싱 펜, ${ECLAT_CONTENT[hotel].regionKr} 웰컴 카드)`);
      }
      if (kidsShowcaseTitle) kidsShowcaseTitle.innerHTML = data.intro.title;
      if (kidsShowcaseDesc) kidsShowcaseDesc.textContent = data.intro.desc;
      if (kidsWelcomeCardText) kidsWelcomeCardText.textContent = data.intro.welcomeCard;
      if (kidsBrochureBtn) {
        kidsBrochureBtn.textContent = `${ECLAT_CONTENT[hotel].regionKr} 키즈 3단 브로슈어 시안 보기`;
      }

      // 3단계 미션 안내 개별화
      const kidsStep1Desc = document.getElementById('kids-step-1-desc');
      const kidsStep2Desc = document.getElementById('kids-step-2-desc');
      const kidsStep3Desc = document.getElementById('kids-step-3-desc');
      if (kidsStep1Desc) kidsStep1Desc.textContent = data.mission.step1;
      if (kidsStep2Desc) kidsStep2Desc.textContent = data.mission.step2;
      if (kidsStep3Desc) kidsStep3Desc.textContent = data.mission.step3;

    } else {
      // 일반 또는 스위트 객실인 경우: 키즈 섹션 숨기고 컬렉션 섹션 활성화
      if (kidsSection) {
        kidsSection.setAttribute('hidden', '');
        kidsSection.style.display = 'none';
      }
      if (collectionsSection) {
        collectionsSection.removeAttribute('hidden');
        collectionsSection.style.display = 'block';
      }

      // 내비게이션: 컬렉션 항목 표시, 키즈 항목 숨김
      if (navItemCollections) navItemCollections.style.display = '';
      if (navItemKids) navItemKids.style.display = 'none';
      if (drawerItemCollections) drawerItemCollections.style.display = '';
      if (drawerItemKids) drawerItemKids.style.display = 'none';
      if (footerNavCollections) footerNavCollections.style.display = '';
      if (footerNavKids) footerNavKids.style.display = 'none';

      // 컬렉션 섹션 헤더 및 검증 배지
      const subLead = document.getElementById('collections-sub-lead');
      const title = document.getElementById('collections-title');
      const guide = document.getElementById('collections-guide');
      const verifiedHotel = document.getElementById('verified-hotel');
      const verifiedRoom = document.getElementById('verified-room');

      if (subLead) subLead.textContent = data.subLead;
      if (title) title.textContent = `${ECLAT_CONTENT[hotel].regionKr === '부산' ? 'Busan' : 'Jeju'} Gift Collection`;
      if (guide) guide.textContent = data.guide;
      if (verifiedHotel) verifiedHotel.textContent = ECLAT_CONTENT[hotel].nameEn;
      if (verifiedRoom) verifiedRoom.textContent = `${data.roomNameEn} (${data.countText})`;

      // 지역 패널 제어
      const panelBusan = document.getElementById('panel-busan');
      const panelJeju = document.getElementById('panel-jeju');

      if (isBusan) {
        if (panelBusan) {
          panelBusan.classList.add('active');
          panelBusan.removeAttribute('hidden');
          panelBusan.style.display = 'block';
        }
        if (panelJeju) {
          panelJeju.classList.remove('active');
          panelJeju.setAttribute('hidden', '');
          panelJeju.style.display = 'none';
        }
      } else {
        if (panelJeju) {
          panelJeju.classList.add('active');
          panelJeju.removeAttribute('hidden');
          panelJeju.style.display = 'block';
        }
        if (panelBusan) {
          panelBusan.classList.remove('active');
          panelBusan.setAttribute('hidden', '');
          panelBusan.style.display = 'none';
        }
      }

      // 객실 등급별 쿠키 카드 제어 (3종 vs 6종)
      const activePanel = isBusan ? panelBusan : panelJeju;
      if (activePanel) {
        const suiteCards = activePanel.querySelectorAll('.cookie-card.suite-item');
        const standardCards = activePanel.querySelectorAll('.cookie-card.standard-item');

        standardCards.forEach(card => {
          card.classList.remove('hidden');
          card.style.display = '';
          card.removeAttribute('aria-hidden');
        });

        if (isSuite) {
          suiteCards.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = '';
            card.removeAttribute('aria-hidden');
          });
        } else {
          // Standard인 경우 스위트 상품 완전 은닉
          suiteCards.forEach(card => {
            card.classList.add('hidden');
            card.style.display = 'none';
            card.setAttribute('aria-hidden', 'true');
          });
        }
      }

      // 비활성 패널 스위트 카드도 숨김 유지
      const inactivePanel = isBusan ? panelJeju : panelBusan;
      if (inactivePanel) {
        inactivePanel.querySelectorAll('.cookie-card.suite-item').forEach(card => {
          card.classList.add('hidden');
          card.style.display = 'none';
        });
      }

      // 오버뷰 배너 안내 문구 및 이미지 캡션 설정
      const busanNotice = document.getElementById('busan-tier-notice');
      const busanOverviewImg = document.getElementById('busan-overview-img');
      const busanBrochureBtn = document.getElementById('busan-overview-brochure-btn');

      const jejuNotice = document.getElementById('jeju-tier-notice');
      const jejuOverviewImg = document.getElementById('jeju-overview-img');
      const jejuBrochureBtn = document.getElementById('jeju-overview-brochure-btn');

      if (isBusan) {
        if (busanNotice) busanNotice.textContent = data.notice;
        if (busanOverviewImg) {
          if (data.overviewImg) busanOverviewImg.src = data.overviewImg;
          busanOverviewImg.alt = `${ECLAT_CONTENT.busan.nameKr} ${data.roomNameKr} 웰컴기프트 세트`;
          busanOverviewImg.setAttribute('data-caption', data.overviewCaption);
        }
        if (busanBrochureBtn) {
          busanBrochureBtn.innerHTML = `부산 ${data.roomNameKr} 브로슈어 시안 상세 보기 &rarr;`;
        }
      } else {
        if (jejuNotice) jejuNotice.textContent = data.notice;
        if (jejuOverviewImg) {
          if (data.overviewImg) jejuOverviewImg.src = data.overviewImg;
          jejuOverviewImg.alt = `${ECLAT_CONTENT.jeju.nameKr} ${data.roomNameKr} 웰컴기프트 세트`;
          jejuOverviewImg.setAttribute('data-caption', data.overviewCaption);
        }
        if (jejuBrochureBtn) {
          jejuBrochureBtn.innerHTML = `제주 ${data.roomNameKr} 브로슈어 시안 상세 보기 &rarr;`;
        }
      }
    }

    // 5. 호텔 테이스팅 페어링 섹션 (Boutique Tasting Guide - Vivente Tea & Capsule Coffee)
    const pairingTeaImg = document.getElementById('pairing-tea-img');
    const pairingCoffeeImg = document.getElementById('pairing-coffee-img');
    if (pairingTeaImg) {
      pairingTeaImg.src = isBusan ? './assets/cookie-kit/vivente-tea_busan.png' : './assets/cookie-kit/vivente-tea_jeju.png';
      pairingTeaImg.alt = `${ECLAT_CONTENT[hotel].nameKr} 비벤떼 시그니처 티백 페어링`;
      pairingTeaImg.setAttribute('data-caption', `${ECLAT_CONTENT[hotel].nameKr} 비벤떼(VIVENTE) 시그니처 티백 페어링 세팅`);
    }
    if (pairingCoffeeImg) {
      pairingCoffeeImg.src = isBusan ? './assets/cookie-kit/vivente-coffee_busan.png' : './assets/cookie-kit/vivente-coffee_jeju.png';
      pairingCoffeeImg.alt = `${ECLAT_CONTENT[hotel].nameKr} 비벤떼 캡슐커피 페어링`;
      pairingCoffeeImg.setAttribute('data-caption', `${ECLAT_CONTENT[hotel].nameKr} 비벤떼(VIVENTE) 캡슐커피 페어링 세팅`);
    }

    // 6. 푸터 브로슈어 링크 필터링 (타 객실/지역 버튼 비표시)
    if (footerBusanBtn && footerJejuBtn && footerKidsBtn) {
      if (isKids) {
        footerBusanBtn.style.display = 'none';
        footerJejuBtn.style.display = 'none';
        footerKidsBtn.style.display = '';
        footerKidsBtn.textContent = `${ECLAT_CONTENT[hotel].regionKr} 키즈 브로슈어 시안`;
      } else {
        footerKidsBtn.style.display = 'none';
        if (isBusan) {
          footerBusanBtn.style.display = '';
          footerBusanBtn.textContent = `부산 브로슈어 시안 (${data.roomNameKr})`;
          footerJejuBtn.style.display = 'none';
        } else {
          footerJejuBtn.style.display = '';
          footerJejuBtn.textContent = `제주 브로슈어 시안 (${data.roomNameKr})`;
          footerBusanBtn.style.display = 'none';
        }
      }
    }

    // 7. 지역 제품 모티브 탐방 안내 (Journey to Motifs) 호텔별 관광지 전용 안내 (부산은 부산만, 제주는 제주만)
    updateJourneySection(isBusan ? 'busan' : 'jeju');
  }

  // =========================================================================
  // 4-0. Journey to Motifs Controller (호텔별 지역 모티브 탐방 전용 안내)
  // 부산 선택 시 부산 관광지만, 제주 선택 시 제주 관광지만 안내
  // =========================================================================
  function updateJourneySection(region) {
    const panelBusan = document.getElementById('journey-panel-busan');
    const panelJeju = document.getElementById('journey-panel-jeju');
    const journeySubLead = document.getElementById('journey-sub-lead');
    const journeyTitle = document.getElementById('journey-title');
    const journeyPageGuide = document.getElementById('journey-page-guide');

    if (!panelBusan || !panelJeju) return;

    if (region === 'busan') {
      panelBusan.removeAttribute('hidden');
      panelBusan.style.display = 'block';
      panelJeju.setAttribute('hidden', '');
      panelJeju.style.display = 'none';

      if (journeySubLead) journeySubLead.textContent = 'REGIONAL MOTIF JOURNEY • BUSAN';
      if (journeyTitle) journeyTitle.textContent = 'Journey to the Motifs';
      if (journeyPageGuide) {
        journeyPageGuide.textContent = '그랜드 조선 부산 웰컴기프트에 깃든 영감의 장소, 호텔에서 출발하여 광안대교와 청사포 등 부산의 대표 명소로 향하는 여정을 안내합니다.';
      }
    } else {
      panelJeju.removeAttribute('hidden');
      panelJeju.style.display = 'block';
      panelBusan.setAttribute('hidden', '');
      panelBusan.style.display = 'none';

      if (journeySubLead) journeySubLead.textContent = 'REGIONAL MOTIF JOURNEY • JEJU';
      if (journeyTitle) journeyTitle.textContent = 'Journey to the Motifs';
      if (journeyPageGuide) {
        journeyPageGuide.textContent = '그랜드 조선 제주 웰컴기프트에 깃든 영감의 장소, 호텔에서 출발하여 한라산과 성이시돌 목장 등 제주의 청정 명소로 향하는 여정을 안내합니다.';
      }
    }
  }

  function switchJourneyTab(region) {
    updateJourneySection(region);
  }

  // E. Route Media Switcher (Google Maps Embed vs Cookie Artwork View)
  document.querySelectorAll('.route-media-container').forEach(container => {
    const tabBtns = container.querySelectorAll('.media-tab-btn');
    const mapView = container.querySelector('.route-map-view');
    const cookieView = container.querySelector('.route-cookie-view');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        if (view === 'map') {
          if (mapView) mapView.classList.add('active');
          if (cookieView) cookieView.classList.remove('active');
        } else {
          if (cookieView) cookieView.classList.add('active');
          if (mapView) mapView.classList.remove('active');
        }
      });
    });
  });

  // 브라우저 뒤로 가기 / 앞으로 가기 (Requirement 9, 12)
  window.addEventListener('popstate', renderPage);

  // 초기 렌더링 실행
  renderPage();

  // =========================================================================
  // 4-1. Mobile Interactive UX Controllers (Story, Cookie More, Kids Toggle, Quick Pill)
  // =========================================================================
  // A. Drawer Quick Pill Click
  const drawerQuickBtn = document.getElementById('drawer-quick-btn');
  if (drawerQuickBtn) {
    drawerQuickBtn.addEventListener('click', () => {
      closeDrawer();
      const { room } = getQueryParams();
      const targetId = room === 'kids' ? 'kids' : 'collections';
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // B. Brand Story Mobile Collapse Toggle
  const btnStoryToggle = document.getElementById('btn-story-toggle');
  const storyCollapse = document.getElementById('story-collapse');
  if (btnStoryToggle && storyCollapse) {
    btnStoryToggle.addEventListener('click', () => {
      const isExpanded = storyCollapse.classList.toggle('expanded');
      btnStoryToggle.setAttribute('aria-expanded', String(isExpanded));
      const toggleText = btnStoryToggle.querySelector('.story-toggle-text');
      const toggleIcon = btnStoryToggle.querySelector('.story-toggle-icon');
      if (toggleText) toggleText.textContent = isExpanded ? '간략히 접기' : '브랜드 스토리 더보기';
      if (toggleIcon) toggleIcon.innerHTML = isExpanded ? '&uarr;' : '&darr;';
    });
  }

  // C. Cookie Cards Mobile Description "더보기/접기" Toggle
  document.querySelectorAll('.btn-cookie-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardBody = btn.closest('.card-body');
      if (!cardBody) return;
      const desc = cardBody.querySelector('.cookie-desc');
      if (!desc) return;
      const isExpanded = desc.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', String(isExpanded));
      btn.textContent = isExpanded ? '접기' : '더보기';
    });
  });

  // D. Kids Kit Components Mobile Toggle
  const btnKidsToggle = document.getElementById('btn-kids-toggle');
  const kidsComponentsList = document.getElementById('kids-components-list');
  if (btnKidsToggle && kidsComponentsList) {
    btnKidsToggle.addEventListener('click', () => {
      const isCollapsed = kidsComponentsList.classList.toggle('collapsed');
      btnKidsToggle.setAttribute('aria-expanded', String(!isCollapsed));
      const text = btnKidsToggle.querySelector('.kids-toggle-text');
      const icon = btnKidsToggle.querySelector('.kids-toggle-icon');
      if (text) text.textContent = isCollapsed ? '구성품 펼치기' : '구성품 접기';
      if (icon) icon.innerHTML = isCollapsed ? '&darr;' : '&uarr;';
    });
  }

  // =========================================================================
  // 5. Image Lightbox Modal
  // =========================================================================
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const zoomableImgs = document.querySelectorAll('.zoomable-img');

  function openImageModal(imgSrc, captionText) {
    modalImg.src = imgSrc;
    modalImg.alt = captionText || '고화질 웰컴기프트 이미지';
    modalCaption.textContent = captionText || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeImageModal() {
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImg.src = '';
  }

  zoomableImgs.forEach(img => {
    img.addEventListener('click', () => {
      // 숨겨진 카드의 이미지는 클릭 방지
      const closestCard = img.closest('.cookie-card');
      if (closestCard && closestCard.classList.contains('hidden')) {
        return;
      }
      // 숨겨진 섹션의 이미지는 클릭 방지
      const closestSection = img.closest('section');
      if (closestSection && (closestSection.hasAttribute('hidden') || closestSection.style.display === 'none')) {
        return;
      }
      const caption = img.getAttribute('data-caption') || img.alt;
      openImageModal(img.src, caption);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeImageModal);
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        closeImageModal();
      }
    });
  }

  // =========================================================================
  // 6. Brochure Prototype Viewer Modal
  // =========================================================================
  const brochureModal = document.getElementById('brochure-modal');
  const brochureModalTitle = document.getElementById('brochure-modal-title');
  const brochureModalImg = document.getElementById('brochure-modal-img');
  const brochureModalDesc = document.getElementById('brochure-modal-desc');
  const brochureModalClose = document.getElementById('brochure-modal-close');
  const brochureTriggers = document.querySelectorAll('.open-brochure-modal');

  function openBrochureModal() {
    const { hotel, room } = getQueryParams();
    const valid = isValidHotel(hotel) && isValidRoom(room);

    if (!valid) {
      showToast('올바른 웰컴기프트 안내 페이지로 접속해 주세요.');
      return;
    }

    const data = ECLAT_CONTENT[hotel][room].brochure;
    brochureModalTitle.textContent = data.title;
    brochureModalImg.src = data.img;
    brochureModalImg.alt = data.title;
    brochureModalDesc.textContent = data.desc;

    brochureModal.classList.add('open');
    brochureModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    brochureModalClose.focus();
  }

  function closeBrochureModal() {
    brochureModal.classList.remove('open');
    brochureModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    brochureModalImg.src = '';
  }

  brochureTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      openBrochureModal();
    });
  });

  if (brochureModalClose) brochureModalClose.addEventListener('click', closeBrochureModal);
  if (brochureModal) {
    brochureModal.addEventListener('click', (e) => {
      if (e.target === brochureModal) {
        closeBrochureModal();
      }
    });
  }

  // =========================================================================
  // 6-1. Map Fullscreen Viewer Modal
  // =========================================================================
  const mapModal = document.getElementById('map-modal');
  const mapModalTitle = document.getElementById('map-modal-title');
  const mapModalIframe = document.getElementById('map-modal-iframe');
  const mapModalClose = document.getElementById('map-modal-close');
  const modalNaverBtn = document.getElementById('modal-naver-btn');
  const modalKakaoBtn = document.getElementById('modal-kakao-btn');
  const modalGoogleBtn = document.getElementById('modal-google-btn');

  function openMapModal(title, src, naverUrl, kakaoUrl, googleUrl) {
    if (!mapModal) return;
    if (mapModalTitle) mapModalTitle.textContent = title;
    if (mapModalIframe) mapModalIframe.src = src;
    if (modalNaverBtn) modalNaverBtn.href = naverUrl;
    if (modalKakaoBtn) modalKakaoBtn.href = kakaoUrl;
    if (modalGoogleBtn) modalGoogleBtn.href = googleUrl;

    mapModal.classList.add('open');
    mapModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (mapModalClose) mapModalClose.focus();
  }

  function closeMapModal() {
    if (!mapModal) return;
    mapModal.classList.remove('open');
    mapModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (mapModalIframe) mapModalIframe.src = '';
  }

  document.querySelectorAll('.open-map-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-map-title') || '상세 길안내 지도';
      const src = btn.getAttribute('data-map-src') || '';
      const naver = btn.getAttribute('data-naver') || '#';
      const kakao = btn.getAttribute('data-kakao') || '#';
      const google = btn.getAttribute('data-google') || '#';
      openMapModal(title, src, naver, kakao, google);
    });
  });

  if (mapModalClose) mapModalClose.addEventListener('click', closeMapModal);
  if (mapModal) {
    mapModal.addEventListener('click', (e) => {
      if (e.target === mapModal) {
        closeMapModal();
      }
    });
  }

  // Global ESC Key Listener for Modals & Drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (imageModal && imageModal.classList.contains('open')) {
        closeImageModal();
      } else if (brochureModal && brochureModal.classList.contains('open')) {
        closeBrochureModal();
      } else if (mapModal && mapModal.classList.contains('open')) {
        closeMapModal();
      } else if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });

  // =========================================================================
  // 7. Share Link & Toast Notification
  // =========================================================================
  const shareBtn = document.getElementById('btn-share');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (toastMsg) toastMsg.textContent = message;
    if (toast) {
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareUrl = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(shareUrl);
          showToast('페이지 링크가 클립보드에 복사되었습니다.');
          return;
        } catch (err) {
          // Fallback below
        }
      }

      // Fallback for older browsers / iframe security
      try {
        const dummyInput = document.createElement('input');
        dummyInput.value = shareUrl;
        document.body.appendChild(dummyInput);
        dummyInput.select();
        document.execCommand('copy');
        document.body.removeChild(dummyInput);
        showToast('페이지 링크가 클립보드에 복사되었습니다.');
      } catch (e) {
        showToast('링크 주소: ' + shareUrl);
      }
    });
  }

  // =========================================================================
  // 8. Back to Top Smooth Scroll
  // =========================================================================
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 9. ScrollSpy for Active Desktop Navigation Link
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function updateScrollSpy() {
    const scrollPos = window.scrollY + 160;

    sections.forEach(section => {
      // 숨겨진 섹션은 ScrollSpy에서 제외
      if (section.hasAttribute('hidden') || section.style.display === 'none') {
        return;
      }

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
});
