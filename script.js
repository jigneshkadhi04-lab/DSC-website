const propertyData = {
    'Skyline Heights': {
        desc: "Experience the next level of luxury living with world-class amenities, smart home features, and breathtaking views of Dholera's futuristic skyline.",
        images: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=150"
        ]
    },
    'Sunrise Residency': {
        desc: "A beautiful residential sanctuary designed around natural green spaces, modern solar grids, and seamless high-speed transport access paths.",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=150"
        ]
    },
    'Greenfield Enclave': {
        desc: "Smart ecosystems tailored perfectly for tech professionals, situated adjacent to the international business enterprise zones.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=150",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=150"
        ]
    }
};

// 1. PROPERTY INTERACTIVE SELECTOR WITH ANMATED POP-OUT
function selectProperty(element, title, location, price, bhk, imgUrl) {
    const allCards = document.querySelectorAll('.property-card');
    allCards.forEach(card => card.classList.remove('active'));

    element.classList.add('active');

    // Update Text Details
    document.getElementById('focus-title').innerText = title;
    document.getElementById('focus-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location}`;
    document.getElementById('focus-media-img').src = imgUrl;
    
    // Update Description dynamically based on selected card
    if(propertyData[title]) {
        document.querySelector('.property-desc').innerText = propertyData[title].desc;
        
        // Dynamically map thumb gallery image paths
        const thumbs = document.querySelectorAll('.gallery-thumbs img');
        propertyData[title].images.forEach((srcImg, idx) => {
            if(thumbs[idx]) thumbs[idx].src = srcImg;
        });
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// 2. MODAL OPERATIONS (BOOK A VISIT)
function toggleModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.toggle('active');
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert("🎉 Booking Request Registered Successfully! Our relationship manager will call you within 30 minutes.");
    toggleModal();
    document.getElementById('modal-form').reset();
}

// 3. AI CHAT INTEGRATION INTERFACE GENERATOR
function initializeAIChatWidget() {
    const chatWidget = document.querySelector('.ai-chat-widget');
    
    // Convert static markup structure into functional operational workspace
    chatWidget.innerHTML = `
        <div class="chat-main-row">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="AI Agent">
            <div class="chat-text">
                <strong>Dholera AI Assistant</strong>
                <p>Online & Ready to assist</p>
            </div>
            <span class="online-dot"></span>
        </div>
        <div class="chat-history" id="chat-history-box">
            <div class="msg-ai">🤖 Welcome! Ask me about current prices, amenities, or infrastructure timelines.</div>
        </div>
        <div class="chat-input-wrapper">
            <input type="text" id="chat-user-input" placeholder="Type a message...">
            <button class="chat-send-btn" onclick="sendChatMessage()">Send</button>
        </div>
    `;

    // Enable enter key targeting for chat input
    document.getElementById('chat-user-input').addEventListener('keypress', (e) => {
        if(e.key === 'Enter') sendChatMessage();
    });
}

function sendChatMessage() {
    const inputField = document.getElementById('chat-user-input');
    const message = inputField.value.trim();
    if(!message) return;

    const historyBox = document.getElementById('chat-history-box');

    // Append User text
    historyBox.innerHTML += `<div class="msg-user">🙋‍♂️ ${message}</div>`;
    inputField.value = "";
    historyBox.scrollTop = historyBox.scrollHeight;

    // Simulate AI system analysis thinking loop
    setTimeout(() => {
        let aiReply = "I can definitely help you with that! Let me connect you directly with our onsite expert via WhatsApp for pricing details.";
        const lowMsg = message.toLowerCase();

        if(lowMsg.includes('price') || lowMsg.includes('lac') || lowMsg.includes('cost')) {
            aiReply = "💰 Entry pricing starts at ₹45 Lacs for 2 BHKs up to ₹78 Lacs+ for premium 4 BHK Luxury layouts.";
        } else if(lowMsg.includes('airport') || lowMsg.includes('metro') || lowMsg.includes('location')) {
            aiReply = "✈️ Excellent choice! The ecosystem is located 10 mins from the upcoming International Airport and 5 mins from the Metro corridor link.";
        } else if(lowMsg.includes('amenit') || lowMsg.includes('pool') || lowMsg.includes('gym')) {
            aiReply = "🏋️ We feature over 50+ world class amenities, including automation hubs, premium clubhouses, and 24/7 security networks.";
        }

        historyBox.innerHTML += `<div class="msg-ai">🤖 ${aiReply}</div>`;
        historyBox.scrollTop = historyBox.scrollHeight;
    }, 750);
}

// 4. BIND WORKFLOW EVENTS TO DOM TREE TARGETS
document.addEventListener("DOMContentLoaded", () => {
    initializeAIChatWidget();

    // Map all button instances configured for structural booking triggers
    const bookingButtons = [
        ...document.querySelectorAll('.btn-action'),
        ...document.querySelectorAll('.btn-primary')
    ];
    
    bookingButtons.forEach(btn => {
        // Exclude the 'Explore Projects' link button redirection to prevent modal loops
        if(!btn.innerText.includes('Explore Projects')) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleModal();
            });
        } else {
            btn.addEventListener('click', () => {
                alert("Navigating to comprehensive structural map indexes...");
            });
        }
    });

    // Brochure Downloader Action Link
    const brochureBtn = document.querySelector('.btn-secondary');
    if(brochureBtn) {
        brochureBtn.addEventListener('click', () => {
            alert("📥 Downloading Project E-Brochure & Architectural Specification sheets...");
        });
    }

    // Navigation Menu Item Active Class State Switching
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Wishlist Toggle Operation
    const heartBtn = document.querySelector('.panel-icon-btn i.fa-heart').parentElement;
    heartBtn.addEventListener('click', () => {
        heartBtn.classList.toggle('favorited');
        if(heartBtn.classList.contains('favorited')) {
            alert("❤️ Property added to your Saved Favorites list.");
        }
    });

    // Share Clipboard Link Generation Operation
    const shareBtn = document.querySelector('.panel-icon-btn i.fa-share-nodes').parentElement;
    shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        alert("🔗 Link copied to clipboard! Share it with your friends or family.");
    });

    // Video Play Stream Simulation Trigger
    const playBtn = document.querySelector('.video-play-btn');
    if(playBtn) {
        playBtn.addEventListener('click', () => {
            alert("🎬 Opening 4K Virtual Walkthrough Cinematic Streaming Feed...");
        });
    }

    // Media Thumbnail Interactivity Mapping Link
    const thumbnails = document.querySelectorAll('.gallery-thumbs img');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.getElementById('focus-media-img').src = thumb.src;
        });
    });

    // Side Actions Menu Button Alert Hook 
    const elipsisBtn = document.querySelector('.btn-icon-nav');
    if(elipsisBtn) {
        elipsisBtn.addEventListener('click', () => {
            alert("Displaying settings configuration profile indexes...");
        });
    }

    // Left Panel Floating Audio Assistant Trigger Toggle
    const audioBtn = document.querySelector('.floating-audio-btn');
    if(audioBtn) {
        audioBtn.addEventListener('click', () => {
            alert("🎙️ Starting Spatial Interactive Audio Guide tour for Dholera Smart City...");
        });
    }
});

// 1. Function to open/close the Contact Modal window
function toggleContactModal() {
    const contactModal = document.getElementById('contact-modal');
    contactModal.classList.toggle('active');
}

// 2. Event Binding logic (Run this inside your DOMContentLoaded block or at the root file level)
document.addEventListener("DOMContentLoaded", () => {
    // Find the 'Contact' text element link in your main navigation bar
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if(link.textContent.trim() === 'Contact') {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Stop default anchor jumping behavior
                e.stopPropagation();
                toggleContactModal(); // Pop open our custom box!
            });
        }
    });
});

// Data dictionary storing structural content assets for each navigation choice
const navTabsData = {
    'Home': {
        icon: 'fa-house-chimney',
        title: 'Welcome Dashboard',
        subtitle: 'System Control Center',
        body: `
            <div class="modal-list-item">
                <i class="fa-solid fa-circle-check"></i>
                <div><strong>Real-Time Updates Connected</strong><p>Streaming direct investment data streams from phase 1 blocks.</p></div>
            </div>
            <div class="modal-list-item">
                <i class="fa-solid fa-user-shield"></i>
                <div><strong>Secure Session Profile</strong><p>Logged in as authenticated ecosystem guest investigator.</p></div>
            </div>
        `
    },
    'Projects': {
        icon: 'fa-city',
        title: 'Development Pipelines',
        subtitle: 'Residential & Commercial Matrix',
        body: `
            <div class="modal-grid-layout">
                <div class="grid-box-item"><i class="fa-solid fa-tree-city"></i><strong>Eco Towers</strong><p>Phase 1 Complete</p></div>
                <div class="grid-box-item"><i class="fa-solid fa-industry"></i><strong>Logistics Hub</strong><p>Infrastructure Built</p></div>
                <div class="grid-box-item"><i class="fa-solid fa-hotel"></i><strong>Plaza Retail</strong><p>Booking Open</p></div>
                <div class="grid-box-item"><i class="fa-solid fa-wheat-awn"></i><strong>Smart Farms</strong><p>Planning Stage</p></div>
            </div>
        `
    },
    'Smart City': {
        icon: 'fa-microchip',
        title: 'Futuristic Infrastructure',
        subtitle: 'Technological Integrations',
        body: `
            <div class="modal-list-item">
                <i class="fa-solid fa-bolt-lightning"></i>
                <div><strong>Centralized Solar Power Grid</strong><p>100% sustainable renewable power grid arrays.</p></div>
            </div>
            <div class="modal-list-item">
                <i class="fa-solid fa-droplet"></i>
                <div><strong>Smart Waste Management</strong><p>Automated underground pneumatic recycling infrastructure lines.</p></div>
            </div>
        `
    },
    'Amenities': {
        icon: 'fa-wand-magic-sparkles',
        title: 'Premium Facilities',
        subtitle: 'World-Class Lifestyle Perks',
        body: `
            <div class="modal-list-item">
                <i class="fa-solid fa-dumbbell"></i>
                <div><strong>Ecosystem Wellness Hubs</strong><p>Modern sky gyms, swimming complexes and treatment clinics.</p></div>
            </div>
            <div class="modal-list-item">
                <i class="fa-solid fa-cloud-moon"></i>
                <div><strong>IoT Home Integration</strong><p>Full voice-controlled lighting, shading and automated air-conditioning.</p></div>
            </div>
        `
    },
    'About': {
        icon: 'fa-circle-info',
        title: 'Dholera Vision 2026',
        subtitle: 'The Blueprint of Tomorrow',
        body: `
            <p style="font-size: 12px; color: var(--text-muted); line-height: 1.6; text-align: center; padding: 10px;">
                Dholera Special Investment Region (DSIR) is India's premier greenfield smart city project. Designed to outpace global financial hubs, it combines master-planned industrial zones with luxurious automated eco-living communities.
            </p>
        `
    },
    /* 🟢 ADD THE CONTACT TAB DIRECTLY HERE BELOW ABOUT 🟢 */
    'Contact': {
        icon: 'fa-address-card',
        title: 'Property Consultant Team',
        subtitle: 'Direct Communication Channels',
        body: `
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg" style="width: 75px; height: 75px; border-radius: 50%; border: 2px solid var(--accent-blue); object-fit: cover; margin-bottom: 8px;">
                <strong style="display: block; font-size: 15px;">Sarah Jenkins</strong>
                <span style="font-size: 10px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">Senior Portfolio Manager</span>
            </div>
            <div class="modal-list-item">
                <i class="fa-solid fa-phone"></i>
                <div><strong>Mobile Hotline</strong><p><a href="tel:+919876543210" style="color: var(--accent-blue); text-decoration: none;">+91 98765 43210</a></p></div>
            </div>
            <div class="modal-list-item">
                <i class="fa-solid fa-envelope"></i>
                <div><strong>Email Support</strong><p><a href="mailto:sarah.j@dholerasmartcity.com" style="color: #fff; text-decoration: none;">sarah.j@dholerasmartcity.com</a></p></div>
            </div>
            <a href="https://wa.me/919876543210" target="_blank" style="background: #25d366; color: #000; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; border-radius: 12px; font-weight: 700; font-size: 13px; margin-top: 15px; box-shadow: 0 4px 15px rgba(37,211,102,0.2);">
                <i class="fa-brands fa-whatsapp"></i> Instant WhatsApp Chat
            </a>
        `
    }
};

// Global toggle handling system execution path
function toggleNavModal() {
    const modal = document.getElementById('dynamic-nav-modal');
    modal.classList.toggle('active');
}

// Intercept clicks across all navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const tabName = link.textContent.trim();
            
            // Check if the clicked tab exists in our custom data registry
            if (navTabsData[tabName]) {
                e.preventDefault();
                e.stopPropagation();
                
                // Inject the structured variables into the modal frame
                document.getElementById('modal-badge-icon').innerHTML = `<i class="fa-solid ${navTabsData[tabName].icon}"></i>`;
                document.getElementById('modal-tab-title').innerText = navTabsData[tabName].title;
                document.getElementById('modal-tab-subtitle').innerText = navTabsData[tabName].subtitle;
                document.getElementById('modal-dynamic-body').innerHTML = navTabsData[tabName].body;
                
                // Fire the presentation layout state toggle
                toggleNavModal();
            }
        });
    });
});

// 1. Open/Close the immersive Project Showcase window
function toggleProjectsOverlay() {
    const overlay = document.getElementById('projects-overlay');
    overlay.classList.toggle('active');
}

// 2. Client Side Dynamic Matrix Filtering engine
function filterProjects(category) {
    // Manage active visual state on filter buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Filter project rows
    const cards = document.querySelectorAll('.matrix-item-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 3. Selection mapping interface links back to active home dashboard rows 
function loadProjectDirectly(title, location, price, bhk, imgUrl) {
    // Close the grid showcase overlay
    toggleProjectsOverlay();
    
    // Find the corresponding slider element row matching target card label title
    const cards = document.querySelectorAll('.property-card');
    let targetedElement = null;
    
    cards.forEach(card => {
        if(card.querySelector('h3').innerText.includes(title)) {
            targetedElement = card;
        }
    });

    // Fire the default select trigger pipeline seamlessly on target card or update side values directly
    if(targetedElement) {
        selectProperty(targetedElement, title, location, price, bhk, imgUrl);
    }
}

// 4. Hook Event Handler to the visual "Explore Projects" button instance inside page launch cycle
document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.querySelector('.hero-text-group .btn-primary');
    if(exploreBtn) {
        // Overwrite standard alert hooks safely
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleProjectsOverlay(); // Open matrix view dashboard
        });
    }
});

// Extended deep specification registry data dictionary
const deepProjectSpecs = {
    'Skyline Heights': {
        tag: 'PREMIUM LUXURY HIGH-RISE',
        narrative: 'Skyline Heights represents architectural brilliance in the heart of Dholera. Engineered with a futuristic aerodynamic profile, this structure features full panoramic floor-to-ceiling glass facades offering stunning sunset views over the Global Gate development zone. Equipped with fully integrated IoT building automation protocols.',
        orientation: 'Vastu / North-East Facing',
        area: '2,200 - 4,100 Sq.Ft.',
        furnishing: 'Ultra-Luxury Custom Fitout',
        green: 'IGBC Platinum Five-Star Grade',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'
        ]
    },
    'Sunrise Residency': {
        tag: 'ECO-FRIENDLY MULTI-FAMILY SMART RESIDENCE',
        narrative: 'Designed for families focused on balanced wellness and eco-friendly utility frameworks. Sunrise Residency integrates high-efficiency radiant floor temperature controls, localized water reclamation processors, and dedicated solar collection micro-grids directly into every single flat structural layout unit.',
        orientation: 'Vastu Compliant / Pure East',
        area: '1,450 - 2,100 Sq.Ft.',
        furnishing: 'Semi-Automated Modern Fitout',
        green: 'IGBC Gold Rated Eco Grid',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=600'
        ]
    },
    'Greenfield Enclave': {
        tag: 'INTELLIGENT TECH-PROFESSIONAL SUITES',
        narrative: 'An advanced, high-performance executive development situated directly adjacent to the Knowledge & IT Zone. These dynamic living spaces feature dual acoustic-barrier insulation walls, integrated tech workspaces, automated smart lighting systems, and biometric lock security arrays.',
        orientation: 'North / West Multi-Facing',
        area: '1,100 - 1,850 Sq.Ft.',
        furnishing: 'Full Smart Modular Furnished',
        green: 'BREEAM Certified Premium Asset',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600'
        ]
    }
};

// Toggle Function to flip the visibility state of the Gallery Popup
function toggleGalleryHub() {
    const hub = document.getElementById('gallery-hub-overlay');
    hub.classList.toggle('active');
}

// Function to pull structural values from current active card context
function launchGalleryHub(title, location) {
    const data = deepProjectSpecs[title];
    if (!data) return;

    // Load textual strings into destination layout nodes
    document.getElementById('hub-mini-tag').innerText = data.tag;
    document.getElementById('hub-project-title').innerText = title;
    document.getElementById('hub-project-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${location}`;
    document.getElementById('hub-deep-description').innerText = data.narrative;
    
    document.getElementById('spec-orient').innerText = data.orientation;
    document.getElementById('spec-area').innerText = data.area;
    document.getElementById('spec-furnish').innerText = data.furnishing;
    document.getElementById('spec-green').innerText = data.green;

    // Initialize Image Slider Stage elements
    const mainStageImg = document.getElementById('hub-main-view');
    const counterText = document.getElementById('hub-img-counter');
    const thumbStrip = document.getElementById('hub-thumb-strip');

    mainStageImg.src = data.images[0];
    counterText.innerText = `Image 1 of ${data.images.length}`;

    // Render operational interactive thumbnails
    thumbStrip.innerHTML = '';
    data.images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        if(index === 0) thumb.className = 'active-thumb';
        
        thumb.addEventListener('click', () => {
            // Apply a subtle fading effect during image switches
            mainStageImg.style.opacity = '0.4';
            setTimeout(() => {
                mainStageImg.src = imgSrc;
                mainStageImg.style.opacity = '1';
            }, 150);

            document.querySelectorAll('.hub-thumbnails-strip img').forEach(t => t.classList.remove('active-thumb'));
            thumb.classList.add('active-thumb');
            counterText.innerText = `Image ${index + 1} of ${data.images.length}`;
        });
        
        thumbStrip.appendChild(thumb);
    });

    // Display the newly initialized gallery modal overlay
    toggleGalleryHub();
}

// Intercept events when clicking the blue circle arrow buttons on cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.property-card');
    
    cards.forEach(card => {
        const blueArrowBtn = card.querySelector('.arrow-btn');
        if(blueArrowBtn) {
            blueArrowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Stop the event from bubbling up to parent element hooks
                
                const title = card.querySelector('h3').innerText.trim();
                const location = card.querySelector('.location').innerText.trim();
                
                // Fire the custom cinematic display logic block
                launchGalleryHub(title, location);
            });
        }
    });
});

// --- Spatial Audio Ecosystem Tour Controller Engine ---

function toggleSpatialAudioTour() {
    const audioModule = document.getElementById('audio-tour-control');
    const audioStream = document.getElementById('spatial-audio-element');
    const statusLabel = document.getElementById('audio-track-status');

    if (audioStream.paused) {
        // Run native HTML5 media pipeline trigger
        audioStream.play().then(() => {
            audioModule.classList.add('playing');
            statusLabel.innerText = "Status: Streaming Tour...";
            initiateAudioProgressTracker();
        }).catch(err => {
            console.warn("User gesture security blocking verified: ", err);
            alert("🔊 Click once more anywhere on the screen first to grant audio playback clearance.");
        });
    } else {
        audioStream.pause();
        audioModule.classList.remove('playing');
        statusLabel.innerText = "Status: Paused / Stopped";
    }
}

function initiateAudioProgressTracker() {
    const audioStream = document.getElementById('spatial-audio-element');
    const fillBar = document.getElementById('audio-fill-bar');
    const timerLabel = document.getElementById('audio-time-label');

    // Remove old tracking cycles to avoid memory leak overlays
    audioStream.removeEventListener('timeupdate', updateProgressUI);
    
    function updateProgressUI() {
        if (audioStream.duration) {
            const currentPercentage = (audioStream.currentTime / audioStream.duration) * 100;
            fillBar.style.width = `${currentPercentage}%`;

            // Compute standard timing signatures
            const minutes = Math.floor(audioStream.currentTime / 60);
            const seconds = Math.floor(audioStream.currentTime % 60);
            timerLabel.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }

    audioStream.addEventListener('timeupdate', updateProgressUI);
}

function toggleAudioMute(event) {
    event.stopPropagation(); // Stop parent execution elements from running pause commands
    const audioStream = document.getElementById('spatial-audio-element');
    const volumeIcon = document.getElementById('audio-volume-icon');

    audioStream.muted = !audioStream.muted;

    if (audioStream.muted) {
        volumeIcon.className = "fa-solid fa-volume-xmark";
        volumeIcon.style.color = "var(--accent-pink)";
    } else {
        volumeIcon.className = "fa-solid fa-volume-high";
        volumeIcon.style.color = "var(--text-muted)";
    }
}

// --- Slide-Out Settings Configuration Engine ---

function toggleSettingsDrawer() {
    const drawer = document.getElementById('settings-menu-panel');
    drawer.classList.toggle('active');
}

// 1. Live Color Matrix Theme Switching Handler
function toggleDashboardTheme() {
    const body = document.body;
    const checkbox = document.getElementById('theme-toggle-checkbox');
    
    if (checkbox.checked) {
        body.classList.add('light-theme-active');
    } else {
        body.classList.remove('light-theme-active');
    }
}

// 2. Dashboard Scale Custom Modifiers
function changeDashboardScale(scaleSize) {
    const body = document.body;
    const btnNormal = document.getElementById('scale-btn-normal');
    const btnLarge = document.getElementById('scale-btn-large');

    btnNormal.classList.remove('active');
    btnLarge.classList.remove('active');

    if (scaleSize === 'large') {
        body.classList.add('scale-large-active');
        btnLarge.classList.add('active');
    } else {
        body.classList.remove('scale-large-active');
        btnNormal.classList.add('active');
    }
}

// 3. Reset Variables Handler
function resetDashboardDefaults() {
    document.body.className = ''; // Wipe runtime helper style arrays
    document.getElementById('theme-toggle-checkbox').checked = false;
    changeDashboardScale('normal');
    toggleSettingsDrawer();
}

// 4. Hook functional execution commands directly over the navbar kebab button click event 
document.addEventListener("DOMContentLoaded", () => {
    // Find the circular three-dot option navigation link
    const kebabBtn = document.querySelector('.btn-icon-nav');
    
    if (kebabBtn) {
        // Clear previous generic alert hooks and wire direct operational flow
        kebabBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSettingsDrawer(); // Toggle the drawer display frame
        });
    }
});

// Map Layer Toggle UI Visual State Handler
function handleLayerSwitch(buttonElement, layerName) {
    // 1. Remove active outline tag from neighboring sibling elements
    const container = buttonElement.parentElement;
    container.querySelectorAll('.layer-pill').forEach(btn => btn.classList.remove('active'));
    
    // 2. Grant active status highlight to clicked button
    buttonElement.classList.add('active');
    
    // 3. Confirm target execution map feed update
    console.log(`Active infrastructure viewpoint mapped to: ${layerName}`);
}

// --- Interactive Blueprint Layout Management Core ---

// Registry tracking structural asset paths across unit types
const blueprintAssetMap = {
    '2bhk': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=600',
    '3bhk': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
    '4bhk': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600'
};

function switchBlueprintSuite(suiteType, pillElement) {
    // 1. Swap active classification states on layout controller pills
    const container = pillElement.parentElement;
    container.querySelectorAll('.layout-pill').forEach(pill => pill.classList.remove('active'));
    pillElement.classList.add('active');

    // 2. Cross fade graphic blueprints inside stage viewport smoothly
    const graphicElement = document.getElementById('blueprint-main-graphic');
    graphicElement.style.opacity = '0.2';
    
    setTimeout(() => {
        if(blueprintAssetMap[suiteType]) {
            graphicElement.src = blueprintAssetMap[suiteType];
        }
        graphicElement.style.opacity = '0.85';
    }, 200);
}

// Attach cross-hover triggers connecting Blueprint pointers directly with right info boxes
document.addEventListener("DOMContentLoaded", () => {
    const pointers = document.querySelectorAll('.blueprint-pointer');
    const infoBoxes = document.querySelectorAll('.layout-detail-box');

    pointers.forEach(pointer => {
        pointer.addEventListener('mouseenter', () => {
            const targetZone = pointer.getAttribute('data-target');
            
            // Remove previous focus tags from all cards
            infoBoxes.forEach(box => box.classList.remove('active'));
            pointers.forEach(p => p.classList.remove('highlighted'));

            // Focus matched element path targets
            pointer.classList.add('highlighted');
            const targetBox = document.getElementById(`layout-zone-${targetZone}`);
            if(targetBox) targetBox.classList.add('active');
        });
    });
});

// --- Map Popup Layer Management Controller ---

function toggleMapPopup() {
    const mapModal = document.getElementById('map-popup-overlay');
    mapModal.classList.toggle('active');
}

function handleLayerSwitch(buttonElement, layerName) {
    // 1. Swap active visual glow borders on the bottom bar buttons
    const container = buttonElement.parentElement;
    container.querySelectorAll('.layer-pill').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    // 2. Locate the popup map structural frames
    const mapStage = document.querySelector('.map-popup-body-frame');
    const modalTitle = document.getElementById('map-popup-title');
    const modalSubtitle = document.getElementById('map-popup-subtitle');

    // 3. Configure the correct image and labels dynamically
    if (layerName === 'Zoning View') {
        modalTitle.innerText = "Master Land Use Zoning Plan";
        modalSubtitle.innerText = "Authorized Investment Sectors Map";
        mapStage.style.backgroundImage = "radial-gradient(circle, transparent 20%, #04060f 95%), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200')";
        
    } else if (layerName === 'Transit Overlay') {
        modalTitle.innerText = "High-Speed Transit Network";
        modalSubtitle.innerText = "Corridors & Logistics Connectivity Mesh";
        mapStage.style.backgroundImage = "radial-gradient(circle, transparent 20%, #04060f 95%), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200')";
    }

    // 4. Pop the modal window right onto the center screen
    toggleMapPopup();
}