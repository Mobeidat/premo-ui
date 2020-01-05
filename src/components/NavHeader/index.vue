<template>
  <header
    class="header bg-color flex-fixed"
    role="banner"
  >
    <nav class="px-4 flex space-between">
      <router-link
        :to="{
          name: 'Home'
        }"
        class="flex header__logo py-2"
      >
        <div class="header__title flex direction-column hidden-mobile">
          <h1 class="fs-20">
            Vue Premo Ui
          </h1>
        </div>
      </router-link>
      <div class="header__menu flex">
        <router-link
          class="header__menu__item flex align-center fs-16 home"
          :to="{
            name: 'Home'
          }"
        >
          Home
        </router-link>
        <router-link
          class="header__menu__item flex align-center fs-16"
          :to="{
            name: 'Documentation'
          }"
        >
          Documentation
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>

  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header {
    background-color: var(--maz-bg-color);
    border-bottom: 1px solid var(--maz-hover-color);

    &__logo {
      text-decoration: none;

      &__img {
        height: 50px;
      }
    }

    &__menu {
      &__item {
        text-decoration: none;
        padding: 0 20px;
        border-bottom: 2px solid transparent;
        transition: all 0.5s;
        outline: none;

        &:focus,
        &:hover {
          background-color: var(--maz-hover-color);
        }

        &.router-link-exact-active.home {
          border-bottom: 2px solid var(--maz-primary-color);
        }

        &.router-link-active:not(.home) {
          border-bottom: 2px solid var(--maz-primary-color);
        }
      }
    }

    &__title {
      &__sub {
        color: var(--maz-muted-color);
      }
    }
  }
</style>
