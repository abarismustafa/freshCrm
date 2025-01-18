import React from "react";

const PaymentOption = () => {
  return (
    <div>
      <div className="bg-secondary d-flex justify-content-between align-items-center px-2">
        <div>
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="radio" class="form-check-input me-2" />
            cash
          </label>
        </div>
        <div>
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="radio" class="form-check-input me-2" />
            Card
          </label>
        </div>
        <div>
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="radio" class="form-check-input me-2" />
            Due
          </label>
        </div>
        <div>
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="radio" class="form-check-input me-2" />
            Other
          </label>
        </div>
        <div>
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="radio" class="form-check-input me-2" />
            Part
          </label>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center gap-5 bg-black">
        <div class="mb-3 form-check">
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="checkbox" className="form-check-input" />
            It's Paid
          </label>
        </div>
        <div class="mb-3 form-check">
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="checkbox" className="form-check-input" />
            Loyalty
          </label>
        </div>
        <div class="mb-3 form-check">
          <label class="form-check-label text-white" for="exampleCheck1">
            <input type="checkbox" className="form-check-input" />
            Vertual Wallet
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
