
$("#plateau").hide();
$('.score').hide();
$('.j1').hide();
$('.j2').hide();
$('#efface').hide();
$('#replay').hide();
$('.joueur').hide();

(function($) {
    $.fn.jeux = function() {

        var COLS = prompt("combien de collonne ?");
        var ROWS = prompt('combien de lignes ?')
        var couleur_1 = prompt('couleur joueur 1 ? black, red, purple, green, yellow')
        var couleur_2 = prompt('couleur joueur 2 ? black, red, purple, green, yellow')

        var nbc = COLS
        var nbr = ROWS 
        
        if(nbc == ''){
            nbc = 7
        }

        if(nbr == ''){
            nbr = 6
        }

        $('#debut').animate({
            height: 'toggle'
          });
        $("#plateau").show('slow');
        $('.score').show('slow');
        $('.j1').show('slow');
        $('.j2').show('slow');
        $('#efface').show('slow');
        $('#replay').show('slow');
        $('.joueur').show('slow');
        
        $('.nom').empty();
        $('.nom').prepend('Joueur 1');
        $('.couleur').css('background-color', 'white');
        
        var x = 0;
        while(x < nbc)
        {    x++;
            $('#plateau').prepend('<div class="colonne"></div>');
        }
        
        var i = 0
        while(i < nbr)
        {    i++;
            $('.colonne').prepend('<div class="cell"></div>');

        }

        function rejouer(){
            $('.cell').css('background-color', 'white');
            $('.nom').empty();
            $('.nom').prepend('Joueur 1');
            colorPlayer = 0;

        };

        $('#replay').click(function(){
            rejouer()
            $('.cell').removeClass("joueur_1")
            $('.cell').removeClass("joueur_2")
        });

        var colorPlayer = 4
        var score_1 = 0
        var score_2 = 0

        $('.colonne').click(function(event){

            var couleur_Joueur1 = couleur_1
            var couleur_Joueur2 = couleur_2

            var rgb_1 

            var rgb_2
    // ON DEFINIE LA COULEUR DU JOUEUR 1

            if(couleur_1 == ''){
                rgb_1 = 'rgb(255, 0, 0)'
                couleur_Joueur1 = 'red'
            }

            if(couleur_Joueur1 == 'black'){
                rgb_1 = 'rgb(0, 0, 0)';
            }
            else if(couleur_Joueur1 == 'red')
            {
                rgb_1 = 'rgb(255, 0, 0)';
            }
            else if(couleur_Joueur1 == 'purple')
            {
                rgb_1 = 'rgb(128, 0, 128)';
            }
            else if(couleur_Joueur1 == 'green')
            {
                rgb_1 = 'rgb(0, 128, 0)'
            }
            else if(couleur_Joueur1 == 'yellow')
            {
                rgb_1 = 'rgb(255, 255, 0)'
            }
            else
            {
                if(couleur_Joueur1 != ''){
                    rgb_1 = 'rgb(255, 0, 0)'
                    couleur_Joueur1 = 'red'
                }
            }

            if(couleur_1 && couleur_2 != ''){
                if(couleur_1 == couleur_2){
                    var nv_couleur = prompt('Joueur 2 votre couleur est déja prise choisissez en une autre parmis celles-ci : black, red, purple, green, yellow')
                    couleur_2 = nv_couleur;
                }
            }

    // LA COULEUR DU JOUEUR 2
            
            
            if(couleur_2 == ''){
                rgb_2 = 'rgb(255, 255, 0)';
                couleur_Joueur2 = 'yellow'
            }

            if(couleur_Joueur2 == 'black'){
                rgb_2 = 'rgb(0, 0, 0)';
            }
            else if(couleur_Joueur2 == 'red')
            {
                rgb_2 = 'rgb(255, 0, 0)';
            }
            else if(couleur_Joueur2 == 'purple')
            {
                rgb_2 = 'rgb(128, 0, 128)';
            }
            else if(couleur_Joueur2 == 'green')
            {
                rgb_2 = 'rgb(0, 128, 0)'
            }
            else if(couleur_Joueur2 == 'yellow')
            {
                rgb_2 = 'rgb(255, 255, 0)'
            }
            else
            {
                if(couleur_Joueur2 != ''){
                    rgb_2 = 'rgb(255, 255, 0)';
                couleur_Joueur2 = 'yellow'
                }
            }
            
            
            var colorPion;

            if(colorPlayer == 4){
                colorPlayer = 0
            }


            if(colorPlayer == 0){

                colorPion = couleur_Joueur1;
                couleur = rgb_1
                tex_id = "joueur_1";
                 $('.nom').empty();
                 $('.nom').prepend('joueur 2');
                $('.couleur').css('background-color', couleur_Joueur2);

            }else if(colorPlayer == 1){

                colorPion = "white"

            }else if(colorPlayer == 2){

                colorPion = couleur_Joueur2;
                couleur = rgb_2
                tex_id = "joueur_2";
                 $('.nom').empty();
                 $('.nom').prepend('joueur 1');
                $('.couleur').css('background-color', couleur_Joueur1);

            }
    
            var cont = $(this).find(".cell").length ;

            for(i=cont; i > 0; i--){
                let color = $(this).children(':nth-child('+i+')').css('background-color');


                if(color == 'rgb(255, 255, 255)'){
                    

                     x = $(this).children(':nth-child('+i+')').index()+1;
                    
                     y = $(this).children(':nth-child('+i+')').parent().index()+1;

                    
                    $(this).children(':nth-child('+i+')').css('background-color', colorPion);
                    $(this).children(':nth-child('+i+')').addClass(tex_id);

                    var change = $(this).children(':nth-child('+i+')');

                    i = 0 

                     if(colorPlayer == 0){
                        colorPlayer = 2;
                     }else if(colorPlayer == 2){
                         colorPlayer = 0
                     }
                    
                }
            }
            
        //CONDITION DE VICTOIRE VERTICALE

                var rouge = 0
                var jaune = 0
                var note = x+4
            
                for(z = x; z < note; z++){

                    var clem = $(this).children(':nth-child('+z+')').css('background-color');
                    // console.log(z+' '+clem)

                    if(clem == couleur){
                        if(couleur == rgb_1 ){
                            rouge +=1
                            console.log(rgb_1+'couleur '+ couleur)
                        }
                    
                       else if(couleur == rgb_2){
                            jaune +=1

                        }
                        else{
                            rouge = 0
                            jaune = 0
                        }
                    }

                    if(rouge == 4){
                        alert('le joueur 1 a gagné');
                        score_1+=1
                        $('#sc_1').empty()
                        $('#sc_1').prepend(score_1)
                        colorPlayer = 1                      
                        return;
                    }
                    else if(jaune == 4){
                        alert('le joueur 2 a gagné');
                        score_2+=1
                        $('#sc_2').empty()
                        $('#sc_2').prepend(score_2)
                        colorPlayer = 1
                        return;
                    
                    }
                }
                
            // CONDITION DE VERIFICATION  HORIZONTALE

                var rouge_2 = 0
                var jaune_2 = 0
                
                

                for(oj = 1; oj <= nbc ; oj++){
                    
                    color_ligne = $('#plateau').children(':nth-child('+oj+')').children(':nth-child('+x+')').css('background-color');
                    console.log(oj+' '+x+' '+color_ligne)

                    if(color_ligne == couleur){
                        if(couleur == rgb_1 ){
                            rouge_2 +=1
                            console.log(rouge_2)
                        }
                    
                       else if(couleur == rgb_2){
                            jaune_2 +=1
                            console.log(jaune_2)
                        }
                    }
                    else{
                        rouge_2 = 0
                        jaune_2 = 0
                    }

                    if(rouge_2 == 4){

                        alert('le joueur 1 a gagné');
                        score_1+=1
                        $('#sc_1').empty()
                        $('#sc_1').prepend(score_1)
                        colorPlayer = 1                      
                        return;
                    }
                    else if(jaune_2 == 4){
                        alert('le joueur 2 a gagné');
                        score_2+=1
                        $('#sc_2').empty()
                        $('#sc_2').prepend(score_2)
                        colorPlayer = 1
                        return;
                    
                    }
                }


            
            // EN DIAGONALE DE GAUCHE A DROITE

            var pos_x
            var pos_y
            var posy = y 

            // ON RECUPERE LA POSITION D'OÙ NOUS FERONS LA VERIFICATION 

            for(i = x; i > 0; i--){

               var position = $('#plateau').children(':nth-child('+posy+')').children(':nth-child('+i+')').css('background-color');

               if(posy < 1)
               {
                   return;
               }

               pos_x = i
               pos_y = posy

               posy--

               if(posy < 1)
               {
                   i=0
               }
            }
    
            // ON COMMENCE LA VERIFICATION EN DIAGONALE DE GAUCHE A DROITE

             var rouge_3 = 0
             var jaune_3 = 0
             var posy_bis = pos_y
             var positionx_bis = pos_x
 
            var oui = $('#plateau').find('.cell').length
            var non = $('#plateau').children().length
            
            for(s = positionx_bis; s <= cont; s++)
            {
                color_ligne_3 = $('#plateau').children(':nth-child('+posy_bis+')').children(':nth-child('+s+')').css('background-color');


                if(color_ligne_3 == couleur){
                    if(couleur == rgb_1 ){
                        rouge_3 +=1
                        
                    }
                    if(couleur == rgb_2){
                        jaune_3 +=1
                    }
                }
                else{
                    rouge_3 = 0
                    jaune_3 = 0
                }

                posy_bis++


                if(rouge_3 == 4){

                    alert('le joueur 1 a gagné');
                    score_1+=1
                    $('#sc_1').empty()
                    $('#sc_1').prepend(score_1)
                    colorPlayer = 1                      
                    return;
                }
                else if(jaune_3 == 4){
                    alert('le joueur 2 a gagné');
                    score_2+=1
                    $('#sc_2').empty()
                    $('#sc_2').prepend(score_2)
                    colorPlayer = 1
                    return;
                }

            }



        // DIAGONALE DE DROITE A GAUCHE
        
            var position_x
            var position_y
            var positionx = x 
            var teste = non

            // ON RECUPERE LA POSITION D'OÙ NOUS FERONS LA VERIFICATION 

            for(ab = y; ab <= teste; ab++){

               var positions = $('#plateau').children(':nth-child('+ab+')').children(':nth-child('+positionx+')').css('background-color');
                // console.log(ab+' '+positionx+' '+positions)
               position_y = ab
               position_x = positionx

               positionx--
            }
    
            // ON COMMENCE LA VERIFICATION EN DIAGONALE DE GAUCHE A DROITE

             var rouge_4 = 0
             var jaune_4 = 0
             var positiony_bis = position_y
             var positionx_bis = position_x
 
            var oui = $('#plateau').find('.cell').length
            
            var non = $('#plateau').children().length
            
            for(s = nbc; s >= 1; s--)
            {
                color_ligne_4 = $('#plateau').children(':nth-child('+s+')').children(':nth-child('+positionx_bis+')').css('background-color');

                // console.log(s+' '+positionx_bis+' '+color_ligne_4)
                if(color_ligne_4 == couleur){
                    if(couleur == rgb_1 ){
                        rouge_4 +=1
                        // console.log(rouge_4)                    
                    }
               
                    if(couleur == rgb_2){
                        jaune_4 +=1
                        // console.log(jaune_4)
                    }
                }
                else{
                    rouge_4 = 0
                    jaune_4 = 0
                }

                positionx_bis++


                if(rouge_4 == 4){

                    alert('le joueur 1 a gagné');
                    score_1+=1
                    $('#sc_1').empty()
                    $('#sc_1').prepend(score_1)
                    colorPlayer = 1                    
                    return;
                }
                else if(jaune_4 == 4){
                    alert('le joueur 2 a gagné');
                    score_2+=1
                    $('#sc_2').empty()
                    $('#sc_2').prepend(score_2)
                    colorPlayer = 1
                    return;
                }

            }

            if(colorPlayer != 1){

                var nb_c = 1
                var nb_cell = 1
                var match_null = 0
                for(i = 1; i <= oui; i++)
                {
                var verif_null = $('#plateau').children(':nth-child('+nb_c+')').children(':nth-child('+i+')').css('background-color')

                if(verif_null != 'rgb(255, 255, 255)'){
                    match_null += 1
                }

                if(i == nbr)
                {
                    nb_c += 1
                    i = 0
                }

                if(nb_c > nbc){
                    i = oui
                }

                if(match_null == oui){
                    alert ('match null vous-êtes trop chaud mdrr');
                    colorPlayer =1
                    return;
                }
                }
            }
            
            return;
        });

        $('#efface').click(function(){

            $('#plateau').children(':nth-child('+y+')').children(':nth-child('+x+')').css('background-color', 'white');
            if(colorPlayer == 0){

                colorPlayer = 2

            }else if(colorPlayer == 2){

                colorPlayer = 0

            }
        });
        
    }
})(jQuery);

$('#debut').click(function(){
    $('#game').jeux();
});