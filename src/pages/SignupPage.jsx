import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc'; 
import { useFirebase } from "../context/Firebase";
import texts from "../constants/texts.json";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.createNewUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(firebase.isLoggedIn)
    if (firebase.isLoggedIn) {
      navigate('/');
    }
  }, [firebase, navigate]);
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(src/assets/image1.jpg)', backgroundSize: "cover" }}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{texts.signupPage.cardTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Button
              type="button"
              variant="outline"
              className="w-full bg-black text-white hover:bg-black hover:text-white hover:opacity-80"
              onClick={firebase.signUpWithGoogle}
            >
              <FcGoogle size={24} />
              {texts.signupPage.googleSignup}
            </Button>

            <p className="text-center my-4">or</p>

            <Input
              type="email"
              name="email"
              placeholder="Continue with email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <p className="text-center my-4"></p>

            <Input
              type="password"
              name="password"
              placeholder="Continue with password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <p className="text-center my-4"></p>

            <Button type="submit" variant="outline" className="w-full">
              {texts.signupPage.sumbitButton}
            </Button>
          </form>

          <div className="text-sm text-gray-500 mt-4 text-center">
            {texts.signupPage.footer1}{' '}
            <a href="#" className="text-primary-600 hover:underline">
              {texts.signupPage.footer2}
            </a>
            ,{' '}
            <a href="#" className="text-primary-600 hover:underline">
              {texts.signupPage.footer3}
            </a>
            , {texts.signupPage.footer4}{' '}
            <a href="#" className="text-primary-600 hover:underline">
              {texts.signupPage.footer5}
            </a>
            .
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            {texts.signupPage.footer6}{' '}
            <a href="#" className="text-primary-600 hover:underline">
              {texts.signupPage.footer7}
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;