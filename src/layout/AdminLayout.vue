
<script setup>
import FooterComponent from '@/components/shared/footer/FooterComponent.vue';
import HeaderComponent from '@/components/shared/header/HeaderComponent.vue';
import { RouterView } from 'vue-router';


</script>


<template>
    <div>
        <HeaderComponent />

        <RouterView />

        <FooterComponent />

    </div>
</template>





<style>

</style>