<template>
<!-- <router-view/> -->
<div class="myclass">
    <h1>HHJJ</h1>
</div>
<Menubar v-if="isBurgerActive"/>
<Burger @click.prevent="toggle"/>
<h1>Dashboard</h1>
<ProfileCard/>
<Testimonials/>
<Footer/>
</template>
<script>
import ProfileCard from './cards/ProfileCard.vue'
import Menubar from './menu/Menubar.vue'
import Burger from './menu/Burger.vue'
import Testimonials from './cards/testimonial.vue'
import Footer from './cards/footercard.vue'

export default {
      data: () => ({
      isBurgerActive: false
  }),
  methods: {
    toggle() {
      this.isBurgerActive = !this.isBurgerActive
    }
  },
    components: {
    ProfileCard,
    Menubar, 
    Burger,
    Testimonials,
    Footer
  },
}
</script>
<style>
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 400px) {
    .myclass {
        background-color: black;
    }
 }

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
     .myclass {
        background-color: blue;
    }
  }

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
     .myclass {
        background-color: rgb(197, 41, 41);
    }
  }

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
     .myclass {
        background-color: rgb(121, 231, 18);
    }
  }

</style>