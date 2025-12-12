
import { GoogleGenAI } from "@google/genai";

// --- API KEY HANDLING ---
const API_KEY = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
const ai = new GoogleGenAI({ apiKey: API_KEY });

// --- ICONS ---
const Icons = {
  Palette: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  ShoppingBag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  User: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  Upload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  Wallet: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
  TrendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  Search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  Heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  HeartFilled: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  X: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  Loader: `<svg class="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`,
  ArrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  Check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  Message: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  Settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  Send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  Image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  Star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

// --- DATA PERSISTENCE & MOCK DATA ---
const MOCK_USERS = [
  { id: 'u1', name: 'Alice Artist', email: 'alice@art.com', role: 'artist', avatarUrl: 'https://picsum.photos/100/100?random=1', bio: 'Passionate digital artist. Creating worlds from pixels.', phone: '09123456789', paymentMethod: 'GCash 0917...' },
  { id: 'u2', name: 'Bob Buyer', email: 'bob@buy.com', role: 'buyer', avatarUrl: 'https://picsum.photos/100/100?random=2', phone: '09987654321', address: '123 Main St, Manila', favorites: [] },
  { id: 'u3', name: 'Charlie Creator', email: 'charlie@art.com', role: 'artist', avatarUrl: 'https://picsum.photos/100/100?random=3', bio: 'Watercolors expert. Nature is my inspiration.', phone: '09123456780', paymentMethod: 'BDO ...' }
];

const MOCK_ARTWORKS = [
  { id: 'a1', artistId: 'u1', artistName: 'Alice Artist', title: 'Neon Sunset', description: 'A vibrant cyberpunk inspired cityscape at dusk.', price: 150, imageUrl: 'https://picsum.photos/400/300?random=10', category: 'Digital', status: 'available', likes: 24, views: 105 },
  { id: 'a2', artistId: 'u1', artistName: 'Alice Artist', title: 'Abstract Thoughts', description: 'Oil on canvas exploring the depths of the human mind.', price: 300, imageUrl: 'https://picsum.photos/400/300?random=11', category: 'Oil', status: 'available', likes: 12, views: 45 },
  { id: 'a3', artistId: 'u3', artistName: 'Charlie Creator', title: 'Forest Whisper', description: 'A serene watercolor painting of a misty forest.', price: 85, imageUrl: 'https://picsum.photos/400/300?random=12', category: 'Watercolor', status: 'sold', likes: 56, views: 200 }
];

const MOCK_ORDERS = [
  { id: 'o1', artworkId: 'a3', buyerId: 'u2', artistId: 'u3', status: 'completed', date: '2023-10-15', amount: 85, artworkTitle: 'Forest Whisper', artworkImage: 'https://picsum.photos/400/300?random=12' },
  { id: 'o2', artworkId: 'a2', buyerId: 'u2', artistId: 'u1', status: 'pending', date: '2023-10-25', amount: 300, artworkTitle: 'Abstract Thoughts', artworkImage: 'https://picsum.photos/400/300?random=11' }
];

const MOCK_CONVERSATIONS = [
  {
    id: 'c1',
    participants: ['u1', 'u2'],
    messages: [
      { senderId: 'u2', text: 'Hi, is the Neon Sunset still available?', timestamp: '2023-10-26T10:00:00', type: 'text' },
      { senderId: 'u1', text: 'Yes, it is!', timestamp: '2023-10-26T10:05:00', type: 'text' }
    ]
  }
];

function loadState() {
  try {
    const saved = localStorage.getItem('artify_db');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load state", e);
  }
  return { users: MOCK_USERS, artworks: MOCK_ARTWORKS, orders: MOCK_ORDERS, conversations: MOCK_CONVERSATIONS };
}

function saveState() {
  const db = {
    users: window.state.users,
    artworks: window.state.artworks,
    orders: window.state.orders,
    conversations: window.state.conversations
  };
  localStorage.setItem('artify_db', JSON.stringify(db));
  
  if (window.state.user) {
    localStorage.setItem('artify_session_user', window.state.user.id);
  } else {
    localStorage.removeItem('artify_session_user');
  }
}

// --- INITIALIZE STATE ---
const dbData = loadState();
const sessionUserId = localStorage.getItem('artify_session_user');
const currentUser = sessionUserId ? dbData.users.find(u => u.id === sessionUserId) : null;

window.state = {
  user: currentUser, 
  users: dbData.users,
  artworks: dbData.artworks,
  orders: dbData.orders,
  conversations: dbData.conversations,
  
  auth: { 
    step: 'login', 
    email: '', password: '', confirmPassword: '',
    name: '', phone: '', bio: '', address: '', socialLink: '', paymentMethod: '',
    profilePic: null, govId: null, sampleArts: []
  },
  
  artist: { tab: 'overview', newArt: { title: '', category: 'Digital', price: '', desc: '' }, isGenerating: false },
  buyer: { tab: 'market', searchTerm: '', categoryFilter: 'All', selectedArt: null, viewingArtistId: null, menuOpen: false },
  activeChatId: null
};

// --- HELPER FUNCTIONS ---
window.getUser = (id) => window.state.users.find(u => u.id === id) || { name: 'Unknown User', avatarUrl: '' };
window.getConversation = (u1, u2) => window.state.conversations.find(c => c.participants.includes(u1) && c.participants.includes(u2));
window.createConversation = (u1, u2) => {
  let conv = window.getConversation(u1, u2);
  if (!conv) {
    conv = { id: `c${Date.now()}`, participants: [u1, u2], messages: [] };
    window.state.conversations.push(conv);
    saveState();
  }
  return conv;
};
window.isFavorite = (artId) => {
  if (!window.state.user || !window.state.user.favorites) return false;
  return window.state.user.favorites.includes(artId);
};
window.toggleFavorite = (artId) => {
  if (!window.state.user) return;
  if (!window.state.user.favorites) window.state.user.favorites = [];
  
  const idx = window.state.user.favorites.indexOf(artId);
  if (idx === -1) {
    window.state.user.favorites.push(artId);
    // Increment local likes count for visual feedback
    const art = window.state.artworks.find(a => a.id === artId);
    if(art) art.likes = (art.likes || 0) + 1;
  } else {
    window.state.user.favorites.splice(idx, 1);
    const art = window.state.artworks.find(a => a.id === artId);
    if(art && art.likes > 0) art.likes--;
  }
  saveState();
  render();
};
window.toggleBuyerMenu = (e) => {
  if (e) e.stopPropagation();
  window.state.buyer.menuOpen = !window.state.buyer.menuOpen;
  render();
};
// Global listener to close menu on outside click
window.addEventListener('click', () => {
  if (window.state.user && window.state.user.role === 'buyer' && window.state.buyer.menuOpen) {
    window.state.buyer.menuOpen = false;
    render();
  }
});


// --- GEMINI SERVICE ---
async function generateArtworkDescription(title, category) {
  if (!API_KEY) return "Description generation failed. (No API Key detected)";
  try {
    const prompt = `Write a captivating and professional sales description (max 80 words) for an artwork titled "${title}" in the category "${category}". Highlight its potential aesthetic value.`;
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    return response.text?.trim() || "Description generation failed.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A beautiful piece of art crafted with passion.";
  }
}

// --- RENDER MAIN ---
window.render = function() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = '';
  
  if (!window.state.user) {
    renderAuth();
  } else if (window.state.user.role === 'artist') {
    renderArtistDashboard();
  } else {
    renderBuyerDashboard();
  }
}

// --- AUTHENTICATION ---
function renderAuth() {
  const { step } = window.state.auth;
  if (step === 'login') renderLogin();
  else if (step === 'role_selection') renderRoleSelection();
  else if (step === 'register_artist') renderRegisterArtist();
  else if (step === 'register_buyer') renderRegisterBuyer();
}

function renderLogin() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4 animate-fade-in">
      <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <div style="width:32px;height:32px">${Icons.Palette}</div>
          </div>
          <h1 class="text-3xl font-bold text-gray-900">Artify</h1>
          <p class="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        <form id="loginForm" class="space-y-4">
          <input id="login-email" type="email" value="${window.state.auth.email}" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required placeholder="alice@art.com">
          <input id="login-pass" type="password" value="${window.state.auth.password}" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required placeholder="••••••••">
          <button type="submit" class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm">Sign In</button>
        </form>
        <div class="mt-8 pt-6 border-t border-gray-100 text-center">
          <p class="text-gray-600">Don't have an account?</p>
          <button id="btn-goto-role" class="mt-2 text-indigo-600 font-bold hover:underline">Create Account</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('login-email').oninput = (e) => window.state.auth.email = e.target.value;
  document.getElementById('login-pass').oninput = (e) => window.state.auth.password = e.target.value;
  document.getElementById('btn-goto-role').onclick = () => { window.state.auth.step = 'role_selection'; render(); };
  document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const found = window.state.users.find(u => u.email === window.state.auth.email);
    if (found) { 
      window.state.user = found; 
      saveState();
      render(); 
    }
    else alert("User not found. Try alice@art.com or bob@buy.com");
  };
}

function renderRoleSelection() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4 animate-fade-in">
      <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl border border-gray-100 relative">
        <button id="back-to-login" class="absolute top-8 left-8 text-gray-400 hover:text-gray-600">${Icons.ArrowLeft}</button>
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">Choose your journey</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="select-buyer" class="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center">
            <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">${Icons.ShoppingBag}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">I want to Buy Art</h3>
          </div>
          <div id="select-artist" class="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center">
             <div class="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-6">${Icons.Palette}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">I want to Sell Art</h3>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('back-to-login').onclick = () => { window.state.auth.step = 'login'; render(); };
  document.getElementById('select-buyer').onclick = () => { window.state.auth.step = 'register_buyer'; render(); };
  document.getElementById('select-artist').onclick = () => { window.state.auth.step = 'register_artist'; render(); };
}

function renderRegisterArtist() {
  const root = document.getElementById('root');
  const s = window.state.auth;
  root.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-12 px-4 animate-fade-in">
      <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="bg-purple-600 px-8 py-6 flex items-center gap-4 text-white">
           <button id="back-role"><div class="w-6 h-6">${Icons.ArrowLeft}</div></button>
           <h2 class="text-2xl font-bold">Artist Registration</h2>
        </div>
        <form id="artistForm" class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="md:col-span-2 flex flex-col items-center mb-4">
             <div class="relative w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed flex items-center justify-center overflow-hidden hover:border-purple-500 cursor-pointer">
                ${s.profilePic ? `<img src="${s.profilePic}" class="w-full h-full object-cover" />` : `<div class="text-gray-400 flex flex-col items-center">${Icons.Upload}<span class="text-xs">Photo</span></div>`}
                <input type="file" id="file-profile" class="absolute inset-0 opacity-0 cursor-pointer" accept="image/*">
             </div>
          </div>
          <input type="text" id="reg-name" value="${s.name}" class="border rounded p-2" placeholder="Full Name" required>
          <input type="email" id="reg-email" value="${s.email}" class="border rounded p-2" placeholder="Email" required>
          <input type="tel" id="reg-phone" value="${s.phone}" class="border rounded p-2" placeholder="Phone" required>
          <input type="password" id="reg-pass" value="${s.password}" class="border rounded p-2" placeholder="Password" required>
          <input type="password" id="reg-confirm" value="${s.confirmPassword}" class="border rounded p-2" placeholder="Confirm Password" required>
          <textarea id="reg-bio" class="border rounded p-2 h-20 md:col-span-2" placeholder="Short Bio">${s.bio}</textarea>
          <input type="text" id="reg-payment" value="${s.paymentMethod}" class="border rounded p-2 md:col-span-2" placeholder="GCash/Bank Details" required>
          <button type="submit" class="md:col-span-2 bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 shadow-lg">Complete Registration</button>
        </form>
      </div>
    </div>
  `;
  setupRegistrationHandlers('artistForm', 'artist');
}

function renderRegisterBuyer() {
  const root = document.getElementById('root');
  const s = window.state.auth;
  root.innerHTML = `
    <div class="min-h-screen bg-gray-50 py-12 px-4 animate-fade-in">
      <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="bg-blue-600 px-8 py-6 flex items-center gap-4 text-white">
           <button id="back-role"><div class="w-6 h-6">${Icons.ArrowLeft}</div></button>
           <h2 class="text-2xl font-bold">Buyer Registration</h2>
        </div>
        <form id="buyerForm" class="p-8 space-y-4">
           <div class="flex justify-center mb-6">
             <div class="relative w-28 h-28 rounded-full bg-gray-100 border-2 border-dashed flex items-center justify-center overflow-hidden hover:border-blue-500 cursor-pointer">
                ${s.profilePic ? `<img src="${s.profilePic}" class="w-full h-full object-cover" />` : `<div class="text-gray-400 flex flex-col items-center">${Icons.Upload}</div>`}
                <input type="file" id="file-profile" class="absolute inset-0 opacity-0 cursor-pointer" accept="image/*">
             </div>
           </div>
           <input type="text" id="reg-name" value="${s.name}" class="w-full border rounded p-2" placeholder="Full Name" required>
           <input type="email" id="reg-email" value="${s.email}" class="w-full border rounded p-2" placeholder="Email" required>
           <input type="password" id="reg-pass" value="${s.password}" class="w-full border rounded p-2" placeholder="Password" required>
           <input type="password" id="reg-confirm" value="${s.confirmPassword}" class="w-full border rounded p-2" placeholder="Confirm Password" required>
           <textarea id="reg-address" class="w-full border rounded p-2" placeholder="Address">${s.address}</textarea>
           <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 shadow-md">Create Account</button>
        </form>
      </div>
    </div>
  `;
  setupRegistrationHandlers('buyerForm', 'buyer');
}

function setupRegistrationHandlers(formId, role) {
  document.getElementById('back-role').onclick = () => { window.state.auth.step = 'role_selection'; render(); };
  document.getElementById('reg-name').oninput = (e) => window.state.auth.name = e.target.value;
  document.getElementById('reg-email').oninput = (e) => window.state.auth.email = e.target.value;
  document.getElementById('reg-pass').oninput = (e) => window.state.auth.password = e.target.value;
  document.getElementById('reg-confirm').oninput = (e) => window.state.auth.confirmPassword = e.target.value;
  if(document.getElementById('reg-phone')) document.getElementById('reg-phone').oninput = (e) => window.state.auth.phone = e.target.value;
  if(document.getElementById('reg-bio')) document.getElementById('reg-bio').oninput = (e) => window.state.auth.bio = e.target.value;
  if(document.getElementById('reg-payment')) document.getElementById('reg-payment').oninput = (e) => window.state.auth.paymentMethod = e.target.value;
  if(document.getElementById('reg-address')) document.getElementById('reg-address').oninput = (e) => window.state.auth.address = e.target.value;
  
  document.getElementById('file-profile').onchange = (e) => {
    if(e.target.files[0]) { window.state.auth.profilePic = URL.createObjectURL(e.target.files[0]); render(); }
  };

  document.getElementById(formId).onsubmit = (e) => {
    e.preventDefault();
    if (window.state.auth.password !== window.state.auth.confirmPassword) { alert("Passwords do not match!"); return; }
    
    const newUser = {
      id: `u${Date.now()}`,
      name: window.state.auth.name,
      email: window.state.auth.email,
      role: role,
      avatarUrl: window.state.auth.profilePic || `https://picsum.photos/100/100?random=${Date.now()}`,
      bio: window.state.auth.bio || '',
      phone: window.state.auth.phone || '',
      address: window.state.auth.address || '',
      paymentMethod: window.state.auth.paymentMethod || '',
      favorites: []
    };
    window.state.users.push(newUser);
    window.state.user = newUser;
    saveState();
    render();
  };
}

// --- ARTIST DASHBOARD ---
function renderArtistDashboard() {
  const root = document.getElementById('root');
  const { tab, newArt } = window.state.artist;
  const user = window.state.user;
  
  // Calculate Wallet
  const completedOrders = window.state.orders.filter(o => o.artistId === user.id && o.status === 'completed');
  const totalEarned = completedOrders.reduce((acc, curr) => acc + curr.amount, 0);
  const pendingOrders = window.state.orders.filter(o => o.artistId === user.id && o.status === 'pending');
  const myArtworks = window.state.artworks.filter(a => a.artistId === user.id);

  // --- CONTENT RENDERERS ---
  const renderOverview = () => `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div><p class="text-sm text-gray-500">Earnings</p><h3 class="text-2xl font-bold">$${totalEarned.toLocaleString()}</h3></div>
        <div class="p-2 bg-green-100 text-green-600 rounded-lg">${Icons.Wallet}</div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div><p class="text-sm text-gray-500">Orders</p><h3 class="text-2xl font-bold">${pendingOrders.length} Pending</h3></div>
        <div class="p-2 bg-orange-100 text-orange-600 rounded-lg">${Icons.ShoppingBag}</div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start">
        <div><p class="text-sm text-gray-500">Artworks</p><h3 class="text-2xl font-bold">${myArtworks.length}</h3></div>
        <div class="p-2 bg-purple-100 text-purple-600 rounded-lg">${Icons.Palette}</div>
      </div>
    </div>
  `;

  const renderArtworks = () => `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
       <div class="p-6 border-b border-gray-100 flex justify-between items-center">
         <h2 class="text-xl font-bold">My Artworks</h2>
         <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm" onclick="window.state.artist.tab='upload'; render()">+ Upload New</button>
       </div>
       <div class="overflow-x-auto">
         <table class="w-full text-left text-sm text-gray-600">
            <thead class="bg-gray-50 text-gray-800 font-medium"><tr><th class="p-4">Artwork</th><th class="p-4">Category</th><th class="p-4">Price</th><th class="p-4">Status</th><th class="p-4">Stats</th></tr></thead>
            <tbody>
              ${myArtworks.map(a => `
                <tr class="border-b border-gray-50 hover:bg-gray-50">
                  <td class="p-4 flex items-center gap-3">
                    <img src="${a.imageUrl}" class="w-10 h-10 rounded object-cover">
                    <span class="font-medium text-gray-900">${a.title}</span>
                  </td>
                  <td class="p-4">${a.category}</td>
                  <td class="p-4">$${a.price}</td>
                  <td class="p-4"><span class="px-2 py-1 rounded text-xs ${a.status==='sold'?'bg-red-100 text-red-600':'bg-green-100 text-green-600'}">${a.status.toUpperCase()}</span></td>
                  <td class="p-4 flex gap-3 text-gray-400">
                    <span class="flex items-center gap-1"><div class="w-3 h-3">${Icons.Heart}</div> ${a.likes}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
         </table>
       </div>
    </div>
  `;

  const renderUpload = () => `
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl mx-auto animate-fade-in">
      <h2 class="text-2xl font-bold mb-6">Upload New Artwork</h2>
      <form id="uploadForm">
         <div class="mb-6 border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer relative">
           <input type="file" id="art-file-input" class="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" required>
           <div id="art-preview-container" class="text-center w-full h-full flex flex-col items-center justify-center">
              <div class="text-gray-400 mb-2 w-10 h-10">${Icons.Upload}</div>
              <p class="text-sm text-gray-500">Upload Image</p>
           </div>
         </div>
         <div class="grid grid-cols-2 gap-4 mb-4">
            <div><label class="text-sm font-medium block mb-1">Title</label><input id="art-title" value="${newArt.title}" class="w-full border rounded px-3 py-2" required></div>
            <div><label class="text-sm font-medium block mb-1">Price ($)</label><input id="art-price" type="number" value="${newArt.price}" class="w-full border rounded px-3 py-2" required></div>
         </div>
         <div class="mb-4">
           <label class="text-sm font-medium block mb-1">Category</label>
           <select id="art-category" class="w-full border rounded px-3 py-2 bg-white">${['Digital','Oil','Watercolor','Sculpture'].map(c=>`<option ${newArt.category===c?'selected':''}>${c}</option>`).join('')}</select>
         </div>
         <div class="mb-4 relative">
           <label class="text-sm font-medium block mb-1">Description</label>
           <textarea id="art-desc" class="w-full border rounded px-3 py-2 h-24" required>${newArt.desc}</textarea>
           <button type="button" id="btn-generate" class="absolute bottom-3 right-3 text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full flex items-center gap-1 hover:bg-indigo-200">
              ${window.state.artist.isGenerating ? Icons.Loader : '✨'} AI Generate
           </button>
         </div>
         <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium">Publish</button>
      </form>
    </div>
  `;

  const renderOrders = () => {
    const orders = window.state.orders.filter(o => o.artistId === user.id);
    return `
      <div class="space-y-4 animate-fade-in">
        <h2 class="text-2xl font-bold mb-4">Orders Management</h2>
        ${orders.length === 0 ? `<div class="text-gray-500">No orders found.</div>` : orders.map(o => `
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
            <img src="${o.artworkImage}" class="w-20 h-20 rounded object-cover bg-gray-100">
            <div class="flex-1">
              <div class="flex justify-between">
                 <h4 class="font-bold text-gray-900">${o.artworkTitle}</h4>
                 <span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 font-bold">${o.status.toUpperCase()}</span>
              </div>
              <p class="text-sm text-gray-500">Buyer: <span class="font-medium text-indigo-600">${window.getUser(o.buyerId).name}</span></p>
              <p class="text-sm font-bold text-gray-900 mt-1">$${o.amount}</p>
            </div>
            <div class="flex gap-2">
               <button class="p-2 text-gray-500 hover:text-indigo-600 border rounded-lg" onclick="window.openChat('${o.buyerId}')" title="Message Buyer">${Icons.Message}</button>
               ${o.status === 'pending' ? `
                 <button class="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-sm hover:bg-red-100" onclick="window.updateOrderStatus('${o.id}', 'cancelled')">Reject</button>
                 <button class="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-indigo-700" onclick="window.updateOrderStatus('${o.id}', 'accepted')">Accept</button>
               ` : o.status === 'accepted' ? `
                 <button class="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-700" onclick="window.updateOrderStatus('${o.id}', 'completed')">Complete</button>
               ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };

  const renderWallet = () => `
    <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
       <div class="bg-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <p class="text-indigo-200 text-sm font-medium">Total Balance</p>
          <h1 class="text-4xl font-bold mt-2">$${totalEarned.toLocaleString()}</h1>
          <div class="mt-6 flex gap-4">
             <div class="bg-white/10 rounded-lg p-3 flex-1">
                <p class="text-xs text-indigo-200">Payout Method</p>
                <p class="font-medium text-sm truncate">${user.paymentMethod}</p>
             </div>
             <button class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-bold hover:bg-indigo-50" onclick="alert('Withdrawal request sent!')">Withdraw</button>
          </div>
       </div>
       <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-900 mb-4">Recent Transactions</h3>
          <div class="space-y-4">
             ${completedOrders.length ? completedOrders.map(o => `
               <div class="flex justify-between items-center border-b border-gray-50 pb-2">
                 <div>
                    <p class="text-sm font-medium text-gray-900">Sale: ${o.artworkTitle}</p>
                    <p class="text-xs text-gray-500">${new Date(o.date).toLocaleDateString()}</p>
                 </div>
                 <span class="text-green-600 font-bold">+$${o.amount}</span>
               </div>
             `).join('') : '<p class="text-gray-400 text-sm">No transactions yet.</p>'}
          </div>
       </div>
    </div>
  `;

  const renderSettings = () => `
    <div class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
       <h2 class="text-2xl font-bold mb-6">Profile Settings</h2>
       <div class="flex items-center gap-4 mb-6">
          <img src="${user.avatarUrl}" class="w-16 h-16 rounded-full object-cover">
          <button class="text-sm text-indigo-600 font-medium hover:underline">Change Photo</button>
       </div>
       <div class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">Display Name</label><input value="${user.name}" class="w-full border rounded p-2" disabled></div>
          <div><label class="block text-sm font-medium mb-1">Email</label><input value="${user.email}" class="w-full border rounded p-2" disabled></div>
          <div><label class="block text-sm font-medium mb-1">Phone</label><input value="${user.phone}" class="w-full border rounded p-2"></div>
          <div><label class="block text-sm font-medium mb-1">Payment Method</label><input value="${user.paymentMethod}" class="w-full border rounded p-2"></div>
       </div>
       <button class="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium" onclick="alert('Profile updated!')">Save Changes</button>
    </div>
  `;

  // --- DASHBOARD LAYOUT ---
  root.innerHTML = `
    <div class="min-h-screen bg-gray-50 flex">
      <!-- Sidebar -->
      <div class="w-64 bg-white border-r border-gray-200 fixed h-full hidden md:flex flex-col z-10">
        <div class="p-6">
          <h1 class="text-2xl font-bold text-indigo-600 flex items-center gap-2"><div class="w-6 h-6">${Icons.Palette}</div> Artify</h1>
          <p class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Artist Portal</p>
        </div>
        <nav class="flex-1 px-4 space-y-1">
          ${['overview', 'artworks', 'orders', 'wallet', 'messages', 'settings'].map(t => `
            <button onclick="window.state.artist.tab='${t}'; render()" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${tab===t ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}">
              <div class="w-5 h-5">${t==='overview'?Icons.TrendingUp : t==='artworks'?Icons.Palette : t==='orders'?Icons.ShoppingBag : t==='wallet'?Icons.Wallet : t==='messages'?Icons.Message : Icons.Settings}</div> 
              ${t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          `).join('')}
        </nav>
        <div class="p-4 border-t border-gray-100">
          <button id="logout-btn" class="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium">Log Out</button>
        </div>
      </div>
      
      <!-- Mobile Header -->
      <div class="md:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-20 h-16 flex items-center justify-between px-4">
         <div class="font-bold text-indigo-600 flex gap-2"><div class="w-6 h-6">${Icons.Palette}</div> Artify Artist</div>
         <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">${Icons.Settings}</button>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden fixed inset-0 z-30 bg-black/50 md:hidden" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
         <div class="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-4 flex flex-col" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-6">
               <h2 class="font-bold text-lg">Menu</h2>
               <button onclick="document.getElementById('mobile-menu').classList.add('hidden')">${Icons.X}</button>
            </div>
             <nav class="flex-1 space-y-2">
              ${['overview', 'artworks', 'orders', 'wallet', 'messages', 'settings'].map(t => `
                <button onclick="window.state.artist.tab='${t}'; document.getElementById('mobile-menu').classList.add('hidden'); render()" class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${tab===t ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}">
                  ${t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              `).join('')}
            </nav>
             <button onclick="window.state.user = null; window.state.auth.step='login'; saveState(); render()" class="w-full flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium mt-4">Log Out</button>
         </div>
      </div>
      
      <!-- Main Content -->
      <div class="flex-1 md:ml-64 p-4 md:p-8 mt-16 md:mt-0 overflow-y-auto">
         ${tab === 'overview' ? renderOverview() : tab === 'artworks' ? renderArtworks() : tab === 'upload' ? renderUpload() : tab === 'orders' ? renderOrders() : tab === 'wallet' ? renderWallet() : tab === 'messages' ? renderChat() : renderSettings()}
      </div>
    </div>
  `;

  document.getElementById('logout-btn').onclick = () => { window.state.user = null; window.state.auth.step='login'; saveState(); render(); };

  if (tab === 'upload') {
    document.getElementById('art-title').oninput = (e) => newArt.title = e.target.value;
    document.getElementById('art-category').onchange = (e) => newArt.category = e.target.value;
    document.getElementById('art-price').oninput = (e) => newArt.price = e.target.value;
    document.getElementById('art-desc').oninput = (e) => newArt.desc = e.target.value;
    document.getElementById('btn-generate').onclick = async () => {
       window.state.artist.isGenerating = true; render();
       newArt.desc = await generateArtworkDescription(newArt.title, newArt.category);
       window.state.artist.isGenerating = false; render();
    };
    document.getElementById('art-file-input').onchange = (e) => {
       if(e.target.files[0]) document.getElementById('art-preview-container').innerHTML = `<img src="${URL.createObjectURL(e.target.files[0])}" class="h-full object-contain">`;
    };
    document.getElementById('uploadForm').onsubmit = (e) => {
      e.preventDefault();
      const file = document.getElementById('art-file-input').files[0];
      window.state.artworks.unshift({
        id: `a${Date.now()}`, artistId: user.id, artistName: user.name, title: newArt.title, category: newArt.category, price: parseFloat(newArt.price), description: newArt.desc,
        imageUrl: file ? URL.createObjectURL(file) : `https://picsum.photos/400/300?r=${Math.random()}`, status: 'available', likes: 0, views: 0
      });
      window.state.artist.tab = 'artworks'; window.state.artist.newArt = { title: '', category: 'Digital', price: '', desc: '' };
      saveState();
      render();
    };
  }
}

// --- BUYER DASHBOARD ---
function renderBuyerDashboard() {
  const root = document.getElementById('root');
  const { tab, searchTerm, categoryFilter, selectedArt, viewingArtistId, menuOpen } = window.state.buyer;
  const user = window.state.user;

  const renderMarket = () => {
    let filtered = window.state.artworks.filter(a => (categoryFilter==='All'||a.category===categoryFilter) && a.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if (tab === 'favorites') {
      filtered = filtered.filter(a => window.isFavorite(a.id));
    }
    
    return `
      <div class="space-y-6">
         <!-- Filters -->
         ${tab !== 'favorites' ? `
         <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            ${['All','Digital','Oil','Watercolor','Sculpture'].map(c => `
              <button onclick="window.state.buyer.categoryFilter='${c}';render()" class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${categoryFilter===c ? 'bg-indigo-600 text-white border-indigo-600':'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}">${c}</button>
            `).join('')}
         </div>` : '<h2 class="text-2xl font-bold">My Favorites</h2>'}
         
         <!-- Grid -->
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            ${filtered.length === 0 ? `<div class="col-span-full text-center text-gray-400 py-10">No artworks found.</div>` : filtered.map(a => `
               <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all relative">
                  <div class="aspect-square bg-gray-100 relative overflow-hidden">
                     <img src="${a.imageUrl}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                     ${a.status==='sold' ? `<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="bg-red-600 text-white px-3 py-1 font-bold text-sm transform -rotate-12">SOLD</span></div>` : ''}
                     <button onclick="event.stopPropagation(); window.toggleFavorite('${a.id}')" class="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-transform active:scale-95">
                        <div class="w-5 h-5 ${window.isFavorite(a.id) ? 'text-red-500' : 'text-gray-400'}">${window.isFavorite(a.id) ? Icons.HeartFilled : Icons.Heart}</div>
                     </button>
                  </div>
                  <div class="p-4">
                     <div class="flex justify-between items-start mb-2">
                        <div class="overflow-hidden">
                            <h3 class="font-bold text-gray-900 truncate">${a.title}</h3>
                            <button onclick="window.viewArtistProfile('${a.artistId}')" class="text-xs text-gray-500 hover:text-indigo-600 hover:underline">by ${a.artistName}</button>
                        </div>
                        <span class="font-bold text-indigo-600">$${a.price}</span>
                     </div>
                     <button class="w-full mt-2 bg-gray-50 text-gray-900 hover:bg-indigo-600 hover:text-white py-2 rounded-lg text-sm font-medium transition-colors" onclick="window.viewArt('${a.id}')">View Details</button>
                  </div>
               </div>
            `).join('')}
         </div>
      </div>
    `;
  };

  const renderOrders = () => {
    const orders = window.state.orders.filter(o => o.buyerId === user.id);
    return `
      <div class="max-w-3xl mx-auto space-y-4 animate-fade-in">
         <h2 class="text-2xl font-bold mb-4">My Orders</h2>
         ${orders.length===0 ? '<p class="text-gray-500">No orders yet.</p>' : orders.map(o => `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4">
               <img src="${o.artworkImage}" class="w-full sm:w-24 h-48 sm:h-24 rounded object-cover bg-gray-200">
               <div class="flex-1">
                  <div class="flex justify-between items-start">
                     <h3 class="font-bold text-lg">${o.artworkTitle}</h3>
                     <span class="px-2 py-1 rounded text-xs font-bold bg-gray-100 uppercase text-gray-600">${o.status}</span>
                  </div>
                  <p class="text-sm text-gray-500">Order #${o.id}</p>
                  <p class="mt-2 font-bold">$${o.amount}</p>
                  <div class="mt-2 flex gap-2">
                     <button class="text-indigo-600 text-sm font-medium hover:underline" onclick="window.openChat('${o.artistId}')">Message Artist</button>
                     ${o.status === 'pending' ? `<button class="text-red-600 text-sm font-medium hover:underline ml-4" onclick="if(confirm('Cancel order?')) window.updateOrderStatus('${o.id}', 'cancelled')">Cancel Order</button>` : ''}
                  </div>
               </div>
            </div>
         `).join('')}
      </div>
    `;
  };
  
  const renderArtistProfile = () => {
    const artist = window.getUser(viewingArtistId);
    if(!artist) return `<div class="p-8 text-center">Artist not found <button onclick="window.state.buyer.tab='market';render()" class="text-indigo-600">Back</button></div>`;
    
    const artistArts = window.state.artworks.filter(a => a.artistId === viewingArtistId);
    
    return `
      <div class="animate-fade-in">
        <button onclick="window.state.buyer.tab='market';render()" class="mb-6 flex items-center text-gray-500 hover:text-gray-900 gap-2">${Icons.ArrowLeft} Back to Market</button>
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img src="${artist.avatarUrl}" class="w-32 h-32 rounded-full object-cover border-4 border-indigo-50">
            <div class="text-center md:text-left flex-1">
                <h2 class="text-3xl font-bold text-gray-900">${artist.name}</h2>
                <p class="text-indigo-600 font-medium mb-4">Artist</p>
                <p class="text-gray-600 max-w-lg">${artist.bio || 'No bio available.'}</p>
                <div class="mt-6 flex gap-3 justify-center md:justify-start">
                    <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200" onclick="window.openChat('${artist.id}')">Message</button>
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold mb-4">Portfolio (${artistArts.length})</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${artistArts.map(a => `
               <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all" onclick="window.viewArt('${a.id}')">
                  <div class="aspect-square bg-gray-100 relative">
                     <img src="${a.imageUrl}" class="w-full h-full object-cover">
                     ${a.status==='sold' ? `<div class="absolute inset-0 bg-black/50 flex items-center justify-center"><span class="bg-red-600 text-white px-3 py-1 font-bold text-sm transform -rotate-12">SOLD</span></div>` : ''}
                  </div>
                  <div class="p-3">
                     <h4 class="font-bold truncate">${a.title}</h4>
                     <p class="text-indigo-600 font-bold">$${a.price}</p>
                  </div>
               </div>
            `).join('')}
        </div>
      </div>
    `;
  }

  const renderSettings = () => `
    <div class="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
       <h2 class="text-2xl font-bold mb-6">Account Settings</h2>
       <div class="flex items-center gap-4 mb-6">
          <img src="${user.avatarUrl}" class="w-16 h-16 rounded-full object-cover">
          <button class="text-sm text-indigo-600 font-medium hover:underline">Change Photo</button>
       </div>
       <div class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">Name</label><input value="${user.name}" class="w-full border rounded p-2"></div>
          <div><label class="block text-sm font-medium mb-1">Email</label><input value="${user.email}" class="w-full border rounded p-2" disabled></div>
          <div><label class="block text-sm font-medium mb-1">Address</label><textarea class="w-full border rounded p-2">${user.address||''}</textarea></div>
       </div>
       <button class="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium" onclick="alert('Settings saved')">Save Changes</button>
    </div>
  `;

  root.innerHTML = `
    <div class="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <div class="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
           <div class="flex items-center gap-2 font-bold text-xl text-indigo-600"><div class="w-8 h-8 bg-indigo-600 text-white p-1 rounded-lg">${Icons.Palette}</div> Artify</div>
           <div class="flex-1 max-w-lg mx-4 hidden md:block relative">
              <div class="absolute left-3 top-2.5 text-gray-400 w-5 h-5">${Icons.Search}</div>
              <input id="search-input" value="${searchTerm}" class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:ring-1 focus:ring-indigo-500 outline-none" placeholder="Search art...">
           </div>
           <div class="flex items-center gap-4">
              <nav class="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                 <button class="${tab==='market'?'text-indigo-600':''}" onclick="window.state.buyer.tab='market';render()">Market</button>
                 <button class="${tab==='favorites'?'text-indigo-600':''}" onclick="window.state.buyer.tab='favorites';render()">Favorites</button>
                 <button class="${tab==='orders'?'text-indigo-600':''}" onclick="window.state.buyer.tab='orders';render()">Orders</button>
                 <button class="${tab==='messages'?'text-indigo-600':''}" onclick="window.state.buyer.tab='messages';render()">Messages</button>
              </nav>
              <div class="relative cursor-pointer" onclick="window.toggleBuyerMenu(event)">
                 <img src="${user.avatarUrl}" class="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-indigo-100 transition-all">
                 ${menuOpen ? `
                 <div class="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl rounded-lg py-1 border border-gray-100 z-50">
                    <button class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50" onclick="event.stopPropagation(); window.state.buyer.tab='settings'; window.state.buyer.menuOpen=false; render()">Settings</button>
                    <button class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50" onclick="event.stopPropagation(); window.state.user=null; window.state.buyer.menuOpen=false; window.state.auth.step='login'; saveState(); render()">Sign Out</button>
                 </div>
                 ` : ''}
              </div>
           </div>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 py-8">
         ${tab === 'market' || tab === 'favorites' ? renderMarket() : tab === 'orders' ? renderOrders() : tab === 'messages' ? renderChat() : tab === 'artistProfile' ? renderArtistProfile() : renderSettings()}
      </div>

      <!-- Mobile Nav -->
      <div class="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 text-xs text-gray-500 font-medium z-30">
         <button onclick="window.state.buyer.tab='market';render()" class="flex flex-col items-center gap-1 ${tab==='market'?'text-indigo-600':''}"><div class="w-5 h-5">${Icons.Palette}</div>Market</button>
         <button onclick="window.state.buyer.tab='favorites';render()" class="flex flex-col items-center gap-1 ${tab==='favorites'?'text-indigo-600':''}"><div class="w-5 h-5">${Icons.Heart}</div>Likes</button>
         <button onclick="window.state.buyer.tab='orders';render()" class="flex flex-col items-center gap-1 ${tab==='orders'?'text-indigo-600':''}"><div class="w-5 h-5">${Icons.ShoppingBag}</div>Orders</button>
         <button onclick="window.state.buyer.tab='messages';render()" class="flex flex-col items-center gap-1 ${tab==='messages'?'text-indigo-600':''}"><div class="w-5 h-5">${Icons.Message}</div>Chats</button>
         <button onclick="window.state.buyer.tab='settings';render()" class="flex flex-col items-center gap-1 ${tab==='settings'?'text-indigo-600':''}"><div class="w-5 h-5">${Icons.Settings}</div>Profile</button>
      </div>

      <!-- Detail Modal -->
      ${selectedArt ? `
        <div class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
           <div class="bg-white rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
              <div class="md:w-1/2 bg-gray-100 relative group">
                 <img src="${selectedArt.imageUrl}" class="w-full h-full object-cover">
                 <button class="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white" onclick="window.state.buyer.selectedArt=null;render()">${Icons.X}</button>
              </div>
              <div class="md:w-1/2 p-8 overflow-y-auto flex flex-col">
                 <div class="flex justify-between items-start mb-2">
                    <h2 class="text-3xl font-bold">${selectedArt.title}</h2>
                    <button onclick="window.toggleFavorite('${selectedArt.id}')" class="p-2 rounded-full hover:bg-gray-100 ${window.isFavorite(selectedArt.id) ? 'text-red-500' : 'text-gray-400'}">
                        <div class="w-6 h-6">${window.isFavorite(selectedArt.id) ? Icons.HeartFilled : Icons.Heart}</div>
                    </button>
                 </div>
                 
                 <button onclick="window.state.buyer.selectedArt=null; window.viewArtistProfile('${selectedArt.artistId}')" class="text-gray-500 mb-4 hover:text-indigo-600 hover:underline flex items-center gap-2">
                    <img src="${window.getUser(selectedArt.artistId).avatarUrl}" class="w-6 h-6 rounded-full">
                    by ${selectedArt.artistName}
                 </button>
                 
                 <p class="text-gray-700 leading-relaxed mb-6 flex-1">${selectedArt.description}</p>
                 
                 <div class="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div class="bg-gray-50 p-3 rounded-lg"><span class="block text-gray-400 text-xs uppercase">Category</span>${selectedArt.category}</div>
                    <div class="bg-gray-50 p-3 rounded-lg"><span class="block text-gray-400 text-xs uppercase">Status</span>${selectedArt.status.toUpperCase()}</div>
                 </div>

                 <div class="border-t pt-6 mt-auto">
                    <div class="flex justify-between items-center mb-4">
                       <span class="text-3xl font-bold text-indigo-600">$${selectedArt.price}</span>
                       <span class="text-sm text-green-600 font-medium">In Stock</span>
                    </div>
                    <div class="flex gap-3">
                       <button class="flex-1 border border-indigo-600 text-indigo-600 py-3 rounded-lg font-bold hover:bg-indigo-50" onclick="window.state.buyer.selectedArt=null; window.openChat('${selectedArt.artistId}')">Chat Artist</button>
                       ${selectedArt.status === 'available' ? 
                        `<button class="flex-[2] bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200" onclick="window.buyArt('${selectedArt.id}')">Buy Now</button>` :
                        `<button class="flex-[2] bg-gray-200 text-gray-400 py-3 rounded-lg font-bold cursor-not-allowed">Sold Out</button>`
                       }
                    </div>
                 </div>
              </div>
           </div>
        </div>
      ` : ''}
    </div>
  `;
  
  if(document.getElementById('search-input')) document.getElementById('search-input').oninput = (e) => window.state.buyer.searchTerm = e.target.value;
}

// --- CHAT SYSTEM ---
function renderChat() {
  const userId = window.state.user.id;
  // Filter conversations involving current user
  const myConvs = window.state.conversations.filter(c => c.participants.includes(userId));
  
  // Default to first conversation if activeChatId is invalid or null, but only if convs exist
  if ((!window.state.activeChatId || !myConvs.find(c => c.id === window.state.activeChatId)) && myConvs.length > 0) {
    window.state.activeChatId = myConvs[0].id;
  }

  const activeConv = window.state.activeChatId ? myConvs.find(c => c.id === window.state.activeChatId) : null;
  const otherUser = activeConv ? window.getUser(activeConv.participants.find(p => p !== userId)) : null;

  return `
    <div class="flex h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
       <!-- Chat Sidebar -->
       <div class="w-full md:w-80 border-r border-gray-100 flex flex-col ${activeConv ? 'hidden md:flex' : 'flex'}">
          <div class="p-4 border-b border-gray-100 font-bold text-lg text-gray-800">Messages</div>
          <div class="overflow-y-auto flex-1">
             ${myConvs.length === 0 ? `<p class="p-4 text-gray-400 text-sm">No messages yet.</p>` : myConvs.map(c => {
               const other = window.getUser(c.participants.find(p => p !== userId));
               const lastMsg = c.messages[c.messages.length-1];
               return `
                 <div onclick="window.state.activeChatId='${c.id}'; render()" class="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex gap-3 items-center ${c.id === window.state.activeChatId ? 'bg-indigo-50' : ''}">
                    <img src="${other.avatarUrl}" class="w-12 h-12 rounded-full object-cover">
                    <div class="overflow-hidden flex-1">
                       <h4 class="font-bold text-sm text-gray-900 truncate">${other.name}</h4>
                       <p class="text-xs text-gray-500 truncate">${lastMsg ? lastMsg.text : 'Start a conversation'}</p>
                    </div>
                 </div>
               `;
             }).join('')}
          </div>
       </div>
       
       <!-- Chat Window -->
       <div class="flex-1 flex flex-col ${!activeConv ? 'hidden md:flex' : 'flex'}">
          ${activeConv ? `
            <div class="p-4 border-b border-gray-100 flex items-center gap-3">
               <button class="md:hidden text-gray-500" onclick="window.state.activeChatId=null; render()">${Icons.ArrowLeft}</button>
               <img src="${otherUser.avatarUrl}" class="w-10 h-10 rounded-full object-cover">
               <span class="font-bold text-gray-900">${otherUser.name}</span>
            </div>
            <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
               ${activeConv.messages.map(m => `
                 <div class="flex ${m.senderId === userId ? 'justify-end' : 'justify-start'}">
                    <div class="chat-bubble px-4 py-2 rounded-2xl text-sm ${m.senderId === userId ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'}">
                       ${m.type === 'image' ? `<img src="${m.text}" class="max-w-[200px] rounded-lg mb-1">` : `<p>${m.text}</p>`}
                       <p class="text-[10px] opacity-70 text-right mt-1">${new Date(m.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                 </div>
               `).join('')}
            </div>
            <form id="chat-form" class="p-4 bg-white border-t border-gray-100 flex gap-2">
               <label class="p-2 text-gray-400 hover:text-indigo-600 cursor-pointer">
                  ${Icons.Image}
                  <input type="file" id="chat-img-input" class="hidden" accept="image/*">
               </label>
               <input id="chat-input" type="text" class="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="Type a message...">
               <button type="submit" class="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">${Icons.Send}</button>
            </form>
          ` : `
            <div class="flex-1 flex flex-col items-center justify-center text-gray-300">
               <div class="w-16 h-16 mb-4">${Icons.Message}</div>
               <p>Select a conversation to start chatting</p>
            </div>
          `}
       </div>
    </div>
  `;
}

// --- GLOBAL ACTIONS (Window) ---
window.viewArt = (id) => { window.state.buyer.selectedArt = window.state.artworks.find(a => a.id === id); render(); };
window.viewArtistProfile = (artistId) => {
  window.state.buyer.viewingArtistId = artistId;
  window.state.buyer.tab = 'artistProfile';
  render();
};

window.buyArt = (id) => {
  const art = window.state.artworks.find(a => a.id === id);
  if (!art) return;
  window.state.orders.unshift({
    id: `o${Date.now()}`, artworkId: art.id, buyerId: window.state.user.id, artistId: art.artistId,
    status: 'pending', date: new Date().toISOString(), amount: art.price, artworkTitle: art.title, artworkImage: art.imageUrl
  });
  window.state.buyer.selectedArt = null;
  window.state.buyer.tab = 'orders';
  alert("Order placed successfully!");
  saveState();
  render();
};

window.openChat = (targetUserId) => {
  const conv = window.createConversation(window.state.user.id, targetUserId);
  window.state.activeChatId = conv.id;
  if (window.state.user.role === 'buyer') window.state.buyer.tab = 'messages';
  else window.state.artist.tab = 'messages';
  render();
};

window.updateOrderStatus = (oid, status) => {
  const order = window.state.orders.find(o => o.id === oid);
  if (order) {
    order.status = status;
    if (status === 'completed') {
      const art = window.state.artworks.find(a => a.id === order.artworkId);
      if(art) art.status = 'sold';
    }
    saveState();
    render();
  }
};

// --- CHAT LISTENERS ---
// We delegate chat listeners here because renderChat re-creates the DOM elements
document.addEventListener('submit', (e) => {
  if (e.target.id === 'chat-form') {
    e.preventDefault();
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (text && window.state.activeChatId) {
      const conv = window.state.conversations.find(c => c.id === window.state.activeChatId);
      conv.messages.push({ senderId: window.state.user.id, text: text, timestamp: new Date().toISOString(), type: 'text' });
      input.value = '';
      saveState();
      render(); // Re-render to show message
      // Scroll to bottom
      setTimeout(() => {
        const container = document.getElementById('chat-messages');
        if(container) container.scrollTop = container.scrollHeight;
      }, 50);
    }
  }
});

document.addEventListener('change', (e) => {
  if (e.target.id === 'chat-img-input') {
    const file = e.target.files[0];
    if (file && window.state.activeChatId) {
      const conv = window.state.conversations.find(c => c.id === window.state.activeChatId);
      const url = URL.createObjectURL(file);
      conv.messages.push({ senderId: window.state.user.id, text: url, timestamp: new Date().toISOString(), type: 'image' });
      saveState();
      render();
    }
  }
});

// Initial Render
render();
