<template>
  <div>
    <a-row type="flex" justify="space-around">
      <a-col :span="4" v-for="article in articles" :key='article'>
        <Product :title="article"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'Content',
  components: {
    Product,
  },
  data() {
    return {
      articles: ['bar', 'lol', 'kek'],
    };
  },
};
</script>

<style lang="scss">
</style>
