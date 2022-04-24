<template>
  <div id="app-container" :class="getMenuType">
    <!-- <topnav /> -->
    <!-- <sidebar /> -->
    <b-row> 
      <b-col cols="12" sm="8">
        <cardimagebutton v-bind:label=" $t('custom-text.label-text') " :buttonName=" $t('custom-text.label-text') "/>
      </b-col>
      <b-col cols="12" sm="4" class="p-0">
        <cardrightarrow v-bind:data=" $t('custom-text.label-text') "/>
        <cardrightarrow v-bind:data=" $t('custom-text.label-text') "/>
        <!-- {{$t('menu.start')}} -->
      </b-col>
    </b-row>
    <!-- <main> -->
      <!-- <div class="container-fluid">
        <slot>
          
        </slot>
      </div> -->
    <!-- </main> -->
    <!-- <footer-component /> -->
  </div>
</template>

<script>
import Sidebar from "../containers/navs/Sidebar";
import Topnav from "../containers/navs/Topnav";
import Footer from "../containers/navs/Footer";
import CardRightArrow from '../components/Customised/CardRightArrow'
import CardImageButton from '../components/Customised/CardImageButton'
import { mapGetters } from "vuex";

export default {
  components: {
    topnav: Topnav,
    sidebar: Sidebar,
    "footer-component": Footer,
    cardrightarrow: CardRightArrow,
    cardimagebutton: CardImageButton
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapGetters(["getMenuType"])
  },
  mounted() {
    setTimeout(() => {
      document.body.classList.add("default-transition");
    }, 100);
  }
};
</script>


<style scoped>

main {
    margin-top: 105px !important;
}
</style>
