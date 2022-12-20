const quote=document.querySelector('#quote')
const btn=document.querySelector('#btn')
const quoteUrl='https://api.quotable.io/random'
const input=document.querySelector('#prevent')
//  async function getQuote(){
//     // fetch(quoteUrl).than(res=>res.json()).than(data=>console.log(data.quotes,'data'))
//  try{
// const response=await fetch (quoteUrl)
// const data=await response.json()
// console.log(response,'response')
// console.log(data,'data')
// quote.innerText=data.content
// } catch(err){
//     console.log(err,'this is error')
// }
function preventCkick(event){
    event.preventDefault()
    console.log('clicked')
}
input.addEventListener('click',preventCkick)
btn.addEventListener('click',preventCkick)
 
