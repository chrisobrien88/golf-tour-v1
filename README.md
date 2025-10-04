This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Golf Tour App ⛳️

A Ryder Cup–style web app for tracking our annual golf competition.  
Built with **Next.js, TypeScript, TailwindCSS, Prisma, and PostgreSQL**.  
Deployed on **Vercel**.

---

## 🚀 Features (MVP Roadmap)

- **Version 1**
  - Homepage with Ryder Cup logo
  - Countdown to event
  - List of players (mock data)

- **Version 2**
  - Player profiles with stats & graphs
  - Admin dashboard for managing results
  - CRUD for players, matches, and scores

- **Future Ideas**
  - Live scoreboard updates
  - Team vs Team formats
  - Authentication (OAuth with roles)
  - Mobile-first UI enhancements

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- **Database:** PostgreSQL (via [Prisma](https://www.prisma.io/))  
- **Auth:** NextAuth.js (planned)  
- **Deployment:** [Vercel](https://vercel.com/)  
- **Testing:** Vitest & Playwright (planned)  
- **CI/CD:** GitHub Actions

---

## 📦 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOURNAME/golf-tour-app.git
cd golf-tour-app
npm install

Enjoy!