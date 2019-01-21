// https://support.veeva.com/hc/en-us/article_attachments/206457607/CLM_Content_Creation_Guide_1_.pdf

// Namespace & Return Format
com.veeva.clm
{success:true, obj_name:[{"Id":"0001929312"}, {record2}, ...]}
{success:false, code:####, message:"message_text"}

// ADDRESSES
// Returns an array of record IDs of all addresses (Address_vod__c) for a particular account (Account)
// account - specifies the record ID of the account of which to get all related addresses
// callback - call back function which will be used to return the information
com.veeva.clm.getAddresses_Account(account, callback)

// Returns the values of the specified fields for specified Address (Address_vod__c) record
// record - specifies the record ID of the Address to get fields from
// fields - list of field api names to return a value for, this parameter should be an array
// callback - call back function which will be used to return the information
com.veeva.clm.getAddressFields(record, fields, callback)

// PRODUCTS
// Returns an array of record IDs of all products (Product_vod__c) of a specified type that the User has access to
// type - specifies the Product Type (Product_Type_vod__c field on Product_vod__c)
// callback - call back function which will be used to return the information
com.veeva.clm.getProduct_MySetup(type, callback)

// RECORD TYPE SUPPORT
// Returns an array of record IDs of all RecordType records (RecordType) for a particular object
// object - specifies the API name of the object of which to get all active RecordTypes
// callback - call back function which will be used to return the information
com.veeva.clm.getRecordType_Object (object, callback)

// SURVEYS
// Returns an array of record IDs of all Survey Questions (Survey_Question_vod__c) for a specific Survey (Survey_vod__c)
// Results are returned in ascending order based on the Order_vod__c field on Survey Question_vod__c.
// survey - specifies the record ID of the Survey to get all related Survey Questions from
// callback - call back function which will be used to return the information
com.veeva.clm.getSurveyQuestions_Survey(survey, callback)

// Returns an array of record IDs of all Questions Responses (Question_Response_vod__c object) for a specific Survey
// Target (Survey_Target_vod__c). Results are returned in ascending order based on the Order_vod__c field on Question_Response_vod__c.
// surveytarget - specifies the record ID of the Survey Target to get all related Question Responses from
// callback - call back function which will be used to return the information
com.veeva.clm.getQuestionResponse_SurveyTarget(surveytarget, callback)

// Returns an array of record IDs of all Survey Targets (Survey_Target_vod__c) for a specific account (Account), for a
// specific Survey (Survey_vod__c)
// account - specifies the record ID of the Account to get all related Survey Targets from
// survey - specifies the record ID of the Survey to get all related Survey Targets from.  Can be made optional by putting in "".
// callback - call back function which will be used to return the information
com.veeva.clm.getSurveyTarget_Account (account, survey, callback)

// ORDER MANAGEMENT
// Returns an array of record IDs of all products (Product_vod__c) of type Order that have valid list prices
//          Valid list price = Pricing Rule (Pricing_Rule_vod__c) of record type List Price (List_Price_Rule_vod) where current date is
//          between Start Date (Start_Date_vod__c) and End Date (End_Date_vod__c)
// callback - call back function which will be used to return the information
// account/account group - specifies the record ID of an Account or the matching text for the Account Group. Can be made optional
// by putting in "". When utilized, returns an array of record IDs of all products (Product_vod__c) of type Order
// that have valid list price records which specify the Account or Account Group.
com.veeva.clm.getProduct_OrderActive_Account(account or account group, callback)

// Returns an array of record IDs of all products (Product_vod__c) of type Kit Component (Product_Type_vod__c field) who have
// parent product (Parent_Product_vod__c) = product
// product - specifies the record ID of the product of which to get all related Kit Components from
// callback - call back function which will be used to return the information
com.veeva.clm.getProduct_KitComponents(product, callback)

// Returns an array of record IDs of Product Groups (Product_Group_vod__c) that the specified product (Product_vod__c) is part of
// product - specifies the record ID of the product of which to get all related Product Groups from
// callback - call back function which will be used to return the information
com.veeva.clm.getProductGroup_Product(product, callback)

// Returns an array of record IDs of the last 10 Orders (Order_vod__c) for a particular account (Account)
// The order of last ten orders is based on the field Order_Date_vod__c, descending.
// account - specifies the record ID of the account of which to get all related orders
// callback - call back function which will be used to return the information
com.veeva.clm.getLastTenOrders_Account(account, callback)

// Returns an array of record IDs of all Order Lines (Order_Line_vod__c) for a particular order (Order_vod__c)
// order - specifies the record ID of the order of which to get all related order lines
// callback - call back function which will be used to return the information
com.veeva.clm.getOrderLines_Order(order, callback)

// Requires that an Account be specified in order for any result to be returned.
// Returns the record ID for the currently valid List Price (Pricing_Rule_vod__c) for a specific product (Product_vod__c) and Account combination. Respects the Account and Account Group List Price hierarchy.
// Valid list price = Pricing Rule (Pricing_Rule_vod__c) of record type List Price (List_Price_Rule_vod) where current date is between Start Date (Start_Date_vod__c) and End Date (End_Date_vod__c)
// product - specifies the record ID of the product of which to get the Pricing Rule for
// account - specifies the Account for which to select List Prices for
// callback - call back function which will be used to return the information
com.veeva.clm.getListPrice_Product(product, callback)

// APPROVED EMAIL
// Returns the record ID(s) for the Approved Document which matches the values specified and Status_vod = Approved
// Gets the approved document by querying all products of type Detail Topic or Detail and compares against
// the query of any approved documents with the passed in vault_id and
// document_num. If there are multiple documents with these same ids, an error is thrown.
// vault_id - specifies the Vault ID of the Approved Document to retrieve. (Vault_Instance_ID_vod on Approved_Document_vod)
// document_num - specifies the document number of the Approved Document to retrieve. (Vault_Document_ID_vod on Approved_Document_vod)
// callback - call back function which will be used to return the information
com.veeva.clm.getApprovedDocument(vault_id, document_num, callback)

// Launches the Send Email user interface with the email template and fragments selected.  An Account must be selected.
// If CLM_Select_Account_Preview_Mode Veeva Setting is enabled, then Select Account dialogue is opened so the user can select an account.
// If the Veeva Setting is not enabled and no Account is selected, then no action will be performed.
// email_template - specifies the record ID of the Email Template to use
// email_fragments - array or string with comma separated values of record IDs of the Email fragments to use.  Can be made optional by putting in ""
// callback - call back function which will be used to return the information
com.veeva.clm.launchApprovedEmail(email_template, email_fragments, callback)

// FUNCTIONS TO REPLACE EXISTING API CALLS
// Returns the value of a field for a specific record related to the current call
// object -  Limited to the following keywords: Account, TSF, User, Address, Call, Presentation, KeyMessage, and CallObjective.
// field- field api name to return a value for
// callback - call back function which will be used to return the information
com.veeva.clm.getDataForCurrentObject(object, field, callback)

// Returns the value of a field for a specific record
// object - specifies the object api name (object keywords used in getDataForCurrentObject are not valid, except for Account and User)
// record - specifies the record id.
// field- field api name to return a value for
// callback - call back function which will be used to return the information
com.veeva.clm.getDataForObject(object, record, field, callback)

// Creates a new record for the specified object
// object - specifies the object api name
// values - json object with the fields and values to be written to the new record
// callback - call back function which will be used to return the information
// NOTE: This function returns success: true as long as the user has access to the object.
//       If the user does not have access to one of the fields specified, success: true is still returned, however,
//       and the fields the user does have access to are still updated.
com.veeva.clm.createRecord(object, values, callback)

// Updates a specified record
// object - specifies the object api name
// record - specifies the record id to be updated
// values - json object with the fields and values updated on the record
// callback - call back function which will be used to return the information
// NOTE: This function returns success: true as long as the user has access to the object.
//       If the user does not have access to one of the fields specified, success: true is still returned, however,
//       and the fields the user does have access to are still updated.
com.veeva.clm.updateRecord(object, record, values, callback)

// Navigates to the specified key message (Key_Message_vod__c)
// key message - external ID field of the key message to jump to. Usually is Media_File_Name_vod__c, but does not have to be.
// clm presentation - external ID of the CLM Presentation if the key message is in a different CLM Presentation.
// Usually is Presentation_Id_vod__c, but does not have to be. Can be made optional by putting in "".
com.veeva.clm.gotoSlide(keymessage, presentation)

// Navigates to the specified key message (Key_Message_vod__c)
// key message - Vault_External_Id_vod__c field of the key message to jump to
// clm presentation - Vault_External_Id_vod__c of the CLM Presentation if the key message is in a different CLM Presentation.
// Can be made optional by putting in "".
com.veeva.clm.gotoSlideV2(slide, presentation)

// Navigates to the next slide based on the CLM Presentation Slide display order
com.veeva.clm.nextSlide()

// Navigates to the previous slide based on the CLM Presentation Slide display order
com.veeva.clm.prevSlide()

// Returns the value of the field in UTC format.  Only works with field of type Date or Datetime.
// object - specifies the object api name (object keywords used in getDataForCurrentObject are not valid, except for Account)
// record - specifies the record id.
// field- field api name to return a value for
// callback - call back function which will be used to return the information
com.veeva.clm.getUTCdatetime(object, record, field, callback)

// Updates the current record related to the call
// object - specifies the object api name
// values - json object with the fields and values updated on the record (ignores id field if specified)
// callback - call back function which will be used to return the information
// Uses saveObjectV2 call
// Note: This function returns success: true as long as the user has access to the object and record specified.
// If the user does not have access to one of the fields specified, success: true is still returned and the fields the user does have access to are updated.
// If there are fields which are not accessible, code 0200 is returned and the message specifies the field names.
// If there is no current record (user is in Media Preview), the function is temporarily saved and executed when an Account is selected.
// If no Account is selected, the function is discarded on exit of Media Preview.  The callback function will not be executed if there is no current record.
com.veeva.clm.updateCurrentRecord(object, values, callback)

// Formats a string for createRecordsOnExit() and returns it
com.veeva.clm.formatCreateRecords(object array, values array)

// Formats a string for updateRecordsOnExit() and returns it
com.veeva.clm.formatUpdateRecords(object array, record array, values array)

// Creates a string as if it was a request for updateCurrentRecord and returns it
com.veeva.clm.formatUpdateCurrentRecords(object array, values array)

// Formats a createRecord or updateRecord request in the proper form
com.veeva.clm.generateSaveRecordRequest:function(object, values, callback)

// Queries for and returns the specified fields for all records which match the where clause.
// Also returns count of records returned.
// object - The API Name of the object that you want to query
// fields - Comma delimited string of field API names
// Optional fields:
// where - string for the where clause (See documentation for supported clauses).
// sort - Array of strings which represents the sort, example: ["Name_vod__c, DESC", "Status_vod__c, ASC"]
// limit - the maximum number of records to return
queryRecord(object, fields, where, sort, limit, callback)

// Returns the translated label for each of the specified fields
// object - API Name of the object
// fields - Array of Field API Names
getFieldLabel(object, fields, callback)

// Returns each record type api name and record type translated label
// object - API Name of the object to get all record types for
getRecordTypeLabels(object, call back)

// Returns the translated label for each of the picklist values of the specified field
// object - API Name of the object
// field - API Name of the picklist field
getPicklistValueLabels(object, field, callback)

// Returns object translated labels array for each object API name
// objects - array of object API Names to get translated labels for
getObjectLabels(objects, callback)

/////////////////////// CLM Specific ///////////////////////
// Shows slide selector with specified presentation:key messages; callback gets notified if there aren't any valid key messages
// The selector shows presentations in the same order as requested, but slide are in the order as defined in the presentation,
// not the order specified in the request.
launchSelector: function(presentationSlides, callback)

/////////////////////// Engage ///////////////////////
// Creates a new record for Multichannel activity line.  The Engage code will automatically fill in the Multichannel Activity,
// Asset Version, Asset VExternal ID, Call (if there is one), DateTime, Debug?, Multichannel Content, Multichannel Content Asset,
// Sent Email (if there is one), View Order (if Event Type = Slide View).  Custom = "True" will always be set and the Name is autonumbered.
// If not specified with custom values, Detail Group, Detail Group VExternal Id, Key Message, Key Message VExternal ID, Product,
// Product VExternal ID are also automatically filled in.
// values - json object with the fields and values updated on the record
// callback - call back function which will be used to return the information
createMultichannelActivityLine: function(values, callback)
