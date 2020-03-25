<template>
  <div id="app">
    <div class="jing">
      按作者查找:
      <el-input v-model="listQuery.author" placeholder="author"
      style="width:200px;" class="filter-item"
      @keyup.enter.native="getList"
      ></el-input>
      按标题查找:
      <el-input v-model="listQuery.title" placeholder="title"
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
      <el-table-column label="ID" prop="id" 
        align="center" width="80">
      </el-table-column>
      <el-table-column label="author" prop="author" 
        align="center" width="200">
        <template slot-scope="{row}">
          <span class="link-type">{{row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" prop="title" 
        align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="display_time" prop="display_time" 
        align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.display_time}}</span>
        </template>
      </el-table-column>

      <el-table-column label="status" prop="status" 
        align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.status}}</span>
        </template>
      </el-table-column>
      
      <el-table-column label="pageviews" prop="pageviews" 
        align="center" width="300">
        <template slot-scope="{row}">
          <span class="link-type">{{row.pageviews}}</span>
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
*{
  text-align: center;
}
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
export default {
  data() {
    return {
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        limit: 20,
        page:1,
        title: '',
        author:'',
        value:''
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
      Axios.get('/vue-element-admin/article/list', {
        params: this.listQuery, // 查询对象  发过去
      })
      .then(response => {
        console.log(response);
        this.list = response.data.list
        this.total = response.data.total
      })
    },
    sortbyId() {
      // this.list.reverse();
      this.listQuery.value = this.value
      this.getList()
    }
  }
}
</script>
