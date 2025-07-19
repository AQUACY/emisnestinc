<template>
  <footer class="footer-new">
    <div class="footer-container">
      <div class="footer-content">
        <!-- Navigation Links (Left Side) -->
        <div class="footer-nav">
          <div class="nav-column">
            <a href="#" class="nav-link">Privacy Policy</a>
            <a href="#" class="nav-link">Privacy Notice</a>
            <a href="#" class="nav-link">Terms of Use</a>
            <a href="#" class="nav-link">Contact Us</a>
          </div>
          <div class="nav-column">
            <a href="#" class="nav-link">Forward-Looking Statements</a>
            <a href="#" class="nav-link">Newsroom</a>
            <a href="#" class="nav-link">Locations</a>
            <a href="#" class="nav-link">Investors</a>
          </div>
        </div>

        <!-- Branding and Copyright (Center) -->
        <div class="footer-branding">
          <div class="xpo-logo">XPO</div>
          <div class="copyright">© 2025 XPO, Inc. All rights reserved.</div>
        </div>

        <!-- Social Media Icons (Right Side) -->
        <div class="footer-social">
          <div class="social-icon" @click="handleSocialClick('facebook')">
            <q-icon name="facebook" size="1.2rem" />
          </div>
          <div class="social-icon" @click="handleSocialClick('twitter')">
            <q-icon name="twitter" size="1.2rem" />
          </div>
          <div class="social-icon" @click="handleSocialClick('linkedin')">
            <q-icon name="linkedin" size="1.2rem" />
          </div>
          <div class="social-icon" @click="handleSocialClick('youtube')">
            <q-icon name="play_arrow" size="1.2rem" />
          </div>
          <div class="social-icon" @click="handleSocialClick('instagram')">
            <q-icon name="camera_alt" size="1.2rem" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  name: "AppFooter",
  setup() {
    const $q = useQuasar();

    const handleSocialClick = (platform) => {
      $q.notify({
        type: "info",
        message: `${platform} page will open`,
        position: "top",
      });
    };

    return {
      handleSocialClick,
    };
  },
};
</script>

<style scoped>
/* Footer Styles */
.footer-new {
  background: #f5f5f5;
  color: #000;
  padding: 2rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

.footer-nav {
  display: flex;
  gap: 3rem;
}

.nav-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 400;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #dc3545;
}

.footer-branding {
  text-align: center;
  flex-shrink: 0;
}

.xpo-logo {
  font-size: 2rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.copyright {
  font-size: 0.875rem;
  color: #000;
  font-weight: 400;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.social-icon {
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background: #dc3545;
}

.social-icon .q-icon {
  color: white;
}

/* Mobile Responsive Footer */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .footer-nav {
    justify-content: center;
    gap: 2rem;
  }

  .footer-social {
    justify-content: center;
  }

  .social-icon {
    width: 35px;
    height: 35px;
  }
}
</style>
