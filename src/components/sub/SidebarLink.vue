<template>
  <router-link :to="to" class="link" @click="closeSideBar">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot/>
      </span>
    </transition>
  </router-link>
</template>

<script>
  export default {
    name: "SidebarLink",
    props: {
      to: String,
      icon: String,
      collapsed: Boolean
    },
    setup(props, {emit}){
      const closeSideBar = () =>{
        emit("close");
      };
      return {closeSideBar};
    }
  }
</script>

<style scoped>
  .link{
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;
    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;
    color: var(--white);
    text-decoration: none;
  }
  .link:hover{
    background-color: var(--darkcyan);
  }
  .link .icon{
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.1s;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }

  .router-link-active{
    background-color: var(--altblu);
  }
</style>
