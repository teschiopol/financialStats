<template>
  <div class="sidebar" :style="{width: sidebarWidth}" >
    <h1 @click="toggleSidebar" style="cursor:pointer;">
      <span v-if="collapsed">
        FS
      </span>
      <span v-else>
        Financial
      </span>
    </h1>

    <SidebarLink :collapsed="collapsed" to="/" icon="fas fa-house" @close="close">Home</SidebarLink>
    <SidebarLink :collapsed="collapsed" to="/list" icon="fas fa-chart-simple" @close="close">List</SidebarLink>
    <SidebarLink :collapsed="collapsed" to="/category" icon="fas fa-book" @close="close">Category</SidebarLink>
    <SidebarLink :collapsed="collapsed" to="/relevance" icon="fas fa-bolt" @close="close">Relevance</SidebarLink>
    <SidebarLink :collapsed="collapsed" to="/settings" icon="fas fa-gear" @close="close">Settings</SidebarLink>
    <SidebarLink :collapsed="collapsed" to="/logout" icon="fas fa-right-from-bracket" @close="logout">Logout</SidebarLink>

    <span class="collapse-icon" :class="{'rotate-180': collapsed}" @click="toggleSidebar">
      <i class="fas fa-angle-double-left"/>
    </span>
  </div>
</template>

<script>
  import {ref} from "vue";
  import SidebarLink from "@/components/SidebarLink";
  import router from "@/routers";

  export default {
    name: "SidebarStandard",
    components: {SidebarLink},
    setup(){
      const SIDEBAR_WIDTH = 180;
      const SIDEBAR_COLLAPSED = 38;
      const collapsed = ref(true);
      const sidebarWidth = ref(SIDEBAR_WIDTH);

      const toggleSidebar = () => {
        collapsed.value = !collapsed.value;
        if(collapsed.value){
          sidebarWidth.value = `${SIDEBAR_COLLAPSED}px`;
        }else{
          sidebarWidth.value = `${SIDEBAR_WIDTH}px`;
        }
      };

      const close = () => {
        if(!collapsed.value) {
          toggleSidebar();
        }
      };

      const logout = () => {
        localStorage.setItem('user-info', '');
        router.push({name: "Login"});
      };

      return{collapsed, sidebarWidth, toggleSidebar, close, logout};

    }
  }
</script>

<style scoped>
  .sidebar{
    color: var(--white);
    background-color: var(--suscyan);
    float: left;
    position: fixed;
    z-index:10;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease;
    width: 38px;
    text-align: center;
  }

  .collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    transition: 0.2s linear;
    cursor: pointer;
  }

  .rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
  }

</style>
