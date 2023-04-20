<script lang="ts">
    export default {
        props: {
            name: String,
            id: Number
        },
        emits: ["update:name"]
    }
</script>

<template>
    <div class="form-element">
        <label for="team_name_{{ id }}">Nom de l’équipe: </label>
        <input
                :value="name"
                @input="$emit('update:name', $event.target)"
                class="input-element"
                type="text"
                placeholder="Nom de l’équipe"
                name="team_name_{{ id }}"
                required>
    </div>
</template>

