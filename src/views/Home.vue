<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
  import {Component, Inject, Prop, Provide, Vue, Watch} from "vue-property-decorator";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
//引入组件
@Component({
  components: {
    HelloWorld,
  },
  //接受参数
  props:{

  },
  data(){
    return{
      //定义的内容还需要在class里面声明
      myName:'',
    }
  }
})
export default class Home extends Vue {
  //子组件提供可访问的属性，默认为当前属性的名称，可以指定名称
  @Provide() private info!:string;
  //获取父级由Provide提供的属性，默认为当前属性的名称，可以指定名称
  @Inject() private test!:string;
  //获取对应标签属性上值
  @Prop({default:1}) age!:number;

  @Prop([String, Boolean]) propC!: string | boolean
  //定义变量
  name:string='';

  //这个还是这样
  mounted(){

  }
  testTz(){
    window.location.href='http://localhost:8081/?model=running&abc=makeAAAAAAAA';
  }
  //监听写法
  @Watch('name',{ deep: true, immediate: true })
  nameWatch(oldValue:string,newValue:string){

  }
  //computed里面写方法，加一个关键字get
  get MyName():string{
    return '张三 ';
  }

  //定义方法
  sayHello():void{

  }
}
</script>
