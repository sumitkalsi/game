let count=0;
let arr = [];
let a = document.querySelectorAll(".btn");

function fn(){
  
      
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
  
}
  
function l(element){
    arr[element.id]=1;
    console.log(arr);

}



  a.forEach( element => {
    
 let cross= element.querySelector("#cross");
 let zero =  element.querySelector("#zero");
  element.addEventListener("click", function getarr(){ 
  
    if (count%2==0) {
     cross.style.zIndex="1";
    zero.style.zIndex="-1";
    }else{
       cross.style.zIndex="-1";
    zero.style.zIndex="1";
    }
   
     
          count++;
          if(count==8){
            fn();
          }
   
        if (count==9) {
          l(element)
        }
      
   },{once :true});
  
  })
  
  




 



  


    
   
  

 


 
 










    













   
