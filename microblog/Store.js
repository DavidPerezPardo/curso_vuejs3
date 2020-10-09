import { testPosts } from './testPosts';
import { reactive } from 'vue';

class Store {
    
    constructor() {
        
        this.state  = reactive({
            posts: testPosts,
            currentHashtag: null
        });
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag;
    }

    incrementLike(post) {
        
        const thePost = this.state.posts.find(
            value => value.id === post.id
        );
        
        if(!thePost) {
            return;
        }

        thePost.likes ++;

    }

}

export const store = new Store();
