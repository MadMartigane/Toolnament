<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <!-- Background Image Parallax -->
    <div class="jarallax">
        <img class="jarallax-img" src="@/assets/img/bg_football_stadium22.jpg" alt="Stade arena" />
        <div>
            <div class="nav">
                <div class="nav-item">
                    <RouterLink to="/">Home</RouterLink>
                </div>
                <div class="nav-item">
                    <RouterLink to="/generator">Créer un tournoi</RouterLink>
                </div>
            </div>

            <RouterView />
        </div>

    </div>
</template>

