<template>
  <div class="type">
    <div class="tit">
      <div class="t1"><a href="javascript:;"><span>分类</span></a></div>
      <div class="t2"><a href="javascript:;"><span>品牌</span></a></div>
      <span class="iconfont hand">&#xe69d;</span>
    </div>
    <!--列表和信息栏-->
    <div class="msg">
      <div class="msg-list">
        <div>
          <ul>
             <li v-for="item in mlist"  v-html="item" :key="item.id"></li>
          </ul>
        </div>
      </div>
      <div class="msg-hot">
        <div class="hot1">
          <div class="hot2">
            <div class="hot3">
              <h3  v-html="mtit"></h3>
              <ul class="hot-msg" >
                <li v-for="item in imgUrl" :key="item.name" @click="goList()">
                  <img :src="item.photo" alt="" />
                  <p v-html="item.name"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'type',
  data () {
    return {
      mlist: [
        '为您推荐 ', ' 狗狗主粮 ', ' 狗狗零食 ', ' 狗狗服饰 ', ' 狗狗窝垫 ', '狗狗生活', '狗狗玩具', '狗狗保健', '狗狗医疗', '狗狗牵引', '狗狗美容', '狗狗周边', '狗狗清洁'
      ],
      mtit: '',
      imgUrl: []
    }
  },
  mounted: function () {
    axios.get('/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1517220938674')
      .then((res) => {
        // console.log(res.data.cate_list[0])
        this.mtit = res.data.cate_list[0].title
        for (let i in res.data.cate_list[0].list) {
          this.imgUrl = this.imgUrl.concat(res.data.cate_list[0].list[i])
          // console.log(this.imgUrl)
        }
        // console.log(this.imgUrl)
      })
  },
  methods: {
    goList: function () {
      axios.get('/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=413&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1517300952132')
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style lang="stylus" scoped src="../../assets/css/type.css">
</style>
