# Introduction

This project can be run by running 
npm install 
 this will install all necessary dependencies to run this project
# In development mode 
1. npm start -- which uses nodemon to start the server
2. npm run dev --  which starts react development server





# Project description:
1. There are two roles in the project namely Recruiter, Applicant
Only Registered users (either for recruiter or Applicant ) have access to login into the portal. 

- The project is hardcoded with 3 recrutiers (joe, andy, katie) , 3 appliancants (kishore, jorts, swaroop). You can directly login with these usernames. 
- If you wish to login with a new user, you have to create a new user name in the Register section.

2. As an applicant,  
    - You can view all the available jobs
    - apply for any job you like 
    - sort the jobs based on selected criteria like Salary, No of openings 
    - filter the jobs based on selected criteria like Mode of Job, Type of Job
    - can view all the applied jobs
    - Reset to remove all the applied filters
3. As a recruiter,
    - you can view all the available jobs
    - Although you can view all the jobs, you cant apply / save any job
    - you have same filter, sort functionalities which are available for the applicant
    - you can see all the users who have applied for a particular job posting 
    - create a New posting from the portal
4. As a applicant applies for a job, it gets reflected in his applications and also the postings of that particular recruiter
4. As an applicant if i withdraw the application, it gets refelected in his applications and also the postings of all the recruiters he has applied
4. Polling is added which gets refreshed once in every 20 seconds to ensure that the posts gets updated as soon as some other user posts a job
