const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">ارتباط با من</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe title="map"
              src="https://www.google.com/maps/embed/v1/place?q=Tabriz,+AZ,+IRAN&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li style={{width:"100%"}}>
                <strong>آدرس </strong> ایران، تبریز
              </li>
              <li style={{width:"100%"}}>
                <strong>ایمیل</strong> shahram.ph.en2000@gmail.com
              </li>
              <li style={{width:"100%"}}>
                <strong>شماره موبایل</strong> 0912 015 8060
              </li>
              <li style={{width:"100%"}}>
                <strong>شماره تماس</strong> 041 512 41 512
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
