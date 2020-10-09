<template>

    <div>

        <div class="like">
            <button @click="like">
                Like
            </button>

            <div>
                {{ post.likes }}
            </div>
        </div>

            <hashtags v-for="hashtag in post.hashtags"
                :hashtag="hashtag"
            />

    </div>

</template>

<script>

    import hashtags from './Hashtags.vue';
    import { store } from '../../microblog/Store.js';

    export default {

        components: {
            hashtags
        },

        props: {
            post: {
                type: Object
          ,  }
        },

        setup(props) {
            const like = () => {
                store.incrementLike(props.post);
            }

            return {
                like
            }
        }
    }

</script>

<style scoped>

    .like {
        display: flex;
        justify-content: center;
        margin:5px 0 10px 0;
    }

    .like div { 
        margin:5px 0 0 5px;
    }

</style>