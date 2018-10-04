<div>
<img src="https://github.com/TheOneFrank/Elementice-TechLauncher/blob/master/Images/logo.svg" width="500" align="AbsBottom">
</div>

<h2><a name = "content"> Table of Contents </a></h2>
<a href = "#Title1"><b> 1. Project Overview </b></a><br/>
<a href = "#Title2"><b> 2. Project Governance </b></a><br/>
<a href = "#Title3"><b> 3. Project Progress </b></a><br/>
<a href = "#Title4"><b> 4. Decision Making & Communication </b></a><br/>
<a href = "#Title5"><b> 5. Technical Tools </b></a><br/>
<a href = "#Title6"><b> 6. Support Documentation</b></a><br/>
<a href = "#Title7"><b> 7. Group Photo</b></a><br/>
<br />

<h2><a name = "Title1"> 1.Project Overview </a></h2>

[Elementice](https://www.elementice.com/) is an Australian tech start-up that creates social marketing camera systems. We partner silently with businesses to build their brand while adding value for their customers who share watermarked photos on social media. Where Businesses have traditionally been left out of the loop, we have developed a variety of automated camera systems that make it easy for any business to not only get the recognition they deserve on social media, but also turn their customers into brand ambassadors.
A "bullet time" camera rig allows the video to slow or stop time and change perspectives. 
We have developed an early POC for a "bullet time" video rig and are looking for a TechLauncher team to progress the POC to a more market ready product and test it's viability for real world use.


**Client's Vision**
Array of cameras, wirelessly send photos to local computer for post-processing and deliver the video to web within only a few minutes of capture. 

**Project Value**
Target application for the BulletKam product will start with an indoor, controlled environment with the goal to advance it to a more robust form factor to be used outdoors for Snowboarding, Mountain Biking etc.

<br />
<h2><a name = "Title2"> 2. Project Governance </a></h2>

<h3> 2.1 Project Timeline </h3>

>**Sprint 1** (Week 2 - Week 3)<br />

>**Sprint 2** (Week 4 - Week 6)<br />

<h4>Milestone 1</h4>

>**Sprint 3** (Week 7 - Week 9)<br />

<h4>Milestone 2</h4>

See more details on <a href = "#Title3"><b> Section 3</b></a><br/>

<h3> 2.2 Traceability of Actions </h3>

The [Trello Page](https://trello.com/b/30blgFGs/elementice-bulletkam) would be used to track our sprint process. 


<h3> 2.3 Team </h3>

| Team Member                      |              Role                        |              Email              | 
| ---------------------------------| -----------------------------------------| ------------------------------- |  
| Peter Presneill                  | Client                                   | peter@elementice.com            |
| Ben Hegarty                      | Client                                   | ben@elementice.com              | 
| James Presneill                  | Client, Industrial Design, Manufacturing | u5678952@anu.edu.au             |
| De Zhang                         | Technical Leader, Back-End Programmer    | u6137069@anu.edu.au             |
| Tianhao Li                       | Project Manager, Front-End Programmer     | u6071904@anu.edu.au             |
| Yu Gu                            | Program Designer, Front-End Programmer   | u6013813@anu.edu.au             |
| Patrick Benter                   | FullStack Programmer, Hardware Technician| u5583834@anu.edu.au             |



- The public communication channel is [Slack](https://techlauncherbulletkam.slack.com/messages/CC005DM7F/).

<h3> 2.4 Development Approach </h3>
- The development approach we adapt is agile methodology. We hold weekly meetings consists of Scrum. The time of our weekly Scrum meeting is from 4pm - 6pm every Friday.

- Each team member answers 3 following questions: 
 1. "What they have done?"
 2. "What were struggles and challenges encountered?"
 3. "What will they be doing next?"

- When a new sprint starts, each task will be distributed among each team member from TRELLO assigned by client and/or the team itself. 

- Each sprint will last 2 weeks, where each member will work on the allocated task individually during the week and during team weekly meeting we come together and work on unresolved or difficulty tasks as a team.

<h3> 2.5 Engagement With Stakeholders </h3>
- We have individual meetings and chats with client whenever any of us have questions (phone, video chat, meet in office)

- We have regular client meeting from 4pm - 6pm every Friday.

- During our client meeting, we ask client questions and update client the progress of our project.


<br />
<h2><a name = "Title3"> 3. Project Progress </a></h2>

<table borde r= 3>
<tr align = "center">
<th>sprint</th>
<th>sprint 1</th>
</tr>
<tr align = "center">
<td><b>Total weeks in this Sprints</b></td>
<td><b>2</b></td>
</tr>
<tr align = "center">
<td><b>Period</b></td>
<td><b>30/07 to 12/08</b></td>
</tr>
</table>

**Learning:**
>Learn Angular JS5, Javascript, Node JS, MangoDB, HTML5, ARM based CPU<br />

**Hardware preparation:**
>Getting nanoPI setting up<br />

**Prospective Vision:**
>Give a clear vision of process map<br />

</br>

<table borde r= 3>
<tr align = "center">
<th>sprint</th>
<th>sprint 2</th>
</tr>
<tr align = "center">
<td><b>Total weeks in this Sprints</b></td>
<td><b>2</b></td>
</tr>
<tr align = "center">
<td><b>Period</b></td>
<td><b>13/08 to 02/09</b></td>
</tr>
</table>

**Front End Goal:** 
>Web interface Design & Actions<br />

**Back End Goal:** 
>Architecture for file handling
>PIs connetcting to AP + Send File

**Vision:**
>Design UML diagram for whole system view<br />

</br>

<table borde r= 3>
<tr align = "center">
<th>sprint</th>
<th>sprint 3</th>
</tr>
<tr align = "center">
<td><b>Total weeks in this Sprints</b></td>
<td><b>5</b></td>
</tr>
<tr align = "center">
<td><b>Period</b></td>
<td><b>31/08 to 09/10</b></td>
</tr>
</table>

**Front End Goal:** 
>Simplified prototype: connect UI take photo button to Server<br />
>UI software (Including camera display, setting opacity and take photo button)<br />
>Connect finalized server software to UI<br />

**Back End Goal:** 
>Server Software (translating between ui and pis, broadcasting commands etc)<br />
>Connect Pis together into working prototype<br />
>Connect server to master pi, send signal to cameras from master pi<br />
>Send video stream from pis to server to display on ui<br />

**Technical Support &  Miscellaneous**
>3d Print mounts for pis and Cameras to go with the frame<br />
>Build and test the actual bullet time rig with as many cameras attached as possible. This will include flashing 30pis<br />
>Confirm and test video post-processing with different image qualities etc<br />
>Set up cameras & adjust basic rig<br />

**Vision:**
>System architecture diagram <br />


<br/>

**Technical artefacts**

>[UML Diagram(the overview of the system)](https://drive.google.com/drive/folders/1CJQUn8CsRM_mGiBNNatr0xaESkelWQOR)<br />
>[Considerations of whole system](https://drive.google.com/open?id=1XlsMrIt40aUBbmfB3zlU8F3QpoKfAwNpAY3gvBS_syU)<br />
>[Design of interface](https://drive.google.com/drive/folders/15N3H3V9iHwQN_tk5GdK-UuT9rYr06uRs)<br />
>[System Architecture Diagram](https://drive.google.com/drive/folders/1UfD9aKl8WMUs-tOlpxtWd4vKOH98tV98)<br />

**Value delivered to the client**
>[Features of our system](https://drive.google.com/open?id=10KgEcp_HXISSgjpZ-cC7k_fgtdn09Gjd-mml4ynknz4)<br />
>[Method to implement features](https://drive.google.com/open?id=10KgEcp_HXISSgjpZ-cC7k_fgtdn09Gjd-mml4ynknz4)<br />
>[Research on MongoDB](https://github.com/TheOneFrank/Elementice-TechLauncher/blob/master/prototype_mongoDB/Description.md)<br />
>[Demo Demonstratiion](https://drive.google.com/drive/folders/1DyUUXcWKE_0zHXq8gFnF4y9ojN81OxCR)<br />

<br />
<h2><a name = "Title4"> 4. Decision Making & Communication </a></h2>
The team have engaged well in the planning and reporting process outlined by us at the beginning of the project. Every team members were involved in decision making and project planning. The team appear to be communicating well between themselves and are committed to achieving a customer product feature by the end of the semester. We have created a Decision Making Trace File to record all the decisions made either with our client or during group meeting since the beginning of the semester. 

We make decisions during the client meeting and scrum meeting and the decision making documents are in Google Drive:<br />
[Decision Making Progress](https://docs.google.com/document/d/1L87AwEB-gYxqa1583W2CnAAb9BrHwLZ23GlzzrfUgWw/edit?usp=sharing)<br />
We record our communication with slack channel in Google Drive:<br />
[Communication Progress](https://drive.google.com/drive/folders/1JSuK4zJfVFtmpOkskRUwczEXOrY1Ysr7)<br />


<h2><a name = "Title5"> 5. Technical Tools </a></h2>

We tried and used different tools in order to optimise our output
- **Node.js** for front end development
- **HTML5** for front end development
- **MongoDB** for database
- **ARM based CPU** for hardware
- **Trello** for tracing progress
- **Slack** for team communication
- **Github** for landing page
- **Google Drive** for support documentations and images

<img src="https://github.com/TheOneFrank/Elementice-TechLauncher/blob/master/Images/nanoPi.JPG" width="300" height="300" align="AbsBottom">
<p align="left" vertical-align="center"><b> NanoPi </b></p>

<br />

<h2><a name = "Title6"> 6. Support Documentation </a></h2>

-  Documentation and Repository <br />
    [Google Drive](https://drive.google.com/drive/folders/1wbU5rIYncubDpdaH6Kf9xixHzuyPx0kw) <br />
    [GitHub](https://github.com/TheOneFrank/Elementice-TechLauncher) <br />
    [Trello](https://trello.com/b/30blgFGs/elementice-bulletkam)
- Client Meeting <br />
    [Folder](https://drive.google.com/drive/folders/1HNsMFh45O15iycRb5xJU2Qr06R3VxvvO) <br />
- Team Meeting Notes <br />
    [Folder](https://drive.google.com/drive/folders/1MqJXDJXz_PkKry9LteJu_8273lE3ATll)    
- Audit Presentation <br />
    [Folder](https://drive.google.com/drive/folders/1fPzpvzTWxrPtCcT2dScYcNjS93QUoWxv)  
- Weekly Acticity Log <br />
     [Folder](https://drive.google.com/open?id=1RtZmbbrm3xqs5uMXlN6oc_es2W60AJLOnHqxxLr1-is)


<br />
<h2><a name = "Title7"> 7. Group Photo</a></h2>

![](https://github.com/TheOneFrank/Elementice-TechLauncher/blob/master/Images/IMG_1462.JPG)
<p align="center" vertical-align="middle"><b> Team Members </b></p>
