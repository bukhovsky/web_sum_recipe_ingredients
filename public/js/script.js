
  const app = Vue.createApp({
    data() {
      return {
        recipetext: '',
        ingridientstext: 'here will be some ingridients: '
      }},
      methods: {
     
        keyupfunction () {

          const textAreaValue = this.recipetext
  
          const arrayOfLines = textAreaValue.split("\n")
          const arrayOfIngr =[] 
     
      
          for(let i = 0;i < arrayOfLines.length;i++) 
          {
              let x = arrayOfLines[i].match(/^.+ +\d+ +гр.*$/)
              if ( x != null) {
          arrayOfIngr.push(arrayOfLines[i])
          console.log(arrayOfLines[i])
          this.ingridientstext = arrayOfIngr
                                }
          }


            //this.ingridientstext = "here will be some ingridients: "+ this.recipetext
        
        }
      
    }
  })

const vm = app.mount('#ingridients_recipe_area')


