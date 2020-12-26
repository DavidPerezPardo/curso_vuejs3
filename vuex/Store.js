import { createStore } from 'vuex';
import { testPosts } from '../microblog/testPosts';

// for api request simulated
const delay = () => new Promise(res =>
    setTimeout(res, 1000));

// -- VUEX
// state
// mutations
// getters
// actions

export const store = createStore({
    state() {
        return {
            currentPost: null
        }
    },

    mutations: {
        setPostId(state, id) {
            state.currentPost = id
        }
    },

    actions: {
        async fetchDataFromServer(ctx, id) {
            // api request simulated
            await delay();
            const post = testPosts.find(post => {
                return post.id === id
            });
            // commit
            ctx.commit('setPostId', post);
        }
    }
})