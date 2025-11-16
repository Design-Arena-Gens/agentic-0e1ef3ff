## What You Can Do

This single-page site showcases the breadth of work an autonomous AI coding agent can handle. It highlights focus areas, workflows, and real-world prompts that demonstrate how to go from ambiguous requirements to production-grade delivery.

### Tech Stack

- Next.js 16 App Router  
- React 19 with server and client components  
- Tailwind CSS v4 (utility-first styling with CSS `@import`)  
- Geist variable fonts via `next/font`

### Local Development

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000) and hot-reloads while you iterate.

### Production Build

```bash
npm run build
npm start
```

### Deployment

The project is optimized for Vercel. Run `vercel deploy --prod` (token-based auth already supported in CI) to publish it.
