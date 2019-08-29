<template>
    <input type="checkbox" :checked="checked" @change="changed"/>
</template>

<script lang="ts">
    import {Component, Emit, Model, Vue} from "vue-property-decorator";

    @Component
    class MyComponent extends Vue {
        @Model("changed") checked!:number;


        @Emit()
        changed(isChecked:boolean){
            // this.$emit('changed',isChecked)等价于这样
        }
        @Emit()
        changed1(){
            // this.$emit('changed1')等价于这样
        }
        @Emit()
        changed2(isChecked:boolean){
            return true;
            // this.$emit('changed2',true)等价于这样
        }
    }
</script>
