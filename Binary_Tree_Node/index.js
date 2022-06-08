//Binary tree traversal
/*
https://www.codewars.com/kata/5268956c10342831a8000135/train/javascript
Binary Tree Traversal
Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions that will print the tree in pre-order, in-order, and post-order.
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
The structure of a tree looks like:
data Tree a = Nil | Node (Tree a) a (Tree a)
Pre-order means that we
1.) Visit the root.
2.) Traverse the left subtree (left node.)
3.) Traverse the right subtree (right node.)
In-order means that we
1.) Traverse the left subtree (left node.)
2.) Visit the root.
3.) Traverse the right subtree (right node.)
Post-order means that we
1.) Traverse the left subtree (left node.)
2.) Traverse the right subtree (right node.)
3.) Visit the root.
Let's say we have three Nodes.
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
a.left = b;
a.right = c;
Then, preOrder(a) should return ["A", "B", C"]
inOrder(a) should return ["B", "A", "C"]
postOrder(a) should return ["B", "C", A"]
What would happen if we did this?
var d = new Node("D");
c.left = d;
preOrder(a) should return ["A", "B", "C", "D"]
inOrder(a) should return ["B", "A", "D", "C"]
postOrder(a) should return ["B", "D", "C", "A"]
*/

/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// let preorderTraversal = (root) => {
//     if(root === null) {
//         return [];
//     }
//     let stack = [root];
//     let result =[];

//     while(stack.length >0){
//         let node  = stack.pop();
//         result.push(node.val);
//         if(node.right) {
//             stack.push(node.right);
//         }
//         if(node.left) {
//             stack.push(node.left);
//         }
//     }
//     return result;
// }

//another way to do the solution
// let preorderTraversal = (root) => {
//     if(!root) {
//         return [];
//     }
//     let result = [];
//     const preorder = (node) => {
//         if(!node){
//             return null;
//         }
//         result.push(node.val);
//         preorder(node.left);
//         preorder(node.right);
//     }
//     preorder(root);
//     return result;
// }

//another solution
function preOrder(node) {
    return node == undefined ? [] : [node.data].concat(preOrder(node.left), preOrder(node.right))//concat is used to add the elements of the array to the end of
    // the array and return a new array. It does not change the original array. It returns a new array.
  }
  
  // 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
  function inOrder(node) {  
    return node == undefined ? [] :inOrder(node.left).concat([node.data], inOrder(node.right))//concat is used to add the elements of the array to the end of the array and return a new array. It does not change the original array. It returns a new array.
  }
  
  // 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
  function postOrder(node) {
    return node == undefined ? [] :postOrder(node.left).concat(postOrder(node.right), [node.data])//concat is used to add the elements of the array to the end of the array and return a new array. It does not change the original array. It returns a new array.
  }
  