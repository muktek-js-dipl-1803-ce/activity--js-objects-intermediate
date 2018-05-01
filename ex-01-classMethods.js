/**
 * .addClass()
 * .removeClass()
 * .contains()
 *
 * Create two methods on the `someHtmlEl` object.
 *
 * `.addClass()` should accept a string and add that value to the object's
 *    `classList` array. However, if the input string value exists on the
 *    `.classList` array, then it should not push the new value
 *
 * `.removeClass()` should accept a string and remove the input string's value
 *    from the `.classList`array.
 * *
 *
*/


let someHtmlEl = {
  tag: 'h1',
  id: 'article-93832',
  text: 'Only You Can Prevent Forest Fires',
  classList: ['title', 'featured', 'new']
}

/*
 * Write the logic for the '.addClass()' method for `someHtmlEl` :
 *   --->
*/

someHtmlEl.addClass = function(strVal){
  // (1) assume string value is not in array
  var strValueInArray = false

  // (2) iterate over classList array
  for(var i = 0; i < this.classList.length ; i += 1){

    // (3) check to see if element in array is equal to string value
    if( this.classList[i] === strVal ){

      // (4) change strValueInArray when element is equal
      //      if this happens, then strValueInArray will
      //      always be true (strVal was found in this.classList)
      strValueInArray = true
    }
  }


  // (5) if strVal argument was NOT found in classList
  //      AFTER the complete iteration, then we can
  //      safely push the strVal argument to the classList arra

  if( strValueInArray === false) {
    this.classList.push(strVal)
  }

}

/*
 * Write the logic for the '.removeClass()' method for `someHtmlEl`
 *   --->
*/

someHtmlEl.removeClass = function(strToRemove){
  // --- we are going to REASSSIGN this.classList ---

  // (1) create new empty array
  var updatedClassListArray = []

  // (2) iterate over this.classList
  for(var i = 0; i < this.classList.length; i++ ){

    // (3) if the strToRemove paramater is NOT equal to the
    //     current element we are iterating over....

    if(this.classList[i] !== strToRemove){
      // ... then push the value to the new array
      //     (the strToRemove value will never get pushed)
      updatedClassListArray.push(this.classList[i])
    }

  }

  // (4) reassign this.classList with the modified array
  this.classList = updatedClassListArray
}

//*~*~*-*~*~*~*~*~ Evaluation *~*~*~*~*~*~*~*~*~*~*~

// .addClass()
// -----------
  // Checks that .addClass method is a function
console.assert (typeof someHtmlEl.addClass === 'function')

  // Checks that you can add two classes to .classList array
  someHtmlEl.addClass('disabled')
  someHtmlEl.addClass('hidden')
  console.assert ( someHtmlEl.classList.length === 5)
  console.assert ( someHtmlEl.classList.indexOf('hidden') >= 0 )
  console.assert ( someHtmlEl.classList.indexOf('disabled') >= 0 )

  // Checks that you cannot add a value to .classList array that already exists
  someHtmlEl.addClass('disabled')
  someHtmlEl.addClass('new')
  console.assert ( someHtmlEl.classList.length === 5 )

// .removeClass()
// -----------
  // Checks that .removeClass method is a function
console.assert (typeof someHtmlEl.removeClass === 'function')

  // Checks that .removeClass method removes the string with the input value on the .classList array
  someHtmlEl.removeClass('new')
  // => this.classList = [ "title", "featured",  "disabled", "hidden"]
  console.assert ( someHtmlEl.classList.length === 4 )
  console.assert ( someHtmlEl.classList.indexOf('new') === -1 )

  someHtmlEl.removeClass('hidden')
  console.assert ( someHtmlEl.classList.length === 3 )

  someHtmlEl.removeClass('idonteexist')
  console.assert ( someHtmlEl.classList.length === 3 )

// ....................................
// Instructor Evaluation -- Uncomment assertions below (+) to see if function works as expected
//
// checking `addClass` and `removeClass` method with other context with .call method
//   https://docs.microsoft.com/en-us/scripting/javascript/reference/call-method-function-javascript
  //
  // (+)(+)(+)
  //
  // var otherDemoObj = { tag: 'h2', classList: ['underlined', 'inverted'] }
  //
  // someHtmlEl.addClass.call(otherDemoObj, 'highlighted')
  // someHtmlEl.addClass.call(otherDemoObj, 'highlighted')
  // someHtmlEl.addClass.call(otherDemoObj, 'alt-color')
  // someHtmlEl.addClass.call(otherDemoObj, 'alt-color')
  //
  // console.assert ( otherDemoObj.classList.length === 4)
  // console.assert ( otherDemoObj.classList.indexOf('alt-color') >= 0 )
  // console.assert ( otherDemoObj.classList.indexOf('highlighted') >= 0 )
  //
  // someHtmlEl.removeClass.call(otherDemoObj, 'highlighted')
  // console.assert ( otherDemoObj.classList.length === 3)
  // console.assert ( otherDemoObj.classList.indexOf('highlighted') < 0 )
