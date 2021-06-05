exports.calculate = function (req,res,vals) {

    var result = null;
    var operationType = null;

    if(vals.operations == "add"){
        result = parseInt(vals.first) + parseInt(vals.second);
        operationType = "The Sum is: ";
    }
    else if(vals.operations == "subtract"){
        result = parseInt(vals.first) - parseInt(vals.second);
        operationType = "The Difference is: ";

    }
    else if(vals.operations == "multiply"){
        result = parseInt(vals.first) * parseInt(vals.second);
        operationType = "The Product is: ";

    } else if(vals.operations == "divide"){
        result = parseInt(vals.first) / parseInt(vals.second);
        operationType = "The Quotient is: ";

    }

    
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>");
    res.write(operationType);
    res.write(String(result));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };