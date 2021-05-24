<!--
 * @Author       : daiwei
 * @Date         : 2021-05-22 17:15:37
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 10:15:10
 * @FilePath     : \vue-etl-dome\src\views\eltHome\index.vue
-->
<template>
    <div class="etl-home">
        <div class="tree-content"></div>
        <div class="box-content"></div>
    </div>
</template>
<script>
export default {
    name:'Etl',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss"  scoped>
    .etl-home{
        display:flex;
        width: 100%;
        height: 100%;
    }
    .tree-content{
        width: 240px;
        height: 100%;   
    }
    .box-content{
        flex:1;
        height: 100%;
    }
</style>