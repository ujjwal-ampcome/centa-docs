---
sidebar_position: 2
---

# Work Requests

Question creation starts with Work Requests, admin can create work requests and can see all created requests by other users too in this table

Work requests can be submitted for a variety of reasons,two most cases are to populate the
question bank or to create a required number of questions that fall under a specific such
requests are usually assigned to the subject In-charge by the Paper setter . The details included
in a work request may vary depending on the type of request, but generally include a description
of the task, the priority level, the expected completion date, and any other relevant information.
Once a work request is submitted, the work request is assigned to a team or individual
responsible for completing the work and updating the requester on progress or completion.

## Work Request List Page

- **ID** - This column shows the unique Id associated with the Work request throughout the application

- **Work Request Type** - Work Request could be of type ‘Q’ as in Normal questions work request
  or ‘V’ as in a work request issued to create variant questions
  Certain work requests could show a tag ‘Urgent’ or ‘Normal’ next to the Work request type such
  Work Requests are Created by Admin/Paper Setter and assigned to Subject In-charges.

![Work Requests](/img/question_creation_1.png)

- **Urgent** - When the Paper Setter assigns Subject In-charge, Question Creator, Question Reviewer and Question Approver the Work Request is considered Urgent

- **Normal** - When a work request created by the paper setter only assigning Subject In-charge , the Subject In-charge is then free to assign the rest of the users once he receives the request , such are considered Normal requests

![Work Requests](/img/question_creation_2.png)

For variant urgent and Bulk requests the tags appear next to ‘V’ type work requests

- **Grades** - Grades column will display one of many grades that the questions under it belong to or empty if no grades are mentioned while request is created , but the Question Creators will have to specify grades for each question when creating them

- **Subject** - The subject column will show the subject that the Work request falls under. A work request can belong to only one subject

- **Stage** - This column shows the current stage the Work request is in. A work request can be in any of the four stages

  - **Open** - A work request is in stage ‘Open’ as soon as it is created by subject In-charge or paper setter and is assigned its users

  - **Draft** - A work request is in draft stage when the Work request issuer saves it as a draft
    rather than submit .

  - **In Progress** - A work request goes into this stage as soon as the Creator or Variant Creator starts creating Questions

  - **Closed** - This happens when All the questions are created, reviewed and Approved

- **Created At** - This column always shows the date on which the Work request was created .This column can be sorted in ascending or descending order

- **Due Date** - This column shows the date when the Work request is due if any is given

- **Status** - This column shows the completion percentage of work requests at any given moment

  - **T** - This column indicates the total number of questions required to be created by the Creator

  - **C** - This indicates the number of questions the creator has created so far

  - **R** - This indicates the number of questions so far reviewed by the reviewer

  - **A** - This shows the number of questions so far approved

- **Actions** - This column shows the actions that can be taken on a work request. Users can edit, clone and delete work requests, but the availability of these icons depends on the type of work request and the current stage it is in.<br/>
  Work requests issued by the paper setter cannot be cloned. Work requests once in stage ‘In-Progress’ cannot be deleted. Closed work requests can only be cloned

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

**Normal Work Request**:![Work Requests](/img/centa-6.png)

**Variant Work Request**:![Work Requests](/img/centa-7.png)

- **Due Date Selection** - Users should be able to select any date from today and onwards from the calendar that pops when clicked on the field

- **Grade** - Grades can be selected from the drop down available and a request can be associated with more than one grade

```
Subject , Report Theme(TN_Term_Month), Theme(TN Chapter Name), Sub Theme(CENTA concept ID_CENTA concept Name), and Topic fields (TN Taxonomy IDs) can be selected one after the other in order

```

- **Creator Name** - It can be selected from the dropdown , similarly with the Variant Creator Name

- **Reviewer** - User can select more than one Reviewer for a work request

- **Approver** - Approvers can be selected by clicking on the ‘+ Add Approver’ button where user will have to select approvers one or more for each Reviewer previously selected

- **Tags** - `Competency`, `Taxonomy` and `Standard` are to be selected one after another in order. `Blooms level` for the questions to be created and difficulty level can be selected from the dropdowns. The tags can be selected while work request creation or must be filled later while creating questions for each question separately

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

![Clone Work Request](/img/question_creation_3.png "Clone Work Request")

### Delete

Deleting a work request can be done by clicking on the delete icon from the actions column in the work request list page. The only work requests that can be deleted are the one’s with status `Open`

![Work Requests](/img/centa-11.png)

### Work Request Show Page

All information on a work request can be seen by clicking on the work request name from the listpage. User can see the edit work request button available top right of the page which

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
