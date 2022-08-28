# Mentor-Mentee-Project

### Documentation

####  Pre-requisites

```
- Ubuntu 22.04LTS
- Frappe -V 13.23.0
- node,yarn
- Node.js 14+
-  Redis 5                                       (caching and real time updates)
- MariaDB 10.3.x / Postgres 9.5.x               (to run database driven apps)
- yarn 1.12+                                    (js dependency manager)
-  pip 20+                                       (py dependency manager)
- wkhtmltopdf (version 0.12.5 with patched qt)  (for pdf generation)
- cron                                          (bench's scheduled jobs: automated certificate renewal, scheduled backups)
- NGINX          
- python -V 3.8.10
- Bench -V 5.8.1
- Understanding of LMS
- Basic of HTML, CSS, Python, JavaScript
```

## Requirements :

```
- Proper use of RDBMS
- Create three table [Student Table, Mentor Table, Relation Table]
- In student Table should contain the details of the student
- In Mentor Table should contain the details of the Mentor
- In Relation Table should contain the primary key of student and mentor
- fetch the database value using SQL Query on the webpage
- Search Button
- Searching, Sorting & Filtering
```

### Steps to design Mentor-Mentee Project :

#### Step 1:

- Login in the frappe

![Screenshot](images/m1.png)

![Screenshot](images/m2.png)

#### Step 2 cretae Doctype:

- Go to build and click on the doctype after this click on new doctype and create your first doctype student.
- Doctype name Student, module name Education
- Check on Quick Entry, Track changes
- Add fields in the fields section like- Name, Roll No., Email etc.

![Screenshot](images/m3.png)

![Screenshot](images/m5.png)

![Screenshot](images/m4.png)

- In Full Name field click on edit button and select read only.
- In Roll NO. field click on edit button and select unique.
- In Route field click on edit button and set default route like students.
- In Published field click on edit button and set default value is 1.
- After this scroll down and set Naming st.####### and tick on has web view, allow guest to view, in route write stuents and in published write published.

![Screenshot](images/m6.png)

- After this click on save button. Now you can see that Student Doctype is created.

#### Step 3 Add Student details in the dcotype :

- After save that on the right hand you can see the GO to Student List click on it.

![Screenshot](images/m7.png)

- Now click on add Mentee/Student.

![Screenshot](images/m8.png)







