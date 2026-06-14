/**
 * Simple i18n composable for Chinese/English language switching
 */
import { ref, computed, provide, inject } from 'vue'

const LOCALE_KEY = 'd2r-locale'
const I18N_SYMBOL = Symbol('i18n')

const translations = {
  'zh-TW': {
    // Header
    'nav.runes': '符文一覽',
    'nav.runewords': '符文之語',
    // Hero
    'hero.title1': '暗黑破壞神 II',
    'hero.title2': '獄火重生',
    'hero.subtitle': '符文與符文之語完整攻略資料庫',
    'hero.badge1': '33 符文',
    'hero.badge2': '12+ 符文之語',
    'hero.badge3': '完整中文翻譯',
    'hero.cta': '開始探索',
    // Runes section
    'runes.title': '符文一覽',
    'runes.subtitle': 'Sanctuary 世界中的 33 顆符文，從最基礎的 El 到傳說的 Zod',
    'runes.search': '搜尋符文名稱或效果...',
    'runes.empty': '沒有找到符合的符文 🔍',
    // Runewords section
    'runewords.title': '符文之語',
    'runewords.subtitle': '將符文嵌入特定裝備，釋放強大的組合力量',
    'runewords.search': '搜尋符文之語名稱或屬性...',
    'runewords.empty': '沒有找到符合的符文之語 🔍',
    'runewords.details': '屬性詳情',
    // Footer
    'footer.tagline': '暗黑破壞神 II：獄火重生 攻略資料庫',
    'footer.copy': '遊戲內容版權歸 Blizzard Entertainment 所有。',
    'footer.credit': '以 Vue 3 + Vite 用 ❤️ 打造',
    // Language
    'lang.toggle': 'EN',
  },
  en: {
    // Header
    'nav.runes': 'Runes',
    'nav.runewords': 'Runewords',
    // Hero
    'hero.title1': 'Diablo II',
    'hero.title2': 'Resurrected',
    'hero.subtitle': 'Complete Rune & Runeword Database',
    'hero.badge1': '33 Runes',
    'hero.badge2': '12+ Runewords',
    'hero.badge3': 'Full Reference',
    'hero.cta': 'Explore Now',
    // Runes section
    'runes.title': 'Runes',
    'runes.subtitle': 'All 33 runes in the world of Sanctuary, from the humble El to the legendary Zod',
    'runes.search': 'Search rune name or effect...',
    'runes.empty': 'No matching runes found 🔍',
    // Runewords section
    'runewords.title': 'Runewords',
    'runewords.subtitle': 'Socket runes into specific items to unleash powerful combined effects',
    'runewords.search': 'Search runeword name or properties...',
    'runewords.empty': 'No matching runewords found 🔍',
    'runewords.details': 'Properties',
    // Footer
    'footer.tagline': 'Diablo II: Resurrected — Game Guide Database',
    'footer.copy': 'Game content is the property of Blizzard Entertainment.',
    'footer.credit': 'Built with Vue 3 + Vite with ❤️',
    // Language
    'lang.toggle': '中文',
  },
}

/**
 * Create i18n instance and provide to descendants
 */
export function createI18n() {
  const savedLocale = localStorage.getItem(LOCALE_KEY) || 'zh-TW'
  const locale = ref(savedLocale)

  const t = (key) => {
    return translations[locale.value]?.[key] ?? key
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'zh-TW' ? 'en' : 'zh-TW'
    localStorage.setItem(LOCALE_KEY, locale.value)
  }

  const isZH = computed(() => locale.value === 'zh-TW')

  const i18n = { locale, t, toggleLocale, isZH }

  return {
    ...i18n,
    install: (app) => {
      app.provide(I18N_SYMBOL, i18n)
    },
  }
}

/**
 * Use i18n in child components
 */
export function useI18n() {
  const i18n = inject(I18N_SYMBOL)
  if (!i18n) {
    throw new Error('useI18n() called without createI18n() — did you forget app.use(i18n)?')
  }
  return i18n
}
