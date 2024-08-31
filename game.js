let count=0;
let arr = [];
let a = document.querySelectorAll(".btn");

function fn(){
  if (count==10) {
      
  let = c= document.querySelectorAll("#cross")
for (let i = 0; i < c.length; i++) {
  const element = c[i];
  

    let ind= window.getComputedStyle(element).getPropertyValue("z-index");
  
    if (ind==1) {
      arr[i]=1;
    }else{
      arr[i]=0;
    }
  }
  console.log(arr);
}
  
      

}
const getarr = ()=>{
  a.forEach( element => {
    
 let cross= element.querySelector("#cross");
 let zero =  element.querySelector("#zero");
  element.addEventListener("click",()=>{ 
  
   if (count%2==0) {
    cross.style.zIndex="1";
   zero.style.zIndex="-1";
   }else{
      cross.style.zIndex="-1";
   zero.style.zIndex="1";
   }
  
    
         count++;
       fn();

  
  })
 

  
  
})}
getarr();


 



  


    
   
  

 


 
 










    













   
