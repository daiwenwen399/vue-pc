<template>
    <div id="pagination">
        <button
            @click="changePage(myCurrentPage - 1)"
            :disabled="myCurrentPage === 1"
        >
            &lt;
        </button>
        <button :class="{ active: myCurrentPage === 1 }" @click="changePage(1)">
            1
        </button>
        <button v-show="startEnd.start > 2">...</button>
        <button
            v-for="item in btnPage"
            :key="item"
            @click="changePage(startEnd.start + item - 1)"
            :class="{ active: myCurrentPage === startEnd.start + item - 1 }"
        >
            {{ startEnd.start + item - 1 }}
        </button>
        <button v-show="startEnd.end < totalPages - 1">...</button>
        <button
            :class="{ active: myCurrentPage === totalPages }"
            @click="changePage(totalPages)"
            v-show="totalPages > 1"
        >
            {{ totalPages }}
        </button>
        <button
            @click="changePage(myCurrentPage + 1)"
            :disabled="myCurrentPage >= totalPages"
        >
            &gt;
        </button>
        <p>共{{ total }}条</p>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        // 总商品数量
        total: {
            type: Number,
            default: 0,
        },
        // 当前的页码
        currentPage: {
            type: Number,
            default: 1,
        },
        // 每页商品数量
        pageSize: {
            type: Number,
            default: 5,
        },
        // 显示按钮的数量
        pageCount: {
            type: Number,
            default: 7,
        },
    },
    data() {
        return {
            // 因为props是只读不修改的，所以定义一个方便修改当前页码
            myCurrentPage: this.currentPage,
        };
    },
    computed: {
        // 总页数 = 商品总数/每页商品数量，向上取整
        totalPages() {
            return Math.ceil(this.total / this.pageSize);
        },
        // 计算中间按钮的开始和结束页码
        startEnd() {
            const { myCurrentPage, pageCount, totalPages } = this;
            // 中间的页码数量(不包含开头和结尾)
            const count = pageCount - 2;
            // 中间页码数量的一半向下取整：选中的数的前面和后面分别有几个
            const half = Math.floor(count / 2);
            let start;
            let end;

            // 1 ... 5 6 7 8 [9] 10
            if (myCurrentPage >= totalPages - half) {
                start = totalPages - count;
            } else {
                // 1...3 4 [5] 6 7...10
                // 开始页数 = 当前的页码 - （显示按钮的数量 - 2）/2，向下取整
                start = myCurrentPage - half;
            }
            // 1 [2] 3 4 5 6 ...10
            if (start < 2) {
                start = 2;
            }

            // 结束页数
            end = start + count - 1;
            // 1 [2] 3
            if (end >= totalPages) {
                end = totalPages - 1;
            }
            return { start, end };
        },
        btnPage() {
            const page = this.startEnd.end - this.startEnd.start + 1;
            return page >= 1 ? page : 0;
        },
    },
    watch: {
        // 让每次页码发生变化加载新数据
        myCurrentPage(page) {
            this.$emit("currentChange", page);
        },
        // 当外面页面发生变化，里面页面也要变化
        currentPage(page) {
            this.myCurrentPage = page;
        },
    },
    methods: {
        changePage(page) {
            this.myCurrentPage = page;
        },
    },
};
</script>

<style lang="less" scoped>
#pagination {
    display: flex;
    white-space: nowrap;
    font-weight: 700;
    p,
    button {
        margin: 0 5px;
        padding: 0 4px;
        font-size: 13px;
        min-width: 30px;
        height: 28px;
        line-height: 28px;
    }
    button {
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: none;
        outline: none;
        display: block;
        background-color: #f4f4f5;
        color: #606266;
        border-radius: 2px;
    }
    button.active {
        background-color: #409eff;
        color: #fff;
    }
}
</style>
