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

someHtmlEl.addClass = function(val){
  if(this.classList.indexOf(val) < 0) this.classList.push(val)
}


/*
 * Write the logic for the '.removeClass()' method for `someHtmlEl`
 *   --->
*/
someHtmlEl.removeClass = function(val){
  let newClassList = []
  for(var i = 0; i < this.classList.length; i++){
    if(this.classList[i] !== val){
      newClassList.push(this.classList[i])
    }
  }

  this.classList = newClassList
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
  console.assert ( someHtmlEl.classList.length === 4 )
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
