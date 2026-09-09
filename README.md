# How Much Music

How Much Music is an open-source archive of source-led research about the public record behind music money: rights, ownership, chart demand, and the limits of public income claims.

The live archive is available at [howmuchmusic.com](https://howmuchmusic.com/).

## Project status

This project is in maintenance mode. It has no scheduled publishing cadence or active commercial roadmap. The existing site remains online, and well-supported corrections, accessibility fixes, source updates, and focused improvements are welcome.

Catalog profiles are research records, not verified royalty reporting. Published case studies distinguish documented public facts from editorial analysis and information that public sources do not establish.

## Technology

- Astro 7
- TypeScript
- Static deployment through GitHub Pages
- Cloudflare Web Analytics for aggregate traffic measurement

## Local development

Requirements: Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Run the complete publication and build checks with:

```bash
npm run build
```

The build validates assets, research candidates, page quality, case studies, publication readiness, and the public index surface before producing `dist/`.

## Repository structure

- `src/pages/`: Astro pages and page templates.
- `src/data/`: catalog records, case studies, sources, and the public update log.
- `src/lib/`: publication, search, artwork, and editorial helpers.
- `src/styles/`: shared visual system.
- `scripts/`: content-quality and build audits.
- `public/`: static site assets and GitHub Pages configuration.

## Editorial standard

Contributions must not convert popularity, chart position, certification, platform availability, or catalog-sale reporting into unsupported royalty or personal-income claims. A public source should be described only within the limits of what it establishes.

See the live [editorial policy](https://howmuchmusic.com/editorial-policy/), [methodology](https://howmuchmusic.com/insights/methodology/), and [Evidence Library](https://howmuchmusic.com/evidence/) for the current publication rules.

## Deployment

Pushes to `main` run the full build and deploy the generated site through GitHub Pages. Research-queue reporting is available only as a manually triggered workflow.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Editorial corrections should include the affected URL, the disputed statement, and a public source when possible.

## Licensing

Software is available under the [MIT License](LICENSE). Original editorial text and project-created data are available under [CC BY 4.0](CONTENT-LICENSE.md). Third-party media and credited source material are excluded from those blanket permissions and retain their original terms.
