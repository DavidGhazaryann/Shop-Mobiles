fetch("./data.json").then((response)=>{
  return response.json();
})
.then((data)=>{
  console.log(data)
}) 
let z = document.getElementById("big")
let header = document.getElementById("header")
let a1 = document.createElement('div')
header.append(a1)
header.className = 'header'
a1.className = 'blue'
let a = document.createElement('a')
let imgg = document.createElement('img')

imgg.src = "data:image/png;base64,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"
imgg.style.height = '70px'
a1.append(a)
a.append(imgg)
let form = document.createElement('form')
let inp = document.createElement('input')
a1.append(form)
form.append(inp)
inp.className = 'inp'
inp.className = 'search'


form.className = 'form'
let x = [
 {nkar:"img/1.jpg",name: "iPhone 11 64GB (Green)", prase:"249,900դր", hin:"<del>260,000դր</del>", },
{  nkar:"img/2.png",name: "Samsung Galaxy S22 Ultra 256GB (White)", prase:"583,900դր", hin:"<del>600,000դր</del>",},
 { nkar:"img/3.png",name: "Samsung Galaxy S22 Ultra 256GB (Black)", prase:"583,900դր", hin:"<del>600,000դր</del>", },
 { nkar:"img/4.jpg",name: "iPhone 14 Pro Max 128GB (Deep Purple)", prase:"669,900դր.", hin:"",},
 { nkar:"img/11.jpg",name: "NOKIA 3.2 (Black)", prase:"669,900դր.", hin:"",class:""},
 { nkar:"img/6.png",name: "Samsung Galaxy S22 Ultra 128GB (White)", prase:"583,900դր", hin:"<del>600,000դր</del>",},
 { nkar:"img/12.png",name: "Xiaomi Redmi 10A 128GB (Blue)", prase:"509,900դր.", hin:"",},
 { nkar:"img/8.png",name: "Samsung Galaxy S22 Ultra 256GB (Dark Red)", prase:"669,900դր", hin:"",class:""},
 { nkar:"img/9.png",name: "Samsung Galaxy S22+ 256GB (Pink Gold)", prase:"453,900դր.", hin:"<del>600,000դր</del>",},
 { nkar:"img/10.png",name: "Samsung Galaxy S22 Ultra 128GB (Black)", prase:"583,900դր", hin:"<del>600,000դր</del>",},


 




 
]
function creat(x){



for (var i = 0; i < x.length; i++) {
  let c1 = document.createElement('div')
    c1.className = 'c1'
    let kjj =document.createElement('div')
    kjj.className = 'kjj'
  let img = document.createElement("img")
    img.src = x[i].nkar
    img.style.width = "200px"
      z.append(c1);
      c1.append(img);
  let div1 = document.createElement('p');
  let div2 = document.createElement('p');
  let div3 = document.createElement('p');
    div1.innerHTML = x[i].name
    div2.innerHTML = x[i].prase
      c1.append(div1)
      c1.append(div2)
    div3.innerHTML = x[i].hin

    c1.append(div3)
  
    div1.className = "div1"
    div2.className = "div2"
    div3.className = "div3"



    

}
}
  inp.addEventListener('keyup',function(e){
  let user = x.filter((item) => {
    return item.name.slice(0,inp.value.length).indexOf(inp.value) !== -1
  }); 

    z.innerHTML = ""
   creat(user)
    console.log(user)
 
    
 

})
inp.addEventListener("click",function(){
  inp.style.borer = 'none'
})
creat(x)
