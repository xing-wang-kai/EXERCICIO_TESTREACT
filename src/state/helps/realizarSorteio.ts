import shuffle from 'just-shuffle';

export function realizarSorteio ( names: string[] ) {

    const namesLength = names.length; 
        const shuffledNames = shuffle(names);

        const resultado = new Map<string, string>();

        for( let y = 0; y < namesLength; y++)
        {
            const index = y === ( namesLength - 1 ) ? 0 : y + 1;
            resultado.set(shuffledNames[y], shuffledNames[index]);
        }

        return resultado;

}