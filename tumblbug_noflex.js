 let image = document.getElementsByClassName('frontimage');
 let image_to_show = 0;
 let image_container = ['wave-3473335_1920.jpg','water-424807_1920.jpg','ocean-3605547_1920.jpg'];   


setInterval(function(){

if(image_to_show >= image_container.length -1)     
{
     image_to_show = 0;  
 }
else
{
    image_to_show++;
}

    image = image_container[image_to_show];

},3000);



