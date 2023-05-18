<template lang="">
  <div>
    <h3>상품 목록</h3>
    <table>
      <tr>
        <th align="center" width="10%">상품번호</th>

        <th align="center" width="10%">상품명</th>
        <th align="center" width="20%">제조사</th>
        <th align="center" width="20%">카테고리</th>
        <th align="center" width="40%">유통기한</th>
      </tr>
      <tr
        v-if="!products || (Array.isArray(products) && products.length === 0)"
      >
        <td colspan="5">등록된 상품이 없습니다</td>
      </tr>
      <tr v-else v-for="product in products" :key="product.productId">
        <td align="center">
          {{ product.productId }}
        </td>
        <td align="center">
          <router-link
            :to="{
              name: 'ProductReadPage',
              params: { productId: product.productId.toString() },
            }"
          >
            {{ product.name }}
          </router-link>
        </td>
        <td align="center">
          {{ product.manufacturer }}
        </td>
        <td align="center">
          {{ product.category }}
        </td>
        <td align="center">
          {{ product.expireDate }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
    },
  },
};
</script>

<style lang=""></style>
