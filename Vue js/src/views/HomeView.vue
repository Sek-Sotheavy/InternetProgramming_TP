<script >
import category from '../libs/apis/category';
import productAPi from '../libs/apis/product';
export default {

        data() {
                return {
                        categories: [],
                        Products:[],

                };
        },
        async mounted() {
                this.categories = await category.all()
                this.Products = await productAPi.all()
        },
        methods: {
              async onClick(categoryId, itemId){
                        this.Products = await productAPi.getallproduct(categoryId,itemId)
                },

        },
};
</script>

<template>
        <main class="bg-gray-200 ">
                <div class="bg-gray-500 py-2 text-center text-lg relative">TopOne.com

                        <div class=" absolute text-black right-2 top-2 bg-gray-300 px-2 rounded-md cursor-pointer ">
                                <router-link to="/dashboard">
                                        <div class="">Dashboard</div>
                                </router-link>
                        </div>
                </div>
                <div class="flex border border-black ">
                       <div class="sidebar w-1/5 border-r border-black">
                                <ul class="">
                                        <li class="category list-disc pl-5 list-inside" v-for="category in categories" :key="category._id">
                                                <a href="#" class=""> {{ category.name }}</a>
                                                <ul>
                                                        <li class="item pl-5 list-disc list-inside" v-for="item in category?.items" :key="item._id">
                                                                <a href="#" class="" @click="onClick(item.category, item._id)">{{ item.name }}</a>
                                                        </li>
                                                </ul>
                                        </li>
                                </ul>
                        </div> 
                        <div class="inforn grid grid-cols-3 w-4/5 h-98">
                                <div class="product" v-for="product in Products" :key="product._id">
                                        <div class="w-52 border border-black m-5 p-5 h-72">
                                                <!-- <div>{{ product.imageUrl }}</div> -->
                                                <div class="flex justify-center"><img :src=" product.imageUrl" alt="" style="width: 130px; height: 150px;"></div>
                                              <div class="text-center"> {{ product.title }} </div>
                                                <div class="m-2 mt-3">
                                                        <h2>Shop: <span class="flex justify-end">{{ product.Prices }}</span> </h2>
                                                        <p>Desc: <span class="pl-2">{{ product.desc }}</span></p>
                                                </div>
                                                <div ></div> 
                                        </div>
                                </div>
                        </div>
                </div>
        </main>
</template>

<style>

a {
        color: black;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a:hover {
        color: blue;
}
</style>