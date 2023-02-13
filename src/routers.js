import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/HomePage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/"
    },
    {
        name: "Login",
        component: LoginPage,
        path: "/login"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
