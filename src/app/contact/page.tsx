const Contact: React.FC = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-lg font-medium text-gray-700" htmlFor="name">名前</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700" htmlFor="email">アドレス</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700" htmlFor="message">コメント</label>
                    <textarea id="message" name="message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    送信
                </button>
            </form>
        </div>
    );
};

export default Contact;
