// toggle menu button
function toggleMenu(){
    const menu =document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

//Chage the background video when click on the gallery images 
function changeVideo(name){
    const bgVideoList= document.querySelectorAll('.bg-video');
    const trailers= document.querySelectorAll('.trailer');
    const models= document.querySelectorAll('.model');


    //javaScript Higher order array function for Each
    // this easier to do data mapping 
    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    //Mapping model name change 
    models.forEach(model =>{
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });

    //Mapping trailer video change 
    trailers.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

}

//Change the Play and Pause button on click event
function toggleplay(){
    const play=document.querySelector('.play');
    const pause =document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');

}

//Video Play and Pause 

function pauseVideo(){
    const bgVideoList= document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.pause();
    });
    toggleplay();
}

function playVideo(){
    const bgVideoList= document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.play();
    });
    toggleplay();
}

