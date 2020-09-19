
 $( document ).ready(function() {
    if($("#type_text").length){
        let text1 = new TypeIt("#type_text", {
            speed: 70,
            strings: ["Hi, this page is my portfolio, here are my works that are done in the learning process and in commercial projects"],
        }).go();
    }
    
    if($("#simpleUsage").length){
        let text2 = new TypeIt("#simpleUsage", {
            speed: 50,
            strings: ["Are you seriously ?", "you are already on GitHub"],
        }).go();
    }
});