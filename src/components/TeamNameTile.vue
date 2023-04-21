<script lang="ts">
    export default {
        name: "TeamNameTile",
        props: {
            name: String,
            id: String
        }
    }
</script>

<template>
    <div class="tile tile-primary">
        <font-awesome-icon icon="fa-solid fa-users" />
        <span class="py-0 px-1">{{ name }}</span>
    </div>
</template>

