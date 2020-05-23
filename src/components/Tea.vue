<template>
  <div>
    <h1 class="title">Our Tea</h1>
    <p class="story">
      在台灣平均在海拔2500公尺以上的高山茶應該就屬梨山、福壽山、華崗、大禹嶺這幾個山頭的高山茶遠近馳名了，40年來在這片群山環繞茶園星羅棋布於平緩丘陵與高聳群山之間，風土富饒給予茶樹最肥沃的滋養，茶農努力的和高山峻嶺酷暑嚴寒搏鬥種出台灣最好的茶。
    </p>
    <div v-for="image in images" :key="image.key" class="gallery">
      <img :src="image.src" :title="image.caption" />
      <div class="caption">{{ image.caption }}</div>
    </div>
  </div>
</template>

<script>
var image_1 = require('@/assets/images/teaLeaves.jpg');
var image_2 = require('@/assets/images/teaFields.jpg');
var image_3 = require('@/assets/images/lishan.jpg')

export default {
  name: 'Tea',
    data () {
       return {
      page: 'tea',
      images: [
        {src: image_1, key: 1, caption: "Lishan, Taiwan"},
        {src: image_2, key: 2, caption: "Lishan, Taiwan"},
        {src: image_3, key: 3, caption: "Lishan, Taiwan"}
      ]
    }
  }
}
</script>

<style scoped>
</style>