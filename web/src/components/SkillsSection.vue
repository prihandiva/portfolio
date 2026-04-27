<script setup>
import { portfolioData } from '../data'
import { CheckCircle2, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="skills-grid">
        
        <!-- Technical Skills -->
        <div class="skill-column">
          <h2 class="section-title" style="text-align: left;" data-aos="fade-right">My Skills</h2>
          <div class="tech-skills-container">
            <div v-for="(skill, index) in portfolioData.skills" :key="index" class="tech-skill glass-panel" data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="skill-image">
                <img :src="skill.image" :alt="skill.name" loading="lazy" />
              </div>
              <div class="skill-info">
                <CheckCircle2 class="skill-icon" :size="20" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
          
          <div class="organizations-container mt-4">
            <h3 class="sub-title" data-aos="fade-right">Organizations</h3>
            <div class="org-list">
              <div v-for="(org, index) in portfolioData.organizations" :key="index" class="org-item glass-panel" data-aos="fade-up" :data-aos-delay="index * 150">
                <div class="org-image">
                  <img :src="org.image" :alt="org.name" loading="lazy" />
                </div>
                <div class="org-content-wrapper">
                  <div class="org-header">
                    <Users class="org-icon" :size="18" />
                    <h4>{{ org.name }}</h4>
                  </div>
                  <ul class="role-list">
                    <li v-for="(role, rIndex) in org.roles" :key="rIndex">{{ role }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="skill-column">
          <h2 class="section-title" style="text-align: left;" data-aos="fade-left">Soft Skills</h2>
          <div class="soft-skills-list">
            <div v-for="(skill, index) in portfolioData.softSkills" :key="index" class="soft-skill-card glass-panel" data-aos="fade-left" :data-aos-delay="index * 150">
              <div class="skill-number">0{{ index + 1 }}</div>
              <div class="skill-content">
                <h4>{{ skill.title }}</h4>
                <p>{{ skill.description }}</p>
                <div class="soft-skill-image">
                  <img :src="skill.image" :alt="skill.title" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 5rem 0;
  position: relative;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.tech-skills-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-skill {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
}

.skill-image {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.skill-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skill-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.tech-skill:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.9);
  border-color: var(--color-primary-light);
}

.skill-icon {
  color: var(--color-primary);
}

.mt-4 {
  margin-top: 3rem;
}

.sub-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-family: var(--font-primary);
}

.org-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.org-item {
  padding: 1rem;
  border-radius: var(--radius-md);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.org-image {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.org-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.org-content-wrapper {
  flex: 1;
}

.org-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.org-icon {
  color: var(--color-accent);
}

.org-header h4 {
  font-size: 1.1rem;
  color: var(--color-text);
}

.role-list {
  list-style: none;
  padding-left: 2rem;
}

.role-list li {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.role-list li::before {
  content: '•';
  color: var(--color-primary);
  position: absolute;
  left: -1rem;
}

.soft-skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.soft-skill-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
}

.soft-skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  border-color: rgba(244, 114, 182, 0.3); /* accent color */
}

.skill-number {
  font-family: var(--font-primary);
  font-size: 3rem;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.1);
  line-height: 1;
  transition: var(--transition-normal);
}

.soft-skill-card:hover .skill-number {
  -webkit-text-stroke: 1px var(--color-accent);
  color: rgba(244, 114, 182, 0.1);
}

.skill-content h4 {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.skill-content p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.soft-skill-image {
  width: 100%;
  height: 150px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-top: 1rem;
}

.soft-skill-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}

.soft-skill-card:hover .soft-skill-image img {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 0;
  }
  
  .tech-skill {
    padding: 0.75rem;
    gap: 1rem;
  }
  
  .skill-image {
    width: 50px;
    height: 50px;
  }
  
  .skill-info {
    font-size: 1rem;
  }
  
  .org-item {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }
  
  .soft-skill-card {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .skill-number {
    font-size: 2.5rem;
  }
  
  .soft-skill-image {
    height: 120px;
  }
}
</style>
