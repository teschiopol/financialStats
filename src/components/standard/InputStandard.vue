<template>
  <div class="input-container ic1" :style="classStyle">
    <input
        :id="reference"
        :name="reference"
        class="input"
        :type="type"
        autocomplete="off"
        :value="modelValue"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <div class="cut"></div>
    <label :for="reference" class="placeholder">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "InputStandard",
  props: {
    modelValue: String,
    reference: String,
    label: String,
    type: String,
    required: String,
    classStyle: String,
  },
  emits: ['update:modelValue']
}
</script>
