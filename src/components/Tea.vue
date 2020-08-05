<template>
  <div>
    <h1 class="title">Our Tea</h1>

    <div class="pricelist">
      <h5>梨大院價目表</h5>
      <ul 
        v-for="(list, index) in lists" 
        v-bind:class="{ active: index==lists.length -1 }"
        v-bind:id="list.id"
        :key="list.id"
      >
        <li>{{ list.item }}</li>
      </ul>
        <p class="teaContact">歡迎
          <a href="tel:+886938609726">來電 </a>或加
            <a href="http://line.me/ti/p/~ldytea"
               rel="noopener"
               target="_blank">
               LINE好友
            </a>洽詢
        <p/>
    </div>

    <div v-for="image in images" :key="image.key" class="gallery">
      <img :src="image.src" :title="image.caption" />
      <div class="caption">{{ image.caption }}</div>
    </div>
  </div>
</template>

<script>
var image_1 = require('@/assets/images/looseTea.jpg');
var image_2 = require('@/assets/images/tanya.jpg');
var image_3 = require('@/assets/images/teaGiftbox.jpg');
var image_4 = require('@/assets/images/teaLeaves.jpg');
var image_5 = require('@/assets/images/teaFields.jpg');
var image_6 = require('@/assets/images/teaCloseup.jpg');

export default {
  name: 'Tea',
    data () {
       return {
      page: 'tea',
      images: [
        {src: image_1, key: 1, caption: ''},
        {src: image_2, key: 2, caption: ''},
        {src: image_3, key: 3, caption: ''},
        {src: image_4, key: 4, caption: ''},
        {src: image_5, key: 5, caption: ''},
        {src: image_6, key: 6, caption: ''}
      ],
      lists: [
        {id: 1, item:'梨山極品 $1200/四兩'},
        {id: 2, item:'福壽山極品 $1500/四兩'},
        {id: 3, item:'華崗極品 $1800/四兩'},
        {id: 4, item:'大禹嶺極品 $2100/四兩'},
        {id: 5, item:'梨大院頂級禮盒 $2400 ～ $4200/四兩(二入)'}
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 20px 0 0 -40px;
}
</style>