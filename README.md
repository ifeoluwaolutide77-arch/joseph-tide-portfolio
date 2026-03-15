# Joseph Tide — Portfolio Website

A professional Health Informatics & AI portfolio built with React + TypeScript + Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org))

### Install & Run Locally

```bash
# 1. Navigate into the project folder
cd joseph-tide-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
npm run preview   # preview the built site locally
```

---

## ✏️ Customizations to Make

### 1. GitHub Username (`src/components/GitHubRepos.tsx`, line 6)
```ts
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'  // ← replace this
```

### 2. Contact Info (`src/components/Contact.tsx`, lines 12–19)
```ts
const contacts = {
  email: 'josephtide@email.com',           // ← your email
  linkedin: 'https://linkedin.com/in/...',  // ← your LinkedIn URL
  github: 'https://github.com/...',         // ← your GitHub URL
  twitter: 'https://twitter.com/...',       // ← your Twitter/X
  whatsapp: 'https://wa.me/234XXXXXXXXXX', // ← your WhatsApp number
  upwork: 'https://www.upwork.com/...',    // ← your Upwork profile
  phone: '+234 XXX XXX XXXX',              // ← your phone
}
```

### 3. Testimonials (`src/components/Testimonials.tsx`)
Replace the placeholder testimonials with real client reviews as you receive them. Each testimonial object looks like:
```ts
{
  name: 'Client Full Name',
  role: 'Their Job Title',
  company: 'Company Name',
  avatar: '👨🏿‍⚕️',   // or use an image URL
  content: 'Their actual testimonial...',
  rating: 5,
  placeholder: false,  // set to false once real
}
```

### 4. Projects (`src/components/Projects.tsx`)
Update the `liveUrl` and `githubUrl` in each project card with your real links.

### 5. Portfolio Photo
Your photo is already included at `public/portfolio-pic.jpg`.

---

## 🌐 Deploy to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" → import your GitHub repo
4. Leave all settings as default → click Deploy
5. Your site will be live at `yourname.vercel.app` in ~1 minute

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Framer Motion | Animations |
| react-scroll | Smooth scrolling |
| react-intersection-observer | Scroll-triggered animations |
| react-icons | Icon library |
| Google Fonts | Cormorant Garamond + DM Sans |

---

## 📁 Project Structure

```
joseph-tide-portfolio/
├── public/
│   ├── portfolio-pic.jpg     ← your photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx          ← animated hero with typewriter
│   │   ├── About.tsx         ← bio + photo section
│   │   ├── Skills.tsx        ← skill bars + tools
│   │   ├── Services.tsx      ← service cards with pricing
│   │   ├── Process.tsx       ← how you work (timeline)
│   │   ├── Projects.tsx      ← live demos + project cards
│   │   ├── GitHubRepos.tsx   ← live GitHub API integration
│   │   ├── Testimonials.tsx  ← carousel with client reviews
│   │   ├── Contact.tsx       ← CTA + social links
│   │   ├── Footer.tsx
│   │   └── CustomCursor.tsx  ← custom animated cursor
│   ├── App.tsx               ← assembles all sections
│   ├── index.css             ← design system variables
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

Built with ❤️ in Lagos, Nigeria.
