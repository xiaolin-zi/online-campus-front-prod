<template>
    <div id="headersArea" class=" headersArea">
        <div id="query" class="query">
            <header class="message-title">
                <div class="head-left">
                    <el-icon class="arrow-icon" @click="goBack">
                        <ArrowLeft />
                    </el-icon>
                </div>
                <div class="head-center">
                    <p>申请详情</p>
                </div>
            </header>
        </div>

        <div class="navbar">
            <div v-for="(item, index) in navItems" :key="index" :class="{ 'active': selectedIndex === index }"
                @click="selectPage(index)">
                {{ item }}
            </div>
        </div>
        <div v-if="selectedIndex === 0" class="body">
            <div class="adjunct-card" v-for="item in Applied.values" v-bind:key="item.jobTitle">
                <div class="card-left">
                    <div class="title">{{ item.jobTitle }}</div>
                    <div class="tag-container">
                        <span v-if="item.location === 0">佛山校区</span>
                        <span v-else="item.location===1">广州校区</span>
                    </div>
                    <div class="time">更新时间: {{ item.updateTime }}</div>
                </div>
                <!-- 卡片右边（占据2/5）按照要求公司名字长度<=6 -->
                <div class="card-right">
                    <div class="price">薪资：{{ item.salary }}</div>
                    <div class="company">
                        <span> {{ getApplyStatus(item.applyStatus) }}</span>
                    </div>
                    <div class="detail" @click="toPageD(item.applicationId)">
                        <span> 详情 ></span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedIndex === 1" class="body">
            <div class="adjunct-card" v-for="item in ActiveList.values" v-bind:key="item.jobTitle">
                <div class="card-left">
                    <div class="title">{{ item.jobTitle }}</div>
                    <div class="tag-container">
                        <span v-if="item.location === 0">佛山校区</span>
                        <span v-else="item.location===1">广州校区</span>
                    </div>
                    <div class="time">截止时间{{ item.deadline }}</div>
                </div>
                <!-- 卡片右边（占据2/5）按照要求公司名字长度<=6 -->
                <div class="card-right">
                    <div class="price">薪资：{{ item.salary }}</div>

                    <div class="company">
                        {{ getStatusText(item.status) }}
                    </div>
                    <div class="detail" @click="toPage(item.operationId)">
                        <span> 详情 ></span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="selectedIndex === 2" class="body">
            <div class="adjunct-card" v-for="item in FinishedList.values" v-bind:key="item.jobTitle">
                <div class="card-left">
                    <div class="title">{{ item.jobTitle }}</div>
                    <div class="tag-container">
                        <span v-if="item.location === 0">佛山校区</span>
                        <span v-else="item.location===1">广州校区</span>
                    </div>
                    <div class="time">更新时间：{{ item.updateTime }}</div>
                </div>
                <!-- 卡片右边（占据2/5）按照要求公司名字长度<=6 -->
                <div class="card-right">
                    <div class="price">薪资：{{ item.salary }}</div>

                    <div class="company">
                        {{ getStatusText(item.status) }}
                    </div>
                    <div class="detail" @click="toPage(item.operationId)">
                        <span> 详情 ></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
//import { useStore } from '../../store/modules/info'
import { reactive, onMounted, ref } from "vue";
import type { AppliedListRecords, FinishedListRecords, activeListRecords } from '@/interfaces/parttime'
import { searchMyActiveList, searchMyAppliedList, searchMyFinishedList } from '@/apis/parttime/index'
import { useRouter } from "vue-router";
const navItems = ref(['已申请', '进行中', '已完成', '已超时']);
const selectedIndex = ref(0);
const router = useRouter();
const selectPage = (index: number) => {
    selectedIndex.value = index;
}
const ActiveList = reactive<activeListRecords>([]);
const goBack = () => {
    router.go(-1);
    // 使用Vue Router的go方法返回上一个页面
};
const getDataActive = async () => {
    let result = await searchMyActiveList();
    //console.log(result.data.data)
    console.log(result)
    ActiveList.values = result.data.data;
    //console.log(result[0])
}
/* const goBack = () => {
    router.go(-1);
    // 使用Vue Router的go方法返回上一个页面
}; */


const getStatusText = (status: number) => {
    if (status === 0) {
        return '开启';
    } else if (status === 1) {
        return '关闭';
    } else if (status === 2) {
        return '招满';
    } else {
        return '完成';
    }
};
const getApplyStatus = (Applystatus: number) => {
    if (Applystatus === 0) {
        return '已申请';
    } else if (Applystatus === 1) {
        return '已通过';
    } else if (Applystatus === 2) {
        return '已拒绝';
    }
};
const FinishedList = reactive<FinishedListRecords>([]);
const toPage = (id: string) => {
    router.push("/procedDetail/" + id);
};
const getDataFinish = async () => {
    let result = await searchMyFinishedList();
    //console.log(result.data.data)
    console.log(result)
    FinishedList.values = result.data.data;
    //console.log(result[0])
}
const toPageD = (id: string) => {
    router.push("/ApplyDetail/" + id);
};

const Applied = reactive<AppliedListRecords>([]);
const getDataAll = async () => {
    let result = await searchMyAppliedList();
    //console.log(result.data.data)
    console.log(result)
    Applied.values = result.data.data;
    //console.log(result[0])
}
onMounted(() => {
    getDataAll();
    getDataActive();
    getDataFinish();
})
</script>


<style scoped lang="less">
#headersArea {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 100;
}

#headersArea>div:nth-child(1)>div {
    padding-top: 20px;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    box-sizing: content-box !important;
    background: #f2f2f2;
    display: block !important;
}

.message-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.arrow-icon {
    cursor: pointer;
    margin-right: 10px;
    color: #0A1629
}

.head-center {
    text-align: center;
    flex-grow: 1;
    color: #0A1629
}

.searchbar__wrap {
    padding: 12px 12px 12px;
    overflow: hidden;
    display: flex;
}

.searchbar__wrap .searchbar__input {
    overflow: hidden;
    flex: 1;
    border-radius: 15px;
    position: relative;
}

.searchbar__wrap .searchbar__input .search-icon {
    position: absolute;
    left: 0;
    top: 0;
    color: #b2b2b2;
    padding: 5px 0 5px 10px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f5f5f5;
    font-size: 16px;
    padding: 10px 20px;
}

.navbar div {
    cursor: pointer;
    padding: 10px;
}

.navbar div.active {
    color: #73C975;
    border-bottom: 2px solid #73C975;
}

.taobao-iconfont {
    font-family: 'taobao' !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}

.searchbar__wrap .searchbar__input input {
    width: 100%;
    font-size: 14px;
    padding: 5px 10px 5px 30px;
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
}

.body {
    /* display: flex;
    justify-content: center;
    /* 水平居中 */
    // align-items: center; */

    /* 垂直居中 */
    .message-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    .arrow-icon {
        cursor: pointer;
        margin-right: 10px;
    }

    .head-center {
        text-align: center;
        flex-grow: 1;
    }

    .adjunct-card {
        display: grid;
        grid-template-columns: 3fr 2fr; //把兼职简介分左右区域
        height: 90px;
        margin: 12px;
        background-color: #fff;
        border: 1px solid rgb(213, 213, 213, 0.3);
        border-radius: 8px;

        .card-left {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            align-items: center;
            margin: 8px;

            .time {
                font-size: 12px;
                color: #ababab;

            }


            .title {
                font-size: 18px;
                font-weight: 700;


            }

            .request {
                font-size: 12px;
                color: #ababab;
                padding: 1px;
            }

            .tag-container {
                font-size: 12px;
                color: #ababab;

                span {
                    border: 1px solid #ababab;
                    border-radius: 3px;
                    padding: 2px 5px;
                    margin-right: 8px;
                }
            }

        }

        .card-right {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            align-items: center;
            font-size: 16px;
            margin: 8px;
            text-align: end;

            .price {
                font-size: 18px;

                color: #ff422c;

            }

            .time {
                font-size: 12px;
                color: #ababab;

            }

            .company {

                display: flex;
                align-items: center;
                justify-content: flex-end;
                font-size: 14px;
                color: #3b3b3b;

                .company-logo {
                    width: 20px;
                    height: 20px;
                    border: 1px solid rgb(213, 213, 213);
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 5%;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .detail {
                margin: 5px;
                display: flex;
                // align-items: center;
                justify-content: flex-end;
                font-size: 12px;
                color: #ababab;

            }
        }

    }

}
</style>  