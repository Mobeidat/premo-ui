<template>
  <div class="install">
    <h2 class="mb-4">
      Install
    </h2>
    <h3>NPM</h3>
    <CodeContainer
      code="npm i vue-premo-ui -S"
      language="bash"
      class="my-4"
    />

    <h3>Yarn</h3>
    <CodeContainer
      code="yarn add vue-premo-ui"
      language="bash"
      class="my-4"
    />
  </div>
</template>

<script>
  export default {
    name: 'Install',
    data () {
      return {
      }
    }
  }
</script>
