<template>
  <div
    class="maz-radio flex align-center"
  >
    <input
      :id="uniqueId"
      :checked="value"
      type="radio"
      class="mr-2"
      @change="$emit('input', $event.target.checked)"
    >
    <label
      :for="uniqueId"
      class="m-0 flex align-center"
    >
      <slot />
    </label>
  </div>
</template>

<script>
  import uniqueId from './../mixins/uniqueId'

  export default {
    name: 'PremoRadio',
    mixins: [uniqueId],
    props: {
      id: { type: String, default: 'PremoRadio' },
      value: { default: false, type: Boolean }
    }
  }
</script>

<style lang="scss" scoped>
  .maz-radio {
    padding: 2px 8px;
    transition: all 0.2s;
    cursor: pointer;

    [type='radio']:not(:checked),
    [type='radio']:checked {
      position: absolute;
      left: -9999px;
    }

    [type='radio']:not(:checked) + label,
    [type='radio']:checked + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      transition: all 0.2s;
      user-select: none;
    }

    [type='radio']:not(:checked) + label::before,
    [type='radio']:checked + label::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 14px;
      height: 14px;
      border: 1px solid var(--maz-second-color);
      background: transparent;
      border-radius: 30px;
      transition: all 0.2s;
    }

    [type='radio']:not(:checked) + label::before {
      border: 1px solid var(--maz-second-color);
      transition: all 0.2s;
    }

    [type='radio']:not(:checked) + label::after,
    [type='radio']:checked + label::after {
      content: ' ';
      position: absolute;
      top: 7px;
      left: 3px;
      font-size: 14px;
      width: 8px;
      height: 8px;
      background-color: var(--maz-second-color);
      transition: all 0.2s;
      border-radius: 30px;
    }

    [type='radio']:not(:checked) + label::after {
      opacity: 0;
      transform: scale(0);
      color: var(--maz-second-color);
    }

    [type='radio']:checked + label::after {
      opacity: 1;
      transform: scale(1);
      color: var(--maz-second-color);
    }
  }
</style>
