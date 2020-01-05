<template>
  <div class="maz-switch-doc">
    <ComponentContainer :code="codeExample">
      <PremoCheckbox
        v-model="checkboxValue"
      >
        Checkbox label
      </PremoCheckbox>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoCheckboxDoc',
    data () {
      return {
        checkboxValue: false,
        codeExample: `<template>
  <PremoCheckbox
    v-model="checkboxValue"
  >
    Checkbox label
  </PremoCheckbox>
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
