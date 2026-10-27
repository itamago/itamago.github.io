'use strict';
(() => {
  const {posts, resources, pages} = window.ITAMAGO_CONTENT;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const date = (value) => new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric'}).format(new Date(`${value}T12:00:00`));
  const shortDate = (value) => new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'short',year:'numeric'}).format(new Date(`${value}T12:00:00`));
  const featuredId = '2017-12-09-hexagonal-grids-resources';
  const initialIds = [featuredId,'2020-04-27-bodycombat-covid-2','2020-04-05-python3-pour-macos','2016-01-24-kim-jung-gi','2017-06-17-serre-permaculture'];
  const categories = ['Tous les articles', 'Informatique', 'Mathématiques', 'Sport', 'Culture', 'Jardinage', 'Divers'];
  let selectedCategory = categories[0];
  let showArchives = false;
  let returnFocus = null;
  let homeScroll = 0;
  let currentView = 'home';

  function hexArt() {
    let polygons = '';
    for(let row=-1;row<5;row++) for(let col=-1;col<6;col++) {
      const x = 30 + col * 61.5 + (row % 2 ? 30.75 : 0);
      const y = 18 + row * 53.3;
      const points = Array.from({length:6},(_,n)=>`${x + 35.5 * Math.cos((30+n*60)*Math.PI/180)},${y + 35.5 * Math.sin((30+n*60)*Math.PI/180)}`).join(' ');
      const highlighted = (row===1 && col===1) || (row===2 && col===2) || (row===2 && col===3);
      polygons += `<polygon class="${highlighted ? 'hex-light' : 'hex'}" points="${points}"/>`;
    }
    return `<div class="hex-art" aria-hidden="true"><svg viewBox="0 0 310 260" preserveAspectRatio="xMidYMid slice">${polygons}<path d="M91.5 71.3 183.75 124.6 245.25 124.6" stroke="#e1eac4" fill="none" stroke-width="2" stroke-dasharray="4 4"/><circle cx="91.5" cy="71.3" r="5" fill="#184c3d"/><circle cx="245.25" cy="124.6" r="5" fill="#184c3d"/><text x="21" y="206">q + r + s = 0</text><text x="212" y="38">(1, −1, 0)</text></svg><span class="hex-caption">GRILLES HEXAGONALES</span></div>`;
  }

  function card(post, featured=false) {
    return `<article class="article-card${featured ? ' featured-card' : ''}"><a class="card-image-link" href="#article/${encodeURIComponent(post.id)}" aria-label="Lire : ${escape(post.title)}">${featured ? `<span class="featured-label">SÉLECTION</span>${hexArt()}` : `<img class="card-image" src="${escape(post.image)}" alt="" loading="lazy" width="600" height="340">`}</a><div class="card-body"><div class="card-meta"><span class="category">${escape(post.category)}</span><span class="meta-dot">·</span><time datetime="${post.date}">${shortDate(post.date)}</time></div><h3 class="card-title"><a href="#article/${encodeURIComponent(post.id)}">${escape(post.title)}</a></h3><p class="card-excerpt">${escape(post.excerpt)}</p>${featured ? `<a class="read-link" href="#article/${encodeURIComponent(post.id)}">Lire l’article <span aria-hidden="true">↗</span></a>` : '<span class="card-arrow" aria-hidden="true">↗</span>'}</div></article>`;
  }

  function renderArticles() {
    $('#filters').innerHTML = categories.map(category=>`<button class="filter" aria-pressed="${category===selectedCategory}" data-category="${escape(category)}">${escape(category)}</button>`).join('');
    const filtered = selectedCategory===categories[0] ? posts : posts.filter(post=>post.category===selectedCategory || (selectedCategory==='Mathématiques' && post.tags.includes('maths')));
    const displayed = selectedCategory===categories[0] && !showArchives ? initialIds.map(id=>posts.find(post=>post.id===id)).filter(Boolean) : filtered;
    $('#article-grid').innerHTML = displayed.map((post,index)=>card(post,index===0 && post.id===featuredId && !showArchives && selectedCategory===categories[0])).join('') || '<p class="empty-state">Aucun article dans ce thème pour le moment.</p>';
    $('#article-count').textContent = `${filtered.length} article${filtered.length===1 ? '' : 's'}`;
    $('#load-more').hidden = showArchives || selectedCategory!==categories[0];
    $('.archive-note').textContent = showArchives ? 'Archives complètes · 2015–2020' : 'Archives · 2015–2020';
  }
  $('#filters').addEventListener('click', event=>{
    const button=event.target.closest('[data-category]');
    if(!button) return;
    selectedCategory = button.dataset.category;
    renderArticles();
    [...$('#filters').children].find(filter=>filter.dataset.category===selectedCategory)?.focus({preventScroll:true});
  });
  $('#load-more').addEventListener('click',()=>{
    showArchives=true;
    renderArticles();
    $('#journal-title').setAttribute('tabindex','-1');
    $('#journal-title').focus({preventScroll:true});
    $('#journal').scrollIntoView();
  });

  function prepareContent(container) {
    container.querySelectorAll('iframe').forEach((frame,index)=>{
      const source=frame.getAttribute('src');
      const videoId=source?.match(/(?:youtube(?:-nocookie)?\.com\/embed\/)([\w-]+)/)?.[1];
      // Load external videos only when the visitor chooses to play them.
      if(videoId) {
        const play = document.createElement('button');
        play.className = 'video-placeholder';
        play.type = 'button';
        play.innerHTML = '<span class="video-play" aria-hidden="true">▶</span><strong>Voir la vidéo</strong><span>Charger le lecteur YouTube</span>';
        play.addEventListener('click',()=>{
          frame.src=`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
          frame.title = `Vidéo de l’article (${index+1})`;
          frame.allow = 'autoplay; encrypted-media; picture-in-picture';
          frame.allowFullscreen = true;
          play.replaceWith(frame);
        });
        frame.replaceWith(play);
      } else {
        frame.title = `Média de l’article (${index+1})`;
        frame.loading = 'lazy';
      }
    });
    container.querySelectorAll('a[href]').forEach(link=>{
      const href=link.getAttribute('href');
      const article=href.match(/^\.\.\/post\/([^/]+)\/?$/);
      if(article) link.href=`#article/${article[1]}`;
      if(/^\.\.\/mathematiques\/?$/.test(href)) link.href='#ressources';
      if(/^\.\.\/(kung-fu|politique)\/?$/.test(href)) link.href=`#page/${href.split('/')[1]}`;
    });
  }

  function renderReader(post, page=false) {
    $('#reader-view').innerHTML = `<a class="back-link" href="#journal">← Retour aux articles</a><header class="reader-header">${page ? '<p class="eyebrow">INFORMATIONS</p>' : `<div class="card-meta"><span class="category">${escape(post.category)}</span><span>·</span><time datetime="${post.date}">${date(post.date)}</time><span>·</span><span>${post.minutes} min de lecture</span></div>`}<h1 tabindex="-1">${escape(post.title)}</h1><div class="reader-author"><img src="../images/pacome.jpg" alt="" width="32" height="32"><span>Par Pacôme Danhiez</span></div></header>${post.image ? `<img class="reader-cover" src="${escape(post.image)}" alt="">` : ''}<div class="reader-content">${post.content}</div><div class="reader-end"><span>Pacôme Danhiez</span><a class="text-link" href="#journal">Tous les articles ↗</a></div>`;
    if(post.id==='2017-03-06-maths-groupes') {
      const pdfNote=document.createElement('p');
      pdfNote.className='notice';
      pdfNote.innerHTML='Le cours sur les groupes est aussi disponible en PDF : <a href="../assets/cours_math/Groupes.pdf" target="_blank" rel="noopener">ouvrir le résumé de cours ↗</a>.';
      $('.reader-content').prepend(pdfNote);
    }
    prepareContent($('#reader-view'));
    document.title = `${post.title} — itamago`;
  }

  function route() {
    const hash=window.location.hash;
    const articleMatch=hash.match(/^#article\/(.+)$/);
    const pageMatch=hash.match(/^#page\/(.+)$/);
    const nextView=articleMatch||pageMatch ? 'reader' : hash==='#ressources' ? 'resources' : 'home';
    if(currentView==='home' && nextView!=='home') homeScroll=window.scrollY;
    const previousView=currentView;
    currentView=nextView;
    $('#home-view').hidden = nextView!=='home';
    $('#reader-view').hidden = nextView!=='reader';
    $('#resources-view').hidden = nextView!=='resources';
    $('#mobile-nav').hidden=true;
    $('.menu-toggle').setAttribute('aria-expanded','false');
    $('.menu-toggle').setAttribute('aria-label','Ouvrir le menu');
    document.title='itamago — Pacôme Danhiez';
    if(articleMatch) {
      let id='';
      try{id=decodeURIComponent(articleMatch[1]);}catch{}
      const post=posts.find(post=>post.id===id);
      if(post) renderReader(post);
      else $('#reader-view').innerHTML='<a class="back-link" href="#journal">← Retour aux articles</a><h1>Article introuvable.</h1><p>Consultez la liste des articles ou utilisez la recherche.</p>';
    } else if(pageMatch) {
      const page=pages[pageMatch[1]];
      if(page) renderReader(page,true);
      else $('#reader-view').innerHTML='<a class="back-link" href="#journal">← Retour aux articles</a><h1>Page introuvable.</h1>';
    }
    if(nextView!=='home') {
      window.scrollTo({top:0,behavior:'instant'});
      if(articleMatch||pageMatch) $('#reader-view h1')?.focus({preventScroll:true});
    } else if(hash==='#journal' && previousView!=='home') {
      requestAnimationFrame(()=>window.scrollTo({top:Math.max(homeScroll,$('#journal').offsetTop-28),behavior:'instant'}));
    } else if(hash==='#journal' || hash==='#a-propos') {
      requestAnimationFrame(()=>$(hash)?.scrollIntoView());
    } else if(!hash || hash==='#') window.scrollTo({top:0,behavior:'instant'});
  }
  window.addEventListener('hashchange',route);

  function renderResources() {
    const term=normalize($('#resource-search').value);
    const filtered=resources.filter(resource=>normalize(resource.title).includes(term));
    $('#resource-list').innerHTML=filtered.map(resource=>`<a class="resource-item" href="${escape(resource.url)}" target="_blank" rel="noopener"><span class="pdf-icon" aria-hidden="true">PDF</span><span>${escape(resource.title)}</span><span class="resource-arrow" aria-hidden="true">↗</span></a>`).join('') || '<p class="empty-state">Aucun cours trouvé. Essayez un autre mot.</p>';
    $('#resource-count').textContent=`${filtered.length} cours disponible${filtered.length===1 ? '' : 's'}`;
  }
  $('#resource-search').addEventListener('input',renderResources);

  const dialog=$('#search-dialog');
  function renderSearch() {
    const term=normalize($('#site-search').value.trim());
    const results=posts.filter(post=>normalize(`${post.title} ${post.category} ${post.tags.join(' ')} ${post.excerpt}`).includes(term));
    $('#search-count').textContent=term ? `${results.length} résultat${results.length===1 ? '' : 's'}` : 'Tous les articles';
    $('#search-results').innerHTML=results.map(post=>`<a class="search-result" href="#article/${encodeURIComponent(post.id)}"><small>${escape(post.category)} · ${shortDate(post.date)}</small>${escape(post.title)}</a>`).join('') || '<p class="empty-state">Aucun article ne correspond à votre recherche.</p>';
  }
  document.querySelectorAll('[data-open-search]').forEach(button=>button.addEventListener('click',()=>{
    returnFocus=document.activeElement;
    dialog.showModal();
    renderSearch();
    $('#site-search').focus();
  }));
  $('[data-close-search]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom) dialog.close();}});
  dialog.addEventListener('close',()=>returnFocus?.focus({preventScroll:true}));
  $('#site-search').addEventListener('input',renderSearch);
  $('#search-results').addEventListener('click',event=>{if(event.target.closest('a')) dialog.close();});
  $('.menu-toggle').addEventListener('click',()=>{
    const open=$('#mobile-nav').hidden;
    $('#mobile-nav').hidden=!open;
    $('.menu-toggle').setAttribute('aria-expanded',String(open));
    $('.menu-toggle').setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#mobile-nav').hidden){$('#mobile-nav').hidden=true;$('.menu-toggle').setAttribute('aria-expanded','false');$('.menu-toggle').setAttribute('aria-label','Ouvrir le menu');$('.menu-toggle').focus();}});
  $('#year').textContent=new Date().getFullYear();
  renderArticles();
  renderResources();
  route();
})();
