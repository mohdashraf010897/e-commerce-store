import React from "react";

const ReferralStrip = ({ history }) => {
  return (
    <div className="referral-strip">
      <span className="referral-strip__text">
        Invite friends to Big Fashion Festival & get up to $150 MynCash for
        every person who visits
      </span>
      <button
        className="referral-strip__invite-btn"
        onClick={() => (window.location = "/invite-page")}
      >
        Invite Now
      </button>
    </div>
  );
};

export default ReferralStrip;
