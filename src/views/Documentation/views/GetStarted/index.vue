<template>
  <div class="get-started">
    <h2 class="mb-4">
      Get Started
    </h2>
    <h3>NPM</h3>
    <CodeContainer
      :code="codeBase"
      class="my-4"
    />

    <p>Or use some components</p>

    <CodeContainer
      :code="codeCustom"
      class="my-4"
    />
  </div>
</template>

<script>
  export default {
    name: 'GetStarted',
    data () {
      return {
        codeBase: `import Vue from 'vue';
import VuePremoUi from 'vue-premo-ui';
import App from './App.vue';

Vue.use(VuePremoUi);

new Vue({
  el: '#app',
  render: h => h(App)
});`,
        codeCustom: `import Vue from 'vue';
import { PremoBtn, PremoSelect } from 'element-ui';
import App from './App.vue';

Vue.component(PremoBtn.name, PremoBtn);
Vue.component(PremoSelect.name, PremoSelect);
/* ou
 * Vue.use(PremoBtn)
 * Vue.use(PremoSelect)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});`
      }
    }
  }
</script>
