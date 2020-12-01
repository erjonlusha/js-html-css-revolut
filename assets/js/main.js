/**********************************     Descrizione:
Usado jQuery riproducete l'effetto dei menu a tendina del sito revolut (https://www.revolut.com/)
usate lo screenshot di seguito per riprodurre anche il layout della navbar.
Attenzione:
Dovete riprodurre solo la navbar ed i menu a tendina, 
non tutto il sito. 
Fate attenzione che in questo caso non abbiamo un solo menu a tendina ma piú di uno. 
Il menu deve diventare visibile quando facciamo hover  o click ( a vs discrezione ) su uno dei link principali nella navbar. 
Ogni link della navbar ha il suo menu nascosto che deve apparire.
*******************************/

// //var markupAbbonamenti = '<ul class="sub_menu"> <li><a href="">Standard</a></li> <li><a href="">Premium</a></li> <li><a href="">Metal</a></li> <li><a href="">Confronta i piani</a></li> </ul>';
$(".display_none, .sub_menu li").hide();

// /**********     MOUSE-ENTER     ***************/
//  $('.sub_menu li').mouseenter(function () { 
//    $(this).show();
//  });

// /**********     FUNZIONE AGGIUNGI UL     ***************/

// $('.sub_menu>li').mouseleave(function () { 
//    $(this).toggle();
//  });
// /**********     MOUSE-LEAVE     ***************/
// //Togli ul aggiunta precedentemente

function subMenu() {
 $(this).children().show();
}
function chiudi() {
 $(this).children().hide();
}
$(".display_none, .sub_menu li").mouseover(subMenu).mouseout(chiudi);
