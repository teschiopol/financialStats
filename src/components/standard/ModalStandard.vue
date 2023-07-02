<template>
  <transition name="modal-animation">
    <div v-show="isOpen" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="isOpen" class="modal-inner">
          <slot/>
          <div v-if="operation!=='D'">
          <ButtonStandard v-if="!hideButton" label="Close" type-class="typeTwo" @click="close" />
          <ButtonStandard label="Save 🚀" @click="save" v-if="action && !hideButton"/>
          </div>
          <div v-else>
            <ButtonStandard v-if="!hideButton" label="Delete 🗑" type-class="typeTwo" @click="del" style="float: left"/>
            <ButtonStandard label="Close" @click="close" v-if="action && !hideButton" style="float: right"/>
          </div>
          <div v-if="hideButton" style="text-align: center">Loading...</div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import ButtonStandard from "@/components/standard/ButtonStandard";
export default {
  name: "ModalStandard",
  components: {
    ButtonStandard
  },
  props: {
    isOpen: Boolean,
    operation: String,
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

    const del = () => {
      emit("del");
    }

    return {close, save, del};
  }
}
</script>
