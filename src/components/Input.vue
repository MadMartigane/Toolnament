<script lang="ts">
    // Initialization for ES Users
    import {
        Input,
        initTE,
    } from "tw-elements";
    initTE({ Input });
    // END OFF - Initialization for ES Users

    export default {
        name: "Input",
        data() {
            return {
                nameId: "input_id_" + (new Date).getTime()
            }
        },
        props: {
            value: String,
            id: String
        },
        emits: ["update:value"],
        methods: {
            onChange (id: string | undefined): void {
                const newValue = event?.target?.value;
                console.log("nameId: ", this.nameId);
                console.log("value: ", newValue);
                console.log("id: ", id);
                this.$emit("update:value", id, newValue);
            }
        }
    }
</script>

<template>
    <div class="form-element-input" data-te-input-wrapper-init>
        <input
                type="text"
                :value="value"
                @change="onChange(id)"
                class="peer form-element-input-input"
                :id="nameId"
                placeholder="Nom de l'équipe" />
        <label
                :for="nameId"
                class="form-element-input-label"
                >Nom de l'équipe</label>
    </div>
</template>

