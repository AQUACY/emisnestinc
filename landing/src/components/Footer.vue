<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Left Section - Branding & Social Media -->
        <div class="footer-branding">
          <!-- Logo -->
          <div class="footer-logo">
            <div class="eagle-icon">
              <i class="fas fa-eagle"></i>
            </div>
            <div class="logo-text">
              <div class="logo-primary">United</div>
              <div class="logo-secondary">Van Lines</div>
            </div>
          </div>

          <!-- Social Media Icons -->
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-tiktok"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-spotify"></i>
            </a>
          </div>
        </div>

        <!-- Middle Section - Navigation Links -->
        <div class="footer-navigation">
          <!-- Left Column -->
          <div class="nav-column">
            <a href="#" class="nav-link">ABOUT US</a>
            <a href="#" class="nav-link">NEWSROOM</a>
            <a href="#" class="nav-link">SIGN IN TO MYUNITED</a>
            <a href="#" class="nav-link">CORPORATE LOGIN</a>
            <a href="#" class="nav-link">SHIPMENT TRACKING</a>
            <a href="#" class="nav-link">SUBMIT A CLAIM</a>
            <a href="#" class="nav-link">BECOME AN AGENT</a>
            <a href="#" class="nav-link">COOKIE PREFERENCES</a>
          </div>

          <!-- Right Column -->
          <div class="nav-column">
            <a href="#" class="nav-link">DRIVE FOR UNITED VAN LINES</a>
            <a href="#" class="nav-link">LOGISTICS</a>
            <a href="#" class="nav-link">DATA SECURITY POLICY</a>
            <a href="#" class="nav-link">PRIVACY POLICY</a>
            <a href="#" class="nav-link">TERMS & CONDITIONS</a>
            <a href="#" class="nav-link"
              >DO NOT SELL OR SHARE MY PERSONAL INFORMATION</a
            >
            <a href="#" class="nav-link">SITEMAP</a>
          </div>
        </div>
      </div>

      <!-- Bottom Section - Copyright & Legal -->
      <div class="footer-bottom">
        <div class="footer-separator"></div>
        <div class="footer-legal">
          <div class="copyright">
            ©2024 United Van Lines®. All rights reserved
          </div>
          <div class="legal-info">
            U.S. DOT No. 077949 / TxDMV No. 0000005253 (1-888-368-4689)
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background: #0f2033;
  color: #ffffff;
  padding: 60px 0 20px 0;
  width: 100%;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main Footer Content */
.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

/* Left Section - Branding & Social Media */
.footer-branding {
  flex: 0 0 300px;
}

/* Logo */
.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.eagle-icon {
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #0f2033;
  font-size: 1.2rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-primary {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 2px;
}

.logo-secondary {
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
}

/* Social Media Icons */
.social-media {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.social-icon {
  width: 36px;
  height: 36px;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.social-icon:hover {
  background: #ffffff;
  color: #0f2033;
  transform: translateY(-2px);
}

/* Middle Section - Navigation Links */
.footer-navigation {
  display: flex;
  gap: 80px;
  flex: 1;
  justify-content: center;
}

.nav-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #60a5fa;
  transform: translateX(4px);
}

/* Bottom Section - Copyright & Legal */
.footer-bottom {
  margin-top: 40px;
}

.footer-separator {
  height: 1px;
  background: #60a5fa;
  margin-bottom: 20px;
}

.footer-legal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #ffffff;
}

.copyright {
  font-weight: normal;
}

.legal-info {
  font-weight: normal;
  text-align: right;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-main {
    flex-direction: column;
    gap: 40px;
  }

  .footer-branding {
    flex: none;
    width: 100%;
  }

  .footer-navigation {
    width: 100%;
    justify-content: space-between;
    gap: 40px;
  }

  .footer-legal {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .legal-info {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px 0;
  }

  .footer-container {
    padding: 0 1.5rem;
  }

  .footer-navigation {
    flex-direction: column;
    gap: 30px;
  }

  .nav-column {
    gap: 10px;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  .logo-primary {
    font-size: 1.6rem;
  }

  .logo-secondary {
    font-size: 0.9rem;
  }

  .social-media {
    gap: 6px;
  }

  .social-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 0 15px 0;
  }

  .footer-container {
    padding: 0 1rem;
  }

  .footer-main {
    gap: 30px;
  }

  .footer-branding {
    margin-bottom: 20px;
  }

  .eagle-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  .logo-primary {
    font-size: 1.4rem;
  }

  .logo-secondary {
    font-size: 0.8rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }

  .footer-legal {
    font-size: 0.8rem;
  }
}
</style>
