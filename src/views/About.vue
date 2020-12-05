<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <el-button type="primary" @click="onIncrementCnt">CountUp>CountUp</el-button>
    </div>
    <div>Cnt {{ $store.cnt }}</div>

    <div class="back-home">
      <el-button type="warning" @click="onBackHome">To HomePage</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'About',
  components: {},
  data: function() {
    return {};
  },
  destroyed() {
    console.log('call destroy at About.vue');
  },
  methods: {
    onBackHome() {
      console.log('onBackHome Click');

      this.$router.push({
        name: 'Home',
      });
    },
    onIncrementCnt() {
      this.$store.inc();
      console.log(`cnt=${this.$store.cnt}`);
      console.log(`name=${this.$store.name}`);
    },
  },
});
</script>

<style scoped>
.back-home {
  margin: 40px 0 0 0;
}
</style>
