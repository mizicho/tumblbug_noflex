let image = document.getElementsByClassName('frontimage');
let image_to_show = 0;
let image_container = ['wave-3473335_1920.jpg','water-424807_1920.jpg','ocean-3605547_1920.jpg'];   


setInterval(function(){
   
   if(image_to_show >= image_container.length -1){
       image_to_show = 0;  
   }else{
       image_to_show++;
   }
   //console.log(image_container[image_to_show])
   image[0].src = image_container[image_to_show];
   //console.log(image[0])
},1000);

const projects = [{title: "[월간쳔지서비스]당신깨보내는작가의편지-'감정'편",  creator:"애프터눈 티 클럽 by 취향관", days_remain: "12", current_fund: 752529000, fund_percentage: 725, thumbnail: "carousel_1.jpg"},
                   {title: "<ROBUTER>술주으이 술 안동소주를 찾아서",  creator:"ROBUTER", days_remain: "13", current_fund: 1425200, fund_percentage: 47, thumbnail: "carousel_2.jpg"},
                   {title: "용기가 필요한 당신에게, 전통영물 백호 드림캐쳐&키링&뱃지",  creator:"온고", days_remain: "17", current_fund: 11485000, fund_percentage: 1148, thumbnail: "carousel_3.jpg"},
                   {title: "핸드메이드 작고 필독서!<자수소품 액세서리>",  creator:"마피아싱글하우스", days_remain: "10", current_fund: 3716400, fund_percentage: 371, thumbnail: "carousel_4.jpg"}]
const projects_div = document.querySelector(".carousel-container")

function show_project(project){
   const item_div = document.createElement("div")
   item_div.className = "item"

   const project_div = document.createElement("div")
   project_div.className = "project-info"

   const img = document.createElement("img")
   img.className = "project-image"

   // const svg = document.createElementNS("http://www.w3.org/200/svg", "svg")
   // svg.className = "rect"

   const project_title_div = document.createElement("div")
   project_title_div.className = "project-title"

   const title_div = document.createElement("div")
   project_title_div.className = "title"

   const creator_div = document.createElement("div")
   creator_div.className = "creator"

   const project_status_div = document.createElement("div")
   project_status_div.className = "project-status"

   const time_remain_div = document.createElement("div")
   time_remain_div.className = "time-remain"
   
   const fund_amount_div = document.createElement("div")
   fund_amount_div.className = "fund-amount"
   

   creator_div.innerText = project.creator
   creator_div.style.fontSize = "0.3rem";
   title_div.innerText = project.title
   title_div.style.fontSize = "0.8rem";
   title_div.style.fontWeight = "bold";
   time_remain_div.innerText = project.days_remain + " 일 남음"
   fund_amount_div.innerText = project.current_fund + "원" + project.fund_percentage + "%"    

   img.src = project.thumbnail
   img.style.height = "155px";
   img.style.width = "255px";
   // svg.setAttribute("width", "100")
   // svg.setAttribute("height", "2px")

   

   project_title_div.appendChild(title_div)
   project_title_div.appendChild(creator_div)
   project_status_div.appendChild(time_remain_div)
   project_status_div.appendChild(fund_amount_div)
   project_div.appendChild(img)
   // project_div.appendChild(svg)
   project_div.appendChild(project_title_div)
   project_div.appendChild(project_status_div)
   item_div.appendChild(project_div)

   projects_div.appendChild(item_div)
   console.log(project.title)

}
projects.forEach((project) => {
   show_project(project);
})



