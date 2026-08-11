"use strict";
$(function () {

    /* Program Switcher */

    $.getJSON("data/programs.json", function(programs){
        let currProgram = "strength";
        const initialSavedProgram = localStorage.getItem("favoriteProgram");
        
        if (currProgram === initialSavedProgram) {
        $("#save-program-btn img")
            .attr("src", "images/button-heart-filled.svg");
        }

        $(".program-item").on("click", function(){
            const selectedProgram = $(this).data("program-type");
            currProgram = selectedProgram
            const program = programs[selectedProgram];

            $(".program-information h2").text(program.title);
            $(".program-information p:not(.label-text)").text(program.description);
            $(".program-image")
            .attr("src", program.image)
            .attr("alt", program.title);
            
             $(".stats:eq(0) h3").text(program.length);
             $(".stats:eq(1) h3").text(program.frequency);
             $(".stats:eq(2) h3").text(program.level);

             const savedProgram = localStorage.getItem("favoriteProgram");
              
            if (currProgram === savedProgram){
            $("#save-program-btn img")
            .attr("src", "images/button-heart-filled.svg");
            } else{
            $("#save-program-btn img")
            .attr("src", "images/button-heart.svg");
            }

            
        });

        /*Save Program*/
        $("#save-program-btn").on("click", function(){
            localStorage.setItem("favoriteProgram", currProgram);

            $("#save-program-btn img")
            .attr("src", "images/button-heart-filled.svg");

            alert("Program Saved Successfully!")
        });

    });

    /*Carousel*/
    const swiper = new Swiper(".state-carousel", {
        loop: true,

        slidesPerView: 2.3,
        centeredSlides: true,
        spaceBetween: 20,
        
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });




});
