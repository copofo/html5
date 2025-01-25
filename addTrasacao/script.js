const g = (tag) => document.querySelector(tag)

const venda = g("#venda")

const compra = g('#compra')

window.addEventListener("click", (e)=>{

    const evt = e.target.id

    if(evt === "compra"){
        compra.style.background = 'black'
        compra.style.color = 'rgb(145, 116, 54)'

        venda.style.color = 'black'
        venda.style.background = 'rgba(128, 128, 128, 0.336)'
    } 
    
    if(evt === "venda"){

        venda.style.background = 'black'
        venda.style.color = 'rgb(145, 116, 54)'
        


        compra.style.background = 'rgba(128, 128, 128, 0.336)'
        compra.style.color = 'black'

        
    }
})

