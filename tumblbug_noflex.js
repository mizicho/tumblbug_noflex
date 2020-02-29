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

const projects = [{title: "[월간쳔지서비스]당신깨보내는작가의편지-'감정'편",  creator:"애프터눈 티 클럽 by 취향관", days_remain: "12", current_fund: 752529000, fund_percentage: 725, thumbnail: "wave-3473335_1920.jpg"},
                    {title: "<ROBUTER>술주으이 술 안동소주를 찾아서",  creator:"ROBUTER", days_remain: "13", current_fund: 1425200, fund_percentage: 47, thumbnail: "wave-3473335_1920.jpg"},
                    {title: "용기가 필요한 당신에게, 전통영물 백호 드림캐쳐&키링&뱃지",  creator:"온고", days_remain: "17", current_fund: 11485000, fund_percentage: 1148, thumbnail: "water-424807_1920.jpg'"},
                    {title: "핸드메이드 작고 필독서!<자수소품 액세서리>",  creator:"마피아싱글하우스", days_remain: "10", current_fund: 3716400, fund_percentage: 371, thumbnail: "wave-3473335_1920.jpg"}]
const projects_div = document.querySelector(".carousel-container")
console.log(projects_div)

function add_project(project){
    const item_div = document.createElement("div")
    const img = document.createElement("img")
    const p = document.createElement("p")
    
    item_div.className = 'item'
    img.className = 'carousel-image'
    p.className = 'carousel-test'
    p.innerText = project.title

    img.src = project.thumbnail

    item_div.appendChild(img)
    item_div.appendChild(p)

    projects_div.appendChild(item_div)
}
    projects.forEach((project) => {
        add_project(project);
    })



