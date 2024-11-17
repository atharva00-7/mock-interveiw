import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const firebase = useFirebase();
  const navigate = useNavigate();
  const isLoggedIn = firebase.isLoggedIn;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.signInUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      console.log(error);
      setError(error);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [firebase, navigate]);
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: 'url(src/assets/image1.jpg)', backgroundSize: "cover" }}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to Prometheus</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <Button variant="outline" className="w-full bg-black text-white hover:bg-black hover:text-white hover:opacity-80" onClick={firebase.signUpWithGoogle}>
              <FcGoogle size={24} />
              Sign in with Google
            </Button>
            <p className="text-center my-4">or</p>
            <Input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <p className="text-center my-4"></p>
            <Input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={e => setPassword(e.target.value)}
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