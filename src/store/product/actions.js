import { REQUEST_PRODUCT_LIST_TO_SPRING } from "./mutation-types";
import { REQUEST_PRODUCT_TO_SPRING } from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
  requestProductListToSpring({ commit }) {
    return axiosInst.get("product-problem/list").then((res) => {
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
    });
  },

  requestProductToSpring({ commit }, productId) {
    if (!productId) {
      alert("상품 ID가 유효하지 않습니다.");
      return;
    }
    return axiosInst.get(`product-problem/${productId}`).then((res) => {
      commit(REQUEST_PRODUCT_TO_SPRING, res.data);
    });
  },

  requestDeleteProductToSpring({}, productId) {
    return axiosInst
      .delete(`product-problem/${productId}`)
      .then((res) => {
        alert("삭제 성공!");
      })
      .catch(() => {
        alert("삭제 실패!");
      });
  },

  requestCreateProductToSpring({}, payload) {
    const {
      name,
      price,
      manufacturer,
      expireDate,
      manufacturedDate,
      category,
    } = payload;
    return axiosInst
      .post("product-problem/register", {
        name,
        price,
        manufacturer,
        expireDate,
        manufacturedDate,
        category,
      })
      .then((res) => {
        alert("상품 등록 성공!");
        return res;
      })
      .catch(() => {
        alert("문제 발생!");
      });
  },
  requestProductModifyToSpring({}, payload) {
    const {
      name,
      price,
      manufacturer,
      manufacturedDate,
      expireDate,
      category,
      productId,
    } = payload;
    return axiosInst
      .put(`/product-problem/${productId}`, {
        name,
        price,
        manufacturer,
        manufacturedDate,
        expireDate,
        category,
      })
      .then((res) => {
        alert("수정 성공!");
      })
      .catch(() => {
        alert("문제 발생!");
      });
  },
};
