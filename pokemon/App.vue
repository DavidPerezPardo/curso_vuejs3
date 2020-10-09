<template>

    <pokemons-cards 
        :pokemons="starters" 
        @pokemonClicked="fetchEvolutions"
        :selectedCard="selectedCard"
    />

    <pokemons-cards :pokemons="evolutions"/>

</template>

<script>

    import Card from '../src/components/Card.vue';
    import PokemonsCards from '../src/components/PokemonsCards.vue';

    const api ="https://pokeapi.co/api/v2/pokemon";
    const STARTER_IDS = [1, 4, 7];
    
    export default {
        components: {
            Card, PokemonsCards
        },
        data() {
            return {
                starters: [],
                evolutions: [],
                selectedCard: null
            }
        },
        // When the component is created,but isn't mounted (created in DOM)
        async created(){
            console.log('Created');
            this.starters = await this.fetchData(STARTER_IDS);
        },
        methods: {
            // Fetch starters pokemons
            async fetchData(ids) {

                // Multiple API response with promises
                const response = await Promise.all(ids.map( id => window.fetch(api + '/' + id)));
                // Convert to json
                const data = await Promise.all(response.map( res => res.json()));
                // Create pokemon object
                return data.map(datum => ({
                    id: datum.id,
                    name: datum.name,
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => (
                        type.type.name
                    ))
                }))
            },
            // Fetch evolutions pokemons
            async fetchEvolutions(pokemon) {
                this.selectedCard = pokemon.id;
                this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
            }
        }   
    }
    
</script>

<style scoped>

</style>