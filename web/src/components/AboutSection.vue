<script setup>
import { portfolioData } from '../data'
import { BookOpen, Briefcase } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-grid">
        <div class="about-text glass-panel" data-aos="fade-right">
          <p>{{ portfolioData.profile.about }}</p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-value">3.79</span>
              <span class="stat-label">GPA</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">7+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">2</span>
              <span class="stat-label">Certificates</span>
            </div>
          </div>
        </div>
        
        <div class="experience-timeline glass-panel" data-aos="fade-left">
          <h3 class="timeline-title">Education & Experience</h3>
          <div class="timeline">
            <div v-for="(item, index) in portfolioData.education" :key="index" class="timeline-item" data-aos="fade-up" :data-aos-delay="index * 100">
              <div class="timeline-icon" :class="item.type">
                <BookOpen v-if="item.type === 'education' || item.type === 'course'" :size="16" />
                <Briefcase v-else :size="16" />
              </div>
              <div class="timeline-content">
                <h4>{{ item.title || item.degree }}</h4>
                <p class="institution">{{ item.company || item.institution }}</p>
                <span v-if="item.gpa" class="gpa-badge">GPA: {{ item.gpa }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 5rem 0;
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.about-text {
  padding: 2.5rem;
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about-text p {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.stats {
  display: flex;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-family: var(--font-primary);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary-light);
  line-height: 1;
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.experience-timeline {
  padding: 2.5rem;
  border-radius: var(--radius-xl);
}

.timeline-title {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: var(--color-text);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 2px;
  background: rgba(0, 0, 0, 0.1);
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.timeline-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border: 2px solid var(--color-primary);
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.timeline-icon.experience {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.timeline-icon.course {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}

.timeline-content h4 {
  font-size: 1.125rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.institution {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.gpa-badge {
  display: inline-block;
  margin-top: 0.5rem;
  background: rgba(139, 92, 246, 0.2);
  color: var(--color-primary-light);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
  }
  
  .stats {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  .stat-value {
    font-size: 2rem;
  }
  
  .about-text {
    padding: 1.5rem;
  }
  
  .experience-timeline {
    padding: 1.5rem;
  }
}
</style>
