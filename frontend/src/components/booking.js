import React from "react";
import { Link } from "react-router-dom";
import "../CSS/booking.css";

export default function Booking() {
    return (
      <>
        <body className="text-right">

          <div className="col">
            <div className="well">

            <div className="well-header">من فضلك أدخل جمبع البيانات المطلوبة</div>
            <hr/>
            <p className="header_p">سيتم التواصل معك في خلال 24 ساعة للتأكيد</p>
            <hr/>

    {/* <!-- Contact by Input --> */}
            <div className="form-group1">
             <label for="Select">التواصل ب </label>
            <select id="Select" className="form-control"><option>Email</option><option>الهاتف</option></select>
            </div>

    {/* <!-- fullname Input --> */}
           <div className="form-group1">
             <label for="inputfullname"></label>
            <input type="text" className="form-control" id="inputFullname" placeholder="الاسم"/>
            </div>

    {/* <!-- email address Input --> */}
          <div className="form-group1">
            <label for="inputemail"></label>
            <input type="email" className="form-control" id="inputemail" placeholder="الميل"/>
          </div>

   {/* <!-- Phone Input --> */}
         <div className="form-group1">
           <label for="inputphone"></label>
          <input type="text" className="form-control" id="inputphone" placeholder="الهاتف"/>
        </div>
         <hr/>
  {/* <!-- Appointment date --> */}
        <p>ميعاد المقابلة</p>

 {/* <!-- 1st Choice Input --> */}



        <div className="form-group">
            <label for="datepicer">الاختيار الاول</label>
            <div className="input-group date" id="datetimepicker2">
            <input type="date" className="form-control" id="datepicer"/>
            <span className="input-group-addon"><span className="fa fa-calendar"></span></span>
        </div>
        </div>




 {/* <!-- 2nd Choice Input --> */}
        <div className="form-group">
            <label for="datetimepicker8">الاختيار الثان</label>
            <div className="input-group date" id="datetimepicker8">
            <input type="date" className="form-control"/><span className="input-group-addon"><span className="fa fa-calendar"></span></span>
            </div>
        </div>


{/* <!-- Service Input --> */}
        <div className="form-group">
            <label for="selectitem">الخدمة المطلوبة</label>
            <select id="selectitem" className="form-control">
            <option>كشف قلب</option>
            <option>باطني</option>
            <option>جراحة</option>
            <option>طوارء</option>
            <option>اخرى</option>

            </select>
        </div>


<div className="form-group">
    <textarea className="form-control"  id="message" placeholder="Message" maxlength="140" rows="7"></textarea>

</div>

{/* <!-- Button Area--> */}
 <div className="checkbox">
        <label><input type="checkbox"/>Terms &amp; conditions</label>
    </div>
 <Link to="confirm.html"><input type="submit" className="btn" value="تم"/></Link>

    <button type="submit" className="btn">Cancel</button><hr/>


 {/* <!-- form end --> */}
</div>
</div>


</body>
</>
  );
}
