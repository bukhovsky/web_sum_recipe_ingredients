
  const app = Vue.createApp({
    data() {
      return {
        recipetext: '',
        ingridientstext: 'here will be some ingridients: '
      }},
      methods: {
     
        keyupfunction () {
            this.ingridientstext = "here will be some ingridients: "+ this.recipetext
        
        }
      
    }
  })

const vm = app.mount('#ingridients_recipe_area')


