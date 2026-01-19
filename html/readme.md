# Basic Terminiology:-

1. Browser :- It is an application or a software i.e used to communicate with server that is present around the world wide web(www).
2. Website:- It is a collection of related web pages.
3. Webpage :- It is a collection of Html,Css,Javascript,PHP,Java,XML etc.
4. Domain Name:- It is the name  given for website.
5. URL:- It is uniform resource locator.
6. HTTP:- it is a protocol used for communication between client and server.

## HTML:-
- it stands for Hypertext markup language.
- It is a markup language used to create and raw elements like images,table,text,audio,video,form etc in web pages.
- Html is aslo known as collection of static web pages.


# Structure of HTML:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

- <!DOCTYPE html>Declares the document type as HTMLs.
- <html lang="en"> Root element of the Html document, specifying the language as english.
- <head> contain meta data about the document.
- <meta charset="UTF-8"> Spicifies the character encoding for the Html document as UTF-8.
- UTF-8 -> is a character encoding standrd that supports a wide range of language and characters.
- <meta name="viewport" content="width=device-width, initial-scale=1.0">  Controls the zooming and scaaling of the webpage on different devices.
- <title>Document</title> sets the title of web page,appearing in the browser's title bar and search engine results.
- <body> Contains the content of the html document
    
# Basic Tagsof HTML:-

## Heading Tags:-
- it is used to create text in bolder & bigger size compaired to normal text.
- it has 6 typpes of heading tags:-h1,h2,h3,h4,h5,h6.
- h1 is the heigest heading tag and h6 is the lowest heading tags.

## Paragraph Tag:-

- It is used to create text in normal size.
- <p></p>

## Break tag:-

- It is a single tag used to create a line break.
- It breaks the line and moves the cursor to next line.

## Horizontal line:-

- it is a single tag used to create a horizontal line.
- it breaks the line and move the cursor to the next line bur before moving the cursor to the next line. It creates Horizontal line throughout the page.

## span Tag:- (<span>.......</span>)

- It is used to create text or block of text.
- It is an inline element.

## Basic style in HTML:-
 
1. bgcolor :- it is used to change the backgroung color of the page.
2. text :- It is used to change the text color of the text.
3. align:- It is used align content of the page.(left,right,center)

# NOTE :- All the above properties used inside the tag.

## Text style in HTML:-

-   <p><b>hey sakti</b></p> it is used to create bold text.
-   <p><strong>hey sakti</strong></p> it is used to create strong or bold text.
-   <p><i>hey sakti</i></p>  it is used to create a italic text.  
-   <p><em>hey sakti</em></p>  it is used to create emphasize or italic text.
-   <p><u>hey sakti</u></p>  it is used to create underline text.
-   <p><ins>hey sakti</ins></p>   it is used to create insert/ underline text.
-   <p><del>hey sakti</del></p>   it is used to create delet text.
-   <p>a <sub>5</sub></p>      it is used to create subscript text.
-   <p>a <sup>3</sup></p>    it is used to create superscript text.
-   <p><mark>hey sakti</mark></p> it is used to create  a marked text.
-   <p><small>hey sakti wellcome</small></p> it is used to create a small text.
-   <p><big>hey sakti wellcome</big></p> it is used to create a big text.

## Pre Tag:-(<pre>.......</pre>)

- It is used to display the structure of elements the way they are created in code editor.

## Multimedia Tags in HTML :- 

- Multimedia tags are used to add images,vedios, audio etc in html.

## Image Tag :- 

- <img> tag is used to display a image on a web page.

## Attributes/Properties :- 

1. src :- It is used to specify the source of image.
2. alt :- It is used to specify the alternative text of the image.
3. height :- It is used to specify the height of the image.
4. width :- It is used to specify the width of the image.

# syntax :- 

<img src ="image url" alt="image description" height="height" width="width">

## Audio Tag :- 

- <audio> tag is used to display a audio on a web page.

## Attributes/Properties :- 

1. src :- It is used to specify the source of audio.
2. controls :- It gives option to play/pause, playback speed, volume etc.
3. preload :- It is used to specify the preload of the audio(metadata,none,auto).

## Syntax :- 

<audio src="audio url" controls preload = "metadata"></audio>

## Vedio Tag :- 

- <vedio> tag is used to display a vedio on a web page.

## Attributes/Properties :- 

1. src :- It is used to specify the source of vedio.
2. controls :- It gives option to play/pause, playback speed, volume etc.
3. width:-It is used to specify the width of the vedio.
4. height :- It is used to specify the vedio of the image.
5. muted :- It mutes the vedio by default when the page loads.
6. autoplay :- Starts the vedio automatically when the page loads.
7. loop :- Vedio continue to play in a loop when it ends.

## Syntax :- 

<vedio src="vedio url" controls width = "width" height = "height" muted autoplay loop></vedio>

## Iframe Tag :- 

- Iframe stands for inline frame where we can use <iframe> tag to display the content of another website on our website.

Syntax :- <iframe src= "url" width="width" height="height" frameboder="0"></iframe>

## Hyperlink in Html :- 

- Anchor tag <a> is used to create a hyperlink that navigates to another web page or section of the same page.

## Attributes/Properties :- 

1. href :- Stands for Hyperlink Reference. It is used to specify the destination of the hyperlink.
2. target :- It is used to specify the target of the hyperlink(_self,_blank). 

- _self :- It is used to open the hyperlink in the same tab.
- _blank :- it is useed to open the hyperlink in a new tab.

Syntax :- <a href = "url" target = "_blank">Link Text</a>

## List:- 

- in html , a list is a structured way to display a collection of items, there are 3 types of list available in Html.

i. Order List(Ol)
ii. Un-Orderlist(ul)
iii. Defination List(dl)

## i. Order List(Ol) :-

- It is a type of list, the structurieses the element in the some specific order, either ascending or descending.
- <ol> tag is created order list

# Attributes :-

type:- it is used to specify the type of orderlist(1,a,A,i,I)
start:- starting index e.g :- start=5, it start the list from perticular position

## ii. Un-Order List(Ul) :-

- <ul> tag is used to create un-order list.
- un-order list can't specify the order of items.

# Attributes :- 

- type :- disc/circle/square

eg:- 
 <ul type="circle">
        <li >HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
 </ul> 

 ## iii. Definitation List :-
 - it is used to create a number of definition text & their description/ meaning.
 - <dl> tag is used to create definitation list.
 - <dd>.......</dd> & <dt>......</dt> tags are used to create definition description and difintion text respectively.
 eg.
  <dl>
        <dt>HTML</dt>
        <dd>HTML is HyperText Markup Language.</dd>
        <dt>CSS</dt>
        <dd>CSS is Cascading Style Sheets.</dd>
        <dt>JS</dt>
        <dd>JS is JavaScript.</dd>
 </dl>

 # Table :-

 - We can create a structure of a table to display  the components in forms of cells.

 ## Tag used to create the table:-
 1. <table>.....</table> :- It is used to create the structure of the table.
 2. <tr>......</tr>(table row) :- It is used to create, display multiple cells in one row.
 3. <th>......</th>(table heading):- It is used to create a heading on bold text in the table.
 4. <td>.....</td>(table data):-It is used to create a cell in the table.
 5. <thead>.....</thead> :- It is used to create the heading of the table.
 6. <tbody>.....</tbody> :- It is used to create the body of the table.
 7. <caption>.....</caption> :- It is used to create the cption of the table.

 ## Attributes of table:-
 1. border:- It is used to create a border in the table.
 2. cellpadding :- It is used to give a space from the text/content to the corners of the cell.
 3. cellspacing:- It is used to give a space  between each and every cells in the table.
 4. align:- It is used to align the table/content.(left,center,right).
 5. collspan :- It is used to 
