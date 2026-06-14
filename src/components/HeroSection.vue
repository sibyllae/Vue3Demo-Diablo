<template>
  <section class="hero" id="hero">
    <!-- Animated background particles -->
    <div class="hero-particles" aria-hidden="true">
      <div
        v-for="i in 20"
        :key="i"
        class="particle"
        :style="particleStyle(i)"
      ></div>
    </div>

    <div class="hero-content container">
      <h1 class="hero-title animate-in">
        <span class="hero-title-line">{{ t('hero.title1') }}</span>
        <span class="hero-title-accent">{{ t('hero.title2') }}</span>
      </h1>
      <p class="hero-subtitle animate-in delay-1">
        {{ t('hero.subtitle') }}
      </p>
      <div class="hero-badges animate-in delay-2">
        <span class="badge">{{ t('hero.badge1') }}</span>
        <span class="badge-divider">◆</span>
        <span class="badge">{{ t('hero.badge2') }}</span>
        <span class="badge-divider">◆</span>
        <span class="badge">{{ t('hero.badge3') }}</span>
      </div>
      <a href="#runes" class="hero-cta animate-in delay-3" id="hero-cta">
        {{ t('hero.cta') }}
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </a>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator animate-in delay-4" aria-hidden="true">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()

const particleStyle = (i) => {
  const seed = i * 137.508
  const left = ((seed * 7) % 100).toFixed(1)
  const top = ((seed * 13) % 100).toFixed(1)
  const size = 1 + (i % 4)
  const delay = (i * 0.3) % 6
  const duration = 4 + (i % 5)
  const opacity = 0.15 + (i % 5) * 0.08

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity,
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: var(--space-2xl) var(--space-lg);

  /* Dark vignette overlay */
  background:
    radial-gradient(ellipse at 50% 30%, rgba(139, 26, 26, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 50% 70%, rgba(100, 80, 30, 0.08) 0%, transparent 50%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 0%, var(--color-bg-deep) 100%);
  pointer-events: none;
  z-index: 1;
}

/* Particles */
.hero-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: var(--color-gold);
  border-radius: 50%;
  animation: float linear infinite;
  box-shadow: 0 0 6px rgba(212, 175, 55, 0.4);
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: var(--space-lg);
}

.hero-title-line {
  display: block;
  font-size: clamp(2rem, 6vw, 3.8rem);
  color: var(--color-text-primary);
  letter-spacing: 0.1em;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.hero-title-accent {
  display: block;
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  color: var(--color-gold-bright);
  letter-spacing: 0.15em;
  margin-top: var(--space-xs);
  text-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-glow), var(--color-gold));
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s ease-in-out infinite;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  letter-spacing: 0.05em;
  font-weight: 300;
}

.hero-badges {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
}

.badge {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  letter-spacing: 0.04em;
}

.badge-divider {
  color: var(--color-gold-dim);
  font-size: 0.6rem;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-xl);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-bg-deep);
  background: linear-gradient(135deg, var(--color-gold), var(--color-gold-bright));
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(212, 175, 55, 0.45);
  color: var(--color-bg-deep);
}

.hero-cta svg {
  animation: float 2s ease-in-out infinite;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, var(--color-gold-dim), transparent);
  animation: pulse-glow 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .hero-badges {
    flex-direction: column;
    gap: var(--space-sm);
  }

  .badge-divider {
    display: none;
  }
}
</style>
