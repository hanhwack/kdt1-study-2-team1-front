<template lang="">
  <div>
    <table>
      <tr>
        <td>상품번호</td>
        <td>
          <input type="text" :value="product.productId" readonly />
        </td>
      </tr>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" :value="product.name" readonly />
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="text" :value="product.price" readonly />
        </td>
      </tr>
      <tr>
        <td>제조사</td>
        <td>
          <input type="text" :value="product.manufacturer" readonly />
        </td>
      </tr>
      <tr>
        <td>제조일자</td>
        <td>
          <input type="text" :value="product.manufacturedDate" readonly />
        </td>
      </tr>
      <tr>
        <td>유통기한</td>
        <td>
          <input type="text" :value="product.expireDate" readonly />
        </td>
      </tr>
      <tr>
        <td>카테고리</td>
        <td>
          <input type="text" :value="product.category" readonly />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductReadForm",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang=""></style>
