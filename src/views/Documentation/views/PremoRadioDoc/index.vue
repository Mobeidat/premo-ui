<template>
  <div class="maz-switch-doc">
    <ComponentContainer :code="codeExample">
      <PremoRadio
        v-model="radioValue"
      >
        Radio label
      </PremoRadio>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoRadioDoc',
    data () {
      return {
        radioValue: false,
        codeExample: `<template>
  <PremoRadio
    v-model="radioValue"
  >
    Radio label
  </PremoRadio>
</template>

export default {
  data () {
    return {
      radioValue: false
    }
  }
}`
      }
    }
  }
</script>
