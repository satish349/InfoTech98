import { FC, ReactNode } from 'react';
import { Button } from './button';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={() => signIn('google')} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
