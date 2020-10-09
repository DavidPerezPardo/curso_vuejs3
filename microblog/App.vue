<template>

    <div class="input-search">
        <input type="text" :value="currentHashtag" @input="setHashtag">
    </div>

    <div class="cards">
        <card v-for="post in filteredPosts" :key="post">

            <template v-slot:title>
                {{ post.title }}
            </template>
            
            <template v-slot:content>
                {{ post.content }}
            </template>

            <template v-slot:description>
                <controls 
                :post="post"
            />
            </template>

        </card>
    </div>

</template>

<script>

    // Ref
    import { computed } from 'vue';

    // Components
    import Card from '../src/components/Card.vue';
    import Controls from '../src/components/Controls.vue';

    // Classes
    import { store } from './Store';

    export default {
        
        components: {
            Card, Controls
        },

        setup() {            

            const filteredPosts = computed(() => {

                if(!store.state.currentHashtag) {
                    return store.state.posts;
                }

                return store.state.posts.filter(
                    post => post.hashtags.includes(store.state.currentHashtag)
                )
            });
            
            const setHashtag = (event) => store.setHashtag(event.target.value);
            
            return {
                filteredPosts,
                setHashtag,
                currentHashtag: computed( () => store.state.currentHashtag)
            }
        }
    }

</script>

<style scoped>

    *{
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }

    .cards {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .input-search {
        width: 100%;
        display: flex;
        justify-content: center;
        margin:10px 0 10px 0;
    }


</style>