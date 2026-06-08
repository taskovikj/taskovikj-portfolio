# taskovikj.io

Personal portfolio for Branislav Taskovikj, built with Next.js and Tailwind CSS.

The site highlights full-stack engineering, automation systems, data workflows, and open-source product work including Dockio, AutoTyp.ch, SwissDataMCP, content automation tooling, and production web projects.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the local site.

## Build

```bash
npm run build
```

The analytics endpoint skips Supabase writes when the required Supabase environment variables are not configured, so local builds can run without production secrets.
