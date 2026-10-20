(() => {
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburger');
  const gnav = document.getElementById('gnav');
  const pagetop = document.getElementById('pagetop');
  const fixedCta = document.getElementById('fixedCta');
  const fv = document.querySelector('.fv');
  const reserve = document.getElementById('reserve');

  // ハンバーガーメニュー
  const closeMenu = () => {
    gnav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
  };
  hamburger.addEventListener('click', () => {
    const open = !gnav.classList.contains('is-open');
    gnav.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });
  gnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  // スクロール連動(ヘッダー背景・PAGE TOP・SP固定予約バー)
  let reserveVisible = false;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    pagetop.classList.toggle('is-show', y > 600);
    fixedCta.classList.toggle('is-show', y > fv.offsetHeight * 0.6 && !reserveVisible);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // 予約セクション表示中は固定バーを隠す
  new IntersectionObserver(([entry]) => {
    reserveVisible = entry.isIntersecting;
    onScroll();
  }).observe(reserve);

  // フェードイン
  const fadeTargets = document.querySelectorAll(
    '.sec-head, .exp-card, .benefit-item, .cause-item, .point-item, .worry-list li, .flow-step, .campaign__box, .concept .container > *, .access__grid'
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeTargets.forEach((el) => {
    el.classList.add('js-fade');
    io.observe(el);
  });

  // 泡のアニメーション
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bubbleArea = document.querySelector('.fv__bubbles');
  if (!reduceMotion && bubbleArea) {
    for (let i = 0; i < 18; i++) {
      const b = document.createElement('span');
      const size = 6 + Math.random() * 26;
      b.className = 'bubble';
      b.style.width = b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.animationDuration = `${10 + Math.random() * 12}s`;
      b.style.animationDelay = `${-Math.random() * 20}s`;
      bubbleArea.appendChild(b);
    }
  }

  onScroll();
})();
