Vue.component('products', {
    data(){
        return {
            products: [],
        }
    },
    mounted(){
        this.$parent.getJson(`./getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                }
            })
    },
    template: `
        <div class="featured_items products">
            <product v-for="item of products" :key="item.id_product" :img="item.image" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
    <div class="featured_items_box">
        <a href="#" class="product">
            <img :src="img" alt="" class="product-pics">
            <div class="featured_items_text">
                <p class="featured_items_name">Mango People T-shirt</p>
                <p class="featured_items_price">$52.00</p>
            </div>
        </a>
        <div class="box-add">
            <a class="add-to-cart" href="#">Add to Cart</a>
        </div>
    </div>
    `
})