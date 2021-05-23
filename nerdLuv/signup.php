<?php include("top.html"); ?>


<div>
    <form action="#" >
        <fieldset>
        <legend>New User SignUP:</legend>
            <label><strong>Name: </strong></label>
            <label><input type="text" name="username" placeholder="Enter your username" size="18" maxlength="16"></label>
            <br><br>

            <label><strong>Gender: </strong></label>
            <label class="left"><input type="radio" name="gender" value="male"> Male</label>
            <label class="left"><input type="radio" name="gender" value="female"> Female</label>
            <br><br>

            <label><strong>Age: </strong></label>
            <label class="left"><input type="text" name="age" placeholder="age" maxlength="2" size="6"></label>
            <br><br>
            <strong >Personality: </strong>
            <label ><input type="text" name="personality"  maxlength="4" size="6" >
               <a href="http://www.humanmetrics.com/cgiwin/JTypes2.asp"> (Don't know your type?)</a>
            </label>
            <br><br>

            <label><strong>Favorite OS: </strong></label>
            <select class="column"name="assignment">
                <option value="windows">Windows</option>
                <option value="mac OS X">Mac OS X</option>
                <option value="linux">Linux</option>
            </select>
            <br><br>
            <label><strong>Seeking Age: </strong></label>
            <label ><input type="text" name="minage" maxlength="2" size="6" placeholder="min"> to </label>
            <label ><input type="text" name="maxage" maxlength="2" size="6" placeholder="max"></label>



            
            
           <label class="left"><input type="submit" value="Sign Up"></label>
            

        </fieldset>
    </form>
</div> 



<?php include("bottom.html"); ?>