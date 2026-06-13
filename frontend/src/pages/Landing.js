import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const HERO_BG = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwY2FzdGxlfGVufDB8fHx8MTc4MDgwMTYyMXww&ixlib=rb-4.1.0&q=85";
const DICE = "https://images.unsplash.com/photo-1708863827400-00a5c21c10f7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxyb2xlcGxheSUyMGRpY2V8ZW58MHx8fHwxNzgwODAxNjIxfDA&ixlib=rb-4.1.0&q=85";
const PARCHMENT = "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg";

function Feature({ icon, title, children, testid }) {
  return (
    <div
      data-testid={testid}
      className="bg-ink-surface border border-edge p-8 group hover:border-gold/40 transition-colors"
    >
      <div className="text-gold text-2xl mb-4 font-cinzel">{icon}</div>
      <h3 className="font-cinzel text-parchment text-lg uppercase tracking-[0.18em] mb-3">
        {title}
      </h3>
      <p className="font-cormorant text-parchment-muted text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export default function Landing() {
  const { user } = useAuth();
  const authed = user && user !== null && user !== false;

  return (
    <div className="min-h-screen bg-leather text-parchment">
      <Navbar />

      {/* HERO */}
      <section data-testid="hero-section" className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        <div className="absolute inset-0 bg-grain" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <p
            data-testid="hero-overline"
            className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up"
          >
            ❖ Dungeons &amp; Dragons 2024 ❖
          </p>
          <h1
            data-testid="hero-title"
            className="font-cinzel font-bold text-parchment text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            The Aurora
            <span className="block text-gold italic font-cormorant font-normal mt-3">
              Character Codex
            </span>
          </h1>
          <p
            data-testid="hero-subtitle"
            className="mt-8 max-w-2xl mx-auto font-cormorant text-parchment-muted text-xl sm:text-2xl italic leading-relaxed animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Forge heroes, scribe spells, and keep the chronicles of your party — all
            within a leather-bound digital grimoire. Save every soul as a portable
            <span className="text-gold not-italic font-cinzel text-base tracking-widest">
              {" "}JSON{" "}
            </span>
            scroll.
          </p>

          <div
            data-testid="hero-cta-row"
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            {authed ? (
              <Link
                to="/dashboard"
                data-testid="hero-dashboard-btn"
                className="px-8 py-4 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-sm border border-edge btn-press"
              >
                Open My Codex
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  data-testid="hero-begin-btn"
                  className="px-8 py-4 bg-crimson hover:bg-crimson-dark text-parchment font-cinzel tracking-[0.22em] uppercase text-sm border border-edge btn-press"
                >
                  Begin Your Tale
                </Link>
                <Link
                  to="/login"
                  data-testid="hero-login-btn"
                  className="px-8 py-4 border border-gold/60 text-gold hover:bg-gold/10 font-cinzel tracking-[0.22em] uppercase text-sm btn-press"
                >
                  Return to the Codex
                </Link>
              </>
            )}
          </div>

          <div className="mt-16 divider-gold max-w-md mx-auto" />
        </div>
      </section>

      {/* FEATURES */}
      <section data-testid="features-section" className="relative py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon="⚔" title="Full 2024 Sheet" testid="feature-sheet">
              Ability scores, skills, spellcasting, inventory, attunement, conditions,
              short &amp; long rests — every stat your hero needs, bound in one tome.
            </Feature>
            <Feature icon="💾" title="Portable JSON" testid="feature-json">
              Export your entire character to a single JSON scroll. Carry it between
              tables, devices, or back-ups — nothing is ever locked away.
            </Feature>
            <Feature icon="📜" title="Cloud Codex" testid="feature-cloud">
              Sign in and your saved characters are kept in your personal codex. Load,
              edit, and re-download any time the road calls you back.
            </Feature>
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section data-testid="band-section" className="relative py-24 px-6 sm:px-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${PARCHMENT})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/40" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase mb-4">
              ❖ How the magic works
            </p>
            <h2 className="font-cinzel text-parchment text-3xl sm:text-4xl leading-tight">
              Build your hero.{" "}
              <span className="text-gold italic font-cormorant font-normal">
                Download the scroll.
              </span>
            </h2>
            <ol className="mt-8 space-y-5 font-cormorant text-lg text-parchment-muted">
              <li className="flex gap-4">
                <span className="font-cinzel text-gold text-base mt-1">I.</span>
                <span>Create an account — your codex shelf awaits.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-cinzel text-gold text-base mt-1">II.</span>
                <span>Open the Aurora sheet and forge your character.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-cinzel text-gold text-base mt-1">III.</span>
                <span>
                  Hit <span className="font-cinzel text-parchment text-sm tracking-widest">💾 SAVE JSON</span> to
                  download — or sync to the cloud from the Codex.
                </span>
              </li>
            </ol>
          </div>
          <div className="relative">
            <img
              src={DICE}
              alt="dice on a wooden table"
              className="w-full h-80 object-cover border border-edge shadow-2xl"
            />
            <div className="absolute inset-0 ring-1 ring-gold/20 pointer-events-none" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
