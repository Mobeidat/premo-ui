<template>
  <div class="maz-switch-doc">
    <ComponentContainer
      :code="codeExample"
    >
      <PremoSwitch
        v-model="checkboxValue"
      />
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoSwitchDoc',
    data () {
      return {
        checkboxValue: false,
        codeExample: `<template>
  <PremoSwitch
    v-model="checkboxValue"
  />
</template>

export default {
  data () {
    return {
      checkboxValue: false
    }
  }
}`
      }
    }
  }
</script>
