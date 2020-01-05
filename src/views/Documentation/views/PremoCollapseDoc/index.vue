<template>
  <div class="maz-collapse-doc flex flex--wrap">
    <div class="flex-1 mr-4">
      <ComponentContainer
        :code="codeLight"
      >
        <PremoCollapse>
          <div slot="header-text">
            Toggle collapse
          </div>
          <div class="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </PremoCollapse>
      </ComponentContainer>
    </div>
    <div class="flex-1">
      <ComponentContainer
        dark
        :code="codeDark"
      >
        <PremoCollapse
          dark
          open
        >
          <div slot="header-text">
            Toggle collapse
          </div>
          <div class="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </PremoCollapse>
      </ComponentContainer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PremoCollapseDoc',
    data () {
      return {
        codeLight: `<PremoCollapse>
  <div slot="header-text">
    Toggle collapse
  </div>
  <div class="p-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</PremoCollapse>`,
        codeDark: `<PremoCollapse
  dark
  open
>
  <div slot="header-text">
    Toggle collapse
  </div>
  <div class="p-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </div>
</PremoCollapse>`
      }
    }
  }
</script>
