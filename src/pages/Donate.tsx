import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, CreditCard, Wallet, Building, Phone } from 'lucide-react';
import Footer from '../components/Footer';

const Donate = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const predefinedAmounts = ['10', '25', '50', '100', '250', '500'];

  const mtnContacts = [
    { number: '+250 782 485 566', name: 'Sango Fati' },
    { number: '+250 787 771 590', name: 'Sibomana Patrick Kabahigi' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing donation:', {
      amount: amount || customAmount,
      paymentMethod,
      mobileNumber: paymentMethod === 'mtn' ? mobileNumber : undefined
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-900 text-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-white hover:text-gray-200 mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <div className="text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-orange-500" />
              <h1 className="text-4xl font-bold mb-4">Make a Difference Today</h1>
              <p className="text-xl text-gray-200">
                Your donation helps us provide mental health support to those who need it most
              </p>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Amount Selection */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Select Amount</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      className={`p-4 rounded-lg border-2 transition-all ${
                        amount === preset
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-500'
                      }`}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">Custom Amount</label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    placeholder="Enter amount"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <button
                    type="button"
                    className={`p-6 rounded-lg border-2 transition-all flex flex-col items-center ${
                      paymentMethod === 'mtn'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-500'
                    }`}
                    onClick={() => setPaymentMethod('mtn')}
                  >
                    <Phone className="w-8 h-8 mb-2 text-blue-900" />
                    <span>MTN Mobile Money</span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <CreditCard className="w-8 h-8 mb-2 text-blue-900" />
                    <span>Credit Card</span>
                    <span className="text-xs text-gray-500 mt-1">Coming Soon</span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Wallet className="w-8 h-8 mb-2 text-blue-900" />
                    <span>PayPal</span>
                    <span className="text-xs text-gray-500 mt-1">Coming Soon</span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Building className="w-8 h-8 mb-2 text-blue-900" />
                    <span>Bank Transfer</span>
                    <span className="text-xs text-gray-500 mt-1">Coming Soon</span>
                  </button>
                </div>

                {/* MTN Mobile Money Details */}
                {paymentMethod === 'mtn' && (
                  <div className="mt-6 p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">MTN Mobile Money Transfer Details</h3>
                    <div className="space-y-4">
                      {mtnContacts.map((contact, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                          <p className="font-semibold text-gray-900">{contact.name}</p>
                          <p className="text-blue-900 font-mono text-lg">{contact.number}</p>
                        </div>
                      ))}
                      <p className="text-sm text-gray-600 mt-4">
                        Please send your donation to either of the numbers above and send your transaction reference to <b>info@ihumure.org</b> for verification.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
              >
                Complete Donation
              </button>
            </form>
          </div>

          {/* Impact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">$25</h3>
              <p className="text-gray-600">Provides one therapy session for a refugee</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">$100</h3>
              <p className="text-gray-600">Supports mental health training for a community worker</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">$250</h3>
              <p className="text-gray-600">Funds a month of group therapy sessions</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donate;