<template lang="">
  <div>
    <form @submit.prevent="onSubmit">
      <table>
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
          <td>유통기한</td>
          <td>
            <input type="text" v-model="expireDate" />
          </td>
        </tr>
        <tr>
          <td>제조일자</td>
          <td>
            <input type="text" v-model="manufacturedDate" />
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
        <v-btn color="primary" type="submit">등록</v-btn>
        <router-link :to="{ name: 'home' }"> 취소 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductRegisterForm",
  data() {
    return {
      name: "상품명",
      price: "상세정보",
      manufacturer: "제조사",
      manufacturedDate: "제조일자",
      expireDate: "유통기한",
      category: "카테고리",
    };
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
