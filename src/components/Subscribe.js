import "bootstrap/dist/css/bootstrap.css";
import "/src/styles.css";

function Subscribe(props) {
  return (
    <div class="subscribe-container">
      <div class="subscribe-container-1">
        {/* <div class="sub-header">Subscribe for updates</div> */}
        {/* <div class="sub-header">Newsletter</div> */}

        {/* <div class="text margin-top-60">The Travel</div> */}
        <div class="text margin-bottom-10">
          {/* Get Inspired! Recieve Travel discounts, tips and other stories */}
        </div>
        <div class="flexbox no-wrap">
          <input
            type="email"
            class="form-control margin-right-10"
            id="exampleFormControlInput1"
            placeholder="Your Email Address"
          />
          <button type="button" class="btn btn-dark">
            Subscribe
          </button>
        </div>
      </div>
      {/* <img
        src="https://i.ibb.co/RptQtXN/subscribe.png"
        alt="subscribe"
        border="0"
      /> */}
    </div>
  );
}

export default Subscribe;
