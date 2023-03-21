import React, { useState } from "react";

interface Props {}

const NewsletterForm: React.FC<Props> = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    // Do something with the email
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cultured w-full p-10 rounded-lg shadow-lg max-w-4xl"
    >
      <div className="mb-5">
        <h2 className="text-gray-700 text-xl pb-5 font-bold text-center">
          Our newsletter is the ideal solution for those eager to expand their
          knowledge. Subscribe now!
        </h2>
        <hr className="border-accent border-2 border-dotted w-1/2 mx-auto mb-10" />
        <label className="block text-gray-700 font-medium mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 p-2 w-full focus:outline-none focus:border-accent focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-primary py-2 px-4 rounded-full w-full transition duration-200 ease-in-out hover:bg-accent-lighter hover:text-primary-dark"
      >
        Sign up
      </button>
    </form>
  );
};

export default NewsletterForm;
