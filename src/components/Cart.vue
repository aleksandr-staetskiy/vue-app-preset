<template>
  <div>
    <div class="counters">
      amount: {{ cnt }}
      price:  {{ total }}
      <a-button type="primary" @click="increaseVal">increase</a-button>
      <a-button type="primary" @click="decreaseVal">decrease</a-button>
      <a-button :disabled="disabledBtn">order!</a-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  methods: {
    increaseVal() {
      this.$store.commit('plus');
    },
    decreaseVal() {
      this.$store.commit('minus');
    },
  },
  computed: {
    cnt() {
      return this.$store.state.cnt;
    },
    ...mapGetters([
      'total',
    ]),
    disabledBtn() {
      return this.cnt < 1;
    },
  },
};
</script>

<style lang="scss" scoped>
  .counters {
    display: flex;
    align-items: center;
    color: rgb(159, 53, 53);
    font-size: 26px;
  }
</style>
