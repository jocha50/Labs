<?php include("top.html"); ?>


<div>
    <form action="#" >
        <fieldset>
        <legend>New User SignUP:</legend>
            <label><strong>Name: </strong></label>
            <label><input type="text" name="username" placeholder="Enter your username"></label>

            <label><strong>Gender: </strong></label>
            <label class="left"><input type="radio" name="gender" value="male"> Male</label>
            <label class="left"><input type="radio" name="gender" value="female"> Female</label>

            <label><strong>Age: </strong></label>
            <input type="text" name="age" placeholder="Enter your age">

            <label> <strong>Personality: </strong></label>
            <input type="text" name="personality"> <a href="#">(Don't know your type?)</a>  

            <label><strong>Favorite OS: </storng></label>
            <select class="column" name="assignment">
                <option value="windows">Windows</option>
                <option value="linux">Linux</option>
                <option value="ios">IOS</option>
                <option value="android">Android</option>
            </select>

            <label><strong>Seeking Age: </strong></label>
                <label ><input type="text" name="minage" placeholder="min"></label>
                <label ><input type="text" name="maxage" placeholder="max"></label>
            
                <input type="submit" value="Sign Up">
            

        </fieldset>
    </form>
</div> 



<?php include("bottom.html"); ?>