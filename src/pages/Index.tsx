import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { showError } from "@/utils/toast";

const Index = () => {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const handleDiscordLogin = async () => {
    try {
      console.log('Attempting Discord login...'); // Debug log
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('Login error:', error);
        showError(`Login failed: ${error.message}`);
        return;
      }
      console.log('Login initiated successfully'); // Debug log
    } catch (err) {
      console.error('Unexpected error:', err);
      showError('An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-xl text-gray-600 mb-6">
          Sign in with Discord to get started
        </p>
        <Button 
          onClick={handleDiscordLogin} 
          className="bg-[#5865F2] hover:bg-[#4752C4]"
          id="discord-login-btn" // Added for testing
        >
          Sign in with Discord
        </Button>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;