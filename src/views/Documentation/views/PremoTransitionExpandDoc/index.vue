<template>
  <div class="maz-transition-expand-doc">
    <ComponentContainer
      class="flex direction-column"
      :code="code"
    >
      <div class="flex justify-center">
        <MazBtn @click="isShown = !isShown">
          Toggle Expand
        </MazBtn>
      </div>
      <br>
      <div class="flex flex-1 align-start">
        <ComponentContainer
          class="maz-expand-container flex-1 mr-4"
        >
          <h3 class="mb-2">
            Expand component 1
          </h3>
          <PremoTransitionExpand class="example shadow-container br-4 text-center">
            <div
              v-show="!isShown"
            >
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
            </div>
          </PremoTransitionExpand>
        </ComponentContainer>
        <ComponentContainer
          class="maz-expand-container flex-1"
        >
          <h3 class="mb-2">
            Expand component 2
          </h3>
          <PremoTransitionExpand class="example shadow-container br-4 text-center">
            <div
              v-show="isShown"
            >
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
              <p>Content expand</p>
            </div>
          </PremoTransitionExpand>
        </ComponentContainer>
      </div>
    </ComponentContainer>
  </div>
</template>

<script>
  export default {
    name: 'PremoTransitionExpandDoc',
    data () {
      return {
        isShown: false,
        code: `<template>
  <PremoTransitionExpand>
    <div
      v-show="isShown"
    >
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
      <p>Content expand</p>
    </div>
  </PremoTransitionExpand>
</template>

export default {
  data () {
    return {
      isShown: false
    }
  }
}`
      }
    }
  }
</script>
