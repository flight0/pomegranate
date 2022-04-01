import React from "react";

const Form = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-md p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="Username"
              id="username"
              autoComplete="username"
              placeholder="Leon"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              autoComplete="email"
              placeholder="example@example.com"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              id="password"
              autoComplete="current-password"
              placeholder="example@example.com"
              className="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
