---
sidebar_position: 2
title: Paper Evaluation
---

# Paper Evaluation

This module can be accessed by three types of users: the Delivery Manager, Evaluation
in-charge, and Evaluators. An evaluation happens in two phases. First phase is when all the
MCQs in the paper are evaluated by the Evaluation in-charge. Second phase of evaluation is for
the other types of questions done by the Evaluators. After the first phase the evaluation
incharge verifies this and forwards to the Evaluators assigned.

## Delivery manager

The Delivery Manager will be created by the Sr. Manager of the system and there could
be multiple users as Delivery Manager. The Delivery Manager will be overall responsible for
evaluation and result declaration.This user has rights to view, edit, delete and import Test
Events. This user can also see all the evaluations together in an evaluation list page.

### Evaluation Request

To create an Evaluation request the delivery manager has to open a test event show
page and then click on the `Create` button at the bottom.<br/>
The Assign Evaluation Slot form opens , Select a slot date for when the evaluation has
to happen, select a paper to evaluate, select the evaluation in-charge and evaluators from the
list, the delivery manager should be able to choose multiple evaluators for a request. Saving this
form will send the request to assigned evaluation incharge and evaluators.<br/>
A created request can be edited and deleted using buttons in the action column in the
test event show page. Edit form will look similar to the Assign Slot form where all fields will be
editable. The request show page will show the evaluations created for it.

![Results](/img/results_1.png "evaluation")

## Evaluation In-charge

Evaluation In-charge will be created by Sr. Manager and there could be multiple users as
Evaluation In-charge. This user takes care of the first phase of evaluation. This role has access
to Evaluation requests assigned to them and evaluations created for it.
The user receives in app notifications for whenever an evaluation request is created and
assigned to them and whenever an evaluator finishes a final verification.

### Create Evaluation

To create an evaluation the user has to open the request’s show page and Click on the
`Create` button

![Results](/img/results_2.png "evaluation")

This will open the Create Evaluation form,where the user will have to give a name and
upload a file with candidates' responses on Multiple choice type questions. The file has to be
.csv format with Candidate id column, name column, application id, Candidate image, and
corresponding columns each representing the question number as per in paper . The
candidate’s response for each MCQ should be filled in each questions column. The other type
answers will not be taken into account in the first phase of evaluation. Screenshot of the sample
file on candidates' response for Phase 1 can be seen below.

![Results](/img/results_3.png "evaluation")

![Results](/img/results_4.png "evaluation")

Open the show page of the evaluation created to see the candidate's total scores. To
see the candidate's performance for each question in the paper click on the candidate's name.

![Results](/img/results_5.png "evaluation")

![Results](/img/results_6.png "evaluation")

The above picture shows a detailed view of a candidate's response. The individual
response can be downloaded.

### MCQ Verification

To assign Evaluators to candidates Evaluation in-charge has to select one or more
candidates from the list and assign an evaluator available from the drop down, which appears
as soon selection starts. The list of evaluators available for each evaluation is selected by the
delivery manager during the request creation process. User has to assign evaluators to all
candidates.

![Results](/img/results_7.png "evaluation")

Once done a Verified and Proceed button appears at the top of the page. Clicking on this
completes the Phase 1 Evaluation.

![Results](/img/results_8.png "evaluation")

## Evaluators

Evaluators are for evaluation of practical assignments- like videos, essays, uploads etc.
This user’s dashboard shows the count of Evaluation requests assigned and Completed
requests.
This user will receive in app notifications whenever an evaluation is MCQ verified and
forwarded to them.<br/>
To access the evaluation the user has to open the request and then open the evaluation.
If any candidate has been assigned by the Evaluation in-charge then the candidates can be
found in this show page.

### Final Verification

The evaluator can find the ‘Format’ button in the top right of the page. Clicking on this
will download a format file where the user can fill in the scores the candidates have obtained
from other types of questions from the same paper.Scores should be filled in the corresponding
numbered columns.

![Results](/img/results_9.png "evaluation")

Each evaluation will generate different format files. Once the scores are filled in this file, click on
the ‘Upload a File’ button next to the format button and upload this file in .csv format. The total
scores will now be recalculated and displayed. Individual candidate responses can be seen and
downloaded.

![Results](/img/results_10.png "evaluation")

The evaluator once sure with the calculations should click on ‘Verified’ in the bottom left
of the page confirming the final verification of this evaluation. Thus an evaluation and evaluation
request gets completed and the request’s status changes to `Scores Finalised`.
