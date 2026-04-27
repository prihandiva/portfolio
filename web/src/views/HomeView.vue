<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="portfolio-layout">
    <Navbar />
    
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.portfolio-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
