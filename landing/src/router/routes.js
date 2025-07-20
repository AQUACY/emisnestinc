const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      { path: "/ship", component: () => import("pages/Ship.vue") },
      { path: "/track", component: () => import("pages/Track.vue") },
      { path: "/quote", component: () => import("pages/Quote.vue") },
      { path: "/services", component: () => import("pages/Services.vue") },
      { path: "/careers", component: () => import("pages/Careers.vue") },
      { path: "/company", component: () => import("pages/Company.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
