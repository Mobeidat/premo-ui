<template>
  <div class="maz-spinner-doc flex flex--wrap">
    <div class="flex-1 mr-4">
      <ComponentContainer
        class="text-center"
      >
        <PremoSpinner />
      </ComponentContainer>
    </div>
    <div class="flex-1">
      <ComponentContainer
        dark
        class="text-center"
      >
        <PremoSpinner
          :size="60"
          dark
        />
      </ComponentContainer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PremoSpinnerDoc'
  }
</script>
