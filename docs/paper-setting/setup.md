---
sidebar_position: 1
title: Setup
---

# Setup

This is where the actual setting of the paper will happen , main users of this module are
the Product Manager, Paper Setter and Paper Approvers. The paper setter and paper approver
users are created by Sr.Manager, Product Managers and Admins. Like the Questions module
there can be many setters,approvers and managers. A paper is always created for a Test Event.
Questions to be used are bound by control parameters such as Products, Test Tracks, and
Templates.

## Product Manager

This user is responsible for creating Products for which Test Events will then be created
in My Centa. Product Managers will also be creating and handling Test tracks, Paper Templates
and Paper Requests.

The product Manager also will create Paper requests based on the test events to
happen. He/she will assign work to the setter and approver. Once a Request is completed
he/she receives an in app notification.

### Products

These can be considered as pre-configured templates for a paper .The Product Manager
and Admin have access to Products. Products will have a unique id. Each Product is a group of
Sections .<br />The list page will show all products in AMS created so far for Admins and only products
created by he/she for Product Managers.
A product’s show page will display all details user entered while creating it and the
product paper format i.e. the sections in it in table display along with a table containing all paper
templates associated with it .

#### Create Product

Admins and Product managers should be able to create Products as needed. Users can
click on the ‘+Create’ button in the Products list page and Create Product form will pop open
where the user will have to enter the Product name, Description, Subject track with which the
product will be associated to , and the ‘+ Add section’ button will keep adding section fields as
you click on it. For each section the user will have to give a name, Number of questions under
the section and total number of marks for that section.

![Paper Setting](/img/paper_setting_1.png "product")

![Paper Setting](/img/paper_setting_2.png "product")

#### Edit a Product

The editing of a Product can be done in two places, both the edit icon in the action
column and edit button in the Product show page will open the same Edit Product form which
will look much similar to the create form. Users should be able to edit as necessary and save
the changes.
Editing a product will be possible until a product is not used in a Test Event or Paper
Templates have not been created for it.

#### Delete a Product

Similar to edit, delete too will be possible only till a product is not used for a Test Event
or paper templates have not been created for it. The action column ‘Delete’ icon is the only way
to delete a Product.

#### Search & Sort

Search bar is available to search a Product by name, and the Created at column can be
sorted in ascending or descending orders.

#### Export Products

The list of products can be exported by clicking on the ‘Export’ button from the list page.
The products are downloaded in Excel format with their Product ids.

### Test Tracks

The Test Tracks are a set of Grades and subjects. One Test track may contain multiple
Grades and multiple Subjects.

![Paper Setting](/img/paper_setting_3.png "test track")

Test tracks can be created by product managers and Admin. Setter and Approver have
rights to view them.

#### Create Test Tracks

To create a Test Track user should click on the ‘Create’ button in the Test track list page ,
the Create test track form will open up asking the user to fill with test track name, Description,
Grades, and Subjects.

![Paper Setting](/img/paper_setting_4.png "test track")

#### Edit Test Tracks

Users should be able to edit Test tracks as long as they have not been associated with a
Product .The edit form will look similar to the create form where the user can edit and save the
changes.

#### Delete

Like edit, delete can be done to those test tracks that are not associated with anything
else. The delete icon will be available in the actions column.

#### Export

Users should be able to export the list of test tracks by clicking on the ‘Export’ button
which will download the list in excel format.

#### Search & Sort

Search is possible by name using the search bar available above the table and the
‘Created at’ column can be sorted in descending and ascending orders.

### Paper Templates

These are templates used for setting a paper. These are to be created by Product
Managers. This is where the subsections are defined for a paper . Templates in AMS will have
one of two statuses at any time. When a Template has been created but the total number of
questions limit has not yet been reached the template will have ‘In Progress’ status and when
the limit is reached then the template will have ‘Completed’ status.

![Paper Setting](/img/paper_setting_5.png "paper template")

Templates can be created by product managers and Admin. Setter and Approver have
rights to view them.

#### Create

Templates are made of a Product, and Test Tracks.Users should give a name,
description, Product . As soon as a Product is selected the test tracks associated with it will be
the only ones available for selection.

![Paper Setting](/img/paper_setting_6.png "paper template")

Users should be able to select Test tracks only if Product is selected and as soon as a
Test track is selected the Paper Format section appears.Then the Paper format section is
where users will have to define the subsections under each section.<br />
Each Subsection will require Subject, Report theme, Theme, Sub Theme, Topic for it ,
and type of questions that will appear in that subsection. Each subsection can consist of only
one type of question under it. When defining the subsection user must provide the count of
questions and marks per each question in it. A section can have multiple subsections but the
number of questions and total of marks in the section from all subsections should not exceed
the limits given while product creation. Warnings will appear when limits exceed.

#### Edit

Editing can be done by clicking on the edit icon from the action column and the user will
be directed to the Edit Paper Template page. Edit possibilities vary according to the status of the
Pape Template.

![Paper Setting](/img/paper_setting_7.png "paper template")

For Templates that have status ‘In Progress’ the edit is possible in all fields. For a
‘completed’ status template the Product and Test track fields cannot be edited. Users should be
able to edit and delete individual subsections in this edit page and add more sections when
necessary. Warning messages of limit exceeding will appear in the subsection edit and create
pop ups. The ‘Paper Template List’ button will return the user to the List page.

#### Cloning

The cloning page will look similar to the edit template page but both In Progress and
Completed templates when cloning cannot have their product and Test track fields edited.
Subsections can be edited in the page itself and deleted . New subsections can be
added when needed. The ‘Save’ button will be inactive whenever limits exceed.

#### Deleting

Any template not associated with a Paper request can be deleted. The delete icon in the
actions column will raise a prompt then on reply the template can be deleted.

#### Search and Sort

Templates can be searched by name and the Created Atcolumn can be sorted in
descending and ascending orders.
