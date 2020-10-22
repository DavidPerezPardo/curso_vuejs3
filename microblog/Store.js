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

            let arr = [];
            let self = this;
            let check;

            // Filtered by hashtags
            this.state.posts.forEach( function (value) {
                check = value.hashtags.some( el => el.search(self.state.currentHashtag) > -1)

                check ? arr.push(value) : false;
            })
            return arr;
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
