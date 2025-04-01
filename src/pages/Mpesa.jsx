import { useState } from "react";
import axios from "axios";

export function Payment() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // success or error

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/stk_push", {
        phone,
        amount,
      });
      
      setToastMessage("Payment Message Sent To Contact");
      setToastType("success");
      setShowToast(true);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      
      console.log(response.data);
    } catch (error) {
      console.error("Error making payment:", error);
      
      setToastMessage("Payment failed. Please try again.");
      setToastType("error");
      setShowToast(true);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Toast Notification - Centered and Green */}
      {showToast && (
        <div className="mb-96 fixed inset-0 flex items-center justify-center z-50">
          <div 
            id="toast-default" 
            className="flex items-center w-full max-w-xs p-4 text-white bg-green-500 rounded-lg shadow-lg" 
            role="alert"
          >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-100 bg-green-600 rounded-lg">
              {/* Money Icon */}
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="sr-only">Money icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{toastMessage}</div>
            <button 
              type="button" 
              className="ms-auto -mx-1.5 -my-1.5 bg-green-600 text-green-100 hover:text-white rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-700 inline-flex items-center justify-center h-8 w-8" 
              onClick={closeToast}
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Payment Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          M-Pesa Payment
        </h2>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
        />
        <button
          onClick={handlePayment}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}