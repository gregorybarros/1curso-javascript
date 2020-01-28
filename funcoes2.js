//RECURSIVIDADE
function fatorial(n) {
    if (n==1) {
        return 1
    } else {
        return n*fatorial(n-1)//Funcao chama ela mesma
    }
}
console.log(fatorial(4))

/*
5! = 5 x 4 x 3 x 2 x 1 o que acontece
5! = 5 x 4! como se faz

n! = n * (n- 1)
!1 = 1
*/