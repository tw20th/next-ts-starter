import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <form className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">名前</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">メッセージ</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          送信
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
