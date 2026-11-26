import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const features = [
  { number: "01", title: "Build", text: "Create clean, reliable applications with modern development tools." },
  { number: "02", title: "Automate", text: "Use CI/CD pipelines to test and deliver changes consistently." },
  { number: "03", title: "Deploy", text: "Ship production-ready builds to a server with confidence." }
];

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home"><span className="brand-mark">C</span> CloudLaunch</a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a className="nav-cta" href="#contact">Get started ↗</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> SIMPLE. MODERN. DEPLOYABLE.</p>
          <h1>Build it.<br /><span>Ship it.</span><br />Improve it.</h1>
          <p className="hero-text">A responsive single-page React application — ready for your next development and deployment practice project.</p>
          <div className="hero-actions">
            <a className="button primary" href="#features">Explore project <span>→</span></a>
            <a className="button secondary" href="#workflow">See workflow</a>
          </div>
          <div className="quick-stats">
            <div><strong>React</strong><small>UI library</small></div>
            <div><strong>Vite</strong><small>Build tool</small></div>
            <div><strong>100%</strong><small>Responsive</small></div>
          </div>
        </div>
        <div className="visual">
          <div className="glow"></div>
          <div className="terminal">
            <div className="terminal-top"><div className="dots"><i></i><i></i><i></i></div><span>deploy.sh</span><b>•••</b></div>
            <div className="terminal-body">
              <p><span className="muted">$</span> npm run build</p>
              <p className="success">✓ building for production...</p>
              <p className="success">✓ modules transformed</p>
              <p className="success">✓ dist/ generated</p>
              <div className="terminal-line"></div>
              <p><span className="muted">$</span> deploy to nginx</p>
              <p className="blue">▶ deployment successful</p>
              <div className="deploy-card"><span className="check">✓</span><div><strong>Application is live</strong><small>localhost · HTTP · Nginx</small></div><span className="live">LIVE</span></div>
            </div>
          </div>
          <div className="floating-tag tag-one">⚡ Fast build</div>
          <div className="floating-tag tag-two">◈ CI/CD ready</div>
        </div>
      </section>

      <section className="features section" id="features">
        <div className="section-heading"><p className="eyebrow">WHAT YOU CAN PRACTICE</p><h2>From code to <span>production.</span></h2><p>Use this starter project to understand the basic application delivery lifecycle.</p></div>
        <div className="feature-grid">
          {features.map((item) => <article className="feature-card" key={item.number}><span className="feature-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="workflow section" id="workflow">
        <div><p className="eyebrow">THE WORKFLOW</p><h2>A simple path to<br /><span>deployment.</span></h2></div>
        <div className="steps">
          <div><b>1</b><section><strong>Develop locally</strong><p>Run the React app and make your changes.</p></section></div>
          <div><b>2</b><section><strong>Push to GitHub</strong><p>Store your source code in a Git repository.</p></section></div>
          <div><b>3</b><section><strong>Build with Jenkins</strong><p>Automate the production build in a pipeline.</p></section></div>
          <div><b>4</b><section><strong>Serve with Nginx</strong><p>Publish the generated dist folder on your server.</p></section></div>
        </div>
      </section>

      <footer id="contact"><a className="brand" href="#home"><span className="brand-mark">C</span> CloudLaunch</a><p>React starter project · Built for learning and deployment practice</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
