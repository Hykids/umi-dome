export default [
  {
    path: "/",
    redirect: "./home",
  },
  {
    path: "/",
    component: "@/layouts/index",
    routes: [
      {
        path: "/home",
        name: "首页",
        component: "@/pages/home/index",
      },
      {
        path: "/404",
        component: "@/pages/404",
      },
    ],
  },
];
