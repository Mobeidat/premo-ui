<template>
  <footer
    class="nav-footer flex-fixed"
    role="contentinfo"
  >
    <nav class="nav-footer-content container flex align-center space-between py-4">
      <div class="flex hidden-tablet">
        <RouterLink
          :to="{ name: 'Home' }"
          class="mr-3"
        >
          Home
        </RouterLink>
        <RouterLink
          :to="{ name: 'Documentation' }"
        >
          Documentation
        </RouterLink>
      </div>
      <div class="flex align-center">
        <VersionNumber style="display:none;" />
      </div>
    </nav>
  </footer>
</template>

<script>
  import VersionNumber from '@/components/VersionNumber'

  export default {
    name: 'NavFooter',
    components: {
      VersionNumber
    }
  }
</script>

<style lang="scss" scoped>
  .nav-footer {
    color: var(--maz-third-color);
    border-top: 1px solid var(--maz-text-color-dark);
    background-color: var(--maz-bg-color);

    &-subs {
      background-color: var(--maz-hover-color);

      a {
        color: var(--maz-muted-color);
      }
    }

    &-content {
      li {
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
      }

      &__logo__img {
        opacity: 0.6;
        height: 60px;
        transition: all 300ms;

        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }

      @media screen and (max-width: var(--maz-breakpoint-tablet)) {
        flex-direction: column;

        & > * {
          margin-bottom: 20px;
        }
      }
    }
  }

  .is-dark .nav-footer {
    background-color: var(--maz-bg-color-dark);
    border-color: var(--maz-hover-color-dark);

    &-subs {
      background-color: var(--maz-hover-color-dark);
    }
  }
</style>
