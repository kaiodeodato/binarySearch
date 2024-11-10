const binaryTree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: {
                value: 8,
                left: null,
                right: null
            },
            right: {
                value: 9,
                left: null,
                right: null
            }
        },
        right: {
            value: 5,
            left: {
                value: 10,
                left: null,
                right: null
            },
            right: {
                value: 11,
                left: null,
                right: null
            }
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 12,
                left: null,
                right: null
            },
            right: {
                value: 13,
                left: null,
                right: null
            }
        },
        right: {
            value: 7,
            left: {
                value: 14,
                left: null,
                right: null
            },
            right: {
                value: 15,
                left: null,
                right: null
            }
        }
    }
};

//                   1
//            /             \
//         2                  3
//      /     \           /       \
//     4       5         6         7
//   /   \   /   \     /   \     /   \
//  8     9 10    11  12   13   14   15

const preOrderTraversal = (node) => {
    if (node) {
        console.log(node.value);
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
};

const inOrderTraversal = (node) => {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
};

const postOrderTraversal = (node) => {
    if (node) {
        postOrderTraversal(node.left); 
        postOrderTraversal(node.right); 
        console.log(node.value); 
    }
};

const levelByLevel = (root) => {
    if (!root) return;

    let queue = [];  // Fila para armazenar os nós
    queue.push(root); // Adiciona o nó raiz à fila

    while (queue.length > 0) {
        let node = queue.shift(); // Remove o primeiro nó da fila
        console.log(node.value);  // Processa o nó (neste caso, imprime o valor)

        if (node.left) queue.push(node.left);  // Adiciona o filho esquerdo à fila
        if (node.right) queue.push(node.right); // Adiciona o filho direito à fila
    }
};

preOrderTraversal(binaryTree);