import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import StudentList from "../components/StudentList.vue";
import StudentDetail from "../components/StudentDetail.vue";
import StudentForm from "../components/StudentForm.vue";
import Home from "../views/Home.vue"; // Import the 'Home' component

// Remove the declaration of "componentOptions"
declare module "../views/Home.vue" {
  // export { component as default };
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "StudentList",
    component: StudentList,
  },
  {
    path: "/students/:id",
    name: "StudentDetail",
    component: StudentDetail,
  },
  {
    path: "/students/new",
    name: "StudentForm",
    component: StudentForm,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
