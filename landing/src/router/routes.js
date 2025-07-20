const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/HomePage.vue"),
        meta: { title: "Home - Emi's Nest" },
      },
      {
        path: "/about",
        component: () => import("pages/About.vue"),
        meta: { title: "About Us - Emi's Nest" },
      },
      {
        path: "/careers/driver",
        component: () => import("pages/Careers/Driver.vue"),
        meta: { title: "Driver Career - Emi's Nest" },
      },
      {
        path: "/careers/dockworker",
        component: () => import("pages/Careers/Dockworker.vue"),
        meta: { title: "Dock Worker Career - Emi's Nest" },
      },
      {
        path: "/careers/mechanic",
        component: () => import("pages/Careers/Mechanic.vue"),
        meta: { title: "Mechanic Career - Emi's Nest" },
      },
      {
        path: "/legal/privacy-policy",
        component: () => import("pages/Legal/PrivacyPolicy.vue"),
        meta: { title: "Privacy Policy - Emi's Nest" },
      },
      {
        path: "/legal/terms-of-service",
        component: () => import("pages/Legal/TermsOfService.vue"),
        meta: { title: "Terms of Service - Emi's Nest" },
      },
      {
        path: "/legal/cookie-policy",
        component: () => import("pages/Legal/CookiePolicy.vue"),
        meta: { title: "Cookie Policy - Emi's Nest" },
      },
      {
        path: "/legal/data-security",
        component: () => import("pages/Legal/DataSecurity.vue"),
        meta: { title: "Data Security - Emi's Nest" },
      },
      {
        path: "/news",
        component: () => import("pages/News.vue"),
        meta: { title: "News - Emi's Nest" },
      },
      {
        path: "/services",
        component: () => import("pages/Services.vue"),
        meta: { title: "Services - Emi's Nest" },
      },
      {
        path: "/contact",
        component: () => import("pages/Contact.vue"),
        meta: { title: "Contact Us - Emi's Nest" },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/NotFound.vue"),
    meta: { title: "Page Not Found - Emi's Nest" },
  },
];

export default routes;
