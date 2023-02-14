<template>
  <transition name="modal-animation">
    <div v-show="isOpen" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="isOpen" class="modal-inner">
          <slot/>
          <ButtonStandard v-if="!hideButton" label="Close" type-class="typeTwo" @click="close" />
          <ButtonStandard label="Save 🚀" @click="save" v-if="action && !hideButton"/>
          <div v-if="hideButton" style="text-align: center">Loading...</div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import ButtonStandard from "@/components/ButtonStandard";
export default {
  name: "ModalStandard",
  components: {
    ButtonStandard
  },
  props: {
    isOpen: Boolean,
    hideButton: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: true
    }
  },
  setup(props, {emit}){
    const close = () => {
      emit("close");
    }

    const save = () => {
      emit("save");
    }

    return {close, save};
  }
}
</script>
