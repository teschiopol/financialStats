<template>
  <InputStandard v-for="field in fields"
                 :key="field"
                 v-model="field['modelValue']"
                 :reference="field['reference']"
                 :label="field['label']"
                 :type="field['type']"
                 :required="field['required']"
                 :classStyle="field['classStyle']"
  />
</template>

<script>
import InputStandard from "@/components/standard/InputStandard";

export default {
  name: "OperationFields",
  components: {InputStandard},
  props: {
    fields: Array,
  }
}
</script>
