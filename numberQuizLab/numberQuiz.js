let score =0;
let loopIterator = 0;
let index = 1;
let numberSequence = [
    "3,1,4,1,5",
    "1,1,2,3,5",
    "1,4,9,16,25",
    "2,3,5,7,11",
    "1,2,4,8,16"
];
let answerArr = [9,8,36,13,32];
exports.data = function (req,res,vals) {
  
    let answer  = parseInt(vals.answer); 
    if(answer == answerArr[loopIterator]){
        score++
    }
    loopIterator++;
    if(numberSequence[index]){
    
    console.log(answerArr[loopIterator], "answer array");
    console.log(answer, "query string");
    res.writeHead(200);
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<link rel=\"stylesheet\" href=\"numberQuiz.css\" >")
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form>");
   
    res.write("<p>The Current score is: ");
    res.write(String(score));
    res.write("</p>");
    res.write("<p>Guess the next number in the sequence: ");
    res.write("</p>");
    res.write("<p>");
    res.write(String(numberSequence[index++]));
    res.write("</p>");
    res.write("<label>Your Answer: <input name='answer' type='text'></label>");
    res.write("<input value='Submit' type='submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    
}
else{
    res.writeHead(200);
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write('<link  href="./numberQuiz.css" >')
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form>");
   
    res.write("<p>The Current score is: ");
    res.write(String(score));
    res.write("</p>");
    res.write("<p>You have completed the Number Quiz with a score of: ");
    res.write(String(score));
    res.write(" out of 5");
    res.write("</p>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

}
    return res.end();
    };