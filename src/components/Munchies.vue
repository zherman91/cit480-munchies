<template>
  <main>
    <v-container grid-list-lg justify-space-between>
      <v-layout row wrap align-center justify-space-between>
        <v-flex xs12 lg6 d-flex>
          <v-img src="/static/images/munchies_logo.jpg"
                 lazy-src="/static/images/munchies_logo.jpg"
                 max-width="45%"
                 aspect-ratio=""
                 style="border-radius: 15px;">
          </v-img>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-text-field label="Total Points"
                        readonly
                        v-model="_pointTotal"
                        color="success">
          </v-text-field>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-btn large round dark color="blue darken-3" @click="cart = []; _pointTotal = 0">Clear Cart</v-btn>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-label>Cart: {{cart}}</v-label>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-btn large round dark color="green darken-3" @click="finished">Finished</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-md>
      <v-flex mb-3>
        <v-label>Healthy</v-label>
        <v-divider color="success"></v-divider>
      </v-flex>
      <v-layout justify-center row wrap>
        <v-flex xs10 sm4 md3 lg2 v-for="x in healthy" :key="x.name">
          <v-card hover>
            <v-img :src="x.path.toString()"
                   :lazy-src="x.path.toString()"
                   @click="testClick(x)"
                   aspect-ratio="3"
                   contain>
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{x.name}}</div>
                <span class="green--text">Points: {{x.points}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn small round dark color="green" @click="testClick(x)">Buy ${{x.price}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex mb-3>
        <v-label>Not So Healthy</v-label>
        <v-divider color="error"></v-divider>
      </v-flex>
      <v-layout justify-center row wrap>
        <v-flex xs10 sm4 md3 lg2 v-for="x in unhealthy" :key="x.name">
          <v-card hover>
            <v-img :src="x.path.toString()"
                   :lazy-src="x.path.toString()"
                   @click="testClick(x)"
                   aspect-ratio="3"
                   contain>
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{x.name}}</div>
                <span class="red--text">Points: {{x.points}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn small round dark color="green" @click="testClick(x)">Buy ${{x.price}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-container grid-list-lg justify-space-between>
      <v-layout row wrap align-center justify-space-between>
        <v-flex xs12 lg6 d-flex>
          <v-img src="/static/images/munchies_logo.jpg"
                 lazy-src="/static/images/munchies_logo.jpg"
                 max-width="45%"
                 aspect-ratio=""
                 style="border-radius: 15px;">
          </v-img>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-text-field label="Total Points"
                        readonly
                        v-model="_pointTotal"
                        color="success">
          </v-text-field>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-btn large round dark color="blue darken-3" @click="cart = []; _pointTotal = 0">Clear Cart</v-btn>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-label>Cart: {{cart}}</v-label>
        </v-flex>
        <v-flex xs12 lg1 d-flex>
          <v-btn large round dark color="green darken-3" @click="finished">Finished</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>

  export default {
    name: 'Munchies',
    props: {
      __pointTotal: {
        type: Number,
        default: 0
      }
    },
    components: {},
    computed: {
      cartTotal: {
        get() {
          return this._cartTotal;
        },
        set(value) {
          this._cartTotal = value;
        }
      },
      pointTotal: {
        get() {
          return this._pointTotal
        },
        set(value) {
          this._pointTotal = value;
        }
      }
    },
    data() {
      return {
        healthy: [
          { name: 'Apple', path: 'static/images/healthy/apple.png', price: 1.25, points: 10 },
          { name: 'Banana', path: 'static/images/healthy/broccoli.png', price: 1.50, points: 15 },
          { name: 'Carrot', path: 'static/images/healthy/carrot.png', price: 1.75, points: 12 },
          { name: 'Fish', path: 'static/images/healthy/fish.png', price: 2.75, points: 30 },
          { name: 'Orange', path: 'static/images/healthy/orange.png', price: 1.00, points: 14 },
          { name: 'Grapes', path: 'static/images/healthy/grapes.png', price: 2.00, points: 20 },
          { name: 'Lettuce', path: 'static/images/healthy/lettuce.png', price: 0.75, points: 22 },
          { name: 'Pinapple', path: 'static/images/healthy/pineapple.png', price: 2.25, points: 25 },
          { name: 'Strawberry', path: 'static/images/healthy/strawberry.png', price: 1.75, points: 25 },
          { name: 'Tomato', path: 'static/images/healthy/tomato.png', price: 1.50, points: 12 },
        ],
        unhealthy: [
          { name: 'Blue Moon', path: 'static/images/unhealthy/beer.png', price: 3.50, points: -10, },
          { name: 'Pizza', path: 'static/images/unhealthy/pizza.png', price: 1.50, points: -25 },
          { name: 'Fries', path: 'static/images/unhealthy/fries.png', price: 1.50, points: -35 },
          { name: 'Candy Cane', path: 'static/images/unhealthy/candycane.png', price: 0.50, points: -20 },
          { name: 'Chocolate', path: 'static/images/unhealthy/chocolate.png', price: 1.00, points: -15 },
          { name: 'Cupcake', path: 'static/images/unhealthy/cupcake.png', price: 1.50, points: -50 },
          { name: 'Hard Candy', path: 'static/images/unhealthy/hardcandy.png', price: 0.75, points: -15 },
          { name: 'Ice Cream', path: 'static/images/unhealthy/ice-cream.png', price: 2.00, points: -25 },
          { name: 'Mud Slide', path: 'static/images/unhealthy/mudslide.png', price: 1.75, points: -40 },
          { name: 'Toffee', path: 'static/images/unhealthy/toffee.png', price: 0.85, points: -10 },

        ],
        cart: [],
        finalCart: [],
        _cartTotal: 0,
        _pointTotal: 0,
        num: null
      }
    },
    mounted() {
      this.pointTotal = 0;
    },
    methods: {
      testClick(item) {
        console.log('WOW', item.points);
        console.log('POINT TOTAL', this._pointTotal);
        this.cart.push(item.name);
        this.finalCart.push(item);
        this._pointTotal += item.points;

        console.log('POINT TOTAL', this._pointTotal);
      },
      finished() {
        console.log('CART', this.finalCart);
        //TODO: Ready for PG transaction..

      },
      totalCart() {
        //TODO: Create label with running point and dollar amounts - LEFT OFF HERE 11.12.18
        let total = 0;
        if (this.cart)
          total = this.cart.map(el => {
            return el
          }).reduce((curr, acc) => {
            return curr.points + acc.points;
          }, {});

        return total;

      },
      totalPoints() {

      }
    }
  }
</script>

<style scoped>

</style>
