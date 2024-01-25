
//this users is pertained to the users.js
// other files can have access to it only through a getter

const postings = require('./postings.js')
const applicants = { 
    'kishore' : { username: 'kishore' , userTpye: 'applicant', applications : [
        {
            title: 'Machine Learning Engineer',
            company: 'Radley James',
            logo: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3214498748&eBP=JYMBII_JOBS_HOME_ORGANIC&refId=VZcFFIagcX2ksprO38lztA%3D%3D&trackingId=PVB4MFmXpKC%2FwvauRRM%2Fig%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3B6FoeFzgrSb66Dbg0PrXTEg%3D%3D&lici=PVB4MFmXpKC%2FwvauRRM%2Fig%3D%3D",
            jobType: 'full time',
            salary: '650000',
            mode: 'remote',
            postedBy: 'andy',
            postingId: '2a0cb1db-856e-4f89-8192-b20f37833912',
            ratings: 10,
            openings: 420,
            applicants: [], 
          },
          {
            title: 'Data API Tech Solutionist',
            company: 'Vericast',
            logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTon27cL0Lmuc-Q060YQOBcu4JiLpFjha9C2mXX&s=0',
            jobType: 'full time',
            salary: '80000',
            mode: 'sdjfljk',
            postedBy: 'andy',
            postingId: '26ff9230-817b-4eeb-818f-99e37334e25e',
            ratings: 5,
            openings: 75,
            applicants: [], 
       
          },
          {
            title: 'Software Engineer',
            company: 'Selby Jennings',
            logo:"https://www.linkedin.com/jobs/view/3194903965/?eBP=CwEAAAGCnsW9PtCXWz4fM-O2lk6UG72kTBobQR3L4cGdORDOz7fj3-4Y4Q5h58NcLV_VOs2zSUj5d8oizj_vd-vSCuxPyzWsBd_7YZkDRwmGa3srELqQwQlM9xyL5k3VrdkSURp37U_GTYs-dT2-duQ34wH-nBWy6-JREtsVJAk75nqcG7m1sfJxlwIALRS2QZ_bxlkx7_NNmkSMftDtPd_X5U3h_-gaxfvq1X8ev4cm8IV8e9bbVTxlbUQROw3q-a6rzMSyfY0WDkpNwf2BEMxXi05t6lpUzz1reMNnVEGiJ7igTOz5E-XzwEjztwaf-WYSbvM&recommendedFlavor=SCHOOL_RECRUIT&refId=6PonsWhajmMqNchuWbOKEA%3D%3D&trackingId=kwL%2B%2BI%2B86NuBzOZDfj34Kw%3D%3D&trk=flagship3_jobs_discovery_jymbii&lipi=urn%3Ali%3Apage%3Ad_flagship3_jobs_discovery_jymbii%3Bqd8D53X7Rsyz%2F%2B0lBDaIXg%3D%3D&lici=kwL%2B%2BI%2B86NuBzOZDfj34Kw%3D%3D",
            jobType: 'fulltime',
            salary: '95000',
            mode: 'remote',
            postedBy: 'joe',
            postingId: 'daff206d-255f-48a1-89ce-a97fb44815b7',
            ratings: 9,
            openings: 39,
            applicants: [], 
       
          },
          {
            title: 'Senior Technical Analyst (API & EDI)',
            company: 'Blue Cross Blue Shield',
            logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6UQL3PmMdj-4ovtu4XMhGlyK7U_0nIjR4uwo&s=0',
            jobType: 'fulltime',
            salary: '23400',
            mode: 'remote',
            postedBy: 'joe',
            postingId: '7a2cf219-2556-4439-8c03-14d037b082bd',
            ratings: 10,
            openings: 5,
            applicants: [], 
          },

    ]},
    'jorts' : { username: 'jorts' , userTpye: 'applicant', applications : [
        {
            title: 'Machine Learning Engineer',
            company: 'Radley James',
            logo: "https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3214498748&eBP=JYMBII_JOBS_HOME_ORGANIC&refId=VZcFFIagcX2ksprO38lztA%3D%3D&trackingId=PVB4MFmXpKC%2FwvauRRM%2Fig%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3B6FoeFzgrSb66Dbg0PrXTEg%3D%3D&lici=PVB4MFmXpKC%2FwvauRRM%2Fig%3D%3D",
            jobType: 'full time',
            salary: '650000',
            mode: 'remote',
            postedBy: 'andy',
            postingId: '2a0cb1db-856e-4f89-8192-b20f37833912',
            ratings: 10,
            openings: 420,
            applicants: [], 
          },
          {
            title: 'Data API Tech Solutionist',
            company: 'Vericast',
            logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTon27cL0Lmuc-Q060YQOBcu4JiLpFjha9C2mXX&s=0',
            jobType: 'full time',
            salary: '80000',
            mode: 'sdjfljk',
            postedBy: 'andy',
            postingId: '26ff9230-817b-4eeb-818f-99e37334e25e',
            ratings: 5,
            openings: 75,
            applicants: [], 
       
          },
          {
            title: 'Senior Technical Analyst (API & EDI)',
            company: 'Blue Cross Blue Shield',
            logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6UQL3PmMdj-4ovtu4XMhGlyK7U_0nIjR4uwo&s=0',
            jobType: 'fulltime',
            salary: '23400',
            mode: 'remote',
            postedBy: 'joe',
            postingId: '7a2cf219-2556-4439-8c03-14d037b082bd',
            ratings: 10,
            openings: 5,
            applicants: [], 
          },
          {
            title: 'Senior Software Data Engineer',
            company: 'Liberty Mutual Insurance',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NhEa14-PEro6qnUjwxxew09pDNJxFyvLScM8&s=0',
            jobType: 'contract',
            salary: '78000',
            mode: 'hybrid',
            postedBy: 'joe',
            postingId: '720e4089-62f1-444b-8c89-15630ec5c0c1',
            ratings: 8,
            openings: 450, 
          },
          {
            title: 'senior developer',
            company: 'Amazon',
            logo: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3023679060&eBP=CwEAAAGCnroct2iRw8AzDus8MPqhsSTGC2arSXlTlb7cfHEIeu4TyLVWAt6zJ9IEzvAM1Ewf78Hfs_9VcqHd8LorwH4_aXvZo2yx2Je3pxvSz-VAj8K7aCjC9bNdGnLlti_EvtaP0eL0a8NonBcxVnLxSkHE3ouiRCap1RBZYjRmbib69jE93yx3NlzGzD8vQEo5vJm6oVgdjKYVk47xHOCA0pxnA3eME7LEDO8rE__Cd-sTpY9kHs8rxoIS9wD6oLksGJEoOn6VDGBlg9BXfZepuP_DEAQKAWeMQ3CFcr61Y7FKOe49DagdRlA2IILzbDZSxNE&refId=VZcFFIagcX2ksprO38lztA%3D%3D&trackingId=qhLQNtbJM4EUOk3IU0H97w%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3B6FoeFzgrSb66Dbg0PrXTEg%3D%3D&lici=qhLQNtbJM4EUOk3IU0H97w%3D%3D',
            jobType: 'contract',
            salary: '150000',
            mode: 'remote',
            postedBy: 'katie',
            postingId: '94fbd69d-591b-4dbf-8d0b-f3c69a97dc2c',
            ratings: 6,
            openings: 68,
            applicants: [], 
      
          },
          {
            title: 'Software Engineer',
            company: 'Wellington Management',
            logo:"https://www.linkedin.com/jobs/view/3021402327/?eBP=CwEAAAGCnsW9Pmcx039XeOLvSWMCkp0-ki8ATGki-W3QvD8UDOyoRIhxTab-51o5CvawAT70xue-IGaZV40viUy2Y7FyANUZumaulxmG2_c9r5GM62Yqefd51bYo-EWFB4wF7ECtpmSuBSH5ibf8-xhBcDyd9adBe-XuLGNjKTVg-F41LrqvkM6ZJrdpUHALUMc_jRodq0CEl8k51Q5yY7CQPLaylrr7SNm3GW7Kj-6zboE5X4Puj6CnLAdlHM6KkVye2NQU_bv1ukr19nOxbBRZOT7HegskuUXWqvpRj1r5LK9ZJ5kBofvzk4Fm8YjHUZCH3vU&recommendedFlavor=SCHOOL_RECRUIT&refId=6PonsWhajmMqNchuWbOKEA%3D%3D&trackingId=sDVrxJoq5kxBRPIU%2BwlHaA%3D%3D&trk=flagship3_jobs_discovery_jymbii&lipi=urn%3Ali%3Apage%3Ad_flagship3_jobs_discovery_jymbii%3Bqd8D53X7Rsyz%2F%2B0lBDaIXg%3D%3D&lici=sDVrxJoq5kxBRPIU%2BwlHaA%3D%3D",
            jobType: 'fulltime',
            salary: '120000',
            mode: 'remote',
            postedBy: 'andy',
            postingId: 'e7a0ab21-6688-481d-9476-55646ab28059',
            ratings: 6,
            openings: 450,
            applicants: [], 
      
          },
    ]},
    'swaroop':  { username: 'swaroop' , userTpye: 'applicant', applications : [
        {
            title: 'Senior Technical Analyst (API & EDI)',
            company: 'Blue Cross Blue Shield',
            logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6UQL3PmMdj-4ovtu4XMhGlyK7U_0nIjR4uwo&s=0',
            jobType: 'fulltime',
            salary: '23400',
            mode: 'remote',
            postedBy: 'joe',
            postingId: '7a2cf219-2556-4439-8c03-14d037b082bd',
            ratings: 10,
            openings: 5,
            applicants: [], 
          },
          {
            title: 'Senior Software Data Engineer',
            company: 'Liberty Mutual Insurance',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NhEa14-PEro6qnUjwxxew09pDNJxFyvLScM8&s=0',
            jobType: 'contract',
            salary: '78000',
            mode: 'hybrid',
            postedBy: 'joe',
            postingId: '720e4089-62f1-444b-8c89-15630ec5c0c1',
            ratings: 8,
            openings: 450, 
          },
          {
            title: 'senior developer',
            company: 'Amazon',
            logo: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3023679060&eBP=CwEAAAGCnroct2iRw8AzDus8MPqhsSTGC2arSXlTlb7cfHEIeu4TyLVWAt6zJ9IEzvAM1Ewf78Hfs_9VcqHd8LorwH4_aXvZo2yx2Je3pxvSz-VAj8K7aCjC9bNdGnLlti_EvtaP0eL0a8NonBcxVnLxSkHE3ouiRCap1RBZYjRmbib69jE93yx3NlzGzD8vQEo5vJm6oVgdjKYVk47xHOCA0pxnA3eME7LEDO8rE__Cd-sTpY9kHs8rxoIS9wD6oLksGJEoOn6VDGBlg9BXfZepuP_DEAQKAWeMQ3CFcr61Y7FKOe49DagdRlA2IILzbDZSxNE&refId=VZcFFIagcX2ksprO38lztA%3D%3D&trackingId=qhLQNtbJM4EUOk3IU0H97w%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3B6FoeFzgrSb66Dbg0PrXTEg%3D%3D&lici=qhLQNtbJM4EUOk3IU0H97w%3D%3D',
            jobType: 'contract',
            salary: '150000',
            mode: 'remote',
            postedBy: 'katie',
            postingId: '94fbd69d-591b-4dbf-8d0b-f3c69a97dc2c',
            ratings: 6,
            openings: 68,
            applicants: [], 
      
          },
          {
            title: 'Asset Management',
            company: 'INFODaley And Associates, LLC.SYS',
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_HpPdc6o-U0h-trelAIj2PYCK8LHzU7h7ICw&s=0",
            jobType: 'contract',
            salary: '48000',
            mode: 'hybrid',
            postedBy: 'katie',
            postingId: 'b0a18085-4256-4e1a-a304-121f4594a84e',
            ratings: 3,
            openings: 230,
            applicants: [], 
      
          },
          {
            title: 'Quant Developer',
            company: 'Augusta Aiken & Associates',
            logo:'https://www.linkedin.com/jobs/view/3217142840/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=6PonsWhajmMqNchuWbOKEA%3D%3D&trackingId=l6ZTLATRp5%2By9SuqreMvLA%3D%3D&trk=flagship3_jobs_discovery_jymbii&lipi=urn%3Ali%3Apage%3Ad_flagship3_jobs_discovery_jymbii%3Bqd8D53X7Rsyz%2F%2B0lBDaIXg%3D%3D&lici=l6ZTLATRp5%2By9SuqreMvLA%3D%3D',
            jobType: 'contract',
            salary: '450000',
            mode: 'remote',
            postedBy: 'katie',
            postingId: '740578e5-51cc-44f6-aa1d-43de217736fb',
            ratings: 7,
            openings: 500,
            applicants: [], 
          }
    ] }
 };


// checking for the username format validity
function isValid(username) {
    let isValid = true;
    isValid = !!username && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9]+$/);
    return isValid;
}


// getter to access the data present in the users object
function getUserData(username) {
    return applicants[username];
}

function isNewUser(username){
    return !applicants.hasOwnProperty(username.toLowerCase())
}

// adding userData to username
function addUserData(username, userData) {
    applicants[username].push(userData);
}

function createApplicantData(username) {
    applicants[username] = { username, userType: 'applicant', applications: []}
}

// returns all applicants data
function getApplicantsData(username) {
    return applicants[username]['applications']
}

function addMyApplication({username,postingId}) {
    applicants[username]['applications'].push(postings.getPosting(postingId))
}

function removedMyApplication({username,postingId}) {
  applicants[username]['applications'] = applicants[username]['applications'].filter(posting => posting.postingId !== postingId)
}


module.exports = {
    isValid,
    getUserData,
    addUserData,
    getApplicantsData,
    isNewUser,
    createApplicantData,
    addMyApplication,
    removedMyApplication
}