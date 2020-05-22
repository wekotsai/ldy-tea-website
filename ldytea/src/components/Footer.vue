<template>
  <!-- Footer -->
  <mdb-footer id="footer" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">LDY TEA</h6>
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fab fa-facebook mr-3"></i><a href ="https://www.facebook.com/梨大院-Li-Da-Yuan-台灣頂級高山茶-113498920371239/"> FB 粉絲團 </a></p>
          <p><i class="fas fa-envelope mr-3"></i> <a href="mailto:lidayuantea@gmail.com"> lidayuantea@gmail.com </a></p>
          <p><i class="fas fa-phone mr-3"></i>+886 938-609-726</p>
          <!-- <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p> -->
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text"> 
            Copyright © {{ new Date().getFullYear() }}
            Wéko Tsai. All Rights Reserved
          </p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'Footer',
   components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
   },
    data () {
       return {
      page: 'footer'
    }
  }
}
</script>

<style scoped>

</style>