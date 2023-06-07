---
sidebar_position: 2
title: Paper creation
description: This is where the creation of paper starts, starting from sending for a request for paper creation from product manager.
---

## Product Manager

Once the setup is done, a paper setter will create a paper from a `paper request` and the paper approver will approve the paper once it satisfies all the requirements.

## Paper Requests

Paper Requests are like Question Work Requests but for creation of a paper. Product
Managers will be creating them and sending them to Paper Setters and Approvers. Multiple
requests can be created for a test event. Two types of requests can be created: Normal and
Variant Paper Requests.

![Paper Setting](/img/paper_setting_8.png "paper request")

The list page shows a table with name, status, template and test event details of the
request and users assigned to . Created date and time column and an actions column is also
available for requests that can be edited or deleted.

The paper request show page will show details such as Test Event, Template, product,
mode of exam, location, Restrictions, slot details, Users initially assigned, Test track details,
Template subsection details, and the link to the paper.

### Create

A Paper Request can be created only for a Test Event in its show page .

![Paper Setting](/img/paper_setting_9.png "paper request")

Inside a Test Event’s show page user can find the ‘Send Paper Request’ button, clicking
on this will open the ‘Create Paper Request’ pop up. The form will require the user to give the
request a name, Description, Status and an ‘Add Work request’ option.

![Paper Setting](/img/paper_setting_10.png "paper request")

The status will be Open by default. As soon as a Paper is created for a request the
status of the request changes to ‘In Progress’. When the paper is approved the status changes
to ‘Completed’.
Every time a request is created for a test event a number is added to the user given
name.

#### Normal Paper Request

For a Normal request the create form will require the user to fill in with Test track , Paper
template, Paper setter name , Paper Approver name and slot form what's available in the
dropdown for that event.

![Paper Setting](/img/paper_setting_11.png "paper request")

#### Variant Paper Request

When a request is variant type an additional selection field appears showing a list of
papers applying to the chosen test track and templates to choose from as the parent paper. Slot
can be selected after selecting the parent paper.

![Paper Setting](/img/paper_setting_12.png "paper request")

### Edit

A paper request can be edited from three places, the paper request list page, the test
events show page and the paper request show page. The edit icon will open the edit paper
request form similar to the create form. Only open requests can be edited.

- **Change Paper Setter**![Paper Setting](/img/paper_setting_13.png "paper request")<br/>
  The change PS button will help change the paper setter user when a request is in
  progress.

  ![Paper Setting](/img/paper_setting_14.png "paper request")<br/>
  Product manager should only select a different user from the drop down and click on
  save, the request will now be transferred to the new paper setter.

### Delete

Deleting can be done from two places, the test events show page and the paper request
list page. A request can be deleted as long as it is open.

### Search & Sort

A search bar is available in the Paper request list page where requests can be searched
by name . Created At column can be sorted descending and ascending of date.

## Papers

Paper is a set of questions, in a specified format and structure including allocated marks
for each question as well as correct answers. Each paper is identified by a unique id indicating
products, subject tracks etc.

## Paper list page

The paper list page shows a table showing details such as paper id, product, template,
test event , created date and time, paper stage , paper status and an action column with edit
and delete.<br/>
Paper has stages such as , unfilled paper when a paper is created and still in question
filling stage and still not sent for approval. ‘For Approval’ stage when a paper is sent for
approval. Require amend stage when papers are sent back to the paper setter to make amends
when questions are rejected. When a paper is approved then the stage is ‘Approved’.

![Paper Setting](/img/paper_setting_15.png "paper")

A paper’s status can be ‘Pending’ which is for a paper not yet approved, ‘Active’ as soon
as a paper is approved and can so be exported. ‘Disabled’ when a paper is disabled.

### Search & sort

The paper list page has a search bar available to search by paper id’s last 3 digits. The
Created At column can be sorted in descending and ascending orders whenever necessary.

### Filter

The papers can be filtered according to the stage of the paper. Users can list all papers
with rejected questions if the table is filtered by the ‘Return for Amending’ stage.
The All papers button will list all the papers removing the filter applied.

![Paper Setting](/img/paper_setting_16.png "paper")

## Paper Show Page

The show page of a paper will differ from user to user and stage of the paper.

![Paper Setting](/img/paper_setting_17.png "paper")

### Disabling/Enabling a Paper

The user who can disable a paper will be the Admin. The ‘Disable paper’ button is
available only for papers approved in the paper show page. Clicking on the button will disable
the paper and the paper should not be able to be used in future events . A disabled paper can
only be used for assigned events.<br />
‘Enable paper’ button appears as soon as a paper is disabled, clicking on it will enable
the paper again so that it can be used in future events.

### Usage Analysis

![Paper Setting](/img/paper_setting_18.png "paper")

The usage analysis of a paper can be viewed also only by the Admin user; the button is
available for an approved paper in its show page. The Paper usage report will show all test
events and slot details wherever the paper has been used. Users can search usage of the
paper within a specific period . Give a start and end date, click on the set period button and
usage of the paper within these dates will be shown in the table. This report can be exported in
.csv format.

### MCQ Shuffling

![Paper Setting](/img/paper_setting_19.png "paper")

When a Paper is approved the MCQ shuffling button becomes available, as soon as a
user clicks on this an automatic shuffle is done on the options and shown in a pop up. Users
should also be able to change the option position manually by clicking on the dropdowns
corresponding to an option and selecting a desired position A,B,C or D. MCQ shuffling can be
done as many times as required and saved.. This shuffle can be performed by the product
manager, Setter, Approver and Admin.

### Export Options

Product Manager, Setter, Approver, and Admin have rights to export a paper.

![Paper Setting](/img/paper_setting_20.png "paper")

A paper can be exported as soon as it's approved and in Active status. The export paper
form provides two export options. The above picture shows exporting for a same event and
another option is to export for a different event.

![Paper Setting](/img/paper_setting_21.png "paper")

Here the dropdown will show all events where this particular paper has been assigned
to, and the user should choose one and click on export paper. The file exported is in .csv format.

## Paper Setter

Every time a Paper Setter is assigned a paper request he/she gets an email and in app
notification. The Setter can find the request in the list paper request list page.

### Create

Paper creation is possible only for a Paper Request . A request is received by the Paper
setter in his/her account in the list page, the ‘Create Paper’ button will be available in the
particular request show page.

![Paper Setting](/img/paper_setting_22.png "paper")

As soon as this is clicked the user is directed to the create paper page where questions
can be added under each subsection in the paper format. For each subsection Work Requests
can be sent if the Setter finds the need for more questions. Also the paper setter can create
his/her own questions for the same topic on the spot. Such questions will be Draft Questions.

![Paper Setting](/img/paper_setting_22_to_23.png "paper")

#### Paper Work Request

To send a paper work request, the user should click on the ‘Create Work Request’ button
to open the create form . The form will be similar to the Work request creation form in the
Question module but here the Qtype,subject, Report theme, Theme, Sub theme, and Topic will
be prefilled. Setter should give a name, description, select one of two Paper Request types and
specify whether it’s a Normal or variant request .

![Paper Setting](/img/paper_setting_23.png "paper")

When the paper request type is normal then the setter will only have to choose a subject
In-charge. If the paper request type is Urgent then the setter should also be able to choose the
other users like Creator, Reviewer, and Approver though choosing reviewer and approver
names are not mandatory.

![Paper Setting](/img/paper_setting_24.png "paper")

This paper work request can be a normal question request or a variant question request,
in that case the form looks like below where the add variants section appears.

![Paper Setting](/img/paper_setting_25.png "paper")

Once a paper work request is created and sent the paper cannot be deleted. Questions
created from such paperwork requests will be available in the dropdown whenever they reach
the ‘For approval’/’Published’ status.

#### Draft Paper Work Request

Any Work request can be saved as a draft and will appear in the associated work
requests section of the particular paper’s show page. The user should be able to edit and delete
such requests. Edit should look similar to the create form and filling all mandatory fields and
submitting will open the request.

![Paper Setting](/img/paper_setting_26.png "paper")

- **Draft Question Creation**:The draft question creation form will look similar to question creation form except the
  subject,report theme,theme,subtheme, topic, Qtype, and grades are already defined and only
  the question details ,option details and tags are the fields to be filled. As soon as the question is
  created it should appear in the question selection dropdown .
  Variant Draft questions can also be created by selecting a question from the ‘Select
  Variant’ field.

![Paper Setting](/img/paper_setting_27.png "paper")

The add question button can be used as many times as the number of questions
required in each subsection. Questions can be selected from the dropdown. The dropdown will
show questions filtered by topic and grade requirements in each subsection. The draft questions
created will also appear here immediately.
After selection the question can be viewed by clicking on the view icon next to the
selection field. A pop up will appear with all details of the question showing like the show page
of a question.
The delete icon next to the view icon will remove the question selected and add question
button can be used again .

#### Flagging

![Paper Setting](/img/paper_setting_28.png "paper")

A question after selection in the paper can be flagged . Flagging this will ensure that the
same question cannot be used anywhere else within the same product. The question becomes
exclusive. But nothing can be done if already approved papers have the same question, this can
only prevent papers yet to be approved.A flagged question cannot be sent for Review. When the
flagged question is selected for a paper under approval or setting process a flag appears near
the question indicating that it has been flagged elsewhere, so the user will have to select a
different question.

![Paper Setting](/img/paper_setting_29.png "paper")

#### Send for Review & Cleanup questions list

When the send for review button near a selected question is clicked this question is sent
for Cleanup to the QB incharge. Such questions will not be available in the question selection
drop down further in other papers also until the QB incharge decides on what to do with it. List
of such questions sent from a paper can be viewed when the cleanup questions button is
clicked.

![Paper Setting](/img/paper_setting_30.png "paper")

Whenever a question has been sent for review a flag will appear near it wherever it has
been selected to use in any unapproved paper.

![Paper Setting](/img/paper_setting_31.png "paper")

#### Quality Check

![Paper Setting](/img/paper_setting_32.png "paper")

Charts are available for the paper setter and Approver showing overall view of how the
questions have been selected based on bloom’s level, sub themes, question status, topics and
variant/Normal question. Setter can change questions based on this. Approvers can reject and
send back to amend the paper if not satisfied looking at these charts.

#### Submit For Approval

After all questions under each subsection have been filled is when the ‘Submit for
Approval’ button becomes active and can be used.

#### Rejected questions

When a paper is sent back for amending and has rejected questions then the setter
should reselect another question if available or create new or send a work request for new
questions. Setter will not be able to use a rejected question again until the paper is approved.
This rejection does not affect the same question in other papers of similar template.

#### Edit a Paper

Editing can be done by Paper setters and Approvers based on the paper status. Edit
button is available in three places: the paper list page, the Paper request show page and the
paper show page. If a paper is in status unfilled, or Required amend the paper setter should be
able to edit it. If a paper is in the For Approval stage only then can an Approver edit it.

## Paper Approver

Every time a Paper Approver is assigned a paper request he/she gets an email and in
app notification.<br />
Once the Setter sends the paper for approval the Approver can find the paper appear in
his/her paper list page or in the assigned paper request show page. Approver should click on
the edit icon to open the paper edit page to approve or take any other action on it.
This edit page will look similar to the setter’s edit page.Approver will also be able to flag
questions to make them exclusive to a product.<br />
Quality check charts are available to the approver to assess the paper.Approver can also
view the whole question using the view button. Cleanup questions can be seen in the list when
the cleanup questions button is clicked.

### Reject a Question

Only Approvers and Admin can reject questions in a paper. Each question will have a
reject button near it ,where the approver can reject just by clicking on it . A paper cannot be
approved if any question is rejected.
Approver also has the option to select a different question if available in the dropdown
instead of rejecting it. He/she can delete and add new questions too .

### Return for Amending

Once questions have been rejected or even if not Approver can send a paper back to
the setter for amending by clicking on the send for amend button in the paper edit page.

![Paper Setting](/img/paper_setting_33.png "paper")

Such papers will appear in the Setter’s account as ‘Require amend’ stage. Setter will
make required changes and submit back for approval.

### Approve

Approver, finally satisfied with the paper, will click on the Approve button to approve the
paper and the Paper Request gets completed.
