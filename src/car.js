$(document).ready(function () {
    //fonction onchange
    $("#car-makes").on("change", function () {

        $.getJSON(this.
            'https: //www.carqueryapi.com/api/0.3/?cmd=getModels&make=chrysler');
        //appel a la fonction model
        model($(this).val())

    });

    // function model(idmodel) {
    //     $.get('/' + idmodel, function (result) {
    //         console.log(result);
    //         //creaction d'un variable contenant mes option du select
    //         var listemodel = "";
    //         //ajout option
    //         for (d in result.modeles) {
    //             //var listemodel=<option data-marque="idmarque" value="idmodel">nom du modèle</option>
    //             listemodel += '<option data-marque="' + result.id + '" value="' + result.modeles[d].id + '">' + result.modeles[d].nom + '</option>'
    //         };
    //         //recup id du select et retranscit la donnée en html se qui affiche dans les option
    //         $('#model').html(listemodel);

    //     });
    // };
    // $("#model").on("change", function () {
    //     //appel la fonction info a chaque fois qu'un option est selectionner cela affiche la marque qui lui correspond
    //     info($(this).find(":selected").data("marque"), $(this).val());
    //     //(parametre)
    //     console.log($(this).find(":selected").data("marque"));
    // });

    //Recup 2 parametre id du indexController.info
    // function info(idmarque, idmodel) {
    //     //route get /model/:idmarque/:idmodel
    //     $.get('/model/' + idmarque + '/' + idmodel, function (card) {
    //         console.log(card);
    //         //retrancrit les donnée sous forme html affiche dans la front
    //         $('#voiture-nom').html('<h6>' + 'Modèle' + '</h6>' + card.nom)
    //         $('#voiture-finition').html('<h6>' + 'Finition' + '</h6>' + card.finition)
    //         $('#voiture-prix').html('<h6>' + 'Prix' + '</h6>' + card.prix + '€')
    //         $('#voiture-energie').html('<h6>' + 'Energie' + '</h6>' + card.energie)
    //         $('#voiture-boiteDeVitesse').html('<h6>' + 'Boite de vitesse' + '</h6>' + card.boiteDeVitesse)
    //         $('#voiture-puissance').html('<h6>' + 'Puissance' + '</h6>' + card.puissance + 'km/h')
    //     });
    //     $('#cardinfo').html(listemodel);
    // };



});