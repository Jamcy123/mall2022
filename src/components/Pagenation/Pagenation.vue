<template>
  <div class="pagination">
    <button :disabled="+pageNo === 1" @click="getPageNo(+pageNo - 1)">上一页</button>
    <button v-show="showStartNum" @click="getPageNo(1)">1</button>
    <button v-show="showStartPoint">···</button>

    <button v-for="(num, index) in continueArr" :key="num" @click="getPageNo(num)" :class="{ active: num === +pageNo }">
      {{ num }}
    </button>

    <button v-show="showEndPoint">···</button>
    <button v-show="showEndNum" @click="getPageNo(totalPage)">{{ totalPage }}</button>

    <button :disabled="+pageNo === totalPage" @click="getPageNo(+pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">
      共 {{ total }} 条
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    // 总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 起始终止页码
    pageStartNumEndNum() {
      const { pageNo, totalPage, continues } = this;
      let start = 1, end = 1;
      if (continues >= totalPage) {
        start = 1;
        end = totalPage;
      } else {
        let left = +pageNo - Math.floor(continues / 2);
        let right = +pageNo + Math.floor(continues / 2);
        start = left < 1 ? 1 : left;
        end = right > totalPage ? totalPage : right;
      }
      return {
        start,
        end
      }
    },
    continueArr() {
      const len = this.pageStartNumEndNum.end - this.pageStartNumEndNum.start + 1;
      const resArr = Array(len).fill(0);

      resArr.forEach((_, index) => {
        resArr[index] = index + this.pageStartNumEndNum.start;
      });
      
      return resArr;
    },
    showStartNum() {
      return this.pageStartNumEndNum.start > 1;
    },
    showEndNum() {
      return this.pageStartNumEndNum.end < this.totalPage;
    },
    showStartPoint() {
      return this.pageStartNumEndNum.start > 2;
    },
    showEndPoint() {
      return this.pageStartNumEndNum.end < this.totalPage - 1;
    }
  },
  methods: {
    getPageNo(pageNo) {
      this.$emit('getPageNo', pageNo + '');
    }
  },
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
