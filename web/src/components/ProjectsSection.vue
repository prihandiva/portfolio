<script setup>
import { portfolioData } from '../data'
import { ExternalLink, Github } from 'lucide-vue-next'

const getGradient = (color) => {
  switch (color) {
    case 'blue': return 'linear-gradient(135deg, #3b82f6, #60a5fa)';
    case 'purple': return 'linear-gradient(135deg, #8b5cf6, #a78bfa)';
    case 'pink': return 'linear-gradient(135deg, #f472b6, #fb7185)';
    case 'navy': return 'linear-gradient(135deg, #1e3a8a, #3b82f6)';
    default: return 'linear-gradient(135deg, #8b5cf6, #3b82f6)';
  }
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      
      <div class="projects-grid">
        <div v-for="(project, index) in portfolioData.projects" :key="project.id" class="project-card glass-panel" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="project-header">
            <div class="project-icon" :style="{ background: getGradient(project.color) }">
              {{ project.id || index + 1 }}
            </div>
            <div class="project-links">
              <a v-if="project.link && project.link.includes('github')" :href="project.link" target="_blank" class="icon-link">
                <Github :size="20" />
              </a>
              <a v-else-if="project.link" :href="project.link" target="_blank" class="icon-link">
                <ExternalLink :size="20" />
              </a>
              <a v-if="project.demoLink" :href="project.demoLink" target="_blank" class="icon-link">
                <ExternalLink :size="20" />
              </a>
            </div>
          </div>
          
          <div class="project-image" v-if="project.image">
            <img :src="project.image" :alt="project.title" loading="lazy" />
          </div>
          
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-tech">{{ project.tech }}</div>
          <p class="project-desc">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 2rem;
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  border-color: rgba(139, 92, 246, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.icon-link {
  color: var(--color-text-muted);
  transition: var(--transition-fast);
}

.icon-link:hover {
  color: var(--color-primary);
  transform: scale(1.1);
}

.project-image {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-title {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.project-tech {
  font-size: 0.875rem;
  color: var(--color-primary-light);
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-desc {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 0;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: 1.5rem;
  }
}
</style>
