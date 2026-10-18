/* =========================================
   SAMPLE DATA
   ========================================= */
const songs = [
    { id: 1, title: "Sarkodie - Happy Day", artist: "Sarkodie ft. Kuami Eugene", cover: "https://picsum.photos/id/10/400/400", genre: "afrobeats", date: "2024-01-10", duration: "3:45", views: "1.2M", lyrics: "Lyrics for Happy Day..." },
    { id: 2, title: "Stonebwoy - Into The Future", artist: "Stonebwoy", cover: "https://picsum.photos/id/11/400/400", genre: "dancehall", date: "2024-02-15", duration: "3:20", views: "850K", lyrics: "Lyrics for Into The Future..." },
    { id: 3, title: "Black Sherif - Kwaku the Traveller", artist: "Black Sherif", cover: "https://picsum.photos/id/12/400/400", genre: "hiphop", date: "2024-03-05", duration: "3:05", views: "2.5M", lyrics: "Lyrics for Kwaku the Traveller..." },
    { id: 4, title: "Burna Boy - City Boys", artist: "Burna Boy", cover: "https://picsum.photos/id/13/400/400", genre: "afrobeats", date: "2024-04-12", duration: "2:50", views: "3.1M", lyrics: "Lyrics for City Boys..." },
    { id: 5, title: "Davido - Unavailable", artist: "Davido", cover: "https://picsum.photos/id/14/400/400", genre: "afrobeats", date: "2024-05-20", duration: "3:15", views: "4.2M", lyrics: "Lyrics for Unavailable..." }
];

const artists = [
    { id: 1, name: "Sarkodie", photo: "https://picsum.photos/id/1011/400/400", genre: "Hip-Hop", country: "Ghana", bio: "Sarkodie is a Ghanaian rapper and entrepreneur from Tema.", albums: ["Black Love", "Highest"], singles: ["Adonai", "Lucky"], awards: ["BET Best International Flow 2019"] },
    { id: 2, name: "Stonebwoy", photo: "https://picsum.photos/id/1012/400/400", genre: "Dancehall", country: "Ghana", bio: "Stonebwoy is a Ghanaian Afropop, dancehall and reggae singer.", albums: ["5th Dimension", "Anloga Junction"], singles: ["Nominate", "Therapy"], awards: ["BET Best International Act 2015"] }
];

const news = [
    { id: 1, title: "Ghanaian Music Industry Reaches New Heights", category: "Ghana Music", date: "July 18, 2026", author: "King Fresh", views: "15K", likes: 450, image: "https://picsum.photos/id/20/800/500", content: "The Ghanaian music industry has seen a significant boost in streaming numbers..." },
    { id: 2, title: "Top 10 Afrobeats Artists to Watch in 2026", category: "African Music", date: "July 17, 2026", author: "Admin", views: "12K", likes: 320, image: "https://picsum.photos/id/21/800/500", content: "As Afrobeats continues to conquer the global charts, here are the top artists..." }
];

const albums = [
    { id: 1, title: "5th Dimension", artist: "Stonebwoy", cover: "https://picsum.photos/id/30/400/400", tracks: 17, date: "2024", rating: 4.8 },
    { id: 2, title: "Love, Damini", artist: "Burna Boy", cover: "https://picsum.photos/id/31/400/400", tracks: 19, date: "2023", rating: 4.9 }
];

/* =========================================
   CORE INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1500);

    // Init Particles
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: "#d4af37" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: { enable: true, distance: 150, color: "#d4af37", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2 }
            }
        });
    }

    initNavigation();
    initHeroSlider();
    initDataPopulation();
    initAudioPlayer();
    initSearch();
    initTheme();
    initScrollAnimations();
});

/* =========================================
   NAVIGATION & THEME
   ========================================= */
function initNavigation() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('sticky');
        else header.classList.remove('sticky');

        if (window.scrollY > 500) backToTop.style.display = 'flex';
        else backToTop.style.display = 'none';

        // Scroll Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        document.getElementById('scroll-progress').style.width = (winScroll / height) * 100 + "%";
    });

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.querySelector('i').classList.toggle('fa-bars');
        mobileToggle.querySelector('i').classList.toggle('fa-times');
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('king-theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('king-theme', 'dark');
        }
    });

    if (localStorage.getItem('king-theme') === 'light') {
        body.classList.add('light-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

/* =========================================
   HERO SLIDER
   ========================================= */
function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    const slides = [
        { img: "https://picsum.photos/id/158/1920/1080", title: "Welcome to <span class='gold'>KING FRESH MUSIC</span>", p: "The home of premium music and entertainment news." },
        { img: "https://picsum.photos/id/325/1920/1080", title: "Discover <span class='gold'>Latest Hits</span>", p: "Stream and download the hottest tracks from Africa and beyond." }
    ];

    slides.forEach((slide, i) => {
        const slideEl = document.createElement('div');
        slideEl.className = `hero-slide ${i === 0 ? 'active' : ''}`;
        slideEl.style.backgroundImage = `url(${slide.img})`;
        slideEl.innerHTML = `
            <div class="container">
                <div class="hero-content">
                    <h1>${slide.title}</h1>
                    <p>${slide.p}</p>
                    <div class="hero-btns">
                        <a href="#songs" class="btn btn-primary ripple">Latest Music</a>
                        <a href="#about" class="btn btn-outline ripple">Read More</a>
                    </div>
                </div>
            </div>
        `;
        slider.appendChild(slideEl);
    });

    let current = 0;
    setInterval(() => {
        const slideEls = document.querySelectorAll('.hero-slide');
        slideEls[current].classList.remove('active');
        current = (current + 1) % slideEls.length;
        slideEls[current].classList.add('active');
    }, 6000);
}

/* =========================================
   DATA POPULATION
   ========================================= */
function initDataPopulation() {
    // Songs
    const songsGrid = document.getElementById('songs-grid');
    songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card glass';
        card.innerHTML = `
            <div class="card-img">
                <img src="${song.cover}" alt="${song.title}">
                <div class="card-overlay">
                    <button class="play-btn ripple" onclick="playSong(${song.id})"><i class="fas fa-play"></i></button>
                </div>
            </div>
            <div class="card-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
                <div class="song-meta">
                    <span><i class="fas fa-eye"></i> ${song.views}</span>
                    <div class="song-actions">
                        <i class="far fa-heart" onclick="toggleLike(${song.id}, this)"></i>
                        <i class="fas fa-download" onclick="downloadSong(${song.id})"></i>
                        <i class="fas fa-share-alt" onclick="shareContent('${song.title}', '${song.artist}')"></i>
                    </div>
                </div>
            </div>
        `;
        songsGrid.appendChild(card);
    });

    // Top Charts
    const topCharts = document.getElementById('top-charts');
    songs.slice(0, 5).forEach((song, i) => {
        const item = document.createElement('div');
        item.className = 'chart-item glass';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.padding = '15px';
        item.style.marginBottom = '10px';
        item.innerHTML = `
            <span class="rank" style="font-size: 1.5rem; font-weight: 800; width: 40px; color: var(--primary)">0${i+1}</span>
            <img src="${song.cover}" style="width: 50px; height: 50px; border-radius: 5px; margin: 0 15px;">
            <div style="flex: 1">
                <h5 style="margin: 0">${song.title}</h5>
                <p style="margin: 0; font-size: 0.8rem; color: var(--text-muted)">${song.artist}</p>
            </div>
            <button class="play-btn ripple" onclick="playSong(${song.id})" style="width: 35px; height: 35px; font-size: 0.8rem"><i class="fas fa-play"></i></button>
        `;
        topCharts.appendChild(item);
    });

    // Albums
    const albumsGrid = document.getElementById('albums-grid');
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'album-card glass';
        card.innerHTML = `
            <div class="card-img">
                <img src="${album.cover}" alt="${album.title}">
            </div>
            <div class="card-info">
                <h4>${album.title}</h4>
                <p>${album.artist}</p>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--primary); margin-top: 5px;">
                    <span>${album.tracks} Tracks</span>
                    <span>${album.rating} <i class="fas fa-star"></i></span>
                </div>
            </div>
        `;
        albumsGrid.appendChild(card);
    });

    // News
    const newsGrid = document.getElementById('news-grid');
    news.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card glass';
        card.innerHTML = `
            <div class="card-img" style="aspect-ratio: 16/9">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="card-info">
                <span class="category-badge" style="background: var(--primary); color: #000; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700;">${item.category}</span>
                <h4 style="margin-top: 10px">${item.title}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted)">${item.date} | By ${item.author}</p>
                <button class="btn-text" onclick="showNews(${item.id})" style="color: var(--primary); border: none; background: none; cursor: pointer; font-weight: 700; margin-top: 10px;">Read More <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        newsGrid.appendChild(card);
    });

    // Artists
    const artistsGrid = document.getElementById('artists-grid');
    artists.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card text-center';
        card.innerHTML = `
            <div class="card-img" style="border-radius: 50%; width: 180px; height: 180px; margin: 0 auto;">
                <img src="${artist.photo}" alt="${artist.name}">
            </div>
            <div class="card-info">
                <h4>${artist.name}</h4>
                <p>${artist.genre} | ${artist.country}</p>
                <button class="btn btn-outline ripple" onclick="showArtist(${artist.id})" style="margin-top: 10px; padding: 5px 15px; font-size: 0.8rem;">View Profile</button>
            </div>
        `;
        artistsGrid.appendChild(card);
    });
}

/* =========================================
   AUDIO PLAYER
   ========================================= */
let currentSongIndex = 0;
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');

function initAudioPlayer() {
    playPauseBtn.addEventListener('click', togglePlay);
    audio.addEventListener('timeupdate', updateProgress);
    progressBar.addEventListener('input', setProgress);
    
    document.getElementById('next-btn').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(songs[currentSongIndex].id);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(songs[currentSongIndex].id);
    });

    document.getElementById('volume-slider').addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
}

window.playSong = function(id) {
    const song = songs.find(s => s.id === id);
    if (!song) return;

    currentSongIndex = songs.indexOf(song);
    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder
    
    document.getElementById('player-title').innerText = song.title;
    document.getElementById('player-artist').innerText = song.artist;
    document.getElementById('player-art').src = song.cover;
    
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    showToast(`Playing: ${song.title}`);
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent || 0;
    currentTimeEl.innerText = formatTime(currentTime);
    totalDurationEl.innerText = formatTime(duration);
}

function setProgress() {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function formatTime(time) {
    if (isNaN(time)) return '0:00';
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

/* =========================================
   SEARCH & MODALS
   ========================================= */
function initSearch() {
    const trigger = document.getElementById('search-trigger');
    const overlay = document.getElementById('search-overlay');
    const close = document.getElementById('close-search');
    const input = document.getElementById('live-search');

    trigger.onclick = () => overlay.classList.add('active');
    close.onclick = () => overlay.classList.remove('active');

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const results = document.getElementById('search-results');
        results.innerHTML = '';
        
        if (term.length < 2) return;

        const filtered = songs.filter(s => s.title.toLowerCase().includes(term) || s.artist.toLowerCase().includes(term));
        filtered.forEach(s => {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.style.padding = '10px';
            div.style.borderBottom = '1px solid var(--glass-border)';
            div.style.cursor = 'pointer';
            div.innerHTML = `<strong>${s.title}</strong> - ${s.artist}`;
            div.onclick = () => {
                playSong(s.id);
                overlay.classList.remove('active');
            };
            results.appendChild(div);
        });
    });
}

window.showArtist = function(id) {
    const artist = artists.find(a => a.id === id);
    const body = document.getElementById('artist-modal-body');
    body.innerHTML = `
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
            <img src="${artist.photo}" style="width: 300px; border-radius: 15px;">
            <div style="flex: 1; min-width: 300px;">
                <h2>${artist.name}</h2>
                <p class="gold">${artist.genre} | ${artist.country}</p>
                <p style="margin: 20px 0;">${artist.bio}</p>
                <h4>Top Albums</h4>
                <ul style="margin-bottom: 20px;">${artist.albums.map(al => `<li><i class="fas fa-compact-disc gold"></i> ${al}</li>`).join('')}</ul>
                <button class="btn btn-primary ripple">Follow Artist</button>
            </div>
        </div>
    `;
    openModal('artist-modal');
}

window.showNews = function(id) {
    const item = news.find(n => n.id === id);
    const body = document.getElementById('news-modal-body');
    body.innerHTML = `
        <img src="${item.image}" style="width: 100%; border-radius: 15px; margin-bottom: 20px;">
        <span class="category-badge">${item.category}</span>
        <h2 style="margin: 15px 0;">${item.title}</h2>
        <p style="color: var(--text-muted); margin-bottom: 20px;">By ${item.author} | ${item.date}</p>
        <div style="font-size: 1.1rem; line-height: 1.8;">${item.content}</div>
    `;
    openModal('news-modal');
}

window.openModal = function(id) {
    document.getElementById(id).style.display = 'flex';
}

window.closeModal = function(id) {
    document.getElementById(id).style.display = 'none';
}

/* =========================================
   UTILITIES
   ========================================= */
function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast glass';
    toast.style.padding = '12px 25px';
    toast.style.marginBottom = '10px';
    toast.style.borderLeft = '4px solid var(--primary)';
    toast.innerHTML = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

window.toggleLike = function(id, el) {
    el.classList.toggle('far');
    el.classList.toggle('fas');
    el.style.color = el.classList.contains('fas') ? 'var(--primary)' : '';
    showToast(el.classList.contains('fas') ? "Added to Favorites" : "Removed from Favorites");
}

window.downloadSong = function(id) {
    const song = songs.find(s => s.id === id);
    if (!song) return;
    
    showToast(`Downloading: ${song.title}...`);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    // Using a placeholder mp3 link for demonstration
    link.href = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    link.download = `${song.title} - King Fresh Music.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.shareContent = function(title, artist) {
    if (navigator.share) {
        navigator.share({ title, text: `Check out ${title} by ${artist} on King Fresh Music!`, url: window.location.href });
    } else {
        showToast("Sharing not supported on this browser");
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .stat-card, .counter').forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = +el.getAttribute('data-target');
    const count = +el.innerText;
    const inc = target / 100;
    if (count < target) {
        el.innerText = Math.ceil(count + inc);
        setTimeout(() => animateCounter(el), 20);
    } else {
        el.innerText = target.toLocaleString();
    }
}

/* =========================================
   FAQ & TESTIMONIALS
   ========================================= */
const faqs = [
    { q: "How do I download songs?", a: "Click the download icon on any song card to start the download immediately." },
    { q: "Is the music free to use?", a: "Most songs are free for personal listening. For commercial use, please contact the artist." },
    { q: "How can I submit my music?", a: "Send your press kit and tracks to submit@kingfreshmusic.com." }
];

const testimonials = [
    { name: "John Mensah", text: "The best place to find new Ghanaian hits! Love the interface.", role: "Music Fan" },
    { name: "Ama Serwaa", text: "Fast loading and great news updates. My daily music source.", role: "Listener" }
];

function initFaqAndTestimonials() {
    const faqContainer = document.getElementById('faq-container');
    faqs.forEach((faq, i) => {
        const item = document.createElement('div');
        item.className = 'faq-item glass';
        item.style.marginBottom = '15px';
        item.style.padding = '20px';
        item.style.cursor = 'pointer';
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h4 style="margin: 0;">${faq.q}</h4>
                <i class="fas fa-plus"></i>
            </div>
            <p style="display: none; margin-top: 15px; color: var(--text-muted);">${faq.a}</p>
        `;
        item.onclick = () => {
            const p = item.querySelector('p');
            const icon = item.querySelector('i');
            const isOpen = p.style.display === 'block';
            p.style.display = isOpen ? 'none' : 'block';
            icon.className = isOpen ? 'fas fa-plus' : 'fas fa-minus';
        };
        faqContainer.appendChild(item);
    });

    const testimonialSlider = document.getElementById('testimonials-slider');
    testimonials.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial-card glass';
        div.style.padding = '30px';
        div.style.textAlign = 'center';
        div.style.maxWidth = '600px';
        div.style.margin = '0 auto';
        div.innerHTML = `
            <i class="fas fa-quote-left gold" style="font-size: 2rem; margin-bottom: 20px;"></i>
            <p style="font-style: italic; font-size: 1.1rem; margin-bottom: 20px;">"${t.text}"</p>
            <h4 style="margin: 0;">${t.name}</h4>
            <span style="color: var(--primary); font-size: 0.8rem;">${t.role}</span>
        `;
        testimonialSlider.appendChild(div);
    });
}

// Update DOMContentLoaded to include the new init
document.addEventListener('DOMContentLoaded', () => {
    initFaqAndTestimonials();
});

/* =========================================
   VIDEOS, EVENTS, GALLERY
   ========================================= */
const videosData = [
    { title: "Official Music Video 1", artist: "Artist A", thumb: "https://picsum.photos/id/101/400/225" },
    { title: "Live Performance", artist: "Artist B", thumb: "https://picsum.photos/id/102/400/225" }
];

const eventsData = [
    { name: "Accra Music Fest", date: "2026-12-25", venue: "Independence Square", poster: "https://picsum.photos/id/201/400/600" },
    { name: "Afrobeat Night", date: "2026-11-15", venue: "National Theatre", poster: "https://picsum.photos/id/202/400/600" }
];

function initExtraSections() {
    const videoGrid = document.getElementById('videos-grid');
    videosData.forEach(v => {
        const div = document.createElement('div');
        div.className = 'video-card glass';
        div.innerHTML = `
            <div class="card-img" style="aspect-ratio: 16/9">
                <img src="${v.thumb}" alt="${v.title}">
                <div class="card-overlay"><i class="fas fa-play-circle" style="font-size: 3rem; color: #fff;"></i></div>
            </div>
            <div class="card-info">
                <h4>${v.title}</h4>
                <p>${v.artist}</p>
            </div>
        `;
        videoGrid.appendChild(div);
    });

    const eventGrid = document.getElementById('events-grid');
    eventsData.forEach(e => {
        const div = document.createElement('div');
        div.className = 'event-card glass';
        div.innerHTML = `
            <div class="card-img" style="aspect-ratio: 2/3">
                <img src="${e.poster}" alt="${e.name}">
            </div>
            <div class="card-info">
                <h4>${e.name}</h4>
                <p><i class="fas fa-map-marker-alt gold"></i> ${e.venue}</p>
                <p><i class="fas fa-calendar-alt gold"></i> ${e.date}</p>
                <div id="countdown-${e.name.replace(/\s/g, '')}" class="gold" style="font-weight: 700; margin-top: 10px;"></div>
                <button class="btn btn-primary ripple" style="width: 100%; margin-top: 15px;">Get Tickets</button>
            </div>
        `;
        eventGrid.appendChild(div);
        startCountdown(e.date, `countdown-${e.name.replace(/\s/g, '')}`);
    });

    const galleryGrid = document.getElementById('gallery-grid');
    for(let i=0; i<8; i++) {
        const div = document.createElement('div');
        div.className = 'gallery-item ripple';
        div.innerHTML = `<img src="https://picsum.photos/id/${300+i}/400/400" alt="Gallery" onclick="openLightbox(this.src)" style="border-radius: 10px; cursor: pointer;">`;
        galleryGrid.appendChild(div);
    }
}

function startCountdown(dateStr, elementId) {
    const target = new Date(dateStr).getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const el = document.getElementById(elementId);
        if(el) el.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.style.display = 'flex';
}

window.closeLightbox = function() {
    document.getElementById('lightbox').style.display = 'none';
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initExtraSections();
});
