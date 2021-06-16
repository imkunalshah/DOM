alert("Hello");
document.querySelector("h1").innerHTML = "Good Bye";
document;//gives entire html file
document.firstElementChild;//gives 1st element child
document.lastElementChild;//gives last element child
document.getElementsByClassName();
document.getElementsByTagName();
document.getElementById();
document.getElementsByTagName("li")[0].style.color = "purple";
document.getElementsByTagName("li").length;
document.getElementsByClassName("btn")[0].style.color = "red";
document.getElementsByClassName("btn").length;
document.getElementById("title").style.color = "red";
document.getElementById("title").innerHTML = "Kunal";
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
// hirerchy tag selection
document.querySelector("li a");
// hirerchy tag -> class selection
document.querySelector("li.name");//here li is tag and .name is the class name inside element li
//hirerchy id -> tag selection
document.querySelector("#list a");//here #list is an id and a seperated by <space> is an anchor tag
//hirerchy id -> class selection(only single value)
document.querySelector("#list .item");//here #list is an id and .item seperated by <space> is a class... it gives only the first value
//hirerchy id -> class selection(all values)
document.querySelectorAll("#list .item");///here #list is an id and .item seperated by <space> is a class... it gives all values(an array)
document.querySelectorAll("#list .item").length;
document.querySelectorAll("#list .item")[0].style.color = "red";
document.querySelector("h1").style.fontSize="10rem";
document.querySelector("h1").style.padding = "30";
document.querySelector("h1").innerHTML;//innerHTML gives the content between the starting and ending tag
document.querySelector("h1").textContent;//textContent gives only the text present in between the html tags
//to get list of all attributes attatched with html tags
document.querySelector("a").attributes;
// to get value of a particular attribute
document.querySelector("a").getAttribute("href");
// to set value of a particular attribute
document.querySelector("a").setAttribute("href","www.bing.com");
