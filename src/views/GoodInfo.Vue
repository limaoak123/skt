<template>
  <div>
    <p>详情页</p>
    <p>商品编号{{goodId}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            goodId: ""
        }
    },
    mounted(){
        this.goodId = this.$route.params.goodId;
    }
}
</script>

<style scoped>
  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);
  @import '../../static/reset.css';
</style>