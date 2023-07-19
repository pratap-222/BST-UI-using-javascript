class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
  
class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(current){
            if(value === current.value) return undefined;

            if(value < current.data){

                if(current.left === null){
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } 
            
            else {

                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 

                current = current.right;
            }
        }
    }

    traverse() {
        this.levelOrder(this.root);
    }

    getHeight() {
        return this.maxHeight(this.root);
    }

    maxHeight(root) {

        if (root === null) {
            return 0;
        }

        return 1 + Math.max(this.maxHeight(root.left), this.maxHeight(root.right));
    }

    levelOrder(root) {
        if (root === null) return [];
        let queue = [root];
        let count = 0;

        while (queue.length > 0) {
            let size = queue.length;
            count++;

            for (let i = 0; i < size; i++) {
                let node = queue.shift();

                if (node === null) {
                    createSpan(" ", count)
                    queue.push(null);
                    queue.push(null);
                    continue;
                }
                
                createSpan(node.data, count)
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
};

function createSpan(data, level) {

    let currentDiv = document.getElementsByClassName(level)[0];
    let newSpan = document.createElement('span');
    newSpan.innerHTML = data;
    currentDiv.appendChild(newSpan);

}

const userInput = document.getElementById("input");

let numArr = [];

function func() {
    var val = userInput.value;
    const stringArr = val.split(',');

    for (let i = 0; i < stringArr.length; i++)
    {
        numArr.push(parseInt(stringArr[i]));
    }

    var newBST = new BinarySearchTree();

    for (let i = 0; i < numArr.length; i++)
    {
        newBST.insert(numArr[i]);
    }

    let height = newBST.getHeight();

    for (let i = 0; i < height; i++) {
        const getDiv = document.getElementById("outerDiv");
        const newDiv = document.createElement("div");
        newDiv.classList.add(i+1);
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent ='space-evenly';
        newDiv.style.marginTop = "20px"
        getDiv.appendChild(newDiv);
    }

    newBST.traverse();
}
