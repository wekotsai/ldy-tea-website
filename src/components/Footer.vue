<template>
  <mdb-footer id="footer" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Order now</h6>
          <p>
            <i class="fab fa-line"></i> 
            LINE ID 
            <a 
              href="http://line.me/ti/p/~ldytea"
              rel="noopener"
              target="_blank"
            >ldytea</a>
            <br>訂購梨大院頂級高山茶</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact us</h6>
          <p 
            v-for="social in socials" 
            :key="social.path" 
          >
          <i :class="social.icon"></i>
            <a 
              :href="social.path"
              rel="noopener"
              target="_blank"
            >
              {{social.name}}
            </a>
          </p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text"> 
            Copyright © {{ new Date().getFullYear() }}
            Wéko Tsai <br> All Rights Reserved
          </p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
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
      page: 'footer',
      socials: [
        {name: 'FB粉絲團', path: 'https://www.facebook.com/梨大院-Li-Da-Yuan-台灣頂級高山茶-113498920371239/', icon: 'fab fa-facebook mr-3'},
        {name: 'lidayuantea@gmail.com', path: 'mailto:lidayuantea@gmail.com', icon: 'fas fa-envelope mr-3'},
        {name: '+886 938-609-726', path: 'tel:+886938609726', icon: 'fas fa-phone mr-3'}
      ]
    }
  }
}
</script>

<style scoped>
</style>