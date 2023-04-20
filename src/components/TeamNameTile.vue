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
        <p>{{ name }}</p>
    </div>
</template>

