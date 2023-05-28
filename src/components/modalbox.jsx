import React from "react";

const modalbox = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 relative">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left px-5">
                {children}
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-2">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 text-lg font-medium text-black hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modalbox;
