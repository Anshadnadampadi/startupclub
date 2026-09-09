/**
 * Startup Club Calicut (SCC) - Neo-Minimalist Application Logic
 * Interactive handlers for 3x3 action dock, trending list, filters, modals & pass generator
 */

// Global filter & search state
let activeAnnouncementCategory = 'all';
let activeResourceCategory = 'all';
let resourceSearchQuery = '';
let activeTeamCategory = 'all';

function startApp() {

  initActionDock();
  initTrendingList();
  initAnnouncements();
  initRoadmap();
  initResources();
  initTeam();
  initGallery();
  initPortalForms();
  initFloatingDock();
  initSmoothNavScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

/* ==========================================================================
   1. 3×3 Action Dock Quick Navigation
   ========================================================================== */
function initActionDock() {
  const actionItems = document.querySelectorAll('.action-item');
  actionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetId = item.getAttribute('data-target');
      if (targetId === 'pitch-modal') {
        openPitchModal();
      } else if (targetId === 'join-modal') {
        openJoinModal();
      } else if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ==========================================================================
   2. Trending Initiatives & Events List (Tesla/Amazon Pattern)
   ========================================================================== */
function initTrendingList() {
  const container = document.getElementById('trendingListContainer');
  if (!container || !SCC_DATA.events) return;

  const glyphs = ['bi-rocket-takeoff-fill', 'bi-code-slash', 'bi-cpu-fill', 'bi-award-fill', 'bi-cup-hot-fill', 'bi-shield-check'];

  container.innerHTML = SCC_DATA.events.slice(0, 5).map((event, idx) => `
    <div class="trending-list-item" onclick="openEventRSVP('${event.id}')">
      <div class="item-left-col">
        <div class="squircle-brand-badge">
          <i class="bi ${glyphs[idx % glyphs.length]}"></i>
        </div>
        <div>
          <div class="item-title">${event.title}</div>
          <div class="item-meta">${event.date} • ${event.location.split('&')[0]}</div>
        </div>
      </div>
      <div class="item-right-col">
        <div class="item-value">${event.capacity} Seats</div>
        <div class="item-status-pill">+ ${event.status}</div>
      </div>
    </div>
  `).join('');
}

// RSVP Modal & Instant Digital Pass Generator
window.openEventRSVP = function(eventId) {
  const event = SCC_DATA.events.find(e => e.id === eventId);
  if (!event) return;

  const modalEl = document.getElementById('rsvpModal');
  const modalTitle = document.getElementById('rsvpModalEventTitle');
  const eventMeta = document.getElementById('rsvpModalMeta');
  const eventIdInput = document.getElementById('rsvpEventId');

  modalTitle.textContent = event.title;
  eventMeta.innerHTML = `
    <div class="d-flex flex-wrap gap-3 text-secondary small">
      <span><i class="bi bi-calendar-event text-dark me-1"></i> ${event.date}</span>
      <span><i class="bi bi-clock text-dark me-1"></i> ${event.time}</span>
      <span><i class="bi bi-geo-alt text-dark me-1"></i> ${event.location}</span>
    </div>
  `;
  eventIdInput.value = event.id;

  // Reset form & views
  document.getElementById('rsvpForm').reset();
  document.getElementById('rsvpFormContainer').classList.remove('d-none');
  document.getElementById('rsvpTicketContainer').classList.add('d-none');

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

// Handle RSVP Submission
document.addEventListener('DOMContentLoaded', () => {
  const rsvpForm = document.getElementById('rsvpForm');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const eventId = document.getElementById('rsvpEventId').value;
      const event = SCC_DATA.events.find(e => e.id === eventId);
      const name = document.getElementById('rsvpName').value.trim();
      const email = document.getElementById('rsvpEmail').value.trim();
      const college = document.getElementById('rsvpCollege').value.trim();
      const ticketId = `SCC-${Math.floor(100000 + Math.random() * 900000)}`;

      // Generate Ticket View
      const ticketEl = document.getElementById('generatedTicketContent');
      ticketEl.innerHTML = `
        <div class="ceramic-ticket">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="card-neon-label mb-0"><i class="bi bi-patch-check-fill me-1"></i> Verified Entry Pass</span>
            <span class="badge bg-dark border border-secondary font-monospace">${ticketId}</span>
          </div>
          <h4 class="fw-bold mb-1 text-white">${event ? event.title : 'SCC Special Event'}</h4>
          <p class="text-muted-on-dark small mb-3"><i class="bi bi-calendar3 me-1"></i> ${event ? event.date : 'Upcoming'} | ${event ? event.time : ''}</p>
          <div class="p-3 rounded-4 bg-black border border-dark mb-3">
            <div class="row">
              <div class="col-6">
                <small class="text-muted-on-dark d-block">Attendee</small>
                <strong class="text-white">${name}</strong>
              </div>
              <div class="col-6">
                <small class="text-muted-on-dark d-block">Institution</small>
                <strong class="text-white">${college || 'Calicut Tech Hub'}</strong>
              </div>
            </div>
          </div>
          <div class="barcode-strip-clean">
            ${Array.from({ length: 36 }).map((_, i) => `<div class="barcode-bar ${i % 3 === 0 ? 'thick' : (i % 2 === 0 ? 'thin' : '')}"></div>`).join('')}
          </div>
          <div class="text-center mt-2">
            <small class="text-muted-on-dark font-monospace">${email} • DIGITAL PASS</small>
          </div>
        </div>
      `;

      // Switch to Ticket view
      document.getElementById('rsvpFormContainer').classList.add('d-none');
      document.getElementById('rsvpTicketContainer').classList.remove('d-none');

      // Update registered counter in data
      if (event) {
        event.registered = Math.min(event.capacity, event.registered + 1);
        initTrendingList();
      }

      showToast(`Pass Generated for ${name}!`);
    });
  }
});

/* ==========================================================================
   2.1. Live Announcements & Event Broadcaster System
   ========================================================================== */
function initAnnouncements() {
  const filterContainer = document.getElementById('announcementFilters');
  if (filterContainer) {
    const filterBtns = filterContainer.querySelectorAll('.filter-pill-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeAnnouncementCategory = btn.getAttribute('data-category');
        renderAnnouncements();
      });
    });
  }

  // Handle post announcement form submit
  const postForm = document.getElementById('postAnnouncementForm');
  if (postForm) {
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('newAnnTitle').value.trim();
      const category = document.getElementById('newAnnCategory').value;
      const badge = document.getElementById('newAnnBadge') ? document.getElementById('newAnnBadge').value : 'New Event';
      const date = document.getElementById('newAnnDate').value.trim();
      const link = document.getElementById('newAnnLink').value.trim() || '#events-section';
      const summary = document.getElementById('newAnnSummary').value.trim();
      const fullContent = document.getElementById('newAnnContent').value.trim() || summary;

      if (!title || !summary) return;

      const newId = `ann-${Date.now()}`;
      const newAnn = {
        id: newId,
        title,
        date,
        category,
        badge,
        summary,
        fullContent,
        actionText: 'Explore Event',
        link
      };

      // Prepend to announcements array
      if (!SCC_DATA.announcements) {
        SCC_DATA.announcements = [];
      }
      SCC_DATA.announcements.unshift(newAnn);

      // Re-render announcements list
      renderAnnouncements();

      // Update top ticker text
      const topTicker = document.getElementById('topAnnouncementText');
      if (topTicker) {
        topTicker.innerHTML = `📢 <strong>${title}</strong>: ${summary}`;
      }

      // Hide modal
      const modalEl = document.getElementById('postAnnouncementModal');
      if (modalEl) {
        const modalInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modalInstance.hide();
      }

      postForm.reset();
      showToast(`🎉 Event "${title}" announced and broadcasted!`);
    });
  }

  renderAnnouncements();
}

function getBadgeClass(badge) {
  const b = (badge || '').toLowerCase();
  if (b.includes('urgent') || b.includes('deadline')) return 'badge-neon-rose';
  if (b.includes('update') || b.includes('new') || b.includes('launch')) return 'badge-neon-lime';
  if (b.includes('grant')) return 'badge-neon-amber';
  return 'badge-neon-cyan';
}

function renderAnnouncements() {
  const container = document.getElementById('announcementsList');
  if (!container || !SCC_DATA.announcements) return;

  const filtered = activeAnnouncementCategory === 'all'
    ? SCC_DATA.announcements
    : SCC_DATA.announcements.filter(a => a.category === activeAnnouncementCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 bg-white rounded-4 border">
        <div class="action-circle-btn mx-auto mb-3" style="width: 52px; height: 52px;"><i class="bi bi-inbox fs-4"></i></div>
        <h4 class="h6 fw-bold">No announcements in this category yet</h4>
        <p class="text-secondary small mb-3">Be the first to broadcast an event or milestone.</p>
        <button type="button" class="btn-black-pill small px-4 py-2" onclick="openPostAnnouncementModal()">
          <i class="bi bi-megaphone-fill me-1"></i> Announce an Event
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ann => `
    <div class="announcement-ceramic-card">
      <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 w-100">
        <div class="flex-grow-1">
          <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
            <span class="${getBadgeClass(ann.badge)}">${ann.badge || 'Notice'}</span>
            <span class="badge bg-light text-dark border small fw-semibold">${ann.category}</span>
            <span class="text-secondary small"><i class="bi bi-calendar3 me-1"></i> ${ann.date}</span>
          </div>
          <h3 class="h5 fw-bold mb-2 text-dark">${ann.title}</h3>
          <p class="text-secondary small mb-0">${ann.summary}</p>
        </div>
        <div class="d-flex align-items-center gap-2 flex-shrink-0">
          <button type="button" class="btn-outline-pill px-3 py-2 small" onclick="openAnnouncementModal('${ann.id}')">
            <i class="bi bi-info-circle me-1"></i> View Notice
          </button>
          <a href="${ann.link || '#events-section'}" class="btn-black-pill px-3 py-2 small text-decoration-none">
            ${ann.actionText || 'Explore'} <i class="bi bi-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

window.openAnnouncementModal = function(annId) {
  const ann = SCC_DATA.announcements.find(a => a.id === annId);
  if (!ann) return;

  const modalEl = document.getElementById('announcementModal');
  const titleEl = document.getElementById('annModalTitle');
  const metaEl = document.getElementById('annModalMeta');
  const bodyEl = document.getElementById('annModalBody');
  const actionBtn = document.getElementById('annModalActionBtn');

  if (titleEl) titleEl.textContent = ann.title;
  if (metaEl) {
    metaEl.innerHTML = `
      <div class="d-flex flex-wrap align-items-center gap-2">
        <span class="${getBadgeClass(ann.badge)}">${ann.badge || 'Notice'}</span>
        <span class="badge bg-light text-dark border small">${ann.category}</span>
        <span class="text-secondary small"><i class="bi bi-calendar3 me-1"></i> ${ann.date}</span>
      </div>
    `;
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="mb-4">
        <h6 class="text-dark fw-bold mb-2">Notice Overview</h6>
        <p class="text-secondary leading-relaxed">${ann.summary}</p>
      </div>
      <div class="p-3 bg-light rounded-4 border mb-3">
        <h6 class="text-dark fw-bold mb-2">Detailed Information & Instructions</h6>
        <p class="text-secondary small mb-0">${ann.fullContent || ann.summary}</p>
      </div>
      <div class="d-flex align-items-center gap-2 text-muted small">
        <i class="bi bi-shield-check text-dark"></i> Official broadcast from Startup Club Calicut
      </div>
    `;
  }

  if (actionBtn) {
    actionBtn.textContent = ann.actionText || 'Explore Event';
    actionBtn.onclick = () => {
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
      if (ann.link) {
        if (ann.link.startsWith('#')) {
          const el = document.querySelector(ann.link);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.open(ann.link, '_blank');
        }
      }
    };
  }

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

window.openPostAnnouncementModal = function() {
  const modalEl = document.getElementById('postAnnouncementModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
};

/* ==========================================================================
   3. The 4-Stage Founder Pipeline
   ========================================================================== */
function initRoadmap() {
  const container = document.getElementById('roadmapGrid');
  if (!container || !SCC_DATA.roadmapSteps) return;

  container.innerHTML = SCC_DATA.roadmapSteps.map(step => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="pipeline-card">
        <div class="pipeline-header">
          <span class="pipeline-step-badge">Phase ${step.step}</span>
          <div class="pipeline-icon-circle">
            <i class="bi ${step.icon}"></i>
          </div>
        </div>
        <h4 class="h5 fw-bold mb-2">${step.title}</h4>
        <p class="text-secondary small mb-3">${step.desc}</p>
        <div>
          ${step.skills.map(s => `<span class="pipeline-skill-pill">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Startup Resources Hub & Search
   ========================================================================== */
function initResources() {
  renderResources();

  const filterBtns = document.querySelectorAll('#resourceFilters .filter-pill-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeResourceCategory = btn.getAttribute('data-category');
      renderResources();
    });
  });

  const searchInput = document.getElementById('resourceSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      resourceSearchQuery = e.target.value.toLowerCase().trim();
      renderResources();
    });
  }
}

function renderResources() {
  const container = document.getElementById('resourcesGrid');
  if (!container || !SCC_DATA.resources) return;

  const filtered = SCC_DATA.resources.filter(res => {
    const matchesCategory = activeResourceCategory === 'all' || res.category === activeResourceCategory;
    const matchesQuery = !resourceSearchQuery || 
      res.title.toLowerCase().includes(resourceSearchQuery) || 
      res.desc.toLowerCase().includes(resourceSearchQuery);
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-4">
        <p class="text-muted">No resources matching "${resourceSearchQuery}". Try another keyword.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(res => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="ceramic-card">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <div class="pipeline-icon-circle">
            <i class="bi ${res.icon}"></i>
          </div>
          <span class="badge bg-light text-dark border font-monospace small">${res.badge}</span>
        </div>
        <h4 class="h5 fw-bold mb-2">${res.title}</h4>
        <p class="text-secondary small mb-3 flex-grow-1">${res.desc}</p>
        
        <div class="d-flex justify-content-between align-items-center text-muted small mb-3 pt-2 border-top">
          <span><i class="bi bi-file-earmark-text me-1"></i> ${res.pages}</span>
          <span><i class="bi bi-download me-1"></i> ${res.downloads}</span>
        </div>

        <button class="btn btn-outline-pill w-100 justify-content-center" onclick="openResourceModal('${res.id}')">
          Preview & Download <i class="bi bi-arrow-up-right ms-1"></i>
        </button>
      </div>
    </div>
  `).join('');
}

window.openResourceModal = function(resId) {
  const res = SCC_DATA.resources.find(r => r.id === resId);
  if (!res) return;

  const modalEl = document.getElementById('resourceModal');
  document.getElementById('resModalTitle').textContent = res.title;
  document.getElementById('resModalMeta').innerHTML = `
    <span class="badge bg-dark text-white me-2">${res.type}</span>
    <span class="text-muted small me-3"><i class="bi bi-file-earmark me-1"></i> ${res.pages}</span>
    <span class="text-muted small"><i class="bi bi-hdd me-1"></i> ${res.fileSize}</span>
  `;
  document.getElementById('resModalDesc').textContent = res.desc;
  document.getElementById('resModalPreview').innerHTML = `
    <h6 class="fw-bold mb-2 text-dark"><i class="bi bi-check2-circle text-success me-1"></i> Toolkit Highlights:</h6>
    <div class="p-3 rounded-3 bg-light border text-secondary small">
      ${res.preview}
    </div>
  `;

  document.getElementById('resModalDownloadBtn').onclick = () => {
    showToast(`Downloading: ${res.title}`);
  };

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

/* ==========================================================================
   5. Team & Mentors Directory
   ========================================================================== */
function initTeam() {
  renderTeam();

  const filterBtns = document.querySelectorAll('#teamFilters .filter-pill-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTeamCategory = btn.getAttribute('data-category');
      renderTeam();
    });
  });
}

function renderTeam() {
  const container = document.getElementById('teamGrid');
  if (!container || !SCC_DATA.team) return;

  const filtered = activeTeamCategory === 'all'
    ? SCC_DATA.team
    : SCC_DATA.team.filter(m => m.category === activeTeamCategory || (m.categories && m.categories.includes(activeTeamCategory)));

  container.innerHTML = filtered.map(member => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="team-ceramic-card">
        <img src="${member.image}" alt="${member.name}" class="team-ceramic-img" loading="lazy">
        <div class="team-ceramic-body">
          <span class="badge bg-light text-dark border small mb-2">${member.badge}</span>
          <h4 class="h5 fw-bold mb-1">${member.name}</h4>
          <div class="text-secondary small fw-semibold mb-2">${member.role}</div>
          <p class="text-muted small mb-3">${member.tagline}</p>
          <div class="d-flex gap-2">
            <a href="${member.socials.linkedin}" target="_blank" rel="noreferrer" class="team-social-circle"><i class="bi bi-linkedin"></i></a>
            <a href="${member.socials.github}" target="_blank" rel="noreferrer" class="team-social-circle"><i class="bi bi-github"></i></a>
            <a href="${member.socials.twitter}" target="_blank" rel="noreferrer" class="team-social-circle"><i class="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Gallery & Lightbox
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container || !SCC_DATA.gallery) return;

  container.innerHTML = SCC_DATA.gallery.map(item => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="gallery-squircle-item" onclick="openGalleryLightbox('${item.id}')">
        <img src="${item.image}" alt="${item.title}" class="gallery-squircle-img" loading="lazy">
        <div class="gallery-squircle-overlay">
          <span class="badge bg-black text-white small mb-1">${item.categoryLabel}</span>
          <h5 class="fw-bold mb-0 text-white">${item.title}</h5>
        </div>
      </div>
    </div>
  `).join('');
}

window.openGalleryLightbox = function(itemId) {
  const item = SCC_DATA.gallery.find(g => g.id === itemId);
  if (!item) return;

  const modalEl = document.getElementById('lightboxModal');
  document.getElementById('lightboxImg').src = item.image;
  document.getElementById('lightboxTitle').textContent = item.title;
  document.getElementById('lightboxCaption').textContent = `${item.description} (${item.date})`;

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
};

/* ==========================================================================
   7. Onboarding Portal & Forms
   ========================================================================== */
function initPortalForms() {
  const formJoin = document.getElementById('joinClubForm');
  const formPitch = document.getElementById('pitchIdeaForm');
  const tabJoin = document.getElementById('tabJoinBtn');
  const tabPitch = document.getElementById('tabPitchBtn');

  if (tabJoin && tabPitch && formJoin && formPitch) {
    tabJoin.addEventListener('click', () => {
      tabJoin.className = 'btn-black-pill';
      tabPitch.className = 'btn-outline-pill';
      formJoin.classList.remove('d-none');
      formPitch.classList.add('d-none');
    });

    tabPitch.addEventListener('click', () => {
      tabPitch.className = 'btn-black-pill';
      tabJoin.className = 'btn-outline-pill';
      formPitch.classList.remove('d-none');
      formJoin.classList.add('d-none');
    });
  }

  if (formJoin) {
    formJoin.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('memberFullName').value;
      formJoin.reset();
      showToast(`Welcome ${name}! Application received.`);
    });
  }

  if (formPitch) {
    formPitch.addEventListener('submit', (e) => {
      e.preventDefault();
      const startupName = document.getElementById('pitchStartupName').value;
      formPitch.reset();
      showToast(`Idea "${startupName}" logged for review.`);
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      showToast('Message sent to SCC desk!');
    });
  }
}

window.openPitchModal = function() {
  const el = document.getElementById('join');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    const tabPitch = document.getElementById('tabPitchBtn');
    if (tabPitch) tabPitch.click();
  }
};

window.openJoinModal = function() {
  const el = document.getElementById('join');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    const tabJoin = document.getElementById('tabJoinBtn');
    if (tabJoin) tabJoin.click();
  }
};

/* ==========================================================================
   8. Floating Bottom Action Dock (Reference UI)
   ========================================================================== */
function initFloatingDock() {
  const dock = document.querySelector('.floating-bottom-dock');
  const dockBack = document.getElementById('dockBackBtn');
  const dockCreate = document.getElementById('dockCreateBtn');
  const dockClose = document.getElementById('dockCloseBtn');

  // Toggle dock visibility on scroll so it never obstructs the hero founder image
  window.addEventListener('scroll', () => {
    if (dock) {
      if (window.scrollY > 300) {
        dock.classList.add('visible');
      } else {
        dock.classList.remove('visible');
      }
    }
  });

  if (dockBack) {
    dockBack.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (dockCreate) {
    dockCreate.addEventListener('click', () => {
      openPitchModal();
    });
  }

  if (dockClose) {
    dockClose.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   9. Accurate Smooth Nav Scrolling with Sticky Navbar Offset
   ========================================================================== */
function initSmoothNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navOffset = 70; // Height of sticky navbar + breathing room
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = target.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = Math.max(0, elementPosition - navOffset);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      }
    });
  });

  // Handle direct hash navigation on initial page load
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const navOffset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = Math.max(0, elementPosition - navOffset);
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 120);
  }
}

/* ==========================================================================
   9. Clean Toast Helper
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container-clean');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-clean';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-clean animate__animated animate__fadeIn';
  toast.innerHTML = `
    <i class="bi bi-check-circle-fill icon-check"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 300);
    }
  }, 3800);
}
