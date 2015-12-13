$(document).ready(function() {
    debugger
    var AN = $("#AN");
    var KA = $("#KA");
    var PO = $("#PO");
    var MI = $("#MI");
    var CO = $("#CO");
    var ANM = $("#ANM");
    var KAM = $("#KAM");
    var POM = $("#POM");
    var MIM = $("#MIM");
    var COM = $("#COM");
    var an,ka,po,mi,co;
    
    $(AN).click(function(){
        if(ANM.hasClass("notmarked")){
            $(ANM).removeClass("notmarked").addClass("marked");
            an = 1;
        }else{
            $(ANM).removeClass("marked").addClass("notmarked");
            an = 0;
        }
    });
    
    $(KA).click(function(){
       if(KAM.hasClass("notmarked")){
            $(KAM).removeClass("notmarked").addClass("marked");
            ka = 1;
        }else{
            $(KAM).removeClass("marked").addClass("notmarked");
            ka = 0;
        }
    });
    
    $(PO).click(function(){
        if(POM.hasClass("notmarked")){
            $(POM).removeClass("notmarked").addClass("marked");
            po = 1;
        }else{
            $(POM).removeClass("marked").addClass("notmarked");
            po = 0;
        }
    });
    
    $(MI).click(function(){
       if(MIM.hasClass("notmarked")){
            $(MIM).removeClass("notmarked").addClass("marked");
            mi = 1;
        }else{
            $(MIM).removeClass("marked").addClass("notmarked");
            mi = 0;
        }
    });
    
    $(CO).click(function(){
       if(COM.hasClass("notmarked")){
            $(COM).removeClass("notmarked").addClass("marked");
            co = 1;
        }else{
            $(COM).removeClass("marked").addClass("notmarked");
            co = 0;
        }
    });
    
    $("#send").click(function(){
        
        var name = $("#usr").val();
    });
    
    var dialog = document.getElementById('window');  
    document.getElementById('show').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('exit').onclick = function() {  
        dialog.close();  
    };
});