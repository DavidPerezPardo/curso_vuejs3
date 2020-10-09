<template>

    <div class="hashtag"
        @click="setHashtag">
        #{{ hashtag }}
    </div>

</template>

<script>
   
   import { store } from '../../microblog/Store.js';

    export default {

        props: {
            hashtag: {
                type: String
            }
        },

        // Props and context params
        setup(props){
            
            const setHashtag = () => {
                store.setHashtag(props.hashtag);
            }

            return {
                setHashtag
            }
        }
    }

</script>

<style scoped>

.hashtag {
    text-decoration: underline;
}

.hashtag:hover {
    color: cornflowerblue;
}

</style>