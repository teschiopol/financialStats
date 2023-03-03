import LoginPage from "@/components/page/LoginPage";
import HomePage from "@/components/page/HomePage";
import ListPage from "@/components/page/ListPage";
import CategoryPage from "@/components/page/CategoryPage";
import RelevancePage from "@/components/page/RelevancePage";
import NotFoundPage from "@/components/page/NotFoundPage";
import RecoveryPasswordPage from "@/components/page/RecoveryPasswordPage";
import RegistrationPage from "@/components/page/RegistrationPage";
import SettingPage from "@/components/page/SettingPage";
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
        name: "SettingPage",
        component: SettingPage,
        path: "/settings"
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
