/**
 *  Hello Donita , lahat nanaka parenthesis under condition, please provide us. Thanks.
 (need the list of import validation per category example :Import Authorized Request, Import employee schedule)
    (need the list of import validation under transaction > Upload timekeeping)


Hello Bugoy, 
(need existing template with data per category example :Import Authorized Request, Import employee schedule)
(need existing template with data for import validation under transaction > Upload timekeeping)



automation solutions:

err1: 
Missing edit button in DTR
solution:
TKM DTR Elements visibility, enable or disable validation

err2:
Importing facility validation (System always prompt: Page isn't working)
solution:
Full negative Import testing for Importing facility

    condition: 

    (need the list of import validation per category example :Import Authorized Request, Import employee schedule)

    validation:

    check all validation given from dev.

err 3/5/31:
Upon importing error appears " Error occured" Please try again
solution:
Full negative Import  testing for Upload timekeeping

    condition: 
    (need the list of import validation under transaction > Upload timekeeping)
    validation:
    check all validation given from dev.

err4:
Upong editing the monthly rate, the monthly rate reverted to 0
solution:
Positive testing under HRIS> Employee list> Payroll information
    condition:
    Add : Create the data you want to use for this testing and check the edit scenario.
    validation:
    Edit: Check upon the data from Payroll information reflected to tkm.

err5:
Upload Timekeeping not capturing details
solution:
Positive import testing for Upload timekeeping 

    condition: 

    create templete , use any data just for this testing. Include all the data that needs reflection to the datatable.

    validation:

    ALL data should reflect to the datatable. 


err6:
Save button not functioning (Wrong Employee number and employee code)
solution:
Negative testing for ADMIN > SYNC employee file

    condition:

    Import Employee file on HRIS and check the result on ADMIN > SYNC employee file
    All data should reflect there

Scenario 1:

    Do Edit Emp. Code to invalid data Then Save 
    Do Edit Emp. No to invalid data Then Save 
    Do Edit Dept. Code to invalid data Then Save 
    Do Edit Paygroup Code to invalid data Then Save 

Scenario 2:

    Do Edit Emp. Code to empty data Then Save 
    Do Edit Emp. No to empty data Then Save 
    Do Edit Dept. Code to empty data Then Save 
    Do Edit Paygroup Code to empty data Then Save 


Scenario 3:

    Do Edit Emp. Code to symbolic data Then Save 
    Do Edit Emp. No to symbolic data Then Save 
    Do Edit Dept. Code to symbolic data Then Save 
    Do Edit Paygroup Code to symbolic data Then Save 

    validation:

    Validate all scenarios , elements are working , and the data should reflect to the datatable.


err7:

Unbalanced report OT SUMMARIZED VS. OT DETAILED report

solution:

Add (Any valid data you want )Authorized Overtime manually and check Overtime Report in web tkm

 validation:

 compare the result of SUMMARIZED VS. OT DETAILED report


 err11: 

 Some employees are reflecting in the clock entries even though they are not part of the payroll group assigned for Sir. Melo.

solution:
  
Check the clock Entries in Admin account if  all the data added from user account are all present.

condtion:

step 10 in trello should be execute first 

validation :

print clock entries by payroll group and validate the employee's data there.



err13 and 17


DTR of employee have a double date display / the other data are from another employee due to duplicate employee number 
Duplicate viewing entry on DTR
solution:

negative test: add employee with existing employee code and number then save , it should validate that the employee code and number are existing data.



err16

Missing Logs on DTR / Manually added the logs on Clock Entries

solution:
 check the user's restriction upon deleting by range on clock entries

condition: 
add logs on Clock Entries
save logs on Clock Entries
delete by date range logs on Clock Entries

validation:

check the user's restriction that restricts users from using the delete range on other payroll groups.
note: ang validation aydapat kung ano lang ung nasa range ata anu lang ung may access kang employee iyong lang ung madedelete


err19

Can add authorized leaves even if the leaves left is 0


solution :

check if there is a validation for not having balance per authorized request

condition: 
set balance Requisition (LEAVE) on HRIS
add Authorized Leave on tkm and use all balance for (LEAVE)
save the data
and check the validation

validation: 

On validation on upload timekeeping system if the leave balance is less than 
the filed it will not be reflected on payroll and it will validate the leaves left

err21

SPE Paid on Daily employee even employee not work on holiday

solution:
check DTR on the payroll if the granted employee has been paid while he is not present one
the day before and after the holiday, one day b4 holiday, after the holiday.

condition: 
scenario 1:
Make an extra transaction for emp1(any employee):
Make a custom holiday date for this testing and 
set-up of the employee should be absent  one day before the holiday,
Check DTR and Shift file policy tag on employee (Holidays) should be granted, 
and upload the DTR to check the display after uploading to the payroll system,

validation:

it should not be paid any holidays additional payment because the employee is absent.

scenario 2:
Make an extra transaction for emp1(any employee):
Make a custom holiday date for this testing and 
set-up of the employee should be absent  One day after the holiday,
Check DTR and Shift file policy tag on employee (Holidays) should be granted, 
and upload the DTR to check the display after uploading to the payroll system,

validation:

it should not be paid any holidays additional payment because the employee is absent.


scenario 3:
Make an extra transaction for emp1(any employee):
Make a custom holiday date for this testing and 
set-up of the employee should be absent on holiday and checked the checkbox  "If both are checked" (the employee must be present
one day before and after the holiday to compute
holiday pay.)
Check DTR and Shift file policy tag on employee (Holidays) should be granted, 
and upload the DTR to check the display after uploading to the payroll system,

validation:

it should not be paid any holidays additional payment because the employee is absent.




err22

"Client concern based on viber: Missing logs on clock entrires, partial of employee don't have complete logs even it has on raw file 
LSTV found out: 
Duplication of employee number into the system, revision of employee number to affected employees. 
Cause: Importing of Masterfile employees to newly hired employees"


solution 1:


Negative test (Import invalid data) should be done via Import employee file from HRIS 
validation : 
Should not allow duplicate employee number , code , first name and lastname.
should not allow existing employee number , code , first name and lastname.
should not allow symbolic data of employee number , code , first name and lastname.
should not allow empty data of  employee number , code , first name and lastname.

solution 2: 

Positive test (Import valid data)should be done via Import employee file from HRIS
validation : Should reflect the data on employee file module in TKM , Payroll Employee masterfile , Admin > Sync Employee File. 



    






*/
