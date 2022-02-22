
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/booking.css";
import { add_appointment } from "../actions/appointment";
import { connect } from 'react-redux';



function Booking({ add_appointment, isAuthenticated }) {
  const [formData, setFormData] = useState({
    date: '',
    message: ''
  });

  const { date, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    add_appointment(date, message);
  };


  return (
    <>
      <div className="col">
        <div className="well">
          <div className="well-header text-center">من فضلك أدخل جمبع البيانات المطلوبة</div>
          <hr />

          <p>ميعاد المقابلة</p>

          {/* <!-- 1st Choice Input --> */}
          <form method="post" onSubmit={e => {onSubmit(e) 
          alert('تم التسجيل بنجاح')
          
          }}>
            <div className="form-group">
              <label for="datepicker">الاختيار الاول</label>
              <div className="input-group date" id="datetimepicker2">
                <input type="date" className="form-control" id="datepicker" name="date" value={date}
                  onChange={e => onChange(e)} />
                <span className="input-group-addon"><span className="fa fa-calendar"></span></span>
              </div>
            </div>



            <div className="form-group">

              <input className="form-control text-right" type="text" name="message" value={message}
                onChange={e => onChange(e)} id="message" placeholder="إترك رسالتك" maxlength="140" rows="7"></input>



            <div className="form-group">

              <input className="form-control text-right" type="text" name="message" value={message}
                onChange={e => onChange(e)} id="message" placeholder="إترك رسالتك" maxlength="140" rows="7"></input>

            </div>

            {/* <!-- Button Area--> */}
            <div className="checkbox">

              <label><input type="checkbox" />الأحكام والشروط</label>
            </div>
           
            <input type="submit"  className="btn btn-success" value="التأكيد" />
        


            <input type="reset" className="btn btn-primary" value="التراجع"/><hr />
</div>
          </form>

          {/* <!-- form end --> */}
        </div>
      </div>



    </>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { add_appointment })(Booking);


