CSS:-
- css stands for Cascading stylesheet.
- It is a style sheet language. use for describing  the presentation of a document written in a markup language like HTML.
- it is used to add style to webpages.
- there are three ways to add css/styles to a web pages.theay are:-
  1. Inline css.
  2. Internal css.
  3. External CSS
1. INLINE CSS:-
 - Adding style for an individual element wit the help of style attribute.
 - It has the most priority to apply css/styles.
 Syntax:-

 2. iNTERNAL CSS:-
 - Writing CSS in the same document inside head tag by using the <style> element is called as internal css.
 - Used to add styles for multiple elements.
 - We need selectors to target or select specific element to apply CSS/styles.
 Syntax:-<style>
               selector{
                css-Property:value;
               }
        </style>
3. EXTERNAL CSS:-
- Writting Css in a separate file and then connecting it to the HTML/markup document with the help of <link> tag is known as External Css.
- We use <link> tag inside the head tag to connect the external css to the specific HTML document.
Syntax:- <link rel="stylesheet" herf="file.css">

- 
Selector In CSS:-
- CSs selectors are used to select HTML elements that we want to style.
- there are mainly  6 types of selectors are there.
1. UNIVERSAL / GLOBAL SELECTOR:-
 - It is used to select all the elements that presentin the html document.
 - it applies the css for each and every element in the document.
 - it is denoted by *
 e.g:- *{
    color:red;
 }
2. ID selector:-
 - it selects an html element based on the given id name by using id attribute.
 - id name should be unique  in the entire html document.
 - to select the id names in css we have to used hash(#) that acts as id selector.
 e.g:- #idName{
    font-size:20px;
 }
3. class selector:-
 - It selects numbers of elements based on the given class name by using class atribure.
 - class name can be duplicate.
 - to select the class names in css we have to use dot(.) symbol that acts as class selector.
 e.g:- .className{
    background-color:red;
 }
4. Element Selector:-
 - it is used to select numbers of elements from an HTML document based on their tag name.
 - Element selector selects all the elements with the specific tag name in the entire document.'
 - e.g:- h1{
    font-size:30px;
 }
5. Descendant selector:-
 - It is used to select some specific elements within a parent element.
 e.g:- .className p{
    background color:red;
 }
6. Group selector:-
- it is used to select multiple elements at once.
- We can use class selector,id selector,element selector,o descendant selector to select multiple elements at once,and each selector should be separated by comma.
e.g:- .className,#idName,p{
    font-size:50px;
}