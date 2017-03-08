# guestbook-project
guestbook-with-node

This was a recent small project we did at school. The objectives were:

•	Create routes with Node.js
•	Utilize EJS template engine with Express.js
•	Parse JSON files using EJS templates


1.	Split up you’re the frontpage of the demosite found in Optima to at least 3 different partials (for example, header, content, footer). Think which would be good sections on the page to separate as partials and why?

2.	Then create index.ejs template and include the partials which will combine the files as a complete site. 

3.	Create a Node.js application which will combine and display the site from the 3 partials created above.


4.	“/” –route should display the frontpage of the site using the partials created on part A. You can make up this content yourself, it can be a Company / Service introductory page etc.The title (“What we speak”) and contents (“Lorem ipsum…”) of the page should be replaced by passing variables to templates when the page is created. Feel free to populate other text content as well. 

5.	/guestbook –route should load a JSON-file and parse it nicely on the page as a formatted list (use either table or div –tags and some css –styles). The demo JSON file is given available here; http://pastebin.com/VpbJqSic. 

6.	/newmessage –route should add an input form to the page template created on part A. From should have fields for the following data: username, country and message and a button which enables user to send it. When the form is submitted, the collected data should be saved as JSON data to the data file generated on step 5. Sample dataset can be seen below:


We had been given a demosite from wehich we had to work on and we were also allowed to change it. I did'nt spend so much time on the visual side of it, because the project was more about building the server side code. I did well in this project and was able to do the part 6. while some in our class were unable to complete it. To style this I mainly used bootstrap to do some easy css (unlike my spotify project) which turned out fine.

We have a bigger project copming up which will be done with the MEAN stack. This was a small project just to show iave some knowledge in Node.js
