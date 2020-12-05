<template>
  <div class="home">
    <HelloWorld msg="Vue TypeScript App" />
    <div>
      <el-button type="primary" @click="onIncrementCnt">CountUp</el-button>
    </div>
    <div>Cnt {{ $store.cnt }}</div>

    <div class="next-button">
      <el-button type="success" @click="onNextPage">NextPage</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data: function() {
    return {};
  },
  destroyed() {
    console.log('call destroy at Home.vue');
  },
  methods: {
    onNextPage() {
      console.log('onNextPage Click');

      this.$store.name = `Kubota ${this.$store.cnt}`;
      this.$router.push({
        name: 'About',
      });
    },
    onIncrementCnt() {
      // globalStore.inc();
      this.$store.inc();
      console.log(`cnt=${this.$store.cnt}`);
    },
  },
});
</script>

<style scoped>
.next-button {
  margin: 40px 0 0 0;
}
</style>
