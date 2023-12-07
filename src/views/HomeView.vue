<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from '../components/Header.vue'
import FooterView from '../components/Footer.vue'
export default {
    components: {
        HeaderView,
        FooterView
    },
    data() {
        return {

        }
    },

}
</script>

<template>
    <div class="container">
        <HeaderView />
        <RouterView />
        <FooterView />
    </div>
</template>
<style lang="scss" scoped>
.container {
    overflow-x: hidden;
    position: relative;

}
</style>
