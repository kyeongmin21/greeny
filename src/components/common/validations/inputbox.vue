<template>
  <ValidationProvider :vid="vid" :name="($attrs.title ? $attrs.title : $attrs.label)" :rules="rules"
                      v-slot="{ valid, errors }">
    <b-form-group v-bind="$attrs">
      <b-form-input
        v-model="innerValue"
        v-bind="$attrs"
        :state="errors[0] ? false : (valid ? true : null)"
      ></b-form-input>
      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>

<script>
import {ValidationProvider} from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  props: {
    vid: {
      type: String
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: null
  }),
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal
    }
  },
  created () {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>
