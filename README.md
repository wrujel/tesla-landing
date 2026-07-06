<div align='center'>

  [![demo][demo]][demo-link]
  [![status][status]][status-link]
  [![test][tests]][tests-link]

</div>

<div align='center'>
  <a href='/'>
    <img
      src='screenshot.png'
      alt='Screenshot of the app'
      width='100%'
    />
  </a>
</div>

<div align='center'>
  <h1>Tesla Landing with Astro</h1>
</div>

<div align='center'>

  [![Astro][astro]][astro-link]
  [![TypeScript][typescript]][typescript-link]
  [![Tailwind CSS][tailwindcss]][tailwindcss-link]

</div>

<div align='center'>
  Landing page inspired by Tesla's official website, built with Astro, TypeScript, and Tailwind CSS. Features smooth snap scrolling, video backgrounds, interactive navigation, and responsive product sections.

  [Demo]({{DEMO_URL}}) · [Report issue](/issues) · [Suggest something](/issues)
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running locally](#running-locally)
  - [Build](#build)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Features

- [x] Tesla-inspired landing page design
- [x] Smooth snap scrolling between sections
- [x] Video background on hero section
- [x] Interactive navigation with backdrop blur effect
- [x] Section-aware header color changes using IntersectionObserver
- [x] Product showcase sections for Model 3, Model Y, Model S, Model X
- [x] Solar Panels and Solar Roof sections
- [x] Accessories section
- [x] Responsive design with Tailwind CSS
- [x] Custom Gotham SSm A font
- [x] Reusable ProductSection component with configurable props
- [x] CTA buttons (Order Now / Demo Drive)
- [x] Built with Astro for fast static site generation
- [x] TypeScript strict mode

## Tech Stack

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

```bash
git clone https://github.com/wrujel/tesla-landing.git
cd tesla-landing
npm install
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

### Build

```bash
npm run build
```

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## Environment Variables

This project does not require any environment variables for basic usage.

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── ChargeSection.astro
│   │   ├── LandingHeader.astro
│   │   ├── Logo.astro
│   │   ├── MainSection.astro
│   │   └── ProductSection.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Demo

You can check out the demo:

[![Demo][demo]][demo-link]

## Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

---

<!-- Badges -->
[astro]: https://img.shields.io/badge/Astro-0C1222?style=for-the-badge&logo=astro&logoColor=FDFDFE
[typescript]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwindcss]: https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white

<!-- Badge links -->
[astro-link]: https://astro.build/
[typescript-link]: https://www.typescriptlang.org/
[tailwindcss-link]: https://tailwindcss.com/

<!-- Status badges -->
[demo]: https://img.shields.io/badge/🚀%20Live%20Demo-Click%20Here-blue?style=for-the-badge
[demo-link]: https://sage-daffodil-4904c3.netlify.app/
[status]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-repos%2Fmain%2Fdata%2Ftesla-landing.json
[status-link]: https://github.com/wrujel/monitor-repos
[tests]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwrujel%2Fmonitor-tests%2Fmain%2Fdata%2Ftesla-landing.json
[tests-link]: https://github.com/wrujel/monitor-tests
