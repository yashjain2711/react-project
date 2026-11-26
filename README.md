# CloudLaunch — Single Page React Project

A responsive single-page landing page built with React and Vite. It is suitable for practicing Git, GitHub, Jenkins CI/CD, and Nginx deployment.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Create a production build

```bash
npm run build
```

Vite generates the production website in the `dist/` directory. Deploy the contents of `dist/` to your Nginx web root.

## Preview the production build

```bash
npm run preview
```

## Project structure

```text
react-single-page/
├── index.html
├── package.json
├── public/
├── src/
│   ├── main.jsx
│   └── style.css
├── .gitignore
└── README.md
```
