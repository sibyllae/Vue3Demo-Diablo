<template>
  <header
    class="app-header"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <div class="header-inner container">
      <a href="#" class="header-brand" id="header-logo">
        <img :src="logoUrl" alt="D2R Logo" class="header-logo" />
        <span class="header-title">D2R 攻略網</span>
      </a>
      <nav class="header-nav" id="header-nav">
        <a href="#runes" class="nav-link" id="nav-runes">{{ t('nav.runes') }}</a>
        <a href="#runewords" class="nav-link" id="nav-runewords">{{ t('nav.runewords') }}</a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener"
          class="nav-link nav-link--external"
          id="nav-github"
        >
          GitHub
          <svg class="icon-external" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
            <path d="M3.75 2h3.5a.75.75 0 010 1.5H4.56l7.22 7.22a.75.75 0 11-1.06 1.06L3.5 4.56v2.69a.75.75 0 01-1.5 0v-3.5A1.75 1.75 0 013.75 2z"/>
          </svg>
        </a>
        <button class="lang-toggle" @click="toggleLocale">
          {{ t('lang.toggle') }}
        </button>
      </nav>
      <button
        class="mobile-menu-btn"
        :class="{ active: mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        id="mobile-menu-toggle"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile nav drawer -->
    <Transition name="slide-down">
      <nav v-if="mobileOpen" class="mobile-nav" id="mobile-nav">
        <a href="#runes" class="nav-link" @click="mobileOpen = false">{{ t('nav.runes') }}</a>
        <a href="#runewords" class="nav-link" @click="mobileOpen = false">{{ t('nav.runewords') }}</a>
        <a href="https://github.com" target="_blank" rel="noopener" class="nav-link">GitHub</a>
        <button class="nav-link" @click="toggleLocale">{{ t('lang.toggle') }}</button>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

import logoUrl from '../assets/logo.svg'

const { t, toggleLocale } = useI18n()

const isScrolled = ref(false)
const mobileOpen = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  transition:
    background var(--transition-normal),
    box-shadow var(--transition-normal),
    backdrop-filter var(--transition-normal);
}

.header-scrolled {
  background: rgba(6, 6, 12, 0.88);
  backdrop-filter: blur(16px) saturate(1.2);
  -webkit-backdrop-filter: blur(16px) saturate(1.2);
  box-shadow: 0 1px 0 rgba(196, 160, 50, 0.1), var(--shadow-md);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--color-gold-bright);
  transition: opacity var(--transition-fast);
}

.header-brand:hover {
  opacity: 0.85;
  color: var(--color-gold-bright);
}

.header-logo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
}

.header-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-link {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  letter-spacing: 0.03em;
  position: relative;
  padding: var(--space-xs) 0;
  transition: color var(--transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-gold);
  transition: width var(--transition-normal);
}

.nav-link:hover {
  color: var(--color-gold);
}

.nav-link:hover::after {
  width: 100%;
}

.icon-external {
  opacity: 0.5;
  transition: opacity var(--transition-fast);
}

.nav-link:hover .icon-external {
  opacity: 1;
}

.lang-toggle {
  background: rgba(196, 160, 50, 0.1);
  border: 1px solid var(--color-border);
  color: var(--color-gold);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.lang-toggle:hover {
  background: rgba(196, 160, 50, 0.2);
  border-color: var(--color-gold);
  color: var(--color-gold-bright);
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  cursor: pointer;
}

.mobile-menu-btn span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-gold);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
  border-radius: 1px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl) var(--space-lg);
  background: rgba(6, 6, 12, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--color-border);
}

.mobile-nav .nav-link {
  font-size: 1.05rem;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s var(--ease-out);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .header-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>
