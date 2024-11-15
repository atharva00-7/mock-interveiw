import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const firebase = useFirebase();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.signInUserWithEmailAndPassword(email, password);
      console.log(result, "Successfully logged in!");
    } catch (error) {
      console.error(error);
      console.log(error);
      setError(error);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: 'url(/assets/image1.jpg)' }}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to Dribbble</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full bg-black text-white hover:bg-black hover:text-white hover:opacity-80">
            <FcGoogle size={24} />
            Sign in with Google
          </Button>
          <p className="text-center my-4">or</p>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <p className="text-center my-4"></p>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <p className="text-center my-4"></p>
            <Button variant="outline" className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="text-sm text-gray-500 mt-4 text-center">
            By creating an account you agree with our{' '}
            <a href="#" className="text-primary-600 hover:underline">
              Terms of Service
            </a>
            ,{' '}
            <a href="#" className="text-primary-600 hover:underline">
              Privacy Policy
            </a>
            , and our default{' '}
            <a href="#" className="text-primary-600 hover:underline">
              Notification Settings
            </a>
            .
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Don't have an account?{' '}
            <a href="#" className="text-primary-600 hover:underline">
              Sign Up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;