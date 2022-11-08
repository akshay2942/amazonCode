export class GenericMethodamz {
element={
    searchBox:'#twotabsearchtextbox',
    dropList:'.autocomplete-results-container',
    sejList:'.s-suggestion'
}

inputText(input){
    cy.get(this.element.searchBox).type(input)
}

// selectDropList(searchElement){
//     cy.get(this.element.dropList).find(this.element.sejList).each(function(el){
//         cy.wrap(el).invoke("text").then(function(txt){
//             cy.log(txt.trim())
//             if(txt.trim()==searchElement){
//                 cy.wrap(el).click({force:true})
//                 return false
//             }
//         })  
//     })
// }

selectDinclude(searchele){
    cy.get(this.element.dropList).find(this.element.sejList).each(function(el){
                  let txt=el.text()
                    if(txt.includes(searchele)){
                        cy.get(el).click()
                    }
          
            })
}
}