<template lang="">
  <div>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>상품번호</td>
          <td>
            <input type="text" :value="product.productId" disabled />
          </td>
        </tr>
        <tr>
          <td>상품명</td>
          <td>
            <input type="text" v-model="name" />
          </td>
        </tr>
        <tr>
          <td>가격</td>
          <td>
            <input type="text" v-model="price" />
          </td>
        </tr>
        <tr>
          <td>제조사</td>
          <td>
            <input type="text" v-model="manufacturer" />
          </td>
        </tr>
        <tr>
          <td>제조일자</td>
          <td>
            <input type="text" v-model="manufacturedDate" />
          </td>
        </tr>
        <tr>
          <td>유통기한</td>
          <td>
            <input type="text" v-model="expireDate" />
          </td>
        </tr>
        <tr>
          <td>카테고리</td>
          <td>
            <input type="text" v-model="category" />
          </td>
        </tr>
      </table>

      <div>
        <v-btn type="submit">수정 완료</v-btn>
        <router-link
          :to="{
            name: 'ProductReadPage',
            params: { productId: product.productId.toString() },
          }"
          >수정 취소</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      price: "",
      manufacturer: "",
      manufacturedDate: "",
      expireDate: "",
      category: "",
    };
  },
  created() {
    this.name = this.product.name;
    this.price = this.product.price;
    this.manufacturer = this.product.manufacturer;
    this.manufacturedDate = this.product.manufacturedDate;
    this.expireDate = this.product.expireDate;
    this.category = this.product.category;
  },
  methods: {
    onSubmit() {
      const {
        name,
        price,
        manufacturer,
        manufacturedDate,
        expireDate,
        category,
      } = this;
      this.$emit("submit", {
        name,
        price,
        manufacturer,
        manufacturedDate,
        expireDate,
        category,
      });
    },
  },
};
</script>

<style lang=""></style>
