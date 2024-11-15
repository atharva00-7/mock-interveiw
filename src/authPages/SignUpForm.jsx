import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { useFirebase } from '@/context/Firebase';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const firebase = useFirebase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData.email,formData.password);
    const result = await firebase.createNewUserWithEmailAndPassword(formData.email,formData.password);
    console.log(result, 'Successfully logged in!');
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
  };

  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/assets/image1.jpg)' }}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign up to Prometheus</CardTitle>
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
              Sign up with Google
            </Button>

            <p className="text-center my-4">or</p>

            <Input 
              type="email" 
              name="email"
              placeholder="Continue with email" 
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-center my-4"></p>

            <Input 
              type="password" 
              name="password"
              placeholder="Continue with password" 
              value={formData.password}
              onChange={handleChange}
            />
            <p className="text-center my-4"></p>

            <Button type="submit" variant="outline" className="w-full">
              Submit
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
            Already have an account?{' '}
            <a href="#" className="text-primary-600 hover:underline">
              Sign In
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;