import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/auth/Login.vue";
import Dashoard from "../views/dashboard/Dashoard.vue";
import Post from "../views/dashboard/posts/Post.vue";
import PostCreate from "../views/dashboard/posts/PostCreate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashoard,
    },
    {
      path: "/posts",
      name: "posts.",
      children: [
        {
          path: '',
          name: 'index',
          component: Post
        },
        {
          path: 'create',
          name: 'create',
          component: PostCreate
        }
      ],
    },
  ],
});

export default router;
