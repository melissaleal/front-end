/*
Autora ----------- Melissa Leal (https://github.com/melissaleal)
Instituicao ------ FATEC Marilia
Curso ------------ Desenvolvimento de Software Multiplataforma 
Materia ---------- Desenvolvimento Web I
Conteudo --------- Coleções e Repetições no JavaScript
Atividade -------- Exercicio de aula
Data de criacao -- 23/04/2024
*/

function showOrHideItems(ev){
    let albuns = document.getElementsByClassName("albunsSemana");
    for (let i = 0; i < albuns.length; i++){
        if(albuns[i].style.display == "none"){
            this.innerHTML = 'Esconder os álbuns';
            albuns[i].style.display = "block";
        }
        else{
            this.innerHTML = 'Mostrar os álbuns';
            albuns[i].style.display = "none";
        }
    }
}

function hideAlbuns(){
    let linkClicavel = document.getElementById('hideAlbuns');
    linkClicavel.addEventListener('click', showOrHideItems);
}