<template>

    <div class="card">
        <div class="title">
            <slot name="title"></slot>
        </div>
        
        <div class="content">
            <slot name="content"></slot>
        </div>

        <div class="description">
            <slot name="description"></slot>
        </div>
    </div>

</template>

<script>
    
    export default {   
    }

</script>

<style scoped>

    .card {
        border: 1px solid silver;
        border-radius: 8px;
        max-width: 400px;
        cursor: pointer;
        margin: 0.5rem 0.5rem;
        transition: 0.2s;
    }

    .title, .content, .description {
        padding: 1rem;
        text-transform: capitalize;
        text-align: center;
    }

    .title, .content {
        border-bottom: 1px solid silver;
    }

    .title {
        font-size: 1.25rem;
    }

    .card:hover {
        transition: 0.3s;
        box-shadow: 0px 1px 10px darkgrey;
        transform: scale(1.01) ;
    }

</style>