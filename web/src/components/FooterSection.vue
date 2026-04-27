<script setup>
import { portfolioData } from '../data'
import { Heart, Linkedin, Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>Prihandiva.</h3>
          <p>Building beautiful and functional systems for the web and beyond.</p>
        </div>
        
        <div class="footer-social">
          <a :href="portfolioData.profile.linkedin" target="_blank" class="social-icon">
            <Linkedin :size="20" />
          </a>
          <a href="https://github.com/prihandiva" target="_blank" class="social-icon">
            <Github :size="20" />
          </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>
          Designed & Built with <Heart :size="14" class="heart-icon" /> by {{ portfolioData.profile.name }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-surface);
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  margin-top: 5rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: var(--color-text-muted);
  max-width: 300px;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: var(--transition-fast);
}

.social-icon:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.heart-icon {
  color: var(--color-accent);
  display: inline-block;
  margin: 0 0.25rem;
  animation: pulse-glow 2s infinite;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}
</style>
