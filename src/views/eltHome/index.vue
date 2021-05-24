<!--
 * @Author       : daiwei
 * @Date         : 2021-05-22 17:15:37
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 18:09:52
 * @FilePath     : \vue-etl-dome\src\views\eltHome\index.vue
-->
<template>
  <div class="etl-home">
    <div class="tree-content">
      <div class="tree-header">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText"
            clearable>
        </el-input>
      </div>
      <el-tree
        class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        accordion
        draggable
        @node-drag-start="handleDragstart"
        @node-drag-end="handleDragend"
        :filter-node-method="filterNode"
        ref="tree"
      >
        <span class="custom-tree-node" slot-scope="{ data }">
            <el-image :src="data.img" v-if="data.img">
              <div slot="error" class="tree_image_slot">
                  <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            {{data.label}}
        </span>
      </el-tree>
    </div>
    <div class="box-content">
        <div class="content"></div>
        <div class="journal">
            <el-tabs type="card">
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
                    我的行程
                </el-tab-pane>
                <el-tab-pane label="消息中心">消息中心</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Etl",
  data() {
    return {
      // 树形菜单搜索
      filterText: "",
      treeData: [
        {
          id: 1,
          label: "收藏组件",
          img:'',
          operation:false,
          children: [
            {
                id: 10,
                label: "表输入",
                img:require('@/assets/biaoshuchu.png'),
                operation:true,
            },
            {
                id: 11,
                label: "表输出",
                img:require('@/assets/biaoshuru.png'),
                operation:true,
            },
            {
                id: 12,
                label: "主题表输出",
                img:require('@/assets/biaoshuru.png'),
                operation:true,
            }
          ]
        },
        {
          id: 2,
          label: "输入输出",
          img:'',
          operation:false,
          children: [
            {
              id: 20,
              label: "表输入",
              img:require('@/assets/biaoshuchu.png'),
              operation:true,
            },
            {
              id: 21,
              label: "表输出",
              img:require('@/assets/biaoshuru.png'),
              operation:true,
            }
          ]
        },
        {
          id: 3,
          label: "转换组件",
          img:'',
          operation:false,
          children: [
            {
              id: 30,
              label: "表达式组件",
              img:require('@/assets/biaodashidingyi.png'),
              operation:true,
            },
            {
              id: 31,
              label: "聚合组件",
              img:require('@/assets/combine.png'),
              operation:true,
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  watch: {
    searchText() {
      this.$refs.tree.filter(this.filterText);
    }
  },
  methods: {
    // 树形菜单检索
    filterNode(value, data, node) {
      if (!value) {
        return true;
      }
      let level = node.level;
      let _array = []; //这里使用数组存储 只是为了存储值。
      this.$common.getReturnNode(node, _array, value, this.defaultProps);
      let result = false;
      _array.forEach(item => {
        result = result || item;
      });
      return result;
    },
    handleDragstart(node, event){
        console.log(node, event,'handleDragstart')
    },
    handleDragend (draggingNode, endNode, position, event) {
        console.log(draggingNode, endNode,position,event,'handleDragend')
    },
  }
};
</script>
<style lang="scss"  scoped>
.etl-home {
  display: flex;
  width: 100%;
  height: 100%;
}
.tree-content {
  width: 240px;
  height: 100%;
  .tree-header{
    width: 100%;
    padding:10px;
    box-sizing: border-box;
  }
  .el-tree {
    width: 100%;
    height: calc(100% - 60px);
    padding:5px 10px 10px 10px;
    box-sizing: border-box;
  }
  .el-image{
      vertical-align: middle;
  }
}
.box-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .content{
      flex: 1;
      width: 100%;
      overflow-y: auto;
      border: 1px solid #eee;
      border-bottom: none;
  }
  .journal{
      width: 100%;
      height: 300px;
      border: 1px solid #eee;
      border-top: none;
      .el-tabs__item.is-active{
          background: #fff;
      }
  }
}
</style>