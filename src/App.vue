<template>
  <AppHeader />

  <main>
    <HeroSection />

    <!-- Runes Section -->
    <section class="section" id="runes">
      <div class="container">
        <h2 class="section-title">{{ t('runes.title') }}</h2>
        <p class="section-subtitle">
          {{ t('runes.subtitle') }}
        </p>
        <div class="separator"></div>

        <input
          type="text"
          class="search-input"
          :placeholder="t('runes.search')"
          v-model="runeSearch"
          id="rune-search"
        />

        <div class="grid-runes">
          <RuneCard
            v-for="rune in filteredRunes"
            :key="rune.id"
            :rune="rune"
          />
        </div>

        <p v-if="filteredRunes.length === 0" class="empty-state">
          {{ t('runes.empty') }}
        </p>
      </div>
    </section>

    <!-- Runewords Section -->
    <section class="section" id="runewords">
      <div class="container">
        <h2 class="section-title">{{ t('runewords.title') }}</h2>
        <p class="section-subtitle">
          {{ t('runewords.subtitle') }}
        </p>
        <div class="separator"></div>

        <input
          type="text"
          class="search-input"
          :placeholder="t('runewords.search')"
          v-model="runewordSearch"
          id="runeword-search"
        />

        <div class="grid-runewords">
          <RunewordCard
            v-for="rw in filteredRunewords"
            :key="rw.id"
            :runeword="rw"
          />
        </div>

        <p v-if="filteredRunewords.length === 0" class="empty-state">
          {{ t('runewords.empty') }}
        </p>
      </div>
    </section>
  </main>

  <AppFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import RuneCard from './components/RuneCard.vue'
import RunewordCard from './components/RunewordCard.vue'
import { runes } from './data/runes.js'
import { runewords } from './data/runewords.js'
import { useI18n } from './composables/useI18n.js'

const { t } = useI18n()

// Search state
const runeSearch = ref('')
const runewordSearch = ref('')

// Filtered data
const filteredRunes = computed(() => {
  const q = runeSearch.value.toLowerCase().trim()
  if (!q) return runes
  return runes.filter(
    (r) =>
      r.name.toLowerCase().includes(q) ||
      r.nameTW.includes(q) ||
      r.weaponEffect.toLowerCase().includes(q) ||
      r.armorEffect.toLowerCase().includes(q),
  )
})

const filteredRunewords = computed(() => {
  const q = runewordSearch.value.toLowerCase().trim()
  if (!q) return runewords
  return runewords.filter(
    (rw) =>
      rw.name.toLowerCase().includes(q) ||
      rw.nameTW.includes(q) ||
      rw.runes.some((r) => r.toLowerCase().includes(q)) ||
      rw.properties.some((p) => p.toLowerCase().includes(q)),
  )
})
</script>

<style>
/* Section-level spacing from header */
main {
  padding-top: 0;
}

.empty-state {
  text-align: center;
  color: var(--color-text-muted);
  padding: var(--space-2xl) 0;
  font-size: 1rem;
}
</style>
