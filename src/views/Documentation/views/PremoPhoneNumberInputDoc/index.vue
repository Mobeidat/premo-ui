<template>
  <div class="maz-input-doc">
    <ComponentContainer
      :code="codeExample"
    >
      <PremoPhoneNumberInput
        v-model="phoneNumberExample"
      />
    </ComponentContainer>
    <div class="flex flex--wrap">
      <div class="flex-1 mr-4">
        <h3>Light</h3>
        <ComponentContainer>
          <PremoPhoneNumberInput
            v-model="phoneNumber"
          />
        </ComponentContainer>
        <ComponentContainer>
          <p class="mb-2">
            Error
          </p>
          <PremoPhoneNumberInput
            v-model="phoneNumber"
            error
          />
        </ComponentContainer>
      </div>
      <div class="flex-1">
        <h4>Dark</h4>
        <ComponentContainer dark>
          <PremoPhoneNumberInput
            v-model="phoneNumber"
            dark
          />
        </ComponentContainer>
        <ComponentContainer dark>
          <p class="mb-2">
            Error
          </p>
          <PremoPhoneNumberInput
            v-model="phoneNumber"
            error
            dark
          />
        </ComponentContainer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PremoPhoneNumberInputDoc',
    data () {
      return {
        phoneNumber: '',
        phoneNumberExample: '',
        codeExample: `<template>
  <PremoPhoneNumberInput
    v-model="phoneNumberExample"
  />
</template>

export default {
  data () {
    return {
      phoneNumberExample: ''
    }
  }
}`
      }
    }
  }
</script>
