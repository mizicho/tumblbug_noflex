 var image = document.getElementsByTagName('widgetimage')[0];
 var image_to_show = 0;
 var image_container = ['wave-3473335_1920.jpg','water-424807_1920.jpg','ocean-3605547_1920.jpg'];    //Put all the images you want


setInterval(function(){

if(image_to_show >= image_container.length -1)      //Return to the first one
{
    image_to_show = 0;  
}
else
{
    image_to_show++;
}

    widgetimage.src = image_container[image_to_show];

},3000);



