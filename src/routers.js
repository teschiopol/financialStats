import LoginPage from "@/components/LoginPage";
import HomeBase from "@/components/HomeBase";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: "Home",
        component: HomeBase,
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
