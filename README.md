![youtube](https://youtu.be/TN0u1AqEEb4)

# The Problem
When it comes to complex medical terminologies and studies, many people have difficulties understanding the nuances of clinical trials and what their takeaways should be. Moreover, the current expert search functionality on Clinicaltrials.gov can prove to have an acute learning curve for those that are uninitiated to the technology. What if a patient wants to view studies that from a specific region? What if they are looking to explore certain symptoms rather than a pre-existing condition? What if the user wanted to receive accurate results and data from scientific literature?
# Our Solution
SimpliHealth is an easy to use web application that helps people understand their medical conditions and symptoms. It starts by asking a user to enter their relevant health information and any problems affecting them, then it builds a profile for the user based upon their age, location, symptoms and condition. After that, it goes through the relevant studies related to their condition and gives practical advice for managing their symptoms. It also informs the patient on when they should seek out medical advice for a particular symptom. 
# How To Use It
![Screenshot 2024-11-10 at 8.28.08 AM.png](https://cdn.dorahacks.io/static/files/1931647f4166989f885c239421baf86c.png)
Initial page

![Screenshot 2024-11-10 at 8.28.24 AM.png](https://cdn.dorahacks.io/static/files/1931645aa7f7cdd713deb0b4c30a48b6.png)
The user enters their information.

![Screenshot 2024-11-10 at 8.28.59 AM.png](https://cdn.dorahacks.io/static/files/19316464572758dd307d00c415f9f5af.png)


![Screenshot 2024-11-10 at 8.29.14 AM.png](https://cdn.dorahacks.io/static/files/193164669dbace8e74f3ac347609cbad.png)
The program returns medical advice and relevant studies.
# How We Built It
Our project leverages Google Gemini to parse through a user's input and store the key information into relevant variables. We place those parameters into the Clinicaltrials.gov API to find studies related to the individuals specific condition, age and location. Then Google Gemini parses through the studies related to the user and creates personalized advice tailored for the user, it also lists the relevant study titles in case the user wants to do further reading.
# Challenges We Ran Into
The major challenges we encountered with this application were with implementing the front end. We wanted the UI to be responsive and intuitive for the user to interact with. 
# Looking Forward
We want to implement a speech to text feature for the application that has support for multiple languages. That would allow for people from any country or nationality to utilize the application.
