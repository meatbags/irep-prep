// 1000 is from the underlying API, 2000 is from the JavaScript library
// 2000 - Callback function is missing
// 2001 - Callback is not a JavaScript function
// 2002 - <parameter_name> is empty
// 2100 - Request (%@) failed: %@
{success:true, obj_name:[{"Id":"0001929312"}, {record2}, ...]}
{success:false, code:####, message:"message_text"}

// ADDRESSES
com.veeva.clm.getAddresses_Account(account, callback)
com.veeva.clm.getAddressFields(record, fields, callback)

// PRODUCTS
com.veeva.clm.getProduct_MySetup(type, callback)

// RECORD TYPE SUPPORT
com.veeva.clm.getRecordType_Object (object, callback)

// SURVEYS
com.veeva.clm.getSurveyQuestions_Survey(survey, callback)
com.veeva.clm.getQuestionResponse_SurveyTarget(surveytarget, callback)
com.veeva.clm.getSurveyTarget_Account (account, survey, callback)

// ORDER MANAGEMENT
com.veeva.clm.getProduct_OrderActive_Account(account or account group, callback)
com.veeva.clm.getProduct_KitComponents(product, callback)
com.veeva.clm.getProductGroup_Product(product, callback)
com.veeva.clm.getLastTenOrders_Account(account, callback)
com.veeva.clm.getOrderLines_Order(order, callback)
com.veeva.clm.getListPrice_Product(product, callback)

// APPROVED EMAIL
com.veeva.clm.getApprovedDocument(vault_id, document_num, callback)
com.veeva.clm.launchApprovedEmail(email_template, email_fragments, callback)

// FUNCTIONS TO REPLACE EXISTING API CALLS
com.veeva.clm.getDataForCurrentObject(object, field, callback)
com.veeva.clm.getDataForObject(object, record, field, callback)
com.veeva.clm.createRecord(object, values, callback)
com.veeva.clm.updateRecord(object, record, values, callback)
com.veeva.clm.gotoSlide(keymessage, presentation)
com.veeva.clm.gotoSlideV2(slide, presentation)
com.veeva.clm.nextSlide()
com.veeva.clm.prevSlide()
com.veeva.clm.getUTCdatetime(object, record, field, callback)
com.veeva.clm.updateCurrentRecord(object, values, callback)
com.veeva.clm.formatCreateRecords(object array, values array)
com.veeva.clm.formatUpdateRecords(object array, record array, values array)
com.veeva.clm.formatUpdateCurrentRecords(object array, values array)
com.veeva.clm.generateSaveRecordRequest:function(object, values, callback)
com.veeva.clm.queryRecord(object, fields, where, sort, limit, callback)
com.veeva.clm.getFieldLabel(object, fields, callback)
com.veeva.clm.getRecordTypeLabels(object, call back)
com.veeva.clm.getPicklistValueLabels(object, field, callback)
com.veeva.clm.getObjectLabels(objects, callback)

// CLM SPECIFIC
com.veeva.clm.launchSelector(presentationSlides, callback)

// ENGAGE
com.veeva.clm.createMultichannelActivityLine(values, callback)
