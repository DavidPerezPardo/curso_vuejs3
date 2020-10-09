<template>

    <button 
        :style="{
            background: background, color}"
        :class="{'disabled-button': disabled}"
    >
        {{ background }}
    </button>

</template>

<script>

    export default {
        props: {
            color: {
                type: String
            },
            background: {
                type: String
            },
            disabled: {
                type: Boolean
            }
        }
    }

</script>

<style scoped>

    .disabled-button {
        opacity: 0.5;
        cursor: default;
    }

    button {
        background: none;
        color:black;
        border: none;
        padding: 10px 40px;
        border-radius: 0.5rem;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        filter:brightness(125%) drop-shadow(2px 2px 5px black);
        transition: 0.3s;
        border-radius: 1rem;
        transition: border-radius 0.3s;

    }


</style>