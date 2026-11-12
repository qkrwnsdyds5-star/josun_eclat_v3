/**
 * JOSUN ÉCLAT (조선 에끌라) Official Website JavaScript
 * Vanilla ES6+ Implementation - Strict No-Framework Architecture
 * 3-Tier Room Architecture: Busan Suite, Jeju Suite, Kids Room (Unified & De-regionalized)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 0. 브라우저 스크롤 복원 비활성화 및 초기 로드 시 최상단 고정 (스크롤 튐 원천 차단)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });

  // =========================================================================
  // 1. Central Content Store (객실 3종 체계: 부산 스위트룸, 제주 스위트룸, 키즈룸)
  // =========================================================================
  const ECLAT_CONTENT = {
    busan: {
      nameKr: '그랜드 조선 부산',
      nameEn: 'GRAND JOSUN BUSAN',
      regionKr: '부산',
      suite: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 부산 스위트룸 웰컴기프트',
        tag: 'BUSAN SUITE',
        subLead: 'GRAND JOSUN BUSAN',
        roomNameKr: '스위트룸',
        roomNameEn: 'SUITE ROOM',
        countText: '6종 전체',
        hero: {
          lead: '조선 에끌라, 부산 해운대에서의 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">부산 해운대 바다와 스카이라인의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_busan/조선 에끌라_부산_스위트객실.png',
        guide: '그랜드 조선 부산 스위트룸 고객님을 위해 특별히 준비된 6종 프리미엄 웰컴기프트 라인업',
        notice: '스위트룸 고객님만을 위해 광안대교, 크루즈선, 등대 쿠키에 더해 해운대 갈매기, 진주 조개, 파도 프리미엄 초콜릿 3종이 포함된 6종 프리미엄 풀 세트로 구성됩니다.',
        overviewCaption: '그랜드 조선 부산 스위트룸 웰컴기프트 세트 (6종 전체)',
        brochure: {
          title: '그랜드 조선 부산 스위트룸 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN BUSAN Brochure_prototype.png',
          desc: '그랜드 조선 부산 스위트룸 6종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      }
    },
    jeju: {
      nameKr: '그랜드 조선 제주',
      nameEn: 'GRAND JOSUN JEJU',
      regionKr: '제주',
      suite: {
        title: 'JOSUN ÉCLAT | 그랜드 조선 제주 스위트룸 웰컴기프트',
        tag: 'JEJU SUITE',
        subLead: 'GRAND JOSUN JEJU',
        roomNameKr: '스위트룸',
        roomNameEn: 'SUITE ROOM',
        countText: '6종 전체',
        hero: {
          lead: '조선 에끌라, 제주의 푸른 자연 속 특별한 환대',
          desc: '그랜드 조선의 5성급 호스피탈리티와 신세계푸드의 파티세리 장인정신이 결합하여,<br class="hide-mobile">사계절 푸른 제주 중문 숲과 자연의 감성을 담은 단 하나의 호텔 웰컴기프트를 선사합니다.'
        },
        overviewImg: './assets/cookie-kit/josun_eclat_jeju/조선 에끌라_제주_스위트객실.png',
        guide: '그랜드 조선 제주 스위트룸 고객님을 위해 특별히 준비된 6종 프리미엄 웰컴기프트 라인업',
        notice: '스위트룸 고객님만을 위해 귤 조각, 조랑말, 야자수 쿠키에 더해 한라봉, 돌하르방, 한라산 백록담 프리미엄 초콜릿 3종이 포함된 6종 프리미엄 풀 세트로 구성됩니다.',
        overviewCaption: '그랜드 조선 제주 스위트룸 웰컴기프트 세트 (6종 전체)',
        brochure: {
          title: '그랜드 조선 제주 스위트룸 브로슈어 시안',
          img: './assets/Brochure/GRAND JOSUN JEJU Brochure_prototype.png',
          desc: '그랜드 조선 제주 스위트룸 6종 웰컴기프트 패키지 및 브로슈어 프로토타입 시안입니다.'
        }
      }
    },
    kids: {
      nameKr: '그랜드 조선 호텔',
      nameEn: 'GRAND JOSUN',
      regionKr: '키즈',
      title: 'JOSUN ÉCLAT | 그랜드 조선 키즈룸 웰컴기프트',
      tag: 'KIDS ADVENTURE',
      subLead: 'GRAND JOSUN',
      roomNameKr: '키즈룸',
      roomNameEn: 'KIDS ROOM',
      countText: 'DIY 키트',
      hero: {
        lead: '조선 에끌라, 동화 속 세상으로 떠나는 특별한 키즈 어드벤처',
        desc: '그랜드 조선 키즈룸을 찾은 어린이와 가족을 위해,<br class="hide-mobile">신비로운 상상력을 마음껏 펼치며 직접 완성하는 참여형 DIY 쿠키 키트 웰컴기프트를 선사합니다.'
      },
      guide: '아이와 함께 완성하는 세상에서 단 하나뿐인 가족 여행의 달콤한 추억',
      intro: {
        title: '동일한 기본 형태의 쿠키 6개,<br><span class="highlight">여섯 가지 상상력으로 피어나는 시간</span>',
        desc: '그랜드 조선 키즈룸에 투숙하는 가족을 위해 기획된 참여형 웰컴기프트입니다. 동일한 캔버스 고래 쿠키 6개 위에 핑크, 스카이블루, 초코 3색 아이싱 펜으로 숲속, 하늘, 바다 친구들과 여행의 이야기를 마음껏 그려보세요.',
        welcomeCard: '“Welcome to Grand Josun Kids Room. May your creative journey be special.”'
      },
      mission: {
        step1: '핑크, 스카이블루, 초코 3색 아이싱 펜으로 고래 쿠키 위에 나만의 특별한 이야기와 귀여운 캐릭터 친구들을 꾸며보세요.',
        step2: '완성된 귀여운 쿠키 작품을 객실 웰컴 카드와 함께 사진으로 남겨 소중한 가족 앨범과 SNS에 기록해 보세요.',
        step3: '직접 만든 달콤한 쿠키를 가족과 함께 나누어 먹으며, 오늘 여행에서 가장 즐거웠던 순간을 이야기 나누어 보세요.'
      },
      brochure: {
        title: '그랜드 조선 키즈 웰컴기프트 3단 브로슈어 시안',
        img: './assets/Brochure/GRAND JOSUN KIDS Brochure_prototype.png',
        desc: '그랜드 조선 키즈룸 3단계 미션 어드벤처 및 DIY 쿠키 데코레이션 가이드 리플렛 시안입니다.'
      }
    }
  };

  // =========================================================================
  // 2. Header Scroll State
  // =========================================================================
  const header = document.getElementById('site-header');
  const scrollThreshold = 60;

  function updateHeaderOnScroll() {
    if (!header) return;
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
    if (!drawer || !backdrop) return;
    drawer.classList.add('open');
    backdrop.classList.add('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (drawerClose) drawerClose.focus();
  }

  function closeDrawer() {
    if (!drawer || !backdrop) return;
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Drawer links handled by Mobile Section Router below

  // =========================================================================
  // 4. URL Query Parameter Controller (3 Room Tiers: Busan Suite, Jeju Suite, Kids)
  // =========================================================================
  function getMode() {
    const params = new URLSearchParams(window.location.search);
    const hotel = params.get('hotel') ? params.get('hotel').toLowerCase().trim() : null;
    const room = params.get('room') ? params.get('room').toLowerCase().trim() : null;

    // 1. 키즈룸 판별: room === 'kids' (호텔 무관, 단일 통합)
    if (room === 'kids') {
      return { mode: 'kids', hotel: null, room: 'kids', valid: true };
    }

    // 2. 부산 스위트룸 판별: hotel === 'busan'
    if (hotel === 'busan') {
      return { mode: 'busan', hotel: 'busan', room: 'suite', valid: true };
    }

    // 3. 제주 스위트룸 판별: hotel === 'jeju'
    if (hotel === 'jeju') {
      return { mode: 'jeju', hotel: 'jeju', room: 'suite', valid: true };
    }

    return { mode: null, hotel: null, room: null, valid: false };
  }

  // =========================================================================
  // iPhone / iOS WebKit Video Autoplay & Smooth Loop Engine
  // =========================================================================
  function updateHeroBgVideo(videoPath) {
    const video = document.getElementById('hero-bg-video');
    if (!video) return;

    // 1. Force iOS WebKit autoplay prerequisites on DOM properties & attributes
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const source = video.querySelector('source');
    const currentSrc = source ? source.getAttribute('src') : (video.getAttribute('src') || '');
    
    // Normalize path comparison (e.g. relative vs absolute)
    const isDifferent = currentSrc !== videoPath && !currentSrc.endsWith(videoPath.replace(/^\.\//, ''));

    const attemptPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay deferred (e.g. iOS Low Power Mode); watchdog will play on first interaction
          });
        }
      }
    };

    if (isDifferent) {
      if (source) {
        source.setAttribute('src', videoPath);
      }
      video.src = videoPath;
      video.load();

      // In iOS Safari, wait for loadeddata / canplay before calling play()
      video.addEventListener('loadeddata', attemptPlay, { once: true });
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    // Always attempt play immediately
    attemptPlay();

    if (video.readyState >= 2) {
      attemptPlay();
    }
  }

  // iOS / Mobile Video Autoplay & Low Power Mode Fallback Watchdog
  function initVideoAutoplayWatchdog() {
    const video = document.getElementById('hero-bg-video');
    if (!video) return;

    const playVideo = () => {
      if (video.paused) {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    };

    // 1. Initial attempt
    playVideo();

    // 2. User interaction fallback (covers iOS Low Power Mode and strict WebKit autoplay policies)
    const interactionEvents = ['touchstart', 'touchend', 'click', 'scroll', 'pointerdown'];
    const onUserInteraction = () => {
      playVideo();
      if (!video.paused) {
        interactionEvents.forEach(evt => {
          window.removeEventListener(evt, onUserInteraction);
          document.removeEventListener(evt, onUserInteraction);
        });
      }
    };

    interactionEvents.forEach(evt => {
      window.addEventListener(evt, onUserInteraction, { passive: true });
      document.addEventListener(evt, onUserInteraction, { passive: true });
    });

    // 3. Tab visibility & BFCache page restoration handlers
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    });
    window.addEventListener('pageshow', () => {
      if (video.paused) {
        playVideo();
      }
    });

    // 4. Background pause recovery
    video.addEventListener('pause', () => {
      if (!document.hidden) {
        setTimeout(playVideo, 150);
      }
    });
  }

  function renderPage() {
    const { mode, valid } = getMode();

    const guidanceSection = document.getElementById('qr-guidance-section');
    const collectionsSection = document.getElementById('collections');
    const kidsSection = document.getElementById('kids');
    const journeySection = document.getElementById('motif-journey');

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
    // 예외 케이스: 유효하지 않은 접속 (QR 안내 화면 표출)
    // -----------------------------------------------------------------------
    if (!valid) {
      document.title = 'JOSUN ÉCLAT | 올바른 웰컴기프트 안내 페이지로 접속해 주세요.';

      if (welcomeTag) welcomeTag.textContent = 'QR ACCESS REQUIRED';

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
      if (journeySection) {
        journeySection.setAttribute('hidden', '');
        journeySection.style.display = 'none';
      }

      if (navItemCollections) navItemCollections.style.display = 'none';
      if (navItemKids) navItemKids.style.display = 'none';
      if (drawerItemCollections) drawerItemCollections.style.display = 'none';
      if (drawerItemKids) drawerItemKids.style.display = 'none';
      if (footerNavCollections) footerNavCollections.style.display = 'none';
      if (footerNavKids) footerNavKids.style.display = 'none';

      if (footerBusanBtn) footerBusanBtn.style.display = 'none';
      if (footerJejuBtn) footerJejuBtn.style.display = 'none';
      if (footerKidsBtn) footerKidsBtn.style.display = 'none';

      const drawerQuickCard = document.getElementById('drawer-quick-card');
      if (drawerQuickCard) drawerQuickCard.style.display = 'none';

      return;
    }

    // -----------------------------------------------------------------------
    // 정상 케이스: 유효한 3종 룸 모드 적용
    // -----------------------------------------------------------------------
    if (guidanceSection) {
      guidanceSection.setAttribute('hidden', '');
      guidanceSection.style.display = 'none';
    }
    if (journeySection) {
      journeySection.removeAttribute('hidden');
      journeySection.style.display = 'block';
    }

    const heroHotelName = document.getElementById('hero-hotel-name');
    const heroBtnExplore = document.getElementById('hero-btn-explore');
    const drawerQuickCard = document.getElementById('drawer-quick-card');
    const drawerQuickHotel = document.getElementById('drawer-quick-hotel');
    const drawerQuickRoom = document.getElementById('drawer-quick-room');
    const drawerCollectionsKr = document.getElementById('drawer-collections-kr');
    const drawerKidsKr = document.getElementById('drawer-kids-kr');

    // =======================================================================
    // CASE A: 키즈룸 (Kids Room - Unified & De-regionalized)
    // =======================================================================
    if (mode === 'kids') {
      updateHeroBgVideo('./assets/josun_eclat_kids_webpage_background_video.mp4');
      const data = ECLAT_CONTENT.kids;
      document.title = data.title;
      if (welcomeTag) welcomeTag.textContent = data.tag;

      if (heroHotelName) heroHotelName.textContent = data.nameEn;
      if (heroBtnExplore) {
        heroBtnExplore.setAttribute('href', '#kids');
        heroBtnExplore.textContent = '키즈 웰컴기프트 보기';
      }

      if (drawerQuickCard) drawerQuickCard.style.display = '';
      if (drawerQuickHotel) drawerQuickHotel.textContent = data.nameEn;
      if (drawerQuickRoom) {
        drawerQuickRoom.innerHTML = `${data.roomNameKr} (${data.countText}) 바로가기 &rarr;`;
      }
      if (drawerCollectionsKr) drawerCollectionsKr.textContent = '키즈룸 웰컴기프트';
      if (drawerKidsKr) drawerKidsKr.textContent = '키즈 쿠키 체험 &amp; 캐릭터';

      // 섹션 전환: 컬렉션 숨김, 키즈 표시
      if (collectionsSection) {
        collectionsSection.setAttribute('hidden', '');
        collectionsSection.style.display = 'none';
      }
      if (kidsSection) {
        kidsSection.removeAttribute('hidden');
        kidsSection.style.display = 'block';
      }

      // 내비게이션 필터링
      if (navItemCollections) navItemCollections.style.display = 'none';
      if (navItemKids) navItemKids.style.display = '';
      if (drawerItemCollections) drawerItemCollections.style.display = 'none';
      if (drawerItemKids) drawerItemKids.style.display = '';
      if (footerNavCollections) footerNavCollections.style.display = 'none';
      if (footerNavKids) footerNavKids.style.display = '';

      // 키즈 섹션 콘텐츠 바인딩 (지역적 요소 완전 제거)
      const kidsSubLead = document.getElementById('kids-sub-lead');
      const kidsGuide = document.getElementById('kids-guide');
      const kidsVerifiedHotel = document.getElementById('kids-verified-hotel');
      const kidsVerifiedRoom = document.getElementById('kids-verified-room');
      const kidsShowcaseTitle = document.getElementById('kids-showcase-title');
      const kidsShowcaseDesc = document.getElementById('kids-showcase-desc');
      const kidsWelcomeCardText = document.getElementById('kids-welcome-card-text');
      const kidsStep1Desc = document.getElementById('kids-step-1-desc');
      const kidsStep2Desc = document.getElementById('kids-step-2-desc');
      const kidsStep3Desc = document.getElementById('kids-step-3-desc');

      if (kidsSubLead) kidsSubLead.textContent = data.subLead;
      if (kidsGuide) kidsGuide.textContent = data.guide;
      if (kidsVerifiedHotel) kidsVerifiedHotel.textContent = data.nameEn;
      const kidsVerifiedSep = document.querySelector('#kids-verified-banner .verified-sep');
      if (kidsVerifiedSep) kidsVerifiedSep.style.display = 'none';
      if (kidsVerifiedRoom) {
        kidsVerifiedRoom.textContent = '';
        kidsVerifiedRoom.style.display = 'none';
      }
      if (kidsShowcaseTitle) kidsShowcaseTitle.innerHTML = data.intro.title;
      if (kidsShowcaseDesc) kidsShowcaseDesc.textContent = data.intro.desc;
      if (kidsWelcomeCardText) kidsWelcomeCardText.textContent = data.intro.welcomeCard;
      if (kidsStep1Desc) kidsStep1Desc.textContent = data.mission.step1;
      if (kidsStep2Desc) kidsStep2Desc.textContent = data.mission.step2;
      if (kidsStep3Desc) kidsStep3Desc.textContent = data.mission.step3;

      // 페어링 이미지 (키즈룸 전용 Vivente 페어링 이미지)
      const pairingTeaImg = document.getElementById('pairing-tea-img');
      const pairingCoffeeImg = document.getElementById('pairing-coffee-img');
      if (pairingTeaImg) {
        pairingTeaImg.src = './assets/cookie-kit/vivente-tea_kids.png';
      }
      if (pairingCoffeeImg) {
        pairingCoffeeImg.src = './assets/cookie-kit/vivente-coffee_kids.png';
      }

      // 푸터 브로슈어 버튼
      if (footerBusanBtn) footerBusanBtn.style.display = 'none';
      if (footerJejuBtn) footerJejuBtn.style.display = 'none';
      if (footerKidsBtn) {
        footerKidsBtn.style.display = '';
        footerKidsBtn.textContent = '키즈 브로슈어 시안';
      }

      // [섹션 6] 키즈 캐릭터 프렌즈 쇼케이스 패널 노출
      updateJourneySection('kids');
      return;
    }

    // =======================================================================
    // CASE B: 부산 스위트룸 (Busan Suite)
    // =======================================================================
    if (mode === 'busan') {
      updateHeroBgVideo('./assets/josun_eclat_webpage_background_video.mp4');
      const data = ECLAT_CONTENT.busan.suite;
      document.title = data.title;
      if (welcomeTag) welcomeTag.textContent = data.tag;

      if (heroHotelName) heroHotelName.textContent = ECLAT_CONTENT.busan.nameEn;
      if (heroBtnExplore) {
        heroBtnExplore.setAttribute('href', '#collections');
        heroBtnExplore.textContent = '컬렉션 탐색하기';
      }

      if (drawerQuickCard) drawerQuickCard.style.display = '';
      if (drawerQuickHotel) drawerQuickHotel.textContent = ECLAT_CONTENT.busan.nameEn;
      if (drawerQuickRoom) {
        drawerQuickRoom.innerHTML = `${data.roomNameKr} (${data.countText}) 바로가기 &rarr;`;
      }
      if (drawerCollectionsKr) drawerCollectionsKr.textContent = `부산 컬렉션 (${data.roomNameKr})`;
      if (drawerKidsKr) drawerKidsKr.textContent = '키즈 쿠키 체험';

      // 섹션 전환: 컬렉션 표시, 키즈 숨김
      if (kidsSection) {
        kidsSection.setAttribute('hidden', '');
        kidsSection.style.display = 'none';
      }
      if (collectionsSection) {
        collectionsSection.removeAttribute('hidden');
        collectionsSection.style.display = 'block';
      }

      // 내비게이션 필터링
      if (navItemCollections) navItemCollections.style.display = '';
      if (navItemKids) navItemKids.style.display = 'none';
      if (drawerItemCollections) drawerItemCollections.style.display = '';
      if (drawerItemKids) drawerItemKids.style.display = 'none';
      if (footerNavCollections) footerNavCollections.style.display = '';
      if (footerNavKids) footerNavKids.style.display = 'none';

      // 컬렉션 헤더
      const subLead = document.getElementById('collections-sub-lead');
      const title = document.getElementById('collections-title');
      const guide = document.getElementById('collections-guide');
      const verifiedHotel = document.getElementById('verified-hotel');
      const verifiedRoom = document.getElementById('verified-room');

      if (subLead) subLead.textContent = data.subLead;
      if (title) title.textContent = 'Busan Gift Collection';
      if (guide) guide.textContent = data.guide;
      if (verifiedHotel) verifiedHotel.textContent = ECLAT_CONTENT.busan.nameEn;
      const verifiedSep = document.querySelector('#collection-verified-banner .verified-sep');
      if (verifiedSep) verifiedSep.style.display = 'none';
      if (verifiedRoom) {
        verifiedRoom.textContent = '';
        verifiedRoom.style.display = 'none';
      }

      // 패널 제어: 부산 표시, 제주 숨김
      const panelBusan = document.getElementById('panel-busan');
      const panelJeju = document.getElementById('panel-jeju');
      if (panelBusan) {
        panelBusan.classList.add('active');
        panelBusan.removeAttribute('hidden');
        panelBusan.style.display = 'block';

        // 스위트룸: 6종 전체 카드 모두 활성화
        panelBusan.querySelectorAll('.cookie-card').forEach(card => {
          card.classList.remove('hidden');
          card.style.display = '';
          card.removeAttribute('aria-hidden');
        });
      }
      if (panelJeju) {
        panelJeju.classList.remove('active');
        panelJeju.setAttribute('hidden', '');
        panelJeju.style.display = 'none';
      }

      // 오버뷰 배너
      const busanNotice = document.getElementById('busan-tier-notice');
      const busanOverviewImg = document.getElementById('busan-overview-img');
      if (busanNotice) busanNotice.textContent = data.notice;
      if (busanOverviewImg) {
        busanOverviewImg.src = data.overviewImg;
        busanOverviewImg.alt = `${ECLAT_CONTENT.busan.nameKr} ${data.roomNameKr} 웰컴기프트 세트`;
        busanOverviewImg.setAttribute('data-caption', data.overviewCaption);
      }

      // 페어링 이미지 (부산)
      const pairingTeaImg = document.getElementById('pairing-tea-img');
      const pairingCoffeeImg = document.getElementById('pairing-coffee-img');
      if (pairingTeaImg) {
        pairingTeaImg.src = './assets/cookie-kit/vivente-tea_busan.png';
      }
      if (pairingCoffeeImg) {
        pairingCoffeeImg.src = './assets/cookie-kit/vivente-coffee_busan.png';
      }

      // 푸터 브로슈어 버튼
      if (footerKidsBtn) footerKidsBtn.style.display = 'none';
      if (footerJejuBtn) footerJejuBtn.style.display = 'none';
      if (footerBusanBtn) {
        footerBusanBtn.style.display = '';
        footerBusanBtn.textContent = '부산 스위트룸 브로슈어 시안';
      }

      // [섹션 6] 부산 모티브 탐방 패널 노출
      updateJourneySection('busan');
      return;
    }

    // =======================================================================
    // CASE C: 제주 스위트룸 (Jeju Suite)
    // =======================================================================
    if (mode === 'jeju') {
      updateHeroBgVideo('./assets/josun_eclat_webpage_background_jeju.mp4');
      const data = ECLAT_CONTENT.jeju.suite;
      document.title = data.title;
      if (welcomeTag) welcomeTag.textContent = data.tag;

      if (heroHotelName) heroHotelName.textContent = ECLAT_CONTENT.jeju.nameEn;
      if (heroBtnExplore) {
        heroBtnExplore.setAttribute('href', '#collections');
        heroBtnExplore.textContent = '컬렉션 탐색하기';
      }

      if (drawerQuickCard) drawerQuickCard.style.display = '';
      if (drawerQuickHotel) drawerQuickHotel.textContent = ECLAT_CONTENT.jeju.nameEn;
      if (drawerQuickRoom) {
        drawerQuickRoom.innerHTML = `${data.roomNameKr} (${data.countText}) 바로가기 &rarr;`;
      }
      if (drawerCollectionsKr) drawerCollectionsKr.textContent = `제주 컬렉션 (${data.roomNameKr})`;
      if (drawerKidsKr) drawerKidsKr.textContent = '키즈 쿠키 체험';

      // 섹션 전환: 컬렉션 표시, 키즈 숨김
      if (kidsSection) {
        kidsSection.setAttribute('hidden', '');
        kidsSection.style.display = 'none';
      }
      if (collectionsSection) {
        collectionsSection.removeAttribute('hidden');
        collectionsSection.style.display = 'block';
      }

      // 내비게이션 필터링
      if (navItemCollections) navItemCollections.style.display = '';
      if (navItemKids) navItemKids.style.display = 'none';
      if (drawerItemCollections) drawerItemCollections.style.display = '';
      if (drawerItemKids) drawerItemKids.style.display = 'none';
      if (footerNavCollections) footerNavCollections.style.display = '';
      if (footerNavKids) footerNavKids.style.display = 'none';

      // 컬렉션 헤더
      const subLead = document.getElementById('collections-sub-lead');
      const title = document.getElementById('collections-title');
      const guide = document.getElementById('collections-guide');
      const verifiedHotel = document.getElementById('verified-hotel');
      const verifiedRoom = document.getElementById('verified-room');

      if (subLead) subLead.textContent = data.subLead;
      if (title) title.textContent = 'Jeju Gift Collection';
      if (guide) guide.textContent = data.guide;
      if (verifiedHotel) verifiedHotel.textContent = ECLAT_CONTENT.jeju.nameEn;
      const jejuVerifiedSep = document.querySelector('#collection-verified-banner .verified-sep');
      if (jejuVerifiedSep) jejuVerifiedSep.style.display = 'none';
      if (verifiedRoom) {
        verifiedRoom.textContent = '';
        verifiedRoom.style.display = 'none';
      }

      // 패널 제어: 제주 표시, 부산 숨김
      const panelBusan = document.getElementById('panel-busan');
      const panelJeju = document.getElementById('panel-jeju');
      if (panelJeju) {
        panelJeju.classList.add('active');
        panelJeju.removeAttribute('hidden');
        panelJeju.style.display = 'block';

        // 스위트룸: 6종 전체 카드 모두 활성화
        panelJeju.querySelectorAll('.cookie-card').forEach(card => {
          card.classList.remove('hidden');
          card.style.display = '';
          card.removeAttribute('aria-hidden');
        });
      }
      if (panelBusan) {
        panelBusan.classList.remove('active');
        panelBusan.setAttribute('hidden', '');
        panelBusan.style.display = 'none';
      }

      // 오버뷰 배너
      const jejuNotice = document.getElementById('jeju-tier-notice');
      const jejuOverviewImg = document.getElementById('jeju-overview-img');
      if (jejuNotice) jejuNotice.textContent = data.notice;
      if (jejuOverviewImg) {
        jejuOverviewImg.src = data.overviewImg;
        jejuOverviewImg.alt = `${ECLAT_CONTENT.jeju.nameKr} ${data.roomNameKr} 웰컴기프트 세트`;
        jejuOverviewImg.setAttribute('data-caption', data.overviewCaption);
      }

      // 페어링 이미지 (제주)
      const pairingTeaImg = document.getElementById('pairing-tea-img');
      const pairingCoffeeImg = document.getElementById('pairing-coffee-img');
      if (pairingTeaImg) {
        pairingTeaImg.src = './assets/cookie-kit/vivente-tea_jeju.png';
      }
      if (pairingCoffeeImg) {
        pairingCoffeeImg.src = './assets/cookie-kit/vivente-coffee_jeju.png';
      }

      // 푸터 브로슈어 버튼
      if (footerKidsBtn) footerKidsBtn.style.display = 'none';
      if (footerBusanBtn) footerBusanBtn.style.display = 'none';
      if (footerJejuBtn) {
        footerJejuBtn.style.display = '';
        footerJejuBtn.textContent = '제주 스위트룸 브로슈어 시안';
      }

      // [섹션 6] 제주 모티브 탐방 패널 노출
      updateJourneySection('jeju');
    }
  }

  // =========================================================================
  // 4-0. Josun Hotel Motif Location Carousel & Google Maps Controller
  // Styled & Structured exactly like https://josunhotel.com/about/location.do
  // Public Google Maps Embed (No API Key Required) with Zoom, Pan & Route Directions
  // =========================================================================
  function initJosunLocationCarousel(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return null;

    const track = slider.querySelector('.josun-slider-track');
    const slides = slider.querySelectorAll('.josun-slider-slide');
    const tabs = slider.querySelectorAll('.josun-tab-item');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    const counterCurrent = slider.querySelector('.josun-slide-counter .current');
    const totalCount = slides.length;
    let currentIndex = 0;

    // Load Google Maps iframe when slide is activated to ensure smooth rendering
    function lazyLoadGoogleMap(slideEl) {
      if (!slideEl) return;
      const iframe = slideEl.querySelector('iframe.route-map-iframe');
      if (iframe && iframe.dataset.src) {
        if (!iframe.src || iframe.src === '' || iframe.src.includes('about:blank')) {
          iframe.src = iframe.dataset.src;
        }
      }
    }

    function goToSlide(index) {
      if (index < 0) index = 0;
      if (index >= totalCount) index = totalCount - 1;
      currentIndex = index;

      // Update slide track transform
      if (track) {
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
      }

      // Update active states
      slides.forEach((s, idx) => {
        const isActive = idx === currentIndex;
        s.classList.toggle('active', isActive);
        if (isActive) {
          lazyLoadGoogleMap(s);
        }
      });

      // Update tabs (Window 스크롤을 건드리는 scrollIntoView 제거 - 스크롤 튐 원천 방지)
      tabs.forEach((tab, idx) => {
        const isActive = idx === currentIndex;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', String(isActive));
      });

      // Update counter
      if (counterCurrent) {
        counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0');
      }

      // Update buttons
      if (prevBtn) prevBtn.disabled = (currentIndex === 0);
      if (nextBtn) nextBtn.disabled = (currentIndex === totalCount - 1);
    }

    // Tabs Click
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(idx);
      });
    });

    // Arrow Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }

    // Touch Swipe Gesture
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < totalCount - 1) {
          goToSlide(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          goToSlide(currentIndex - 1);
        }
      }
    }, { passive: true });

    // Initialize first slide
    goToSlide(0);

    return { goToSlide, getCurrentIndex: () => currentIndex };
  }

  const busanSliderCtrl = initJosunLocationCarousel('busan-motif-slider');
  const jejuSliderCtrl = initJosunLocationCarousel('jeju-motif-slider');

  // Toggle Accordion List Interaction (with '∨' Button)
  document.querySelectorAll('.josun-location-inner .toggleList.rsvList > li').forEach(li => {
    const listTit = li.querySelector('.listTit');
    const btnToggle = li.querySelector('.btnToggle');
    const toggleCont = li.querySelector('.toggleCont');

    function toggleAccordion(e) {
      e.preventDefault();
      const isOpen = li.classList.toggle('toggleOn');
      if (toggleCont) {
        toggleCont.style.display = isOpen ? 'block' : 'none';
      }
      if (btnToggle) {
        btnToggle.setAttribute('aria-label', isOpen ? '상세내용 접기' : '상세내용 펼치기');
      }
    }

    if (listTit) listTit.addEventListener('click', toggleAccordion);
    if (btnToggle) btnToggle.addEventListener('click', toggleAccordion);
  });

  // Map vs Cookie Art View Switcher (Google Maps Default)
  document.querySelectorAll('.josun-location-inner .mapArea').forEach(mapArea => {
    const switcherBtns = mapArea.querySelectorAll('.map-view-switcher .view-btn');
    const mapViewBox = mapArea.querySelector('.map-view-box');
    const cookieViewBox = mapArea.querySelector('.cookie-view-box');
    const iframe = mapArea.querySelector('iframe.route-map-iframe');

    switcherBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.dataset.target;
        switcherBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        if (target === 'map') {
          if (mapViewBox) mapViewBox.classList.add('active');
          if (cookieViewBox) cookieViewBox.classList.remove('active');
          if (iframe && iframe.dataset.src && (!iframe.src || iframe.src === '' || iframe.src.includes('about:blank'))) {
            iframe.src = iframe.dataset.src;
          }
        } else {
          if (cookieViewBox) cookieViewBox.classList.add('active');
          if (mapViewBox) mapViewBox.classList.remove('active');
        }
      });
    });
  });

  // =========================================================================
  // Section 6: Journey & Kids Character Panel Controller
  // =========================================================================
  function updateJourneySection(activeMode) {
    const panelBusan = document.getElementById('journey-panel-busan');
    const panelJeju = document.getElementById('journey-panel-jeju');
    const panelKids = document.getElementById('journey-panel-kids');
    const journeySubLead = document.getElementById('journey-sub-lead');
    const journeyTitle = document.getElementById('journey-title');
    const journeyPageGuide = document.getElementById('journey-page-guide');
    const journeyPageSubGuide = document.getElementById('journey-page-subguide');

    if (activeMode === 'busan') {
      if (panelBusan) {
        panelBusan.removeAttribute('hidden');
        panelBusan.style.display = 'block';
      }
      if (panelJeju) {
        panelJeju.setAttribute('hidden', '');
        panelJeju.style.display = 'none';
      }
      if (panelKids) {
        panelKids.setAttribute('hidden', '');
        panelKids.style.display = 'none';
      }

      if (journeySubLead) journeySubLead.textContent = 'GRAND JOSUN BUSAN MOTIF JOURNEY';
      if (journeyTitle) journeyTitle.textContent = 'Journey to the Motifs';
      if (journeyPageGuide) {
        journeyPageGuide.textContent = '그랜드 조선 부산 웰컴기프트에 깃든 영감의 장소';
      }
      if (journeyPageSubGuide) {
        journeyPageSubGuide.textContent = '호텔에서 출발하여 광안리 해수욕장과 청사포 등 부산의 대표 명소로 향하는 품격 있는 여정을 안내합니다.';
      }
      if (busanSliderCtrl) busanSliderCtrl.goToSlide(0);

    } else if (activeMode === 'jeju') {
      if (panelJeju) {
        panelJeju.removeAttribute('hidden');
        panelJeju.style.display = 'block';
      }
      if (panelBusan) {
        panelBusan.setAttribute('hidden', '');
        panelBusan.style.display = 'none';
      }
      if (panelKids) {
        panelKids.setAttribute('hidden', '');
        panelKids.style.display = 'none';
      }

      if (journeySubLead) journeySubLead.textContent = 'GRAND JOSUN JEJU MOTIF JOURNEY';
      if (journeyTitle) journeyTitle.textContent = 'Journey to the Motifs';
      if (journeyPageGuide) {
        journeyPageGuide.textContent = '그랜드 조선 제주 웰컴기프트에 깃든 영감의 장소';
      }
      if (journeyPageSubGuide) {
        journeyPageSubGuide.textContent = '호텔에서 출발하여 한라산 백록담과 렛츠런파크 제주 등 제주의 청정 명소로 향하는 품격 있는 여정을 안내합니다.';
      }
      if (jejuSliderCtrl) jejuSliderCtrl.goToSlide(0);

    } else if (activeMode === 'kids') {
      if (panelKids) {
        panelKids.removeAttribute('hidden');
        panelKids.style.display = 'block';
      }
      if (panelBusan) {
        panelBusan.setAttribute('hidden', '');
        panelBusan.style.display = 'none';
      }
      if (panelJeju) {
        panelJeju.setAttribute('hidden', '');
        panelJeju.style.display = 'none';
      }

      if (journeySubLead) journeySubLead.textContent = 'GRAND JOSUN KIDS CHARACTER FRIENDS';
      if (journeyTitle) journeyTitle.textContent = 'Kids Character Friends';
      if (journeyPageGuide) {
        journeyPageGuide.textContent = '그랜드 조선에서 만나는 특별한 세 가지 이야기';
      }
      if (journeyPageSubGuide) {
        journeyPageSubGuide.textContent = '숲과 하늘, 그리고 바닷속에서 찾아온 사랑스러운 친구들을 소개합니다.';
      }
    }
  }

  // =========================================================================
  // Kids Theme Tabs Controller (Forest, Sky, Under the Sea)
  // =========================================================================
  function initKidsThemeTabs() {
    const tabBtns = document.querySelectorAll('.kids-theme-tab-btn');
    const themeGroups = document.querySelectorAll('.kids-theme-group');
    if (!tabBtns.length || !themeGroups.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTheme = btn.getAttribute('data-theme-target');

        // Update Tab Buttons
        tabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        // Update Theme Panels
        themeGroups.forEach(group => {
          const groupId = group.getAttribute('id');
          if (groupId === `kids-theme-${targetTheme}`) {
            group.classList.add('active');
            group.style.display = 'block';
          } else {
            group.classList.remove('active');
            group.style.display = 'none';
          }
        });
      });
    });

    // Set initial active state (default to 'forest')
    const initialActiveBtn = document.querySelector('.kids-theme-tab-btn[data-theme-target="forest"]') || tabBtns[0];
    if (initialActiveBtn) {
      tabBtns.forEach(b => {
        const isForest = b === initialActiveBtn;
        b.classList.toggle('active', isForest);
        b.setAttribute('aria-selected', String(isForest));
      });
      themeGroups.forEach(group => {
        const isForest = group.getAttribute('id') === 'kids-theme-forest';
        group.classList.toggle('active', isForest);
        group.style.display = isForest ? 'block' : 'none';
      });
    }
  }

  initKidsThemeTabs();

  // =========================================================================
  // Google Maps Fullscreen Modal Controller
  // =========================================================================
  const mapModal = document.getElementById('map-modal');
  const mapModalTitle = document.getElementById('map-modal-title');
  const mapModalIframe = document.getElementById('map-modal-iframe');
  const mapModalClose = document.getElementById('map-modal-close');
  const modalGoogleBtn = document.getElementById('modal-google-btn');

  function openMapModal(title, src, googleUrl) {
    if (!mapModal) return;
    if (mapModalTitle) mapModalTitle.textContent = title;
    if (mapModalIframe) mapModalIframe.src = src;
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
      const google = btn.getAttribute('data-google') || '#';
      openMapModal(title, src, google);
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

  // 브라우저 뒤로 가기 / 앞으로 가기
  window.addEventListener('popstate', renderPage);

  // 초기 렌더링 실행
  renderPage();
  initVideoAutoplayWatchdog();

  // =========================================================================
  // Mobile Interactive UX Controllers (Story, Cookie More, Kids Toggle, Quick Pill)
  // =========================================================================
  // A. Drawer Quick Pill Click
  const drawerQuickBtn = document.getElementById('drawer-quick-btn');
  if (drawerQuickBtn) {
    drawerQuickBtn.addEventListener('click', () => {
      closeDrawer();
      const { mode } = getMode();
      const targetId = mode === 'kids' ? 'kids' : 'collections';
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // B. Brand Story Mobile Collapse Toggle
  // 3 Core Pillars Mobile Accordion Toggle ('∨' Button)
  const btnPillarsToggle = document.getElementById('btn-pillars-toggle');
  const corePillars = document.getElementById('core-pillars');
  if (btnPillarsToggle && corePillars) {
    btnPillarsToggle.addEventListener('click', () => {
      const isExpanded = corePillars.classList.toggle('expanded');
      btnPillarsToggle.setAttribute('aria-expanded', String(isExpanded));
      btnPillarsToggle.setAttribute('aria-label', isExpanded ? '3대 핵심 가치 카드 접기' : '3대 핵심 가치 카드 펼치기');
    });
  }

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

  // D. Kids Kit Components Static Display (No Toggle)
  // 키트 구성품은 버튼 형식 없이 항상 정적으로 안내됩니다.

  // =========================================================================
  // 5. Image Lightbox Modal
  // =========================================================================
  const imageModal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const zoomableImgs = document.querySelectorAll('.zoomable-img');

  function openImageModal(imgSrc, captionText) {
    if (!imageModal || !modalImg) return;
    modalImg.src = imgSrc;
    modalImg.alt = captionText || '고화질 웰컴기프트 이미지';
    if (modalCaption) modalCaption.textContent = captionText || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeImageModal() {
    if (!imageModal || !modalImg) return;
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImg.src = '';
  }

  zoomableImgs.forEach(img => {
    img.addEventListener('click', () => {
      const closestCard = img.closest('.cookie-card');
      if (closestCard && closestCard.classList.contains('hidden')) {
        return;
      }
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
    const { mode, valid } = getMode();

    if (!valid) {
      showToast('올바른 웰컴기프트 안내 페이지로 접속해 주세요.');
      return;
    }

    let data;
    if (mode === 'kids') {
      data = ECLAT_CONTENT.kids.brochure;
    } else if (mode === 'busan') {
      data = ECLAT_CONTENT.busan.suite.brochure;
    } else {
      data = ECLAT_CONTENT.jeju.suite.brochure;
    }

    if (brochureModalTitle) brochureModalTitle.textContent = data.title;
    if (brochureModalImg) {
      brochureModalImg.src = data.img;
      brochureModalImg.alt = data.title;
    }
    if (brochureModalDesc) brochureModalDesc.textContent = data.desc;

    if (brochureModal) {
      brochureModal.classList.add('open');
      brochureModal.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    if (brochureModalClose) brochureModalClose.focus();
  }

  function closeBrochureModal() {
    if (!brochureModal) return;
    brochureModal.classList.remove('open');
    brochureModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (brochureModalImg) brochureModalImg.src = '';
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

  // =========================================================================
  // Mobile Single-Section View Controller (App-Style Routing)
  // [요구사항: 모바일로 웹페이지 접속 시 [섹션 1]만 보이고 우측 상단 메뉴 클릭 후 개별 섹션 클릭 시 해당 섹션 페이지로 이동]
  // =========================================================================
  const MOBILE_SECTIONS = ['hero', 'story', 'collections', 'kids', 'experience', 'motif-journey'];

  function isMobileViewport() {
    return window.innerWidth <= 768;
  }

  function setMobileActiveSection(targetSectionId, options = {}) {
    const { updateUrl = true, smoothScroll = false } = options;
    const isMobile = isMobileViewport();

    if (!isMobile) {
      document.body.classList.remove('mobile-section-mode', 'mobile-hero-active');
      MOBILE_SECTIONS.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) sec.classList.remove('mobile-active-section');
      });
      return;
    }

    const currentMode = typeof getMode === 'function' ? getMode() : { mode: 'busan' };
    let resolvedId = targetSectionId ? String(targetSectionId).replace(/^#/, '') : 'hero';

    if (currentMode.mode === 'kids' && resolvedId === 'collections') {
      resolvedId = 'kids';
    } else if (currentMode.mode !== 'kids' && resolvedId === 'kids') {
      resolvedId = 'collections';
    }

    if (!MOBILE_SECTIONS.includes(resolvedId)) {
      resolvedId = 'hero';
    }

    document.body.classList.add('mobile-section-mode');
    if (resolvedId === 'hero') {
      document.body.classList.add('mobile-hero-active');
    } else {
      document.body.classList.remove('mobile-hero-active');
    }

    MOBILE_SECTIONS.forEach(id => {
      const sec = document.getElementById(id);
      if (!sec) return;
      if (id === resolvedId) {
        sec.classList.add('mobile-active-section');
      } else {
        sec.classList.remove('mobile-active-section');
      }
    });

    window.scrollTo({
      top: 0,
      behavior: smoothScroll ? 'smooth' : 'instant'
    });

    if (updateUrl) {
      const newHash = resolvedId === 'hero' ? '' : '#' + resolvedId;
      const newUrl = window.location.pathname + window.location.search + newHash;
      try {
        history.replaceState(null, document.title, newUrl);
      } catch (err) {}
    }
  }

  function initMobileSectionRouter() {
    // 1. Initial State: 모바일 접속 시 무조건 [섹션 1] (Hero)만 표시
    if (isMobileViewport()) {
      const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : '';
      if (hash && MOBILE_SECTIONS.includes(hash)) {
        setMobileActiveSection(hash, { updateUrl: false });
      } else {
        setMobileActiveSection('hero', { updateUrl: false });
      }
    }

    // 2. 드로어 메뉴 링크 클릭 시 개별 섹션 페이지로 이동
    const drawerLinks = document.querySelectorAll('.drawer-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        closeDrawer();
        if (!isMobileViewport()) return;

        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          setTimeout(() => {
            setMobileActiveSection(targetId, { updateUrl: true });
          }, 120);
        }
      });
    });

    // 3. 드로어 상단의 MY ROOM GIFT 카드 클릭 시 이동
    const drawerQuickBtn = document.getElementById('drawer-quick-btn');
    if (drawerQuickBtn) {
      drawerQuickBtn.addEventListener('click', (e) => {
        closeDrawer();
        if (!isMobileViewport()) return;
        e.preventDefault();
        const currentMode = typeof getMode === 'function' ? getMode() : { mode: 'busan' };
        const targetId = currentMode.mode === 'kids' ? 'kids' : 'collections';
        setTimeout(() => {
          setMobileActiveSection(targetId, { updateUrl: true });
        }, 120);
      });
    }

    // 4. 로고 클릭 시 Hero([섹션 1])로 이동
    const brandLogos = document.querySelectorAll('.brand-logo, .header-brand a');
    brandLogos.forEach(logo => {
      logo.addEventListener('click', (e) => {
        if (!isMobileViewport()) return;
        e.preventDefault();
        closeDrawer();
        setMobileActiveSection('hero', { updateUrl: true });
      });
    });

    // 5. Hero CTA 버튼 클릭 시 컬렉션 섹션으로 이동
    const heroBtnExplore = document.getElementById('hero-btn-explore');
    if (heroBtnExplore) {
      heroBtnExplore.addEventListener('click', (e) => {
        if (!isMobileViewport()) return;
        e.preventDefault();
        const currentMode = typeof getMode === 'function' ? getMode() : { mode: 'busan' };
        const targetId = currentMode.mode === 'kids' ? 'kids' : 'collections';
        setMobileActiveSection(targetId, { updateUrl: true });
      });
    }

    // 6. 사이트 푸터의 내부 앵커 링크 클릭 시 이동
    document.querySelectorAll('.site-footer a[href^="#"]').forEach(flink => {
      flink.addEventListener('click', (e) => {
        if (!isMobileViewport()) return;
        const href = flink.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          setMobileActiveSection(targetId, { updateUrl: true });
        }
      });
    });

    // 7. 브라우저 뒤로 가기 / 앞으로 가기 (popstate)
    window.addEventListener('popstate', () => {
      if (!isMobileViewport()) return;
      const hash = window.location.hash ? window.location.hash.replace(/^#/, '') : 'hero';
      setMobileActiveSection(hash, { updateUrl: false });
    });

    // 8. 뷰포트 크기 변경(resize) 시 모드 자동 보정
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isMobileViewport()) {
          document.body.classList.remove('mobile-section-mode', 'mobile-hero-active');
          MOBILE_SECTIONS.forEach(id => {
            const sec = document.getElementById(id);
            if (sec) sec.classList.remove('mobile-active-section');
          });
        } else {
          const activeSec = document.querySelector('section.mobile-active-section');
          const curId = activeSec ? activeSec.id : (window.location.hash ? window.location.hash.replace(/^#/, '') : 'hero');
          setMobileActiveSection(curId, { updateUrl: false });
        }
      }, 150);
    });
  }

  // Initialize Mobile Section Router
  initMobileSectionRouter();

});
