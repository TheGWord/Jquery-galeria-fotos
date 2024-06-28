$(document).ready(function(){

    document.querySelector('header button').addEventListener('click', function(){

    })

    $('header button').click(function(){
        alert("Expandir Formulário")
    })

    $('form').on('submit', function(e){
        e.preventDefaut();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="none"></li>');
        // console.log(enderecoDaNovaImagem);
        $('<img src= "${enderecoDaNovaImagem}"/>').appendTo(novoItem);
        $(`
            <div class= "overlay-image-link"
            <a href="${enderecoDaNovaImagem}" target="_blank" title ="Ver Imagem em tamanho real.
                Ver imagem em tamanho real
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem-nova').val('')
    })
})