
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import AuthLayout from '@/components/AuthLayout';
import SocialAuth from '@/components/SocialAuth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would verify credentials with an API call
    if (email && password) {
      toast.success('Login successful');
      navigate('/dashboard');
    } else {
      toast.error('Please enter both email and password');
    }
  };

  return (
    <AuthLayout 
      title="Log in" 
      subtitle="Good to have you back!"
    >
      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full h-12"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full h-12"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox 
                id="remember-me" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-accent hover:text-accent/80">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-medium text-base"
          >
            Log in
          </Button>
        </div>

        <div className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-secondary hover:text-secondary/80">
              Sign up
            </Link>
          </p>
        </div>

        <SocialAuth mode="login" />
      </form>
    </AuthLayout>
  );
};

export default Login;
