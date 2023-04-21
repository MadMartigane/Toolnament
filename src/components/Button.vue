<script lang="ts">
    // Initialization for ES Users
    import {
        Ripple,
        initTE,
    } from "tw-elements";
    initTE({ Ripple });

    export default {
        name: "SimpleButton",
        props: {
            text: String,
            variant: String
        },
        data () {
            return {
                class: "btn-primary",
                availableClass: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]
            }
        },
        methods: {
            setClass (): void {
                if (this.variant && this.availableClass.includes(this.variant)) {
                    this.class = `btn-${this.variant}`;
                }
                console.log("Button: ", this);
            }
        },
        mounted() {
            this.setClass();
        }
    }
</script>

<template>
    <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            :class="class">{{ text }}</button>
</template>

