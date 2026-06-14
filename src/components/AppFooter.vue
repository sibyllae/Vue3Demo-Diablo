<template>
  <footer class="app-footer" id="app-footer">
    <div class="footer-glow" aria-hidden="true"></div>
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo-text">D2R 攻略網</span>
        <p class="footer-tagline">{{ t('footer.tagline') }}</p>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copy">
          &copy; {{ currentYear }} D2R Guide. {{ t('footer.copy') }}
        </p>
        <p class="footer-credit">
          {{ t('footer.credit') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'

const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  position: relative;
  padding: var(--space-2xl) 0 var(--space-xl);
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold-dim), transparent);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-lg);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.footer-logo-text {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-gold);
  letter-spacing: 0.08em;
}

.footer-tagline {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.footer-divider {
  width: 60px;
  height: 1px;
  background: var(--color-border);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.footer-copy {
  font-size: 0.78rem;
  color: var(--color-text-muted);
}

.footer-credit {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  opacity: 0.6;
}
</style>
