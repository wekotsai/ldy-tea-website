<template>
  <div>
    <h1>Our Tea</h1>
    <p class="story">
      在台灣平均在海拔2500公尺以上的高山茶應該就屬梨山、福壽山、華崗、大禹嶺這幾個山頭的高山茶遠近馳名了，40年來在這片群山環繞茶園星羅棋布於平緩丘陵與高聳群山之間，風土富饒給予茶樹最肥沃的滋養，茶農努力的和高山峻嶺酷暑嚴寒搏鬥種出台灣最好的茶。
    </p>
    <img class="teaFields" src="@/assets/teaFields.jpg">
  </div>
</template>

<script>
export default {
  name: 'Tea',
    data () {
       return {
      page: 'tea'
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

.teaFields {
  margin: 3.5em 0;
  width: 100%;
  height: auto;
}
</style>