import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/HomePage";
import ListPage from "@/components/ListPage";
import CategoryPage from "@/components/CategoryPage";
import RelevancePage from "@/components/RelevancePage";
import NotFoundPage from "@/components/NotFoundPage";
import RecoveryPasswordPage from "@/components/RecoveryPasswordPage";
import RegistrationPage from "@/components/RegistrationPage";
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
    {
        name: "SignUp",
        component: RegistrationPage,
        path: "/registration"
    },
    {
        name: "RecoveryPassword",
        component: RecoveryPasswordPage,
        path: "/recovery-password"
    },
    {
        name: "404",
        component: NotFoundPage,
        path: "/:pathMatch(.*)*"
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
