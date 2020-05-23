<template>
  <div>
    <h1>Our Tea</h1>
    <p class="story">
      在台灣平均在海拔2500公尺以上的高山茶應該就屬梨山、福壽山、華崗、大禹嶺這幾個山頭的高山茶遠近馳名了，40年來在這片群山環繞茶園星羅棋布於平緩丘陵與高聳群山之間，風土富饒給予茶樹最肥沃的滋養，茶農努力的和高山峻嶺酷暑嚴寒搏鬥種出台灣最好的茶。
    </p>
    <div v-for="image in images" :key="image" class="gallery">
      <img :src="image.src" :title="image.caption" />
      <div class="caption">{{ image.caption }}</div>
    </div>
  </div>
</template>

<script>
var image_1 = require('@/assets/teaLeaves.jpg');
var image_2 = require('@/assets/teaFields.jpg');
var image_3 = require('@/assets/lishan.jpg')

export default {
  name: 'Tea',
    data () {
       return {
      page: 'tea',
        images: [
       {src: image_1, caption: "Castros celtas, Vigo, Spain"},
       {src: image_2, caption: "Castillo, Vigo, Spain"},
       {src: image_3, caption: "Ría, Vigo, Spain"}
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 2em;
}

.story {
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding: 0 2em; 
}

.gallery img {
  margin: 3.5em 0;
  max-width: 680px;
}

@media only screen and (max-width: 600px) {
.gallery img {
    width: 100%;
    height: auto;
  }
}
</style>