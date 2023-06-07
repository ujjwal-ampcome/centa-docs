---
sidebar_position: 1
title: Users
id: users
---

# Users

A single person can have multiple roles, these roles to a user can be added while
creation or even later in edit . Though a user can have many roles a default role is to be
mentioned. This is the role that the user will be in as soon as he/she logs into the system, then
the user switches between roles from the dropdown list in the top right of the screen.

Centa AMS has the following types of users throughout the app:

- **Super User/Admin**
- **Sr. Manager User**
- **System Support**
- **Question Bank Incharge**
- **Product Manager**
  - Paper Setter
  - Paper Approver
- **Subject Incharge**
  - Question Creator
  - Question Reviewer
  - Question Approver
  - Variant Creator
- **Delivery Manager**
  - Evaluation Incharge
  - Evaluators

Admin in AMS can do almost anything that all other users can do except creating
questions and papers, such rights will be exclusive to Question creators and Paper Setters.

Roles such as Admin,Sr.Manager, Subject In-charge and Product Manager can create
other users. Admin and Sr.Managers can create all other user roles, while Subject Incharges
can create user roles involved with question creation and Product manager can create user
roles involved with paper and question creation. Roles such as system support can be
created by admin and Sr. Managers and these roles are allowed limited access based on individual
tasks assigned by the Sr. Manager.

The User List page available to the aforementioned roles shows the status of the
user,display name, Primary role, mail id, type of user,Created and updated dates, Last seen and
an actions column with possible actions for the Subject In-charge.

**Create**: Create Button will open the create user form ![Create User](/img/users_1.png "users")

Create user form: ![Create User](/img/users_2.png "Create user")

Users are required to enter account holder’s display name, roles one or more can be selected,
define the Primary role of this user, valid email and initial password.

**Edit**: Users should be able to edit all fields in the edit user form only if the account is not yet
verified. For a verified account the email cannot be edited and the password field is not
available.

**Activate and Deactivate**: In the edit user form there's a ‘Deactivate’ checkbox available used
to deactivate the user. Newly created user is active by default. Once a user is created Deletion
is not possible.

**Type of User**: The type of user would be external or internal depending on the email id ,
accounts created organization's mail would be internal user accounts.

**Resend Verification**: A resend verification button is available for non verified accounts .
Users can be searched by title in the search bar.

## DashBoard

The assessment management system dashboard provides a visual interface where
administrators, instructors, and other authorized users can access and manage various aspects
of the assessment process. The dashboard serves as a centralized hub that offers an overview
of assessment activities, facilitates navigation to different functionalities, and provides key
information and insights.

The dashboard typically includes summary information and statistics related to
assessments. This may include the total number of assessments, number of active
assessments, assessments scheduled, completed assessments, and average scores. It gives
users a quick snapshot of the assessment status and performance metrics.

The specific design and layout of the assessment management system dashboard may
vary depending on the user role.

![dashboard](/img/users_3.png "dashboard")

**Work Requests**: This shows the total number of Work requests issued.

**Pending Reviews**: This count represents the total number of questions pending for review

**Pending Approvals**: This count represents the total number of questions pending for approval.

**Closed Work Requests**: This count represents the number of Work requests closed by all
users .

**Total Paper Requests**: This count represents the total number of Paper Requests issued.

**Pending Papers**: This count represents the total number of papers pending for approval.

The subject incharge’s account will show open and closed Work requests count, and
Pending reviews and approvals.

The Question creators,variant question creators and Reviewers dashboards will also
show a count on Accepted questions. Any question forwarded to the Approver is considered an
accepted question. So a total of ‘For Approval’ and ‘Published’ questions created by a creator
will be his/her ‘Accepted count’.

A product manager’s dashboard will show the counts of ‘Closed paper requests’,
‘Pending paper requests’, ‘paper templates’ and Total number of Test Events.

A paper setter’s and Paper Approver’s Dashboard will show the counts of closed and
pending paper requests, also number of pending and approved papers.

A delivery manager’s dashboard will give information on the total number of test events,
number of evaluation requests created, and the number of requests completed at the moment.
The evaluation incharge and evaluator’s dashboards will show the same except the test event
count.

The QB incharge’s dashboard will show the question module counts similar to the
subject incharge’s dashboard, counts of open and closed work requests, pending reviews and
approval counts.

The system support user’s dashboard will show information on the number of
assigned,pending, and completed tasks for them.

The Sr. manager’s dashboard will be the same as the admins.

## User Profile

The user Profile will give information on the user’s account details such as username
displayed, email id, default role, and a link to change current password.The displayed username
and Email can be edited by the user by clicking on edit .

Clicking on the Change Password link will notify the user that an email has been sent to
his/her own inbox. Clicking on the link will direct to the password reset page and the user should
be able to do the changes successfully.

![User Profile](/img/users_4.png "User Profile")

## Role Switch

When a user hovers on the dropdown sign near the username a drop down shows two
options one to open profile details and the other to switch roles. Hovering on Switch will show all
the roles this user can access. Clicking on will change the user’s current role.

![Role Switch](/img/users_5.png "Role Switch")
