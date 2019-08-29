declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
//=======引入插件
// declare module 'vuedraggable' {
//   const vuedraggable: any;
//   export default vuedraggable;
// }
//全局挂载这里配置
// import VueRouter, { Route } from "vue-router";
//
// declare module "vue/types/vue" {
//   interface Vue {
//     $router: VueRouter; // 这表示this下有这个东西
//     $route: Route;
//     $https: any; // 不知道类型就定为 any 吧（偷懒）
//     $urls: any;
//     $Message: any;
//   }
// }
