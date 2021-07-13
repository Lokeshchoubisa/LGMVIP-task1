const elementInView = (el,percentageScroll=100) => {
    const elementTop = el.getBoundingClientRect().top+25;
//    console.log("inside")
    console.log(elementTop,elementTop ,window.innerHeight);
    return (
      elementTop <= ((window.innerHeight || document.documentElement.clientHeight)*(percentageScroll/100))
    );
  };


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

window.addEventListener("scroll",async()=>
{
      
      const welcome_section=document.querySelector(".welcome-section");
      const el=document.querySelector(".welcome-block");
      if(elementInView(welcome_section))
      {
        el.style.transform="translateY(0px)";
        // el.style.transition="all 4s ease-in";
        el.style.opacity=1;
        // e.style
        console.log("stated")
      }

      const projects=document.querySelector(".projects");
      console.log(elementInView(projects));
      if(elementInView(projects))
      {
          console.log("inside projects")

        //   document.querySelector(".project-section > h1").style.transform="translateY(-100vh)";
        //   document.querySelector(".project-section > h1").style.transition="all 3s";
          document.querySelector(".project-section > h1").style.transform="translateY(0)";
          document.querySelector(".project-section > h1").style.opacity=1;
            
        await sleep(2000);
        //   projects.style.transition="all 3s";
          projects.style.opacity=1;
      }

      const team=document.querySelector(".team-section")
      if(elementInView(team))
      {
        console.log("inside avatar")  
        const avatar=document.querySelectorAll(".avatar");
        console.log(avatar);
          avatar.forEach(async a=>
            {
                // a.style.opacity=0;
                console.log("waiting")
                await sleep(2000);
            })
      }

})





















// var content=document.getElementsByClassName("content")
// console.log(content)
// window.content=content;
var data=["One page promising to fill all your needs!","slide1","slide2","slide3"]
var Imageurl=["https://images.pexels.com/photos/1040499/pexels-photo-1040499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    // "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1040499/pexels-photo-1040499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// "https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

]
var content=document.querySelector(".content");
var imageContainer=document.querySelector(".image-container");
// console.log(h1);
let i=0
document.getElementById("button1").addEventListener("click",()=>
{
    // console.log("button 1 cliked")
    i=changeBackground(i-1,-1);

})

document.getElementById("button2").addEventListener("click",()=>
{
    console.log("next cliked")
    i=changeBackground(i+1,1);
})


var h1=content.querySelector("h1");



const changeBackground=(i,a)=>
{
    // console.log("changeBackgorund "+i);
    if(i==data.length)
    {
        i=0;
    }
    if(i==-1)
    {
        i=data.length-1
    }
    h1.innerHTML=data[i];
    imageContainer.style.backgroundImage=`url(${Imageurl[i]})`;
    if(a==1)
    {

        // i+=1;
    }
    else
    {
        // i-=1
    }
    return i;
    
}
setInterval(()=>
{
    // console.log("inside setInterval")
    i=changeBackground(i+1,1);
},3000)




