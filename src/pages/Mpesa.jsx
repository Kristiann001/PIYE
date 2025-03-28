import { useState } from "react";
import axios from "axios";

export function Payment() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/stk_push", {
        phone,
        amount,
      });

      alert("STK Push Sent! Check your phone.");
      console.log(response.data);
    } catch (error) {
      console.error("Error making payment:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
