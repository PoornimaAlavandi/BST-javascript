function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

BinarySearchTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else traverse(node.left);
        }
    };
    traverse(this.root);
};

//inOrder
BinarySearchTree.prototype.inOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {    
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

//preOrder
BinarySearchTree.prototype.preOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

//postOrder
BinarySearchTree.prototype.postOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.value);
    };
    traverse(node);
    return result;
};

var bst= new BinarySearchTree();
var input=[40,25,78,10,32,2,8,9];
for(var i=0;i<input.length;i++){
bst.add(input[i]);
}
console.log('inOrder',bst.inOrder());
console.log('preOrder',bst.preOrder());
console.log('postOrder',bst.postOrder());
