<template>
  <div class="runeword-card card" :id="`runeword-${runeword.id}`">
    <div class="runeword-header">
      <div>
        <h3 class="runeword-name">{{ isZH ? runeword.nameTW : runeword.name }}</h3>
        <p class="runeword-name-tw" v-if="isZH">{{ runeword.name }}</p>
      </div>
      <span class="runeword-level">Lv {{ runeword.level }}</span>
    </div>

    <!-- Rune sequence -->
    <div class="rune-sequence">
      <span
        v-for="(rune, idx) in runeword.runes"
        :key="idx"
        class="rune-chip"
      >
        {{ rune }}
      </span>
    </div>

    <!-- Item types -->
    <div class="item-types">
      <span
        v-for="(type, idx) in runeword.itemTypes"
        :key="idx"
        class="item-type-tag"
      >
        {{ type }}
      </span>
    </div>

    <!-- Expandable properties -->
    <button
      class="properties-toggle"
      :class="{ expanded: isExpanded }"
      @click="isExpanded = !isExpanded"
      :id="`runeword-toggle-${runeword.id}`"
    >
      <span>{{ t('runewords.details') }}</span>
      <svg
        class="toggle-icon"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>

    <Transition name="expand">
      <ul v-if="isExpanded" class="properties-list">
        <li
          v-for="(prop, idx) in runeword.properties"
          :key="idx"
          class="property-item"
        >
          <span class="property-bullet">✦</span>
          {{ prop }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const { t, isZH } = useI18n()

defineProps({
  runeword: {
    type: Object,
    required: true,
  },
})

const isExpanded = ref(false)
</script>

<style scoped>
.runeword-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.runeword-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.runeword-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-gold-bright);
  letter-spacing: 0.04em;
}

.runeword-name-tw {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-top: 2px;
}

.runeword-level {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-red-bright);
  background: rgba(196, 30, 58, 0.1);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(196, 30, 58, 0.2);
  white-space: nowrap;
}

/* Rune sequence */
.rune-sequence {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.rune-chip {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-gold);
  background: linear-gradient(135deg, rgba(196, 160, 50, 0.12), rgba(196, 160, 50, 0.04));
  border: 1px solid var(--color-border-hover);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  letter-spacing: 0.03em;
  transition: all var(--transition-fast);
}

.runeword-card:hover .rune-chip {
  border-color: var(--color-gold-dim);
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.15);
}

/* Item types */
.item-types {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.item-type-tag {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.04);
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* Properties toggle */
.properties-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-sm) 0;
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  border-top: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}

.properties-toggle:hover {
  color: var(--color-gold);
}

.toggle-icon {
  transition: transform var(--transition-normal);
}

.properties-toggle.expanded .toggle-icon {
  transform: rotate(180deg);
}

/* Properties list */
.properties-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0;
  margin: 0;
}

.property-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.property-bullet {
  color: var(--color-gold-dim);
  font-size: 0.7rem;
  margin-top: 4px;
  flex-shrink: 0;
}

/* Expand transition */
.expand-enter-active {
  transition: all 0.35s var(--ease-out);
  overflow: hidden;
}

.expand-leave-active {
  transition: all 0.25s var(--ease-out);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 600px;
  transform: translateY(0);
}
</style>
