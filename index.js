// Fonction pour effectuer le tri par insertion
function insertionSort(arr) {
    // On parcourt le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // On prend l'élément à insérer
        let key = arr[i];
        // On initialise j à l'indice de l'élément juste avant l'élément à insérer
        let j = i - 1;

        // On déplace les éléments du tableau qui sont plus grands que key vers la droite
        // jusqu'à trouver la bonne position pour key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // On place key à sa position correcte
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple d'utilisation de la fonction
const array = [5, 2, 9, 1, 5, 6];
console.log('Tableau avant le tri:', array);

const sortedArray = insertionSort(array);
console.log('Tableau après le tri:', sortedArray);
