import { testPosts } from './testPosts';
import { reactive, computed } from 'vue';

class Store {
    
    constructor() {
        
        this.state  = reactive({
            posts: testPosts,
            currentHashtag: null

        });
    }

    // Getter for filtered posts by hashtag
    get filteredPosts() {
        
        return computed(() => {

            if(!this.state.currentHashtag) {
                return this.state.posts
            }
    
            return this.state.posts.filter(
                post => post.hashtags.includes(this.state.currentHashtag)
            )    
        })
        
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
