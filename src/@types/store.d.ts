import Vue from 'vue';
import { globalStore } from '@/store';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $store: typeof globalStore;
  }
}
