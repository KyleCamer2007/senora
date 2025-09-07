import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const Index = () => {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const handleDiscordLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error('Login error:', error.message);
        return;
      }

      // If we have a session, redirect to home
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/home');
      }
    } catch (err) {
      console.error('Unexpected error during login:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl text-gray-600 mb-6">
          Sign in with Discord to get started
        </p>
        <Button onClick={handleDiscordLogin} className="bg-[#5865F2] hover:bg-[#4752C4]">
          Sign in with Discord
        </Button>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;