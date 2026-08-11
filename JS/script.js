"use strict";
$(function () {

    /* Program Switcher */

    $.getJSON("data/programs.json", function(programs){
        console.log(programs);

        $(".program-item").on("click", function(){
            const selectedProgram = $(this).data("program-type");
            console.log(selectedProgram);
            const program = programs[selectedProgram];
            console.log(program);

            $(".program-information h2").text(program.title);
            $(".program-information p:not(.label-text)").text(program.description);
            $(".program-image")
            .attr("src", program.image)
            .attr("alt", program.title);
            
             $(".stats:eq(0) h3").text(program.length);
             $(".stats:eq(1) h3").text(program.frequency);
             $(".stats:eq(2) h3").text(program.level);


            
        });
    });



    /*Save Program*/

    /*Carousel*/

});