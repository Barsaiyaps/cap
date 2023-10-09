let image=[
    "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/07/dhanush-1-1658979649.jpg",
    "https://i.ytimg.com/vi/EWQKmOLHUEg/maxresdefault.jpg",
    "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1686680641/rl0gqzptxa6v1lwkfcpc.jpg",
    "https://i.ytimg.com/vi/COv52Qyctws/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDO6OaXWvS_GeGKeaNcSaw3Fo8j-w",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRziSQOvWsAJf3Bf_baL3v9bOqHrtVPT4QA&usqp=CAU",
    "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/11/02/208517-air-7.jpg?itok=Qk5K8I2i",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0chK5Y9DYW4Sgq8jODCAS0sqlODCMV6hpA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mAEHeeMK1OtsD4VaFAn1gfo_7-NUDChlAw&usqp=CAU",
    "https://imgeng.jagran.com/images/2022/nov/December-OTT-Movies-20221669717765999.jpg",
    "https://cdn.bollywoodmdb.com/fit-in/post/NSIfvOttP_1674375283071.jpg",
    "https://images.indianexpress.com/2021/12/Bollywood-films-2022.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQR-iDvnyLKi4OT90BXMDWbFXqZ_NgAd8Sig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5c288U47ggrzeXCjLcbLyR1XkxQYA346Cew&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbg1HOw-D2P_UyWAhP-l92Lm0WlPPGNXOUvQ&usqp=CAU",
    "https://assets.mspimages.in/gear/wp-content/uploads/2023/03/OTT-Mar-1-2023.jpg",
    "https://images.thedirect.com/media/article_full/marvel-dc-2023-superhero-movies.jpg",

]
let main=document.getElementById("main")
let ele=document.createElement("img")
let main2=document.getElementsByTagName("body")
let div=document.createElement("div")

    let but1=document.createElement("button")
    let but2=document.createElement("button")
    let but3=document.createElement("button")
   
  
 let i=0;
    var interval = setInterval(function(){
        if(i<image.length){
            ele.src=image[i]
            main.append(ele,but1)
            i++;
        }else{
            i=0;
            ele.src=image[i]
            main.append(ele,but1)
        }
    },2000)

    function stop(){
        clearInterval(interval)
    }
    function start(){
        interval = setInterval(function(){
            if(i<image.length){
                ele.src=image[i]
                main.append(ele,but1)
                i++;
            }else{
                i=0;
                ele.src=image[i]
                main.append(ele,but1)
            }
        },2000)
    }
    function pre(){
        clearInterval(interval)
        ele.src=image[i]
        i--;    
        main.append(ele,but1)
            

    }
    function next(){
        clearInterval(interval)
        ele.src=image[i]
        i++;
                main.append(ele,but1)
            
    }