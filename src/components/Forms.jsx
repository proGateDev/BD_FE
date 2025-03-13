const Forms = () => {
    return (
      <form className="max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-6">Create Business - Mining Waala</h2>
  
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Business Name</label>
          <input
            type="text"
            id="name"
            defaultValue="Mining Waala"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
  
        <div className="mb-5">
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900">Business Type</label>
          <input
            type="text"
            id="type"
            defaultValue="mining"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
  
        <div className="mb-5">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
          <textarea
            id="description"
            defaultValue="A premium range of Products."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          ></textarea>
        </div>
  
        <div className="mb-5">
          <label htmlFor="modules" className="block mb-2 text-sm font-medium text-gray-900">Modules</label>
          <input
            type="text"
            id="modules"
            defaultValue="65ffb2e3a2d4b57c8e9c5678, 65ffb3e3a2d4b57c8e9c9101"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
  
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Forms;
  