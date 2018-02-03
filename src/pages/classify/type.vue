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
             <li v-for="item in mlist" :data-id="item.cateid" v-html="item.name"  @click="setId(item.cateid)" :key="item.id"></li>
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
                  <router-link to="/list"><img :src="item.photo" alt="" /></router-link>
                  <p v-html="item.name"></p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 品牌 -->
          <div class="hot2">
            <div class="hot3">
              <h3  v-html="btit"></h3>
              <ul class="hot-msg brand" >
                <li v-for="item in brand" :key="item.name"  @click="goList()">
                  <img :src="item.logo" alt="" />
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
      mlist: [],
      mtit: '',
      imgUrl: [],
      brand: [],
      btit: '',
      goodsId: [],
      id: 88888
    }
  },
  mounted: function () {
    // 侧边导航的数据
    axios.get('/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1517388771715')
      .then((res) => {
      //  console.log(res.data.categorys)
        this.mlist = res.data.categorys
        for (let i in res.data.categorys) {
          this.goodsId = this.goodsId.concat(Number(res.data.categorys[i].cateid))
        }
        // console.log(this.goodsId)
      })
    this.load()
  },
  methods: {
    setId: function (a) {
      this.id = a
      this.delete()
      this.load(this.id)
    },
    delete: function () {
      this.imgUrl.splice(0, 100)
      this.brand.splice(0, 100)
    },
    load: function () {
      // 右边内容部分
      axios.get(`/v3/goods/category/main.html?do=getChildren&owner=${this.id}&pet_type=dog&system=wap&isWeb=1&version=303&_=1517220938674`)
        .then((res) => {
          // console.log(res.data.cate_list[1])
          // console.log(res.data.cate_list[0])
          this.mtit = res.data.cate_list[0].title
          for (let i in res.data.cate_list[0].list) {
            this.imgUrl = this.imgUrl.concat(res.data.cate_list[0].list[i])
          // console.log(this.imgUrl)
          }
          if (res.data.cate_list[1]) {
            this.btit = res.data.cate_list[1].title
            for (let i in res.data.cate_list[1].list) {
              this.brand = this.brand.concat(res.data.cate_list[1].list[i])
              // console.log(this.brand)
            }
          } else {
            this.btit = ''
          }
        // console.log(this.imgUrl)
        })
    },
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
