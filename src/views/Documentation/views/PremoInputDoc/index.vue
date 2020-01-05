<template>
  <div class="maz-input-doc">
    <ComponentContainer
      :code="codeExample"
    >
      <PremoInput
        v-model="exampleValue"
        label="placeholder text"
      />
    </ComponentContainer>
    <div
      v-for="type in inputTypes"
      :key="type"
      class="flex mt-3 flex--wrap"
    >
      <div class="flex-component flex-1">
        <h3>{{ type | capitalize }}</h3>
        <h4>Light mode</h4>
        <ComponentContainer>
          <PremoInput
            v-model="inputValue"
            :error="type === 'error'"
            :valid="type === 'valid'"
            :disabled="type === 'disabled'"
            :clearable="type === 'clearable'"
            :hint="type === 'hint' ? 'Hint value' : null"
            :loader="type === 'loader'"
            :required="type === 'required'"
            :size="type === 'sm' ? 'sm' : type === 'lg' ? 'lg' : null"
          />
        </ComponentContainer>
        <ComponentContainer>
          <PremoInput
            v-model="withValue"
            :error="type === 'error'"
            :valid="type === 'valid'"
            :disabled="type === 'disabled'"
            :clearable="type === 'clearable'"
            :hint="type === 'hint' ? 'Hint value' : null"
            :loader="type === 'loader'"
            :required="type === 'required'"
            :size="type === 'sm' ? 'sm' : type === 'lg' ? 'lg' : null"
          />
        </ComponentContainer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PremoInputDoc',
    data () {
      return {
        inputValue: '',
        withValue: 'The value entered',
        disabledValue: '',
        inputTypes: [
          'basic', 'error', 'valid', 'disabled', 'hint', 'clearable', 'sm', 'lg', 'required', 'loader'
        ],
        exampleValue: '',
        codeExample: `<template>
        <PremoInput
          v-model="exampleValue"
          label="Custom label/placeholder text"
        />
</template>

export default {
  data () {
    return {
      exampleValue: ''
    }
  }
}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .maz-input-doc {
    .flex {
      &-component {
        margin: 5px;
        min-width: 250px;
      }
    }
  }
</style>
