window.onload = () => {
    

    window.onscroll = function () {
        let names=document.querySelectorAll(".Scroll");
        let height=window.innerHeight;
        for(let i=0 ;i < names.length;i++){
             
             let name=names[i];
             
             let position=name.getBoundingClientRect().top;
             if(position < height-100){
                name.classList.add("active");
             }else{
                name.classList.remove("active");
             }
        }
       
    }
}