<template>
  <button
    :id="uniqueId"
    class="premo-btn btn"
    :class="[
      classes
    ]"
    v-bind="$attrs"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <span
      class="flex align-center justify-center"
      :class="{
        hidden: loader
      }"
    >
      <slot />
    </span>
    <div
      v-if="loader"
      class="premo-btn__spinner flex align-center justify-center"
    >
      <PremoSpinner
        :size="25"
        dark
      />
    </div>
  </button>
</template>

<script>
  import PremoSpinner from '../PremoSpinner'
  import uniqueId from './../mixins/uniqueId'

  export default {
    name: 'PremoBtn',
    components: {
      PremoSpinner
    },
    mixins: [uniqueId],
    props: {
      id: { type: String, default: 'PremoBtn' },
      loader: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      type: { type: String, default: 'blue-light' },
      size: { type: String, default: null },
      outline: { type: Boolean, default: false },
      rounded: { type: Boolean, default: true }
    },
    computed: {
      isDisabled () {
        const { disabled, loader } = this
        return loader || disabled
      },
      classes () {
        const { type, size, outline, rounded, isDisabled } = this
        return [
          ...(type ? [`btn--${type}`] : [null]),
          ...(size ? [`btn--${size}`] : [null]),
          ...(outline ? [`btn--${type}--outline`, `btn--rounded`] : [null]),
          ...(rounded ? [`btn--rounded`] : [null]),
          ...(isDisabled ? [`btn--disabled`, `btn--rounded`] : [null])
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .premo-btn {
    position: relative;

    .hidden {
      color: transparent;
    }

    &__spinner {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
