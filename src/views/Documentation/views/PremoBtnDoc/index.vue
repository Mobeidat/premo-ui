<template>
  <div class="Premo-btn-doc">
    <ComponentContainer
      :code="codeExample"
      language="html"
      class="btn-container"
    >
      <h3 class="mb-3">
        Example
      </h3>
      <PremoBtn
        rounded
      >
        Primary default
      </PremoBtn>
      <PremoBtn
        outline
      >
        Primary default
      </PremoBtn>
      <PremoBtn
        outline
      >
        Primary default
      </PremoBtn>
    </ComponentContainer>
    <ComponentContainer>
      <h3 class="mb-3">
        Outline
      </h3>
      <div
        v-for="type in btnTypes"
        :key="`ountline-${type}`"
        class="btn-container"
      >
        <PremoBtn
          v-for="size in btnSizes"
          :key="`outline-${type}-${size}`"
          :size="size"
          :type="type"
          outline
        >
          {{ type }} {{ size }}
        </PremoBtn>
      </div>
    </ComponentContainer>
    <ComponentContainer>
      <h3 class="mb-3">
        Primary
      </h3>
      <div
        class="btn-container"
      >
        <PremoBtn
          v-for="size in btnSizes"
          :key="`loader-${size}`"
          :size="size"
          Primary
        >
          Primary {{ size }}
        </PremoBtn>
      </div>
    </ComponentContainer>
    <ComponentContainer>
      <h3 class="mb-3">
        Disabled
      </h3>
      <div
        class="btn-container"
      >
        <PremoBtn
          v-for="size in btnSizes"
          :key="`loader-${size}`"
          :size="size"
          disabled
          outline
        >
          Disabled {{ size }}
        </PremoBtn>
      </div>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoBtnDoc',
    data () {
      return {
        btnTypes: [
          'blue-light', 'secondary'
        ],
        btnSizes: [
          '', 'md', 'sm', 'mini'
        ],
        codeExample: `<template>
  <PremoBtn
    rounded
  >
    Primary default
  </PremoBtn>

  <PremoBtn
    outline
  >
    Outline default
  </PremoBtn>

  <PremoBtn
    disabled
  >
    Primary default
  </PremoBtn>
</template>`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-container {
    * {
      margin: 5px;
    }
  }
</style>
