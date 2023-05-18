<template lang="">
  <div>
    <h2>상품 등록</h2>
    <product-register-form @submit="onSubmit" />
  </div>
</template>

<script>
import ProductRegisterForm from "@/components/product/ProductRegisterForm.vue";
import { mapActions } from "vuex";
const ProductModule = "productModule";
export default {
  components: { ProductRegisterForm },
  name: "ProductRegisterPage",
  methods: {
    ...mapActions(ProductModule, ["requestCreateProductToSpring"]),
    async onSubmit(payload) {
      const product = await this.requestCreateProductToSpring(payload);
      await this.$router.push({
        name: "ProductReadPage",
        params: { productId: product.data.productId.toString() },
      });
    },
  },
};
</script>

<style lang=""></style>
