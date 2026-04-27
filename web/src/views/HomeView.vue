<script setup>
import { onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import FooterSection from '../components/FooterSection.vue'
import { portfolioData } from '../data'
import { sanityClient, urlFor } from '../sanity'

onMounted(async () => {
  try {
    const query = `{
      "profile": *[_type == "profile"][0],
      "education": *[_type == "education"],
      "projects": *[_type == "project"] | order(id asc),
      "softSkills": *[_type == "softSkill"],
      "organizations": *[_type == "organization"]
    }`
    
    const data = await sanityClient.fetch(query)
    
    if (data.profile) {
      const { image, ...rest } = data.profile
      portfolioData.profile = {
        ...portfolioData.profile,
        ...rest,
        image: image ? urlFor(image).url() : portfolioData.profile.image
      }
    }
    
    if (data.education?.length) {
      portfolioData.education = data.education
    }
    
    if (data.projects?.length) {
      portfolioData.projects = data.projects.map(p => ({
        ...p,
        image: p.image ? urlFor(p.image).url() : p.image
      }))
    }
    
    if (data.softSkills?.length) {
      portfolioData.softSkills = data.softSkills.map(s => ({
        ...s,
        image: s.image ? urlFor(s.image).url() : s.image
      }))
    }
    
    if (data.organizations?.length) {
      portfolioData.organizations = data.organizations.map(o => ({
        ...o,
        image: o.image ? urlFor(o.image).url() : o.image
      }))
    }
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
  }
})
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
