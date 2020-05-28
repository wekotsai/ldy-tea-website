<template>
  <div>
    <h1 class="title">Our Tea</h1>
    <h5>台灣茶世界第一</h5>
    <h6>台灣茶區海拔排名如下:</h6>

    <div class="story">
      <ul 
        v-for="(list, index) in lists" 
        v-bind:class="{ active: index==lists.length -1 }"
        v-bind:id="list.id"
        :key="list.id"
      >
        <li>{{ list.item }}</li>
      </ul>
    </div>

    <div v-for="image in images" :key="image.key" class="gallery">
      <img :src="image.src" :title="image.caption" />
      <div class="caption">{{ image.caption }}</div>
    </div>
  </div>
</template>

<script>
var image_1 = require('@/assets/images/teaLeaves.jpg');
var image_2 = require('@/assets/images/teaFields.jpg');
var image_3 = require('@/assets/images/lishan.jpg');
var image_4 = require('@/assets/images/teaFarmers.jpg');
var image_5 = require('@/assets/images/teaCloseup.jpg');

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
        {src: image_5, key: 5, caption: ''}
      ],
      lists: [
        {id: 1, item:'福壽山農場(海拔2650公尺) 福壽山長春茶為臺灣第一高海拔的茶，福壽山梨山茶為台灣第二高海拔的茶。其次梨山茶區的梨山茶，接下杉林溪茶區杉林溪茶，再來就是阿里山茶區阿里山茶，以上都是臺灣高山茶'},
        {id: 2, item:'梨山茶區(海拔1800公尺~2450公尺'},
        {id: 3, item:'杉林溪茶區(海拔1300公尺~1800公尺)'},
        {id: 4, item:'阿里山茶區(海拔850公尺~1700公尺)'},
        {id: 5, item:'凍頂茶區屬於中海拔: 鹿谷鄉農會凍頂比賽茶最有名，其次凍頂烏龍茶，凍頂原味茶，凍頂合作社比賽茶'},
        {id: 6, item:'名間茶區(海拔200公尺~500公尺): 四季春為主，烏龍茶為輔，臺灣飲料茶原料大本營'},
        {id: 7, item:'其他特殊茶區: 新北市坪林文山包種茶, 三峽碧螺春, 新竹東方美人茶, 日月潭紅茶, 高雄野生茶, 屏東港口茶, 花蓮台東的花東縱谷茶, 宜蘭將軍茶玉蘭茶'},
        {id: 8, item:'《梨大院》台灣頂級高山茶得天獨厚的地理環境使茶葉的葉片厚、果膠質濃，霜氣明顯，擁特殊高山氣息，入口濃韻醉人回甘，手工採摘，一心二葉，香氣馥郁，喉韻深遠《梨大院》精選（梨山、福壽山、華崗、大禹嶺）院區高山茶'}
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: disc;
}
.active {
  list-style-type: none;
}
</style>