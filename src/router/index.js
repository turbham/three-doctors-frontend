import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "../views/product/Product.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/product",
    name: "product",
    component: Product,
    meta: { toTop: true, smoothScroll: true },
  },
  {
    path: "/product-details:id",
    name: "product-details",
    component: ProductDetail,
    meta: { toTop: true, smoothScroll: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});

export default router;
