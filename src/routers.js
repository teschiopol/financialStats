import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/HomePage";
import ListPage from "@/components/ListPage";
import CategoryPage from "@/components/CategoryPage";
import RelevancePage from "@/components/RelevancePage";
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
    },
    {
        name: "List",
        component: ListPage,
        path: "/list"
    },
    {
        name: "Category",
        component: CategoryPage,
        path: "/category"
    },
    {
        name: "Relevance",
        component: RelevancePage,
        path: "/relevance"
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
