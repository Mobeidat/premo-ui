<template>
  <div class="maz-loader-doc">
    <ComponentContainer :code="code">
      <PremoLoader />
    </ComponentContainer>
    <ComponentContainer
      dark
      :code="code2"
    >
      <PremoLoader dark />
    </ComponentContainer>
    <ComponentContainer dark>
      <PremoLoader />
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoLoaderDoc',
    data () {
      return {
        code: `<template>
  <PremoLoader />
</template>`,
        code2: `<template>
  <PremoLoader dark />
</template>`
      }
    }
  }
</script>
