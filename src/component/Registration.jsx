import { useState } from "react";
import { useDispatch } from "react-redux";


import {
  registerStart,
  registerSuccess,
  registerFail
} from "../../Redux/login-reg-redux";

const Registration = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerStart());

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        uid: res.user.uid,
        email: res.user.email
      };

      dispatch(registerSuccess(userData));
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;


