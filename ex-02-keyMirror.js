/**
 * keyMirror()
 *
 * Create two methods on the `someHtmlEl` object.
 *
 * Write a `keyMirror` function that takes an object with a set of properties
 * whose values are set to an empty string ''.
 *
 * The function should return another object with the properties and values 'mirrored'
 * -- with both the properties & values identical and as an UPPERCASE string
 *
 * Example:
 * var myActions = { GET_records: '', GET_single_RECORD: '',  Create_Record: '', ... }
 *
 * keyMirror(myActions)
 *    => {
 *      GET_RECORDS: 'GET_RECORDS',
 *      GET_SINGLE_RECORD: 'GET_SINGLE_RECORD',
 *      CREATE_RECORD: 'CREATE_RECORD'
 *      ...
 *    }
 *
*/


function keyMirror(inputObj){

  // (1) Create the empty the empty object that we will modify + return

  var keyMirrorObj = {}

  // (2) iterate over input object's properties
  for( var propertyString in inputObj ){

    // (3) uppercase the property name
    var upperCasePropertyString = propertyString.toUpperCase()
    // ALL OF THE MAGIC below

    // (4) assign as Property Name AND Property Value the uppercased property string
    keyMirrorObj[upperCasePropertyString] = upperCasePropertyString
    console.log(keyMirrorObj)
    console.log('------')
  }

  console.log(keyMirrorObj)

  // (5) return the object
  return keyMirrorObj
  console.log('========')
}



//*~*~*-*~*~*~*~*~ Evaluation *~*~*~*~*~*~*~*~*~*~*~

var myActions = {
   GET_records: '',
   GET_SINGLE_RECORD: '',
   Create_RECORD: '',
   update_record: '',
   DELETE_RECORD: ''
}

var appOptions = {
   send: '',
   edit: '',
   erase: '',
   restore: '',
   cache: ''
}

var actionNamesKeyMirror = keyMirror(myActions)

//Check expected functionality with appOptions object
console.assert(actionNamesKeyMirror.GET_RECORDS === 'GET_RECORDS')
console.assert(actionNamesKeyMirror.UPDATE_RECORD === 'UPDATE_RECORD')
console.assert(actionNamesKeyMirror.UPDATE_RECORD === 'UPDATE_RECORD')
console.assert(typeof actionNamesKeyMirror.GET_records === 'undefined')


//Check expected functionality with appOptions object
var appOptionsKeyMirror = keyMirror(appOptions)

console.assert(appOptionsKeyMirror.ERASE === 'ERASE')
console.assert(appOptionsKeyMirror.EDIT === 'EDIT')
console.assert(appOptionsKeyMirror.CACHE === 'CACHE')
console.assert(typeof appOptionsKeyMirror.send === 'undefined')
