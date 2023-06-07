---
sidebar_position: 3
---

# Questions

The questions available in Centa AMS are ‘fill in the blanks’, ‘Match the following’, ‘MCQ’ and
‘Short Answer’ types as of now. All questions created are available in this part of the application
in a single table form . Admin has access to view, edit and delete all questions created by all
Creators.
Admin cannot create questions, to know more on question creation refer Creator User
Guide

## Question List Page

![Work Requests](/img/centa-16.png)

The list page will show all questions available to the user their current status and possible actions he/she is allowed on them

### Quick filters

The questions can be filtered by ‘Status’, ‘Grade’ and ‘Subject’ using the drop down filters available at the top of the table. The ‘All Questions’ button can show all the questions after showing filtered results

### Search

Questions can be searched by title on the search bar and ‘Clear’ button is provided alongside to clear the search bar and revert to showing all questions

### Export

The export button top right of the page will open the ‘Export questions’ form to filter and export the export questions

![Work Requests](/img/centa-17.png)

Users can fill one or all fields and filter the questions by clicking on `Get Questions` , soon after the ‘Download’ button will appear and users will be able to download the file in .xlsx format. All the fields are multiple select fields in this form

![Work Requests](/img/centa-18.png)

## Question Show Page

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

### Discrimination Index

The discrimination index is a statistical measure used in educational assessment to
evaluate the quality of a question or item in terms of its ability to discriminate between
high-performing and low-performing students.It provides insights into how well a question
differentiates between students who possess the targeted knowledge or skills and those who do
not.The discrimination index is typically calculated by analyzing the performance of students
who took the assessment. This is available for a question in its show page.

![Discrimination Index](/img/question_creation_4.png)

When the user clicks on the button the following form appears,a list of papers in which
the question has appeared is shown in the dropdown. Selecting a paper corresponding to a test
event will show us whether an evaluation for the paper has happened or not.

![Discrimination Index](/img/question_creation_5.png)

If no evaluation has happened for the selected paper then a message is displayed saying that no evaluation found.

![Discrimination Index](/img/question_creation_6.png)

If paper has been evaluated, then a ‘Get DI’ button appears to the right. Click on it to see the DI.
This is in the questions show button while setting a paper too.

## Auto Retired Questions

Questions based on predefined rules set by Sr. Manager or Admin is picked by the system and shown in this table. These questions automatically retire based on the rules .Users can revert this retirement by clicking on the check box and clicking the revert button that appears after

![Work Requests](/img/centa-22.png)

Clicking on the questions will direct one to the question show page

## Upload Questions

Questions can be imported to the system in .csv format. Such questions will appear in this window where further actions can be taken on them . Admin can edit and delete these questions . This table can be filtered only by subject

![Work Requests](/img/centa-23.png)

## Import

![Work Requests](/img/centa-24.png)

Question type and Subject are the only mandatory fields in this form . if the fields are not filled when uploading, the user will have to edit each question individually and fill in this information. The Creator and Variant creator have the rights to upload questions as well as the admin

## Draft Questions

![Work Requests](/img/centa-25.png)

This window shows a list of questions created by the paper setter while setting the paper. The
product managers, Setters and Approvers have rights to view this window. Admin is the only
user who can edit such questions.

## Question Cleanup

This window shows the list of questions sent to the QB in-charge by the paper setter while setting a paper. QB in-charge can choose to re publish such questions or retire them. When questions are sent to this window they will not appear in a paper for setting until further action has been taken

## Subject Incharge

The subject in-charge is the user who creates work requests according to question
requirements in the question bank, he/she may receive work requests form the Paper Setter
also.<br />Work Requests forwarded from paper setters may be urgent or normal , for normal
requests the subject in-charge must edit them and add the Creator, Reviewer, and Approver and
Submit. For Urgent ones the Creator will be already chosen, the reviewer and Approvers might
be or might not be chosen, the Subject in-charge is free to edit according to the user availability.
The Subject in-charge is free to edit the work request name, description, users, and tags only.
Refer Paper Work Request for more on them.

## Creator

This user is responsible for creating questions based on work requests and only the
Creator can do this in AMS. The Creator can also import questions in bulk from the upload
questions list page as explained earlier in Upload Questions.

**Create a question**: This is where question creation starts . ‘Create’ button to create questions is available
only in the associated work request’s show page. One cannot create questions without a work
request. The ‘Create’ button opens the Create question form

![Create Question](/img/question_creation_7.png "Create a question")

![Create Question](/img/question_creation_8.png "Create a question")

The creator is required to enter the fields such as Question type , question , question
insight, etc.This form changes according to the Question type selected. The ‘Add Options’
button adds the answer entering fields for the questions, this is where the changes appear for
different types.

**Question Types**

- **Fill in the Blanks**:![Create Question](/img/question_creation_9.png "Fill in the blanks")
  Two fields are available for each answer entry, the answer field and an option insight field. Users
  can add as many options as they want. For every option added the answer field will be
  mandatory.
- **Match the Following**:![Create Question](/img/question_creation_10.png "Match the following")
  For the match the following questions each option will have left and right label and an option
  insight field. The left and right labels will be displayed in the question . The correct match
  options can be noted in the insight fields .The left and right label entries are mandatory.
- **Multiple Choice**:![Create Question](/img/question_creation_11.png "Multiple Choice")
  Each option in multiple choice questions will consist of a field for answer, insight and the option
  flag. Each option will be most wrong, close to correct or right answer. Each MCQ will have a
  minimum of four options though this for the creator to decide, having more or less number of
  options will disrupt option balancing when setting papers . Out of all options only one can be the
  right answer. And one cannot save a question without choosing the right answer.
- **Short Answer**:![Create Question](/img/question_creation_12.png "Short Answer")
  These questions can have as many options as the user will add and each option will have fields
  for component name, and ratings , and a field for weightage for each option.
  For any option added all the fields will be mandatory.<br />

Once a question has been filled it is saved and will immediately appear in the small
question table bottom of the Work request show page.

**Edit A Question**:To edit a question, the user can click on the edit icon in the work request show page at
the bottom available for each question , or the user can open the question show page and find
the edit button on top right . This form will look similar to the Create question form with an
addition of the ‘Submit for Review’ button, so the user is free to edit as he/she wishes. The edit
icon will only be available for questions not yet submitted for review. Users can also find the edit
icon in the questions list page.

**Delete A Question**:To delete a question user can use the delete icon in the actions column corresponding to
each question in the work request show page question table. Users can also find the delete icon
in the questions list page.

**Submitting For Review**:To submit a created question for review, the user has two options ,one is by opening the
edit question form and clicking the ‘Submit for Review’ button or clicking on the same button in
the Question show page.Once a question is submitted the creator can no longer edit or delete it.

**Rejected Question**:Questions can be rejected by Reviewers and Approvers, when they are the Creator gets
a chance to create more questions in place of the rejected ones.

**Send Back For Amending**:Questions can be rejected by Reviewers and Approvers, when they are the Creator gets
a chance to create more questions in place of the rejected ones.

## Reviewer

This user is responsible for Reviewing questions submitted by Creators and questions
sent by other Reviewers for second review. This user has access to Work Requests and
Questions assigned or sent to him/her in the work request and questions tabs.

### Reviewing a question

To review a question Reviewer should open the Work Request assigned or can find the
questions to review in the question list page. In these question tables the edit icon is available in
the actions column which will open the Edit questions form similar to the edit question form
available to the Creator with additional fields such as Reviewer comments field for question and
answer options . The user will also find an additional section to select a Second Reviewer in the
edit form. In case the question has come for second review then the second reviewer stem
comments field will be accessible .

![questions](/img/question_creation_13.png "review")

### Second Review

When a user decides to send a question for second review there are two ways to do it .
One is selecting the second reviewer from the drop down in the ‘Second Reviewer’ field and
clicking on the ‘Send Review’ button . Once a question has been sent, the initial reviewer who
will be R1 cannot reject/send for amend/submit for approval.

![question](/img/question_creation_14.png "second review")

Also a flag appears near the question id indicating that this question has been sent for
second review.

Another way to send questions to Second Reviewer R2 is by using the check boxes near
the question ids. This is for sending multiple questions at the same time, as soon as a checkbox
is marked an R2 selection field appears with an ‘Assign’ button near it above the question table

![question](/img/question_creation_15.png "second review")

For a user who’s a receiver of a question for second review he/she gets an in app
notification and the question appears in the Question list page in the account flagged ‘R2’.
Edit icon will be available in the actions column for these questions when opened the form will
be similar to the R1 edit form except only question and ‘Second Reviewer Comments’ fields will
be accessible . The only action this person can do is send back to R1.

### Reject a question

To reject a question, the user can do it by opening the edit form and clicking the ‘Reject’
button or using the same button in the question show page.

![question](/img/question_creation_16.png "reject question")

Once a question is rejected by the reviewer it’s status becomes ‘Rejected at review’
which is not visible to the Reviewer. No user can make changes to such questions but the
Creator will be able to create more questions in place of rejected ones.

### Send for Amending

The reviewer can choose to send a question back to the Creator for amending if he/she
finds the question needs only slight modification rather than completely reject it.<br />
Reviewers can click on the ‘Require Amending’ button in question edit form or from the
question show page. Reviewers can comment on the question in the respective comment fields.
The creator will then make changes to the question and submit for review again.

### Submitting for Approval

When the reviewer finds the question fine he/she can submit it to the Approver by
clicking on the ‘Submit for Approval’ button from the edit question form or the question show
page. When a question is submitted for Approval its considered acceptable, so such questions
will also be available in paper setting.

### Approver

This user is responsible for approving questions for assigned work requests submitted
by the Reviewer and questions that are sent by other Approvers for second approval.

Users should be able to find edit icons for each question inside work request show
pages or in the question list page. This will open edit forms similar to those of other users with
changes like Approver comment fields for question and answer options also Second Approver
selection section .

![question](/img/question_creation_17.png "approve question")

### Second Approval

Users should be able to send and receive questions for second approval. To send a
question similar to the second review flow there are two ways , one being the dropdown to
select the Second Approver A2 from the edit form of the question and click the ‘Second
Approval’ button . Second way would be to use the multi-select check boxes to send more than
one at a time. Check the questions intended for approval and the A2 selection dropdown will
appear, select a user and click on ‘Assign’.

![question](/img/question_creation_18.png "second approval")

As soon as a question is sent for second approval a flag ‘A2’ will appear near the
question id.

![question](/img/question_creation_19.png "second approval")

For a user who’s a receiver of questions for second approval he/she will get in app
notifications and the questions will appear in the questions list page with the flag and edit icon .
This edit form will open with only the question and second approval comment fields accessible .
After commenting on the question A2 can click on ‘Send Back to A1’ to send it back to the initial
approver.

### Reject a question

Approvers can reject questions like the reviewers and such questions can never be
edited, but the Creator will now be able to create more questions in place of rejected ones. Such
questions will display a status ‘Rejected at Approval’ for the Subject In-charge and Admin users.<br/>
Users should be able to reject by clicking on the ‘Reject’ button available in the edit
forms or in the respective question show pages.

### Send for Amending

Approvers can send questions back to the reviewer to make amends in case he/she is
not satisfied with the question but not necessarily rejectable.Users should click on the ‘Require
amending’ button in the edit form or question show pages. The question's status becomes
‘Require amend (for Review)’ visible to the Subject In-charge and Admin users.

### Approving a Question

Users should be able to approve questions by clicking on the ‘Approve’ button in the edit
form and question show pages. The question is now published successfully, its status will be
‘Published’ visible to the subject in-charge and admin users. Such published questions along
with ‘For approval’ questions are considered acceptable and will be available for paper setting .

## Variant Creator

Variant Creators are responsible for creating only variant questions for a work request
requirement. Paper setters can also assign these users work for variant question requirements
when setting a paper.

### Variant Questions

Such questions are created by Variant Creators when assigned variant work requests.
Refer **Create** to know about variant work request creation.

When a variant Creator is assigned such requests he/she gets both email and in app
notifications and the work requests are available in the work request list pages of their own
accounts .The work request show pages will have the ‘+Create’ button to create the questions.
The create question form will look much similar to the normal question create form with an
addition of ‘Variant of’ selection field. This field will show all parent questions selected by the
subject in-charge during work request creation. Variant Creator should select one parent
question and create a variant for it and save.

![question](/img/question_creation_20.png "variant")

The Edit Variant question will be similar to the create and user can edit as he/she finds
fit. To submit for review the user will have to click on the ‘submit for review buttons available in
the edit question form or the question show pages . If any question is sent back for amending by
the Reviewer then Variant Creator can edit till satisfied and submit for review again, the process
is similar as for normal questions refer Creator for detailed information. Questions not sent for
review i.e., ‘Open’ questions can be deleted and recreated . Each variant question is mapped
with its parent question. And this parent question is shown in the question’s show page like so

![question](/img/question_creation_21.png "variant")
