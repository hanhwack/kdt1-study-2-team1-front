<template lang="">
  <div>
    <h2>상품 게시판</h2>
    <product-list-form :products="products" />
    <router-link :to="{ name: 'ProductRegisterPage' }">
      게시물 작성
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import ProductListForm from "@/components/product/ProductListForm.vue";
const productModule = "productModule";
export default {
  components: { ProductListForm },

  computed: {
    ...mapState(productModule, ["products"]),
  },
  mounted() {
    this.requestProductListToSpring();
  },
  methods: {
    ...mapActions(productModule, ["requestProductListToSpring"]),
  },
};
</script>

<style lang=""></style>
