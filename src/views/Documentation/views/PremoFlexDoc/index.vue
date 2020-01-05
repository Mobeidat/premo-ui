<template>
  <div class="maz-flex-doc">
    <ComponentContainer
      :code="codeExample"
      language="html"
    >
      <h3 class="mb-3">
        Example
      </h3>
      <div class="demo">
        <PremoFlex
          flex
        >
          <PremoFlex flex1>
            flex-1
          </PremoFlex>
          <PremoFlex flex1>
            flex-1
          </PremoFlex>
        </PremoFlex>
        <PremoFlex
          flex
          space-between
        >
          <div>
            Nike
          </div>
          <div>
            Toi
          </div>
        </PremoFlex>
      </div>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoFlexDoc',
    data () {
      return {
        codeExample: `<template>
  <PremoFlex
    flex
  >
    <PremoFlex flex1>
      flex-1
    </PremoFlex>
    <PremoFlex flex1>
      flex-1
    </PremoFlex>
  </PremoFlex>
</template>`
      }
    }
  }
</script>

<style lang="scss">
  .maz-flex-doc .demo {
    .flex {
      padding: 10px;
      background-color: yellowgreen;
      border: 1px solid white;
      color: white;
    }

    .flex-1 {
      padding: 10px;
      margin: 10px;
      background-color: dodgerblue;
      border: 1px solid white;
      color: white;
    }
  }
</style>
