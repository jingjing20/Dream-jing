<template>
  <div id="app">
    <div class="jing">
      按作者查找:
      <el-input v-model="listQuery.city" placeholder="city"
      style="width:200px;" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
      按标题查找:
      <el-input v-model="listQuery.state" placeholder="status"
      style="width:200px;" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
      按 id 排序：
      <template>
        <el-select v-model="value" placeholder="请选择" @change="sortbyId">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
          </el-option>
        </el-select>
      </template>
    </div>
    <el-table :data="list">
      <el-table-column label="id" type="index" align="center" width="100"></el-table-column>
      <el-table-column label="orderId" prop="_id" align="center" width="220"></el-table-column>
      <el-table-column label="city" prop="city" align="center" width="200"></el-table-column>
      <el-table-column label="userId" prop="userId" align="center" width="150"></el-table-column>
      <el-table-column label="country" prop="country" align="center" width="200"></el-table-column>
      <el-table-column label="status" prop="status" align="center" width="200"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination  
      @current-change="getList" 
      :total="total" 
      :page-size="listQuery.limit"
      layout="total, prev, pager, next"
      :current-page.sync="listQuery.page"
    />
  </div>
</template>

<style>
.jing{
  font-size: 18px;
  margin-top: 20px;
}
.filter-item{
  margin-left: 5px;
  margin-right: 10px;
}
</style>

<script>
import Axios from 'axios';
import { MessageBox } from 'element-ui';
function confirmation(target, name, descriptor) {
  console.log(target, name, descriptor);
  let oldValue = descriptor.value;
  console.log(oldValue)
  descriptor.value = function(...args) {
    console.log(args);
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示',{type: 'warning'})
      .then(oldValue.bind(this, ...args)).then(()=> {
        this.$message.success('删除成功！')
      })
      .catch((err) => {
        this.$message.info('您取消了操作！')
      })
  }
  return descriptor;
}
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      },
      options: [{
          value: 'asc',
          label: '升序'
        },{
          value: 'desc',
          label: '降序'
        }],
      value: ''
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      Axios.get('/api/orders', {
        params: this.listQuery, // 查询对象  发过去
      })
      .then(response => {
        console.log(response);
        this.list = response.data.result
        this.total = response.data.total
      })
    },
    sortbyId() {
      // this.list.reverse();
      this.listQuery.value = this.value
      this.getList()
    },
    @confirmation
    handleDelete(index, row) {
      this.list.splice(index, 1)
    },
  }
}
</script>
