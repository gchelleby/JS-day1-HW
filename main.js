/* 
Using JavaScript -- Complete the following 2 questions

Also, revist 2 of the code wars problems you've done so far and solve them using JavaScript instead. (Recommended to do easier problems starting out, if you would like to do harder challenges that is fine but not required.)

When completed, place your file inside of "JS-day1-HW", commit the finished code to github and submit the link to assignments link 
*/

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    const dog_array = dog_string.split(" ")
    console.log(dog_array)
    for(let i = 0; i < dog_array.length; i++){
        for(let j = 0; j < dog_names.length; j++){
            if (dog_names[j] == dog_array[i]) {
                console.log('Matched dog_name')
            } else {
                
            }
        }
    }
    console.log('No Matches')
}
findWords()
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* function replaceEvens(arr){
    for(let i=0; i < arr.length; i++) {
        if(i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
        console.log(arr)
    }
}
replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]) */

/* Expected output
Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"] */