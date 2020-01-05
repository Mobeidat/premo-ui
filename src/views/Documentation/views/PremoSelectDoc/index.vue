<template>
  <div class="maz-input-doc">
    <ComponentContainer
      :code="codeExample"
    >
      <PremoSelect
        v-model="selectValueExample"
        label="Custom label/placeholder text"
        :options="options"
      />
    </ComponentContainer>
    <div class="flex flex--wrap">
      <div class="flex-1 mr-4">
        <h3>Light</h3>
        <ComponentContainer>
          <PremoSelect
            v-model="selectValue"
            :options="options"
          />
        </ComponentContainer>
        <p>
          Error
        </p>
        <ComponentContainer>
          <PremoSelect
            v-model="selectValue"
            :options="options"
            error
          />
        </ComponentContainer>
        <p>
          Valid
        </p>
        <ComponentContainer>
          <PremoSelect
            v-model="selectValue"
            :options="options"
            valid
          />
        </ComponentContainer>
      </div>
      <div class="flex-1">
        <h3>Dark</h3>
        <ComponentContainer dark>
          <PremoSelect
            v-model="selectValue"
            :options="options"
            dark
          />
        </ComponentContainer>
        <p>
          Error
        </p>
        <ComponentContainer dark>
          <PremoSelect
            v-model="selectValue"
            :options="options"
            dark
            error
          />
        </ComponentContainer>
        <p>
          Valid
        </p>
        <ComponentContainer dark>
          <PremoSelect
            v-model="selectValue"
            :options="options"
            dark
            valid
          />
        </ComponentContainer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PremoSelectDoc',
    data () {
      return {
        selectValue: '',
        selectValueExample: '',
        options: [
          { label: 'None' },
          { label: 'First option', value: 'first' },
          { label: 'Second option', value: 'second' },
          { label: 'Third option', value: 'third' }
        ],
        codeExample: `<template>
  <PremoSelect
    v-model="selectValueExample"
    label="Custom label/placeholder text"
    :options="options"
  />
</template>

export default {
  data () {
    return {
      selectValueExample: '',
      options: [
        { label: 'None' },
        { label: 'First option', value: 'first' },
        { label: 'Second option', value: 'second' },
        { label: 'Third option', value: 'third' }
      ],
    }
  }
}`
      }
    }
  }
</script>
