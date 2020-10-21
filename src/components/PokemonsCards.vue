<template>

    <div class="cards">

        <card v-for="pokemon in pokemons" :key="pokemon" 
            @click="pokemonClicked(pokemon)"
            :class="{ opace: selectedCard && pokemon.id !== selectedCard }"
            class="card">

            <template v-slot:title>
                {{ pokemon.name }} #{{ pokemon.id }}
            </template>
            
            <template v-slot:content>
                <img :src="pokemon.sprite" :alt="pokemon.name + ' Image'">
            </template>

            <template v-slot:description>
                <div v-for="type in pokemon.types">
                    {{ type }}
                </div>
            </template>

        </card>
    </div>

</template>

<script>

    import Card from './Card.vue';

    export default {

        components: {
            Card
        },
        props: {
            pokemons: {
                type: Array
            },
            selectedCard: {
                type: Number
            }
        },

        methods: {
            pokemonClicked(pokemon) {
                this.$emit('pokemonClicked', pokemon)
            }
        }
    }

</script>

<style scoped>

    .cards {
        width:100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .cards img {
        max-width: 50%;
    }

    .opace {
        opacity: 0.5;
    }

    .card:hover {
        opacity: 1;
    }

    .card {
        margin-top: 1rem;
    }

</style>