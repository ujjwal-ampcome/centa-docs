---
sidebar_position: 1
---

# Work Requests

Question creation starts with Work Requests, admin can create work requests and can see all created requests by other users too in this table

- **ID** - This column shows the unique Id associated with the Work request throughout the application

- **Work Request Type** - Work Request  could be of type  ‘Q’ as in Normal questions work request or ‘V’ as in a work request issued to create variant questions. Certain work requests could show a tag ‘Urgent’ or ‘Bulk’ next to the Work request type such Work Requests are Created by Admin/Paper Setter and assigned to Subject In-charges

![Work Requests](/img/centa-2.png)

### Work Request List Page

- **Urgent** - When the Paper Setter assigns Subject In-charge, Question Creator, Question Reviewer and  Question Approver the Work Request is considered Urgent 

- **Bulk** - When a work request created by the paper setter only assigning Subject In-charge , the Subject In-charge is then free to assign the rest of the users once he receives the request , such are considered Bulk requests

![Work Requests](/img/centa-3.png)

For variant urgent and Bulk requests the tags appear next to ‘V’ type work requests

- **Grades** - Grades column will display one of many grades that the questions under it belong to or empty if no grades are mentioned while request is created , but the Question Creators will have to specify grades for each question when creating them

- **Subject** - The subject column will show the subject that the Work request falls under. A work request can belong to only one subject

- **Stage** -  This column shows the current stage the Work request is in. A work request can be in any of the four stages 
  - **Open** - A work request is in stage ‘Open’ as soon as it is created by subject In-charge or paper setter and is assigned its users 

  - **In Progress** - A work request goes into this stage as soon as the Creator or Variant Creator starts creating Questions

  - **Closed** - This happens when All the questions are created, reviewed and Approved

- **Created At** - This column always shows the date on which the Work request  was created .This column can be sorted in ascending or descending order

- **Due Date** - This column shows the date when the Work request is due if any is given

- **Status** - This column shows  the completion percentage of work requests at any given moment

  - **T** - This column indicates the total number of questions required to be created by the Creator

  - **C** - This indicates the number of questions the creator has created so far

  - **R** - This indicates the number of questions so far reviewed by the reviewer

  - **A** - This shows the number of questions so far approved

- **Actions** - This column shows the actions that can be taken on a work request. Users can edit, clone and delete work requests, but the availability of these icons depends on the type of work request and the current stage it is in

Work requests issued by the paper setter cannot be cloned. Work requests once in stage ‘In-Progress’ cannot be  deleted. Closed work requests can only be cloned

- **Search** - Users can search any work request based on its name 

- **Quick Filters** - Users can use the three quick filters ‘Status’, ‘Grade’ and ‘Subject’ to filter the work requests according to their stages, grades and subjects . These filters are in the form of dropdowns

- **Sort** - The work requests can be sorted in ascending order or descending order based on the date they were created using two radio buttons

![Work Requests](/img/centa-4.png)

### Advanced Filter

![Work Requests](/img/centa-5.png)

This button when clicked will show more dropdowns where users can select one or more fields to filter by Creator, Variant creator , Reviewer , Approvers and completion percentage. Users can see work requests filtered by combination of two or more filters . Users should either filter by Creator or by Variant creator at any time

Refresh buttons are available in the work request list page and show pages to refresh table content 

## Create

This button opens the ‘Create work request’ form where users can fill details and submit or save as a draft. All the mandatory fields have to be filled to submit the form or one can save as a draft with only the work request name field as mandatory .A work request can be one of two types , normal question work request or a variant question work request. The form changes according to the request type selected. Changes happen to the ‘Question creator’ field and ‘Number of questions’ field.For a Variant request one has to select a variant creator from the drop down and select the parent question from the ‘variant question’ field which will be filtered according to the subject selected then enter the number of child questions required . User can click on the ‘+ Add variants’ button to create more variants for different parent questions within one work request
 
![Work Requests](/img/centa-6.png)

### Normal Work Request

![Work Requests](/img/centa-7.png)

### Variant Work Request

- **Due Date Selection** - Users should be able to select any date from today and onwards from the calendar that pops when clicked on the field

- **Grade** - Grades can be selected from the drop down available and a request can be associated with more than one grade 

```
Subject , Report Theme(TN_Term_Month), Theme(TN Chapter Name), Sub Theme(CENTA concept ID_CENTA concept Name), and Topic fields (TN Taxonomy IDs) can be selected one after the other in order 

```

- **Creator Name** - It can be selected from the dropdown , similarly with the Variant Creator Name

- **Reviewer** - User can select more than one Reviewer for a work request 

- **Approver** - Approvers can be selected by clicking on the ‘+ Add Approver’ button where user will have to select approvers one or more for each Reviewer previously selected

- **Tags** - `Competency`, `Taxonomy` and `Standard` are to be selected one after another in order. `Blooms level` for the questions to be created and difficulty level can be selected from the dropdowns.	The tags can be selected while work request creation or must be filled later while creating questions for each question separately

- **Draft Work Request** - A form partially completed can be saved as drafts and then later submitted by clicking the edit icon in the actions column 

### Edit

A work request can be edited as long as it is in stage `open` and `in progress`

![Work Requests](/img/centa-8.png)

 Users should be able to edit all fields for an open work request 

![Work Requests](/img/centa-9.png)

For a work request in progress, users can edit only the number of questions field, assign users in case they had not been assigned initially,and initial users can change by clicking the ‘+change users’ button 

![Work Requests](/img/centa-10.png)

The form will expand showing fields such as above, select the new user in the right fields and click ‘Change’. All work so far done by the old user will now be transferred to the new user's account

### Clone

A work requests can be cloned in all stages , but work requests issued by the paper setter cannot be cloned . The clone work request form will look similar to the edit work request form for a work request in open stage

### Delete

Deleting a work request can be done by clicking on the  delete icon from the actions column in the work request list page. The only work requests that can be deleted are the one’s with status `Open`

![Work Requests](/img/centa-11.png)

### Work Request Show Page

All information on a work request can be seen by clicking on the work request name from the listpage.  User can see the edit work request button available top right of the page which 

![Work Requests](/img/centa-12.png)

Will be active or inactive depending on the work request stage

### Status Charts

Along with the information on question subject, theme etc and tags associated with them the show page shows the status of Work request at any given time through four small charts 

![Work Requests](/img/centa-13.png)

From the above status we can understand that no questions have yet been published , the creator has created 3 out of 5 questions and none have been sent for review . The fractions above each chart will show how many questions have been created, reviewed, or approved out of created, received for review and received for approval

### User Information

Depending on the user this page displays user’s information involved in the work request to create, review and approve

![Work Requests](/img/centa-14.png)

### Question Table

![Work Requests](/img/centa-15.png)

The work request show page shows a smaller question table at the bottom of the page which will show a list of all questions with their current status in it and possible actions the viewer can take on them. The table also has three quick filters to filter by `status` , `grade` and `subject` , though all questions will fall under the same subject.
Clicking on the questions from this table will direct the user to the Question show page

### Questions

![Work Requests](/img/centa-16.png)

The list page will show all questions available to the user their current status and possible actions he/she is allowed on them 

### Quick filters

The  questions can be filtered by ‘Status’, ‘Grade’ and ‘Subject’ using the drop down filters available at the top of the table. The ‘All Questions’  button can show all the questions after showing filtered results

### Search 

Questions can be searched by title on the search bar and ‘Clear’ button is provided alongside to clear the search bar and revert to showing all questions

### Export 

The export button top right of the page will open the ‘Export questions’ form to filter and export the export questions 

![Work Requests](/img/centa-17.png)

Users can fill one or all fields and filter the questions by clicking on `Get Questions` , soon after the ‘Download’ button will appear and users will be able to download the file in .xlsx format. All the fields are multiple select fields in this form

![Work Requests](/img/centa-18.png)

### Question Show Page 

Clicking on any question from the question table will direct the user to a question show page showing all information associated with it. Depending on the status of the question and user viewing the buttons available in this page change. 

If the question viewed is a variant question then the parent question is also displayed in this page.

The page also displayed comments by reviewers and approvers for this question and their answers. These comments are visible to users who have rights to see it. Admin can see all comments at all times

### Super User

`Edit` is available at all times to the Admin even after the question has been published. This authority is available only to the admin considering he/she as a super user throughout the application


### Other Users

Buttons used for Editing, submitting for reviewing and approving, rejecting at both stages, publishing, sending back for amending at both stages, the availability of these will differ from user to user 

![Work Requests](/img/centa-19.png)

### Logs

![Work Requests](/img/centa-20.png)

Each question has a log with information from when it's created to all stages until published or rejected. This log also provides information on who took what action on it . Admin, subject In-charge, QB in-charge have access to these logs


### Usage analysis

![Work Requests](/img/centa-21.png)

Usage analysis of a question shows where the question has been used so far as in which test events, and what sections it has been used in papers. Users should be able to export this data in csv format and print 

### Auto Retired Questions

Questions based on predefined rules set by Sr. Manager or Admin is picked by the system and shown in this table. These questions automatically retire based on the rules .Users can revert this retirement by clicking on the check box and clicking the revert button that appears after

![Work Requests](/img/centa-22.png)

Clicking on the questions will direct one to the question show page 

### Upload Questions

Questions can be imported to the system in .csv format. Such questions will appear in this window where further actions can be taken on them . Admin can edit and delete these questions . This table can be filtered only by subject

![Work Requests](/img/centa-23.png)

### Import 

![Work Requests](/img/centa-24.png)

Question type and Subject are the only mandatory fields in this form . if the fields are not filled when uploading, the user will have to edit each question individually and fill in this information. The Creator and Variant creator have the rights to upload questions as well as the admin

### Draft Questions

![Work Requests](/img/centa-25.png)

This window shows a list of questions created by the paper setter while setting the paper

### Question Cleanup 

This window shows the list of questions sent to the QB in-charge by the paper setter while setting a paper.  QB in-charge can choose to re publish such questions or retire them. When questions are sent to this window they will not appear in a paper for setting until further action has been taken 

