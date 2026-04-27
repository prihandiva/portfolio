<script setup>
import { portfolioData } from '../data'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="hero-section">
    <div class="container hero-container">
      <div class="hero-content" data-aos="fade-right">
        <div class="badge animate-float">👋 Hello, Welcome!</div>
        <h1 class="title">
          I'm <span class="highlight">{{ portfolioData.profile.nickname }}</span>
        </h1>
        <h2 class="subtitle">{{ portfolioData.profile.title }}</h2>
        <p class="description">
          I'm a final-year student passionate about system analysis and development. Let's build something amazing together!
        </p>
        
        <div class="actions">
          <a href="#projects" class="btn-primary">
            View My Work <ArrowRight :size="20" />
          </a>
          <div class="social-links">
            <a :href="portfolioData.profile.linkedin" target="_blank" class="social-btn" aria-label="LinkedIn">
              <Linkedin :size="24" />
            </a>
            <!-- Adding a dummy GitHub/Mail for aesthetics -->
            <a href="https://github.com/prihandiva" target="_blank" class="social-btn" aria-label="GitHub">
              <Github :size="24" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="hero-visual" data-aos="fade-left" data-aos-delay="200">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="glass-card main-card">
          <div class="profile-img-placeholder">
            <img :src="portfolioData.profile.image" alt="Prihandiva" />
          </div>
          <div class="floating-badge badge-1 animate-float" style="animation-delay: 1s">
            ✨ System Analyst
          </div>
          <div class="floating-badge badge-2 animate-float" style="animation-delay: 2s">
            🚀 Web Dev
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(139, 92, 246, 0.1);
  color: var(--color-primary-light);
  border-radius: var(--radius-full);
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.highlight {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 2rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  max-width: 500px;
  margin-bottom: 2.5rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-normal);
  color: var(--color-text-muted);
}

.social-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.hero-visual {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blob {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.5;
  border-radius: 50%;
  animation: pulse-glow 8s infinite alternate;
}

.blob-1 {
  width: 300px;
  height: 300px;
  background: var(--color-primary);
  top: 10%;
  right: 10%;
}

.blob-2 {
  width: 250px;
  height: 250px;
  background: var(--color-secondary);
  bottom: 10%;
  left: 10%;
  animation-delay: -4s;
}

.main-card {
  width: 320px;
  height: 400px;
  border-radius: var(--radius-xl);
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.profile-img-placeholder {
  width: 200px;
  height: 200px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  padding: 4px;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.profile-img-placeholder img {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  object-fit: cover;
  background: var(--color-surface);
}

.floating-badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.875rem;
  border: 1px solid rgba(255,255,255,0.5);
  box-shadow: 0 8px 32px rgba(124, 58, 237, 0.1);
  color: var(--color-text);
}

.badge-1 {
  top: 15%;
  right: -10%;
}

.badge-2 {
  bottom: 20%;
  left: -15%;
}

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .description {
    margin: 0 auto 2.5rem;
  }
  
  .actions {
    justify-content: center;
  }
  
  .badge-1, .badge-2 {
    display: none;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
  
  .main-card {
    width: 100%;
    max-width: 320px;
    height: auto;
    aspect-ratio: 4/5;
  }
  
  .profile-img-placeholder {
    width: 160px;
    height: 160px;
  }
  
  .actions {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .blob-1, .blob-2 {
    width: 200px;
    height: 200px;
  }
}
</style>
