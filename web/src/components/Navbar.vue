<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isDark = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check system preference or saved theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' }
]
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container navbar-container">
      <div class="logo">
        <a href="#home">
          <span class="logo-accent">P</span>rihandiva.
        </a>
      </div>

      <!-- Desktop Nav -->
      <div class="nav-links desktop-only">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" class="nav-link">
          {{ link.name }}
        </a>
        <button class="theme-toggle" @click="toggleTheme" :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <a href="https://linkedin.com/in/prihandiva" target="_blank" class="btn-primary" style="margin-left: 1rem">
          Let's Talk
        </a>
      </div>

      <!-- Mobile Controls -->
      <div class="mobile-controls">
        <button class="theme-toggle mobile-menu-btn" style="margin-right: 1rem; display: block;" @click="toggleTheme">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
          <div :class="['hamburger', { 'is-active': isMenuOpen }]">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div :class="['mobile-nav', { 'is-open': isMenuOpen }]">
      <a 
        v-for="link in navLinks" 
        :key="link.name" 
        :href="link.href" 
        class="mobile-nav-link"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </a>
      <a href="https://linkedin.com/in/prihandiva" target="_blank" class="mobile-nav-link" style="color: var(--color-primary-light)">
        LinkedIn
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 0;
  transition: var(--transition-normal);
}

.navbar-scrolled {
  padding: 1rem 0;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--nav-border);
  box-shadow: 0 4px 30px var(--nav-shadow);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-primary);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--color-text);
}

.logo-accent {
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--color-text-muted);
  transition: var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary-light);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: var(--transition-fast);
}

.nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  background: rgba(139, 92, 246, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: var(--transition-fast);
}

.theme-toggle:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: scale(1.1);
}

.mobile-controls {
  display: none;
  align-items: center;
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  z-index: 101;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--color-text);
  border-radius: 2px;
  transition: var(--transition-normal);
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: translateY(-100%);
  transition: var(--transition-normal);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.mobile-nav.is-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.mobile-nav-link {
  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 600;
  color: var(--color-text);
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .mobile-controls {
    display: flex;
  }
}
</style>
