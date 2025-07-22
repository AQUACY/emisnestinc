const routes = [
  {
    path: "/",
    component: () => import("layouts/NewLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/new/HomePage.vue"),
        meta: { title: "Home - Emi's Nest" },
      },
      {
        path: "/moving-service/long-distance",
        component: () => import("src/pages/new/MovingService/LongDistance.vue"),
        meta: { title: "Long Distance Movers - Emi's Nest" },
      },
      {
        path: "/moving-service/local-movers",
        component: () => import("src/pages/new/MovingService/LocalMovers.vue"),
        meta: { title: "Local Movers - Emi's Nest" },
      },
      {
        path: "/packing-unpacking/packing-services",
        component: () =>
          import("src/pages/new/packingunpacking/PackingAndUnpacking.vue"),
        meta: { title: "Packing and Unpacking - Emi's Nest" },
      },
      {
        path: "/about-us",
        component: () => import("src/pages/new/AboutUs.vue"),
        meta: { title: "About Us - Emi's Nest" },
      },
      {
        path: "/logistics",
        component: () => import("src/pages/new/LogisticPage.vue"),
        meta: { title: "Logistics - Emi's Nest" },
      },
      {
        path: "/packing-unpacking/storage",
        component: () =>
          import("src/pages/new/packingunpacking/StoragePage.vue"),
        meta: { title: "Storage - Emi's Nest" },
      },
      {
        path: "/blog",
        component: () => import("src/pages/new/NewsPage.vue"),
        meta: { title: "Blog - Emi's Nest" },
      },
      {
        path: "/faq",
        component: () => import("src/pages/new/FaqPage.vue"),
        meta: { title: "FAQ - Emi's Nest" },
      },
      {
        path: "/legal/privacy-policy",
        component: () => import("pages/new/Legal/PrivacyPolicy.vue"),
        meta: { title: "Privacy Policy - Emi's Nest" },
      },
      {
        path: "/legal/terms-of-service",
        component: () => import("pages/new/Legal/TermsOfService.vue"),
        meta: { title: "Terms of Service - Emi's Nest" },
      },
      {
        path: "/legal/cookie-policy",
        component: () => import("pages/new/Legal/CookiePolicy.vue"),
        meta: { title: "Cookie Policy - Emi's Nest" },
      },
      {
        path: "/legal/data-security",
        component: () => import("pages/new/Legal/DataSecurity.vue"),
        meta: { title: "Data Security - Emi's Nest" },
      },
      // {
      //   path: "/contact",
      //   component: () => import("pages/new/Contact.vue"),
      //   meta: { title: "Contact Us - Emi's Nest" },
      // },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/new/NotFound.vue"),
    meta: { title: "Page Not Found - Emi's Nest" },
  },
];

export default routes;
