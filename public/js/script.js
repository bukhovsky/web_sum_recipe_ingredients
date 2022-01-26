const app = Vue.createApp({
      data() {
        return {
          recipetext: '',
          ingridientstext: 'here will be some ingridients: '
               }
             },

      methods: {
     
        keyupfunction () {       
          const arrayOfLines = this.recipetext.split("\n")
          const arrayOfIngr =[] 
           
          for(let i = 0; i < arrayOfLines.length; i++) 
          {
              const x = arrayOfLines[i].match(/^.+ +\d+ +гр.*$/)
              if ( x != null) {
          arrayOfIngr.push(arrayOfLines[i])
          //console.log(arrayOfLines[i])
          //this.ingridientstext = arrayOfIngr

const ingrConsolidated = []
let y = 0
while (y < arrayOfIngr.length) {

const weightStart = arrayOfIngr[y].search(/\d+ +гр/)   
const weightEnd = arrayOfIngr[y].search(/ +гр/) 
const ingrName = arrayOfIngr[y].slice(0, weightStart - 1)
const ingrWeight = arrayOfIngr[y].slice(weightStart, weightEnd)
const ingrSet = [ingrName, ingrWeight]
ingrConsolidated.push(ingrSet)
y+=1
}
this.ingridientstext = ingrConsolidated

                               }
          }
        
                          }
                }
})

const vm = app.mount('#ingridients_recipe_area')


