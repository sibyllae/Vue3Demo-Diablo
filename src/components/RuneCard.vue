<template>
  <div
    class="rune-card card"
    :class="{ 'rune-card--high': rune.level >= 45 }"
    :id="`rune-${rune.id}`"
  >
    <!-- Rune symbol circle -->
    <div class="rune-symbol">
      <span class="rune-number">#{{ rune.id }}</span>
    </div>

    <h3 class="rune-name">{{ isZH ? rune.nameTW : rune.name }}</h3>
    <p class="rune-name-tw" v-if="isZH">{{ rune.name }}</p>

    <div class="rune-level">
      <span class="level-label">Lv</span>
      <span class="level-value">{{ rune.level || '—' }}</span>
    </div>

    <!-- Effects on hover / always visible on mobile -->
    <div class="rune-effects">
      <div class="effect-row">
        <span class="effect-icon">⚔️</span>
        <span class="effect-text">{{ rune.weaponEffect }}</span>
      </div>
      <div class="effect-row">
        <span class="effect-icon">🛡️</span>
        <span class="effect-text">{{ rune.armorEffect }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'

const { isZH } = useI18n()

defineProps({
  rune: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.rune-card {
  text-align: center;
  padding: var(--space-lg) var(--space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  cursor: default;
}

.rune-card--high {
  border-color: rgba(196, 160, 50, 0.25);
}

.rune-card--high .rune-symbol {
  background: linear-gradient(135deg, var(--color-red-deep), rgba(139, 26, 26, 0.5));
  border-color: var(--color-red);
  box-shadow: 0 0 15px rgba(196, 30, 58, 0.2);
}

.rune-card--high .rune-name {
  color: var(--color-red-bright);
}

/* Symbol circle */
.rune-symbol {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(196, 160, 50, 0.15), rgba(196, 160, 50, 0.05));
  border: 1px solid var(--color-border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-xs);
  transition: all var(--transition-normal);
}

.rune-card:hover .rune-symbol {
  box-shadow: var(--shadow-gold);
  border-color: var(--color-gold);
  transform: scale(1.08);
}

.rune-number {
  font-family: var(--font-display);
  font-size: 0.85rem;
  color: var(--color-gold);
  font-weight: 700;
}

.rune-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-gold-bright);
  letter-spacing: 0.04em;
}

.rune-name-tw {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-xs);
}

.rune-level {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: var(--space-sm);
}

.level-label {
  font-size: 0.7rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.level-value {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

/* Effects section */
.rune-effects {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    max-height 0.4s var(--ease-out),
    opacity 0.3s var(--ease-out),
    padding-top 0.3s var(--ease-out);
  padding-top: 0;
}

.rune-card:hover .rune-effects {
  max-height: 200px;
  opacity: 1;
  padding-top: var(--space-sm);
}

.effect-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  text-align: left;
}

.effect-icon {
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.effect-text {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .rune-effects {
    max-height: 200px;
    opacity: 1;
    padding-top: var(--space-sm);
  }
}
</style>
