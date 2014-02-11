
//Add header to the top of the page

var container = document.getElementById("container");
var bodyDiv = document.getElementById("body");
var headerDiv = document.createElement("header");
var headerStr = "<header>" +
                "<div class='content'>" +
                    "<img src='rails.png'/>" +
                    "<h1>Ruby On Rails</h1>" +
                "</div>" +
                "<nav>" +
                    "<ul>" +
                        "<li><a href='index.html'>Overview</a></li>" +
                        "<li><a href='tutorial.html'>Tutorial</a></li>" +
                        "<li><a href='about.html'>About Me</a></li>" +
                    "</ul>" +
                "</nav>" +
                "<div class='fixedNav'>" +
                    "<div class='content'>" +
                        "<img src='rails.png'/>" +
                    "</div>" +
                    "<nav>" +
                        "<ul>" +
                            "<li><a href='index.html'>Overview</a></li>" +
                            "<li><a href='tutorial.html'>Tutorial</a></li>" +
                            "<li><a href='about.html'>About Me</a></li>" +
                        "</ul>" +
                    "</nav>" +
                "</div>" +
            "</header>"
headerDiv.innerHTML = headerStr;
container.insertBefore(headerDiv,bodyDiv);


//Add footer to the bottom of page

var footerDiv = document.createElement("footer");
var footerStr = "<footer>" +
                "<div class='content'>" +
                    "<h2>References for this project</h2>" +
                    "<ul>" +
                        "<li>" +
                            "<a href='http://guides.rubyonrails.org/''>Rails Guide</a>" +
                        "</li>" +
                        "<li>" +
                            "<a href='http://www.tutorialspoint.com/ruby-on-rails/rails-directory-structure.htm'>Ruby on Rails Directory Structure</a>" +
                        "</li>" +
                    "</ul>" +
                "</div>" +
            "</footer>";
footerDiv.innerHTML = footerStr;
container.appendChild(footerDiv);


