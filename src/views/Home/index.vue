<template>
  <div class="home flex-1 flex direction-column">
    <div class="container flex-1 flex direction-column align-center justify-center py-4">
      <h1>PremoUi</h1>
      <h2 class="my-3 text-center">
        A UI components library for premogiftcards.com
      </h2>
      <CodeContainer
        language="bash"
        code="npm i vue-premo-ui -S"
        class="mb-3"
      />
      <div class="flex align-start flex--wrap mt-3 align-center justify-center">
        <router-link
          class="btn btn--primary--outline mr-3 mb-3"
          :to="{ name: 'Install' }"
        >
          Installation
        </router-link>
        <router-link
          class="btn btn--primary--outline mr-3"
          :to="{ name: 'GetStarted' }"
        >
          Get started
        </router-link>
        <router-link
          class="btn btn--primary--outline"
          :to="{ name: 'PremoBtnDoc' }"
        >
          Components
        </router-link>
      </div>
    </div>
    <NavFooter />
  </div>
</template>

<script>
  import NavFooter from '@/components/NavFooter'

  export default {
    name: 'Home',
    components: {
      NavFooter
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    // background-image: linear-gradient(to right top, dodgerblue, #00B7FF, #00D4E0, #00E688, #A8EB12);

    &__logo {
      height: 120px;
    }

    h2 {
      color: var(--maz-text-color);
    }

    p {
      color: var(--maz-muted-color);
    }
  }

  .is-dark {
    .home {
      h2 {
        color: var(--maz-text-color-dark);
      }

      .btn--dark--outline {
        background-color: var(--maz-bg-color-dark);
        color: var(--maz-text-color-dark);
        border-color: var(--maz-text-color-dark);

        &:hover,
        &:focus {
          background-color: var(--maz-text-color-dark);
          color: var(--maz-bg-color-dark);
        }
      }
    }
  }
</style>
